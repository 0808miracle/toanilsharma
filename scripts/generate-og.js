import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function generateOgBanner() {
  const width = 1200;
  const height = 630;

  // 1. Process portrait: resize and round corners
  const portraitWidth = 430;
  const portraitHeight = 530;

  const resizedPortrait = await sharp('public/images/anil-sharma.png')
    .resize(portraitWidth, portraitHeight, {
      fit: 'cover',
      position: 'top'
    })
    .toBuffer();

  // Create rounded rectangle mask for the portrait
  const maskSvg = Buffer.from(`
    <svg width="${portraitWidth}" height="${portraitHeight}">
      <rect x="0" y="0" width="${portraitWidth}" height="${portraitHeight}" rx="28" ry="28" fill="#ffffff" />
    </svg>
  `);

  const maskedPortrait = await sharp(resizedPortrait)
    .composite([{
      input: maskSvg,
      blend: 'dest-in'
    }])
    .png()
    .toBuffer();

  // 2. Generate vector SVG overlay for high-tech luxury background and typography
  const svgOverlay = Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Background Gradients -->
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#080C16" />
          <stop offset="45%" stop-color="#0B132B" />
          <stop offset="100%" stop-color="#060911" />
        </linearGradient>

        <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="50%" stop-color="#60A5FA" />
          <stop offset="100%" stop-color="#818CF8" />
        </linearGradient>

        <linearGradient id="glowRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0066FF" stop-opacity="0.8" />
          <stop offset="100%" stop-color="#00F2FE" stop-opacity="0.8" />
        </linearGradient>
      </defs>

      <style>
        .font-sans { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
        .font-mono { font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace; }
      </style>

      <!-- Base Canvas -->
      <rect width="${width}" height="${height}" fill="url(#bgGrad)" />

      <!-- High-tech subtle grid pattern -->
      <g stroke="rgba(255,255,255,0.04)" stroke-width="1">
        <line x1="0" y1="105" x2="${width}" y2="105" />
        <line x1="0" y1="210" x2="${width}" y2="210" />
        <line x1="0" y1="315" x2="${width}" y2="315" />
        <line x1="0" y1="420" x2="${width}" y2="420" />
        <line x1="0" y1="525" x2="${width}" y2="525" />
        <line x1="150" y1="0" x2="150" y2="${height}" />
        <line x1="300" y1="0" x2="300" y2="${height}" />
        <line x1="450" y1="0" x2="450" y2="${height}" />
        <line x1="600" y1="0" x2="600" y2="${height}" />
        <line x1="750" y1="0" x2="750" y2="${height}" />
        <line x1="900" y1="0" x2="900" y2="${height}" />
        <line x1="1050" y1="0" x2="1050" y2="${height}" />
      </g>

      <!-- Ambient Glow Spotlights -->
      <circle cx="150" cy="120" r="280" fill="#0066FF" opacity="0.12" filter="blur(80px)" />
      <circle cx="950" cy="315" r="320" fill="#00D2FF" opacity="0.14" filter="blur(90px)" />

      <!-- Left Column: Executive Branding Content -->
      
      <!-- Top Tag Pill -->
      <g transform="translate(70, 52)">
        <rect width="470" height="34" rx="17" fill="rgba(0, 102, 255, 0.15)" stroke="rgba(56, 189, 248, 0.35)" stroke-width="1.2" />
        <circle cx="18" cy="17" r="4.5" fill="#10B981" />
        <text x="32" y="22" fill="#BAE6FD" font-size="12" font-weight="700" letter-spacing="1.2" class="font-mono">
          RELIABILITY &amp; E&amp;I SPECIALIST • 28+ YRS EXP
        </text>
      </g>

      <!-- Executive Name -->
      <text x="70" y="152" fill="#FFFFFF" font-size="64" font-weight="900" letter-spacing="-1.5" class="font-sans">
        Anil Sharma
      </text>

      <!-- Subtitle Role -->
      <text x="70" y="196" fill="url(#textGrad)" font-size="27" font-weight="700" letter-spacing="-0.5" class="font-sans">
        Reliability &amp; Maintenance Expert
      </text>

      <!-- Corporate Affiliation -->
      <text x="70" y="234" fill="#94A3B8" font-size="17" font-weight="500" class="font-sans">
        DGM – Central Engineering Services • Reliance Industries Limited
      </text>

      <!-- Divider line -->
      <line x1="70" y1="262" x2="640" y2="262" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" />

      <!-- Feature Pill 1: LiveSimulators -->
      <g transform="translate(70, 286)">
        <rect width="560" height="66" rx="16" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(59, 130, 246, 0.25)" stroke-width="1.2" />
        <circle cx="34" cy="33" r="14" fill="rgba(59, 130, 246, 0.2)" />
        <text x="27" y="38" fill="#60A5FA" font-size="16" font-weight="bold">⚡</text>
        <text x="60" y="29" fill="#F8FAFC" font-size="17" font-weight="700" class="font-sans">
          LiveSimulators.com — 65+ Interactive Virtual Labs
        </text>
        <text x="60" y="50" fill="#94A3B8" font-size="13" font-weight="400" class="font-sans">
          60 FPS float64 physics spanning Power Electronics, Turbomachinery &amp; Safety
        </text>
      </g>

      <!-- Feature Pill 2: DesignCalculators -->
      <g transform="translate(70, 368)">
        <rect width="560" height="66" rx="16" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(59, 130, 246, 0.25)" stroke-width="1.2" />
        <circle cx="34" cy="33" r="14" fill="rgba(16, 185, 129, 0.2)" />
        <text x="27" y="38" fill="#34D399" font-size="16" font-weight="bold">📐</text>
        <text x="60" y="29" fill="#F8FAFC" font-size="17" font-weight="700" class="font-sans">
          DesignCalculators.co.in — 150+ Standardized Tools
        </text>
        <text x="60" y="50" fill="#94A3B8" font-size="13" font-weight="400" class="font-sans">
          Multi-disciplinary calculators adhering to IEC, IEEE, NFPA &amp; ASME codes
        </text>
      </g>

      <!-- Bottom Mission Banner -->
      <g transform="translate(70, 460)">
        <rect width="560" height="96" rx="18" fill="rgba(0, 102, 255, 0.12)" stroke="rgba(56, 189, 248, 0.3)" stroke-width="1.2" />
        
        <text x="24" y="34" fill="#38BDF8" font-size="13" font-weight="700" letter-spacing="1" class="font-mono">
          ★ PERSONAL TECHNICAL PHILANTHROPY
        </text>
        <text x="24" y="58" fill="#FFFFFF" font-size="15" font-weight="600" class="font-sans">
          100% Free Open Access for Students, Engineers &amp; Educators Worldwide
        </text>
        <text x="24" y="80" fill="#60A5FA" font-size="14" font-weight="700" class="font-mono">
          https://toanilsharma.co.in
        </text>
      </g>

      <!-- Right Column: Frame for Portrait with glowing borders -->
      <g transform="translate(700, 42)">
        <rect width="${portraitWidth + 16}" height="${portraitHeight + 16}" rx="36" fill="none" stroke="url(#glowRing)" stroke-width="2.5" opacity="0.85" />
      </g>
    </svg>
  `);

  // 3. Composite everything together
  const ogImage = await sharp(svgOverlay)
    .composite([
      {
        input: maskedPortrait,
        top: 50,
        left: 708
      }
    ])
    .png({ quality: 95, compressionLevel: 8 })
    .toFile('public/images/og-banner.png');

  console.log('og-banner.png created successfully:', ogImage);

  // Also create webp version
  await sharp('public/images/og-banner.png')
    .webp({ quality: 90 })
    .toFile('public/images/og-banner.webp');

  console.log('og-banner.webp created successfully');
}

generateOgBanner().catch(console.error);
