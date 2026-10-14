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
    canonical: 'https://toanilsharma.co.in/about',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      'name': 'About Anil Sharma',
      'url': 'https://toanilsharma.co.in/about',
      'description': 'Executive biography, credentials, education, and technical philosophy of Anil Sharma.'
    },
    crawlableContent: `
      <main class="static-prerender-content" style="padding: 2rem; max-width: 900px; margin: 0 auto; color: #1e293b; font-family: sans-serif;">
        <h1>About Anil Sharma — Senior Engineering &amp; Reliability Leader</h1>
        <p>Anil Sharma is an industrial engineering and reliability leader with over 28 years of continuous-process plant experience across premier private sector petrochemical complexes and cement manufacturing. Specialist in SAE JA1011 RCM, FMEA, RCA, Substation Automation, and developer of free open-access engineering simulators.</p>
        <section>
          <h2>Professional Credentials &amp; Certifications</h2>
          <ul>
            <li>SHRM Certified Facilitator &amp; Technical Trainer</li>
            <li>DNV GL Certified IMS Lead Auditor (ISO 9001, ISO 14001, ISO 45001)</li>
            <li>Certified Process &amp; Electrical Safety Auditor</li>
            <li>MBA in Project Management (Sikkim Manipal University)</li>
            <li>Diploma in Electrical Engineering (Chandigarh College of Engineering &amp; Technology)</li>
          </ul>
        </section>
        <section>
          <h2>Engineering Philosophy</h2>
          <p>Champion of the "Zero-Breakdown Mindset", transforming maintenance from reactive firefighting to predictive asset integrity, continuous uptime, and open knowledge sharing for the global engineering community.</p>
        </section>
      </main>
    `
  },
  {
    path: 'services',
    title: 'Engineering Expertise & Reliability Frameworks | Anil Sharma',
    desc: 'Specialized industrial reliability frameworks: SAE JA1011 RCM, FMEA, RCA, Substation Automation (220kV to 6.6kV), and Electrical Safety per NFPA 70E.',
    canonical: 'https://toanilsharma.co.in/services',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Reliability & Industrial Engineering Frameworks',
      'provider': {
        '@type': 'Person',
        'name': 'Anil Sharma'
      },
      'serviceType': 'Open Engineering Knowledge Sharing'
    },
    crawlableContent: `
      <main class="static-prerender-content" style="padding: 2rem; max-width: 900px; margin: 0 auto; color: #1e293b; font-family: sans-serif;">
        <h1>Engineering Methodologies &amp; Reliability Frameworks</h1>
        <p>Three decades of field-proven frameworks deployed across continuous process petrochemical facilities, high-voltage distribution networks, and automated industrial plants.</p>
        <section>
          <h2>Core Methodological Pillars</h2>
          <article>
            <h3>SAE JA1011 Reliability Centered Maintenance (RCM)</h3>
            <p>7-question rigorous RCM methodology establishing asset failure boundaries, critical functional modes, and condition-based monitoring tasks.</p>
          </article>
          <article>
            <h3>Failure Mode and Effects Analysis (FMEA) &amp; RPN Prioritization</h3>
            <p>Structured severity, occurrence, and detection scoring to eliminate unmitigated single-point failures in continuous manufacturing.</p>
          </article>
          <article>
            <h3>Root Cause Analysis (RCA) &amp; 5-Whys Investigations</h3>
            <p>Systematic physical, human, and latent root cause investigations preventing recurrent high-impact trips.</p>
          </article>
          <article>
            <h3>Substation Automation &amp; High-Speed Load Shedding (220kV to 6.6kV)</h3>
            <p>Integrated PLC/SCADA automated load shedding preventing cascading blackout events in large industrial grids.</p>
          </article>
          <article>
            <h3>Electrical Safety Compliance (NFPA 70E &amp; IEEE 1584)</h3>
            <p>Arc flash incident energy evaluation, flash boundaries, safe work procedures, and comprehensive LOTO management.</p>
          </article>
        </section>
      </main>
    `
  },
  {
    path: 'experience',
    title: 'Industrial Experience & Project Track Record | Anil Sharma (28+ Years)',
    desc: 'Three decades of industrial engineering leadership: continuous-process petrochemical operations, 2.5 MTPA greenfield cement plant commissioning, and automated power distribution.',
    canonical: 'https://toanilsharma.co.in/experience',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ItemPage',
      'name': 'Industrial Experience & Track Record - Anil Sharma',
      'description': '28+ years of industrial engineering leadership across continuous process petrochemical facilities, greenfield cement plants, and automated power distribution.'
    },
    crawlableContent: `
      <main class="static-prerender-content" style="padding: 2rem; max-width: 900px; margin: 0 auto; color: #1e293b; font-family: sans-serif;">
        <h1>Industrial Experience &amp; Project Track Record (28+ Years)</h1>
        <p>Over 28 years of cross-sector industrial execution across world-scale continuous process petrochemical facilities, greenfield cement manufacturing, and retail petroleum infrastructure.</p>
        <section>
          <h2>Career Chronology</h2>
          <article>
            <h3>Continuous Process Petrochemical &amp; Energy Operations (2008 – Present)</h3>
            <p>Senior Engineering &amp; Reliability Leader overseeing asset integrity, HT/LT electrical distribution, and automation across world-scale continuous process units. Automated 27 substations, commissioned major PTA/PET/GCU plants, and upskilled 200+ engineers.</p>
          </article>
          <article>
            <h3>Multi-Site Automated Retail Infrastructure (2004 – 2008)</h3>
            <p>Commissioning &amp; Reliability Lead directing cross-disciplinary engineering across mechanical, electrical, and hazardous area installations in northern India with zero safety incidents.</p>
          </article>
          <article>
            <h3>Ambuja Cements Limited (1995 – 2004)</h3>
            <p>Engineer Electrical &amp; Instrumentation. Greenfield commissioning of 2.5 MTPA cement plant, substation automation, and plant-wide energy optimization.</p>
          </article>
        </section>
      </main>
    `
  },
  {
    path: 'simulators',
    title: '65+ Live Virtual Engineering Simulators | Float64 Browser Physics',
    desc: 'Explore 65+ free interactive virtual engineering laboratories: power systems, SPWM inverters, harmonic filters, and electrical safety models running real-time Float64 physics.',
    canonical: 'https://toanilsharma.co.in/simulators',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Live Virtual Engineering Simulators',
      'applicationCategory': 'EducationalApplication',
      'operatingSystem': 'Any Web Browser',
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD'
      }
    },
    crawlableContent: `
      <main class="static-prerender-content" style="padding: 2rem; max-width: 900px; margin: 0 auto; color: #1e293b; font-family: sans-serif;">
        <h1>65+ Live Virtual Engineering Simulators</h1>
        <p>Interactive browser-based laboratories solving first-principles mathematical and electrical physics in real-time with Float64 numerical precision. Completely free educational community resource.</p>
        <section>
          <h2>Featured Virtual Laboratories</h2>
          <ul>
            <li><strong>Power Electronics Virtual Lab</strong>: Buck, Boost, SPWM inverter synthesis, Foster thermal networks, dynamic SiC/IGBT switching loss.</li>
            <li><strong>Power Systems &amp; Substation Grid Lab</strong>: Symmetrical 3-phase fault calculations, transformer parameter extraction, frequency-based automated load shedding.</li>
            <li><strong>SafeOps Industrial UPS Simulator</strong>: Dual-bus 2N/2N+1 UPS redundancy, static bypass synchronization, Peukert battery autonomy curves.</li>
            <li><strong>ElectroLive Electrical Safety Lab</strong>: IEEE 1584 / NFPA 70E arc flash incident energy, boundary zones, and PPE selection.</li>
            <li><strong>Turbomachinery &amp; Rotor Dynamics Suite</strong>: Jeffcott rotor whirling, Campbell frequency diagrams, dual-plane field balancing per ISO 10816/20816.</li>
          </ul>
        </section>
      </main>
    `
  },
  {
    path: 'calculators',
    title: 'Reliability Engineering Calculators (Weibull, MTBF, Availability) | Anil Sharma',
    desc: 'Free interactive reliability calculators: 2-parameter Weibull curve plotting, MTBF, MTTR, and availability formulas for plant engineers and students.',
    canonical: 'https://toanilsharma.co.in/calculators',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      'name': 'Reliability Engineering Calculators',
      'applicationCategory': 'EngineeringUtility',
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD'
      }
    },
    crawlableContent: `
      <main class="static-prerender-content" style="padding: 2rem; max-width: 900px; margin: 0 auto; color: #1e293b; font-family: sans-serif;">
        <h1>Reliability Engineering Calculators &amp; Mathematical Models</h1>
        <p>Interactive engineering calculation tools adhering to international standards (IEC, IEEE, NFPA, ASME) for maintenance professionals, reliability engineers, and students.</p>
        <section>
          <h2>Interactive Calculators</h2>
          <ul>
            <li><strong>2-Parameter Weibull Modeler</strong>: Plot probability density functions f(t), reliability R(t), and failure rate hazard bathtub curves h(t).</li>
            <li><strong>MTBF, MTTR &amp; Inherent Availability</strong>: Calculate operational availability A = MTBF / (MTBF + MTTR) and failure rates.</li>
            <li><strong>Component Failure Rate Prediction</strong>: Exponential reliability models and series/parallel system reliability block diagrams (RBD).</li>
          </ul>
        </section>
      </main>
    `
  },
  {
    path: 'tools',
    title: 'Open Engineering Platforms & Software Architecture | Anil Sharma',
    desc: 'Explore LiveSimulators.com, DesignCalculators.co.in (150+ tools), ReliabilityTools.co.in, and ElectroSafe.homes engineered by Anil Sharma.',
    canonical: 'https://toanilsharma.co.in/tools',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      'name': 'Open Digital Engineering Platforms',
      'description': 'Free open-access browser-based engineering calculation and simulation platforms developed as a technical community hobby.'
    },
    crawlableContent: `
      <main class="static-prerender-content" style="padding: 2rem; max-width: 900px; margin: 0 auto; color: #1e293b; font-family: sans-serif;">
        <h1>Open Digital Engineering Platforms &amp; Architecture</h1>
        <p>Suite of open-access digital platforms created by Anil Sharma to democratize high-precision engineering tools, real-time physics modeling, and community fire safety knowledge.</p>
        <section>
          <h2>Platform Portfolio</h2>
          <article>
            <h3>LiveSimulators.com</h3>
            <p>65+ Float64 interactive physics simulators covering Power Electronics, Power Systems, UPS, Electrical Safety, and Rotating Machinery.</p>
          </article>
          <article>
            <h3>DesignCalculators.co.in</h3>
            <p>Over 150 standardized calculation tools covering IEC, IEEE, NFPA, NEC, and ASME engineering codes.</p>
          </article>
          <article>
            <h3>ReliabilityTools.co.in</h3>
            <p>Industrial reliability modeling suite for Weibull distribution fitting, MTBF estimation, and system availability analysis.</p>
          </article>
          <article>
            <h3>ElectroSafe.homes</h3>
            <p>Global public service platform providing residential electrical fire hazard assessments and safety recommendations.</p>
          </article>
        </section>
      </main>
    `
  },
  {
    path: 'insights',
    title: 'Reliability Insights & Field Philosophy | Anil Sharma',
    desc: 'Field philosophy, zero-breakdown maintenance strategies, and engineering insights from 28+ years of continuous-process plant operations.',
    canonical: 'https://toanilsharma.co.in/insights',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      'name': 'Reliability Insights & Field Philosophy',
      'description': 'Operational field notes, root cause methodologies, and zero-breakdown maintenance insights by Anil Sharma.'
    },
    crawlableContent: `
      <main class="static-prerender-content" style="padding: 2rem; max-width: 900px; margin: 0 auto; color: #1e293b; font-family: sans-serif;">
        <h1>Reliability Insights &amp; Field Engineering Philosophy</h1>
        <p>Practical lessons and operating philosophies cultivated over 28+ years of continuous-process plant management.</p>
        <section>
          <h2>Key Engineering Principles</h2>
          <article>
            <h3>Zero-Breakdown Mindset</h3>
            <p>Why equipment breakdowns are not inevitable facts of plant operations, but defects introduced by design, assembly, or operating deficiencies that can be methodically eliminated.</p>
          </article>
          <article>
            <h3>Failure Modes vs. Symptoms</h3>
            <p>Distinguishing root cause failure mechanisms from operational consequences through disciplined 5-Whys and Ishikawa methodologies.</p>
          </article>
          <article>
            <h3>Condition-Based Maintenance Over Calendar Overhauls</h3>
            <p>Applying the P-F interval to perform precision interventions based on real physics and vibration signatures rather than arbitrary run hours.</p>
          </article>
        </section>
      </main>
    `
  },
  {
    path: 'training',
    title: 'Reliability Training & Workforce Mentorship | Anil Sharma',
    desc: 'Master Technical Trainer & SHRM Certified Facilitator. Conducted 2,500+ hours of training across Electrical Safety, UPS, Batteries, LOTO, RCM, LFI, and Automation for 200+ engineers.',
    canonical: 'https://toanilsharma.co.in/training',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Course',
      'name': 'Corporate Reliability & Industrial Engineering Training Track Record',
      'description': 'Historical corporate facilitation of 2,500+ hours across 14 technical disciplines including Electrical Safety, UPS, Battery Chargers, Batteries, LOTO, RCM, LFI, RCA, Project Management, Life Cycle, Obsolescence, Smart Manufacturing, Automation, and EMS.',
      'provider': {
        '@type': 'Person',
        'name': 'Anil Sharma',
        'jobTitle': 'Senior Engineering & Reliability Leader'
      }
    },
    crawlableContent: `
      <main class="static-prerender-content" style="padding: 2rem; max-width: 900px; margin: 0 auto; color: #1e293b; font-family: sans-serif;">
        <h1>Corporate Training &amp; Workforce Mentorship Track Record</h1>
        <p>Anil Sharma is an accomplished SHRM Certified Facilitator, DNV GL Certified IMS Lead Auditor, and Master Technical Trainer with an extensive track record of internal corporate technical facilitation.</p>
        <section>
          <h2>Measurable Training Track Record</h2>
          <ul>
            <li><strong>2,500+ Training Hours Conducted</strong>: Across both interactive online virtual classrooms and intensive hands-on plant floor workshops.</li>
            <li><strong>200+ Engineers &amp; Working Professionals Upskilled</strong>: Graduate engineer trainees, junior technicians, and seasoned plant maintenance managers.</li>
            <li><strong>Multiple Best Facilitator &amp; Top Trainer Awards</strong>: Recognized with corporate awards for pedagogical excellence and measurable field impact.</li>
          </ul>
        </section>
        <section>
          <h2>The 14 Core Technical Disciplines Conducted</h2>
          <ol>
            <li><strong>Electrical Safety &amp; Arc Flash Hazards</strong>: NFPA 70E compliance, IEEE 1584 boundary analysis, shock protection, PPE classification.</li>
            <li><strong>Industrial UPS Systems</strong>: Dual-bus 2N/2N+1 topologies, static bypass switching, inverter commutation, harmonic filtering.</li>
            <li><strong>Battery Chargers &amp; DC Power Supplies</strong>: Float and boost charging, SCR thyristor control, DC earth leakage detection.</li>
            <li><strong>Industrial Batteries &amp; Energy Storage</strong>: VRLA, vented lead-acid, and Ni-Cd battery chemistries, IEEE 485 sizing, impedance testing.</li>
            <li><strong>Lockout / Tagout (LOTO) &amp; Safe Isolation</strong>: OSHA / NFPA standard energy isolation protocols, complex key interlocks, verification testing.</li>
            <li><strong>Reliability Centered Maintenance (RCM)</strong>: SAE JA1011 7-step evaluation, functional failure analysis, task selection algorithms.</li>
            <li><strong>Learning from Incidents (LFI)</strong>: Systemic review of electrical and mechanical trip events, institutionalizing preventative barriers.</li>
            <li><strong>Root Cause Analysis (RCA) &amp; 5-Whys</strong>: Apollo RCA, cause-and-effect trees, physical/human/latent root causes.</li>
            <li><strong>Capital Project Management &amp; Execution</strong>: Greenfield and brownfield plant engineering, commissioning milestones, punch list governance.</li>
            <li><strong>Asset Life Cycle &amp; Degradation Modeling</strong>: Bath-tub curve analysis, Weibull wear-out modeling, life cycle costing (LCC).</li>
            <li><strong>Obsolescence Management &amp; Modernization</strong>: Switchgear retrofitting, relay migration, legacy PLC/SCADA upgrades without shutdown downtime.</li>
            <li><strong>Smart Manufacturing &amp; Industrial IoT</strong>: Digital telemetry, wireless vibration monitoring, smart motor management relays.</li>
            <li><strong>Substation &amp; Industrial Automation</strong>: SCADA systems, numerical protection relays (IEC 61850), automated load shedding schemes.</li>
            <li><strong>Energy Management Systems (EMS)</strong>: ISO 50001 compliance, power factor correction, variable speed drive efficiency optimization.</li>
          </ol>
        </section>
      </main>
    `
  },
  {
    path: 'contact',
    title: 'Connect with Anil Sharma | Technical Dialogue & Academic Mentorship',
    desc: 'Connect with Anil Sharma for engineering peer dialogue, student mentorship, simulator feedback, and non-commercial technical exchange.',
    canonical: 'https://toanilsharma.co.in/contact',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'Connect with Anil Sharma',
      'url': 'https://toanilsharma.co.in/contact'
    },
    crawlableContent: `
      <main class="static-prerender-content" style="padding: 2rem; max-width: 900px; margin: 0 auto; color: #1e293b; font-family: sans-serif;">
        <h1>Connect with Anil Sharma — Technical Dialogue &amp; Mentorship</h1>
        <p>Anil Sharma welcomes dialogue with fellow engineers, academic researchers, graduate engineering students, and software developers interested in industrial reliability, power systems, and interactive browser simulations.</p>
        <section>
          <h2>Peer Dialogue &amp; Non-Commercial Collaboration</h2>
          <ul>
            <li>Engineering simulator validation and mathematical feedback</li>
            <li>Student career and academic technical mentorship in electrical and reliability engineering</li>
            <li>Standardization discussions (IEC, IEEE, NFPA, SAE JA1011)</li>
            <li>Open-source software contributions on GitHub</li>
          </ul>
          <p>Email: toanilsharma@gmail.com | LinkedIn: https://www.linkedin.com/in/toanilsharma</p>
        </section>
      </main>
    `
  },
  {
    path: 'privacy',
    title: 'Privacy Policy | Anil Sharma - Industrial Reliability Platforms',
    desc: 'Privacy policy and non-commercial data governance for toanilsharma.co.in and open engineering calculators.',
    canonical: 'https://toanilsharma.co.in/privacy',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Privacy Policy'
    },
    crawlableContent: `
      <main class="static-prerender-content" style="padding: 2rem; max-width: 900px; margin: 0 auto; color: #1e293b; font-family: sans-serif;">
        <h1>Privacy Policy</h1>
        <p>This personal portfolio and educational resource website (toanilsharma.co.in) is operated on a strictly non-commercial basis. We do not sell personal information, run commercial third-party ads, or track users across unrelated websites.</p>
      </main>
    `
  },
  {
    path: 'terms',
    title: 'Terms of Service & Engineering Disclaimer | Anil Sharma',
    desc: 'Terms of service and engineering calculation disclaimers for open tools by Anil Sharma.',
    canonical: 'https://toanilsharma.co.in/terms',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Terms of Service & Disclaimer'
    },
    crawlableContent: `
      <main class="static-prerender-content" style="padding: 2rem; max-width: 900px; margin: 0 auto; color: #1e293b; font-family: sans-serif;">
        <h1>Terms of Service &amp; Engineering Disclaimer</h1>
        <p>All simulators, calculators, mathematical formulas, and articles on toanilsharma.co.in and associated platforms are provided purely for educational and preliminary engineering reference. Real industrial plant designs must be independently validated by licensed professional engineers.</p>
      </main>
    `
  }
];

