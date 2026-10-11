import React, { useEffect, useState } from 'react';

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
}

export const MathTex: React.FC<MathTexProps> = ({
  math,
  block = false,
  className = '',
}) => {
  const [html, setHtml] = useState<string>('');

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
        <div
          className={`katex-block-container overflow-x-auto py-1 my-1 text-center font-normal ${className}`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
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
