import React, { useEffect, useState } from 'react';
import { Copy, Check } from 'lucide-react';

declare global {
  interface Window {
    katex?: {
      renderToString: (
        tex: string,
        options?: {
          displayMode?: boolean;
          throwOnError?: boolean;
          errorColor?: string;
          strict?: boolean | string;
        }
      ) => string;
    };
  }
}

interface MathTexProps {
  math: string;
  block?: boolean;
  className?: string;
  allowCopy?: boolean;
}

export const MathTex: React.FC<MathTexProps> = ({
  math,
  block = false,
  className = '',
  allowCopy = true,
}) => {
  const [html, setHtml] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(math);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    let mounted = true;

    const renderFormula = () => {
      if (typeof window !== 'undefined' && window.katex) {
        try {
          const rendered = window.katex.renderToString(math, {
            displayMode: block,
            throwOnError: false,
          });
          if (mounted) setHtml(rendered);
          return true;
        } catch {
          if (mounted) setHtml('');
          return false;
        }
      }
      return false;
    };

    if (!renderFormula()) {
      // Poll briefly if KaTeX CDN script is still downloading
      const interval = setInterval(() => {
        if (renderFormula()) {
          clearInterval(interval);
        }
      }, 50);

      const timeout = setTimeout(() => {
        clearInterval(interval);
      }, 4000);

      return () => {
        mounted = false;
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }

    return () => {
      mounted = false;
    };
  }, [math, block]);

  if (html) {
    if (block) {
      return (
        <div className="group/math relative my-1">
          <div
            className={`katex-block-container overflow-hidden py-1 text-center font-normal ${className}`}
            dangerouslySetInnerHTML={{ __html: html }}
          />
          {allowCopy && (
            <button
              onClick={handleCopy}
              className="absolute right-1 top-1 opacity-0 group-hover/math:opacity-100 transition-opacity p-1 rounded-md bg-secondary/80 dark:bg-card/90 hover:bg-secondary text-muted-foreground hover:text-foreground text-[10px] font-mono flex items-center gap-1 border border-border/60 shadow-sm"
              title="Copy LaTeX source code"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-500" />
                  <span className="text-emerald-500 font-semibold">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span className="hidden sm:inline">LaTeX</span>
                </>
              )}
            </button>
          )}
        </div>
      );
    }
    return (
      <span
        className={`katex-inline-container inline-block align-middle font-normal ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  // Graceful fallback while KaTeX loads
  return (
    <span
      className={`font-mono text-xs opacity-90 ${block ? 'block text-center py-1' : 'inline'} ${className}`}
    >
      ${math}$
    </span>
  );
};

export default MathTex;