routes.forEach(route => {
  const routeDir = path.join(distDir, route.path);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  let html = baseHtml;

  // 1. Title & Meta tags
  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
  html = html.replace(/<meta name="description" content=".*?"\s*\/?>/, `<meta name="description" content="${route.desc}">`);
  html = html.replace(/<link rel="canonical" href=".*?"\s*\/?>/, `<link rel="canonical" href="${route.canonical}">`);
  html = html.replace(/<meta property="og:url" content=".*?"\s*\/?>/, `<meta property="og:url" content="${route.canonical}">`);
  html = html.replace(/<meta property="og:title" content=".*?"\s*\/?>/, `<meta property="og:title" content="${route.title}">`);
  html = html.replace(/<meta property="og:description" content=".*?"\s*\/?>/, `<meta property="og:description" content="${route.desc}">`);

  // 2. Route-specific Google Tag (gtag) initialization in <head>
  const routeGtagSnippet = `<!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-V5ZE67EECX"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-V5ZE67EECX', {
        'page_path': '/${route.path}',
        'page_title': ${JSON.stringify(route.title)},
        'page_location': '${route.canonical}'
      });
    </script>`;

  html = html.replace(/<!-- Google tag \(gtag\.js\) -->[\s\S]*?gtag\('config',\s*'G-V5ZE67EECX'\);[\s\S]*?<\/script>/, routeGtagSnippet);

  // 3. Inject Route-specific JSON-LD Schema
  if (route.schema) {
    const schemaScript = `\n    <!-- Route Specific Schema (JSON-LD) -->\n    <script type="application/ld+json">\n    ${JSON.stringify(route.schema, null, 2)}\n    </script>\n  </head>`;
    html = html.replace('</head>', schemaScript);
  }

  // 4. Inject Crawlable semantic HTML inside <div id="root"> for non-JS / raw LLM crawlers
  if (route.crawlableContent) {
    const rootReplacement = `<div id="root">${route.crawlableContent}</div>`;
    html = html.replace('<div id="root"></div>', rootReplacement);
  }

  fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf8');
  console.log(`Generated pre-rendered static route with Google Tag & Crawlable HTML: dist/${route.path}/index.html`);
});

console.log('Successfully pre-rendered all routes with Google Tag, Rich Schema, and Crawlable HTML for all Search Engines & LLMs!');
