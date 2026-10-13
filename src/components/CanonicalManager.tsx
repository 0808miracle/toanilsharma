import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://toanilsharma.co.in';

const PAGE_METADATA: Record<string, { title: string; ogTitle?: string; description: string }> = {
  '/': {
    title: 'Anil Sharma - Reliability & Maintenance Expert | E&I Specialist | 28+ Yrs Exp',
    ogTitle: 'Anil Sharma - Reliability & Maintenance Expert | E&I Specialist | Projects Execution | Trainer | Integrating AI & Web Development into Engineering Solutions | Official Website - toanilsharma.co.in',
    description: 'Official website of Anil Sharma, Reliability & Maintenance Expert & E&I Specialist with 28+ years industrial experience, integrating AI & Web Development into engineering solutions.'
  },
  '/about': {
    title: 'About Anil Sharma | Senior Reliability Expert & Trainer',
    description: 'Learn about Anil Sharma: 28+ years leading asset reliability, RCM, and electrical safety across petrochemical and manufacturing plants.'
  },
  '/services': {
    title: 'Engineering Services & Expertise | Anil Sharma',
    description: 'Industrial reliability engineering services: RCM, FMEA, RCA, Electrical Safety Audits, and automated load shedding solutions.'
  },
  '/blog': {
    title: 'Reliability Insights & Field Philosophy | Anil Sharma',
    description: 'Field philosophy, zero-breakdown maintenance strategies, and engineering insights from 28+ years of plant operations.'
  },
  '/contact': {
    title: 'Contact Anil Sharma | Industrial Reliability Consultant',
    description: 'Get in touch with Anil Sharma for industrial reliability consulting, corporate training workshops, plant audits, and keynote speaking.'
  },
  '/tools': {
    title: 'Free Engineering Tools & Calculators | Anil Sharma',
    description: 'Explore 150+ IEC/IEEE/NFPA design calculators, ReliabilityTools.co.in (Weibull, MTBF), and ElectroSafe.homes created by Anil Sharma.'
  },
  '/training': {
    title: 'Reliability Training & Engineering Mentorship | Anil Sharma',
    description: 'SHRM Certified Facilitator and Lead Auditor. Trained 200+ engineers in RCM, FMEA, electrical safety, and industrial reliability.'
  },
  '/experience/reliance-industries': {
    title: 'Reliance Industries Leadership | Anil Sharma (2008–Present)',
    description: 'Senior Reliability, Projects & Maintenance Expert at Reliance Industries, overseeing reliability and greenfield petrochemical projects.'
  },
  '/methodologies/rcm': {
    title: 'RCM & Asset Integrity Methodologies | Anil Sharma',
    description: 'Specialist in Reliability Centered Maintenance (RCM), FMEA, RCA, TPM, PLC load shedding, and arc flash safety.'
  },
  '/terms': {
    title: 'Terms of Service & Engineering Disclaimer | Anil Sharma',
    description: 'Terms of service and engineering disclaimer for Anil Sharma\'s technical tools and portfolio.'
  },
  '/disclaimer': {
    title: 'Terms of Service & Engineering Disclaimer | Anil Sharma',
    description: 'Terms of service and engineering disclaimer for Anil Sharma\'s technical tools and portfolio.'
  },
  '/privacy': {
    title: 'Privacy Policy | Anil Sharma - Industrial Reliability Expert',
    description: 'Privacy policy and data governance details for toanilsharma.co.in and associated engineering tools.'
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
    const meta = PAGE_METADATA[cleanPath];
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
    }
  }, [location.pathname]);

  return null;
};
