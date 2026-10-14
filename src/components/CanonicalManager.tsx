import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://toanilsharma.co.in';

interface PageMeta {
  title: string;
  ogTitle?: string;
  description: string;
  schemaType?: string;
  schemaData?: Record<string, any>;
}

const PAGE_METADATA: Record<string, PageMeta> = {
  '/': {
    title: 'Anil Sharma - Senior Engineering & Reliability Leader | 28+ Yrs Exp',
    ogTitle: 'Anil Sharma - Senior Engineering & Reliability Leader | Open Simulators & Calculators | Official Website - toanilsharma.co.in',
    description: 'Official website of Anil Sharma, Senior Engineering & Reliability Leader with 28+ years continuous process experience. Creator of free open-access engineering simulators and calculators.',
    schemaType: 'Person',
    schemaData: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      'name': 'Anil Sharma',
      'jobTitle': 'Senior Engineering & Reliability Leader',
      'url': 'https://toanilsharma.co.in/',
      'sameAs': [
        'https://www.linkedin.com/in/toanilsharma',
        'https://github.com/toanilsharma',
        'https://livesimulators.com',
        'https://designcalculators.co.in',
        'https://reliabilitytools.co.in',
        'https://electrosafe.homes'
      ],
      'description': 'Senior industrial reliability and engineering leader with 28+ years continuous process experience. Creator of open engineering web tools.',
      'knowsAbout': [
        'Reliability Centered Maintenance',
        'Failure Mode and Effects Analysis',
        'Root Cause Analysis',
        'Substation Automation',
        'Arc Flash Safety NFPA 70E',
        'Zero-Breakdown Operations'
      ]
    }
  },
  '/about': {
    title: 'About Anil Sharma | Senior Engineering Leader & Community Mentor',
    description: 'Learn about Anil Sharma: 28+ years leading continuous-process reliability, SHRM Certified Facilitator, Lead Auditor, and creator of open educational simulators.',
    schemaType: 'ProfilePage',
    schemaData: {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      'name': 'About Anil Sharma',
      'url': 'https://toanilsharma.co.in/about',
      'description': 'Executive biography, credentials, education, and technical philosophy of Anil Sharma.'
    }
  },
  '/services': {
    title: 'Engineering Expertise & Reliability Frameworks | Anil Sharma',
    description: 'Specialized industrial reliability frameworks: SAE JA1011 RCM, FMEA, RCA, Substation Automation (220kV to 6.6kV), and Electrical Safety per NFPA 70E.',
    schemaType: 'Service',
    schemaData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Reliability & Industrial Engineering Frameworks',
      'provider': {
        '@type': 'Person',
        'name': 'Anil Sharma'
      },
      'serviceType': 'Open Engineering Knowledge Sharing'
    }
  },
  '/experience': {
    title: 'Industrial Experience & Project Track Record | Anil Sharma (28+ Years)',
    description: 'Three decades of industrial engineering leadership: continuous-process petrochemical operations, 2.5 MTPA greenfield cement plant commissioning, and automated power distribution.',
    schemaType: 'ItemPage'
  },
  '/experience/reliance-industries': {
    title: 'Industrial Experience & Project Track Record | Anil Sharma',
    description: 'Three decades of industrial engineering leadership: continuous-process petrochemical operations, 2.5 MTPA greenfield cement plant commissioning, and automated power distribution.',
    schemaType: 'ItemPage'
  },
  '/simulators': {
    title: '65+ Live Virtual Engineering Simulators | Float64 Browser Physics',
    description: 'Explore 65+ free interactive virtual engineering laboratories: power systems, SPWM inverters, harmonic filters, and electrical safety models running real-time Float64 physics.',
    schemaType: 'SoftwareApplication',
    schemaData: {
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
    }
  },
  '/calculators': {
    title: 'Reliability Engineering Calculators (Weibull, MTBF, Availability) | Anil Sharma',
    description: 'Free interactive reliability calculators: 2-parameter Weibull curve plotting, MTBF, MTTR, and availability formulas for plant engineers and students.',
    schemaType: 'WebApplication',
    schemaData: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      'name': 'Reliability Engineering Calculators',
      'applicationCategory': 'EngineeringUtility',
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD'
      }
    }
  },
  '/tools': {
    title: 'Open Engineering Platforms & Software Architecture | Anil Sharma',
    description: 'Explore LiveSimulators.com, DesignCalculators.co.in (150+ tools), ReliabilityTools.co.in, and ElectroSafe.homes engineered by Anil Sharma.',
    schemaType: 'CollectionPage'
  },
  '/insights': {
    title: 'Reliability Insights & Field Philosophy | Anil Sharma',
    description: 'Field philosophy, zero-breakdown maintenance strategies, and engineering insights from 28+ years of continuous-process plant operations.',
    schemaType: 'CollectionPage'
  },
  '/blog': {
    title: 'Reliability Insights & Field Philosophy | Anil Sharma',
    description: 'Field philosophy, zero-breakdown maintenance strategies, and engineering insights from 28+ years of continuous-process plant operations.',
    schemaType: 'CollectionPage'
  },
  '/training': {
    title: 'Reliability Training & Workforce Mentorship | Anil Sharma',
    description: 'Master Technical Trainer & SHRM Certified Facilitator. Conducted 2,500+ hours of training across Electrical Safety, UPS, Batteries, LOTO, RCM, LFI, and Automation for 200+ engineers.',
    schemaType: 'EducationalOccupationalProgram'
  },
  '/contact': {
    title: 'Connect with Anil Sharma | Technical Dialogue & Academic Mentorship',
    description: 'Connect with Anil Sharma for engineering peer dialogue, student mentorship, simulator feedback, and non-commercial technical exchange.',
    schemaType: 'ContactPage',
    schemaData: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'Connect with Anil Sharma',
      'url': 'https://toanilsharma.co.in/contact'
    }
  },
  '/privacy': {
    title: 'Privacy Policy | Anil Sharma - Industrial Reliability Platforms',
    description: 'Privacy policy and non-commercial data governance for toanilsharma.co.in and open engineering calculators.',
    schemaType: 'WebPage'
  },
  '/terms': {
    title: 'Terms of Service & Engineering Disclaimer | Anil Sharma',
    description: 'Terms of service and engineering calculation disclaimers for open tools by Anil Sharma.',
    schemaType: 'WebPage'
  },
  '/disclaimer': {
    title: 'Engineering Disclaimer | Anil Sharma',
    description: 'Engineering calculation disclaimers and terms for free simulation tools.',
    schemaType: 'WebPage'
  }
};

