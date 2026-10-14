const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '../dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('Error: dist/index.html does not exist. Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');

const routes = [
  {
    path: 'about',
    title: 'About Anil Sharma | Senior Engineering Leader & Community Mentor',
    desc: 'Learn about Anil Sharma: 28+ years leading continuous-process reliability, SHRM Certified Facilitator, Lead Auditor, and creator of open educational simulators.',
    canonical: 'https://toanilsharma.co.in/about'
  },
  {
    path: 'services',
    title: 'Engineering Expertise & Reliability Frameworks | Anil Sharma',
    desc: 'Specialized industrial reliability frameworks: SAE JA1011 RCM, FMEA, RCA, Substation Automation (220kV to 6.6kV), and Electrical Safety per NFPA 70E.',
    canonical: 'https://toanilsharma.co.in/services'
  },
  {
    path: 'experience',
    title: 'Industrial Experience & Project Track Record | Anil Sharma (28+ Years)',
    desc: 'Three decades of industrial engineering leadership: continuous-process petrochemical operations, 2.5 MTPA greenfield cement plant commissioning, and automated power distribution.',
    canonical: 'https://toanilsharma.co.in/experience'
  },
  {
    path: 'simulators',
    title: '65+ Live Virtual Engineering Simulators | Float64 Browser Physics',
    desc: 'Explore 65+ free interactive virtual engineering laboratories: power systems, SPWM inverters, harmonic filters, and electrical safety models running real-time Float64 physics.',
    canonical: 'https://toanilsharma.co.in/simulators'
  },
  {
    path: 'calculators',
    title: 'Reliability Engineering Calculators (Weibull, MTBF, Availability) | Anil Sharma',
    desc: 'Free interactive reliability calculators: 2-parameter Weibull curve plotting, MTBF, MTTR, and availability formulas for plant engineers and students.',
    canonical: 'https://toanilsharma.co.in/calculators'
  },
  {
    path: 'tools',
    title: 'Open Engineering Platforms & Software Architecture | Anil Sharma',
    desc: 'Explore LiveSimulators.com, DesignCalculators.co.in (150+ tools), ReliabilityTools.co.in, and ElectroSafe.homes engineered by Anil Sharma.',
    canonical: 'https://toanilsharma.co.in/tools'
  },
  {
    path: 'insights',
    title: 'Reliability Insights & Field Philosophy | Anil Sharma',
    desc: 'Field philosophy, zero-breakdown maintenance strategies, and engineering insights from 28+ years of continuous-process plant operations.',
    canonical: 'https://toanilsharma.co.in/insights'
  },
  {
    path: 'training',
    title: 'Reliability Training & Workforce Mentorship | Anil Sharma',
    desc: 'Master Technical Trainer & SHRM Certified Facilitator. Conducted 2,500+ hours of training across Electrical Safety, UPS, Batteries, LOTO, RCM, LFI, and Automation for 200+ engineers.',
    canonical: 'https://toanilsharma.co.in/training'
  },
  {
    path: 'contact',
    title: 'Connect with Anil Sharma | Technical Dialogue & Academic Mentorship',
    desc: 'Connect with Anil Sharma for engineering peer dialogue, student mentorship, simulator feedback, and non-commercial technical exchange.',
    canonical: 'https://toanilsharma.co.in/contact'
  },
  {
    path: 'privacy',
    title: 'Privacy Policy | Anil Sharma - Industrial Reliability Platforms',
    desc: 'Privacy policy and non-commercial data governance for toanilsharma.co.in and open engineering calculators.',
    canonical: 'https://toanilsharma.co.in/privacy'
  },
  {
    path: 'terms',
    title: 'Terms of Service & Engineering Disclaimer | Anil Sharma',
    desc: 'Terms of service and engineering calculation disclaimers for open tools by Anil Sharma.',
    canonical: 'https://toanilsharma.co.in/terms'
  }
];

routes.forEach(route => {
  const routeDir = path.join(distDir, route.path);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  let html = baseHtml;
  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
  html = html.replace(/<meta name="description" content=".*?"\s*\/?>/, `<meta name="description" content="${route.desc}">`);
  html = html.replace(/<link rel="canonical" href=".*?"\s*\/?>/, `<link rel="canonical" href="${route.canonical}">`);
  html = html.replace(/<meta property="og:url" content=".*?"\s*\/?>/, `<meta property="og:url" content="${route.canonical}">`);
  html = html.replace(/<meta property="og:title" content=".*?"\s*\/?>/, `<meta property="og:title" content="${route.title}">`);
  html = html.replace(/<meta property="og:description" content=".*?"\s*\/?>/, `<meta property="og:description" content="${route.desc}">`);

  fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf8');
  console.log(`Generated pre-rendered static route: dist/${route.path}/index.html`);
});

console.log('Successfully generated all 11 static route index files for SEO crawlers!');