export const CanonicalManager = () => {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const cleanPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
    const canonicalUrl = `${BASE_URL}${cleanPath === '/' ? '/' : cleanPath}`;

    // 1. Ensure <link rel="canonical"> tag is present and points to canonical URL
    let canonicalTag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    // 2. Synchronize Open Graph og:url
    const ogUrlTag = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (ogUrlTag) {
      ogUrlTag.setAttribute('content', canonicalUrl);
    }

    // 3. Update Title & Meta Description if mapped
    const meta = PAGE_METADATA[cleanPath] || PAGE_METADATA['/'];
    if (meta) {
      document.title = meta.title;

      const metaDescTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (metaDescTag) {
        metaDescTag.setAttribute('content', meta.description);
      }

      const ogTitleTag = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
      if (ogTitleTag) {
        ogTitleTag.setAttribute('content', meta.ogTitle || meta.title);
      }

      const ogDescTag = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
      if (ogDescTag) {
        ogDescTag.setAttribute('content', meta.description);
      }

      // 4. Inject dynamic JSON-LD Schema
      let dynamicSchemaScript = document.getElementById('dynamic-json-ld') as HTMLScriptElement;
      if (meta.schemaData) {
        if (!dynamicSchemaScript) {
          dynamicSchemaScript = document.createElement('script');
          dynamicSchemaScript.id = 'dynamic-json-ld';
          dynamicSchemaScript.type = 'application/ld+json';
          document.head.appendChild(dynamicSchemaScript);
        }
        dynamicSchemaScript.textContent = JSON.stringify(meta.schemaData);
      } else if (dynamicSchemaScript) {
        dynamicSchemaScript.remove();
      }
    }
  }, [location.pathname]);

  return null;
};

export default CanonicalManager;
