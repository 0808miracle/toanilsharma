import fs from 'fs';
import path from 'path';

function createExecutivePdf() {
  const dir = 'public/downloads';
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // A4 Dimensions in points (72 points/inch): 595.28 x 841.89
  const width = 595.28;
  const height = 841.89;

  // Build stream content using standard PDF graphics and text operators
  let stream = '';

  // Helper drawing functions
  const fillRect = (x, y, w, h, r, g, b) => {
    stream += `${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)} rg\n`;
    stream += `${x.toFixed(2)} ${y.toFixed(2)} ${w.toFixed(2)} ${h.toFixed(2)} re f\n`;
  };

  const drawLine = (x1, y1, x2, y2, r, g, b, lineWidth = 1) => {
    stream += `${lineWidth.toFixed(2)} w\n`;
    stream += `${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)} RG\n`;
    stream += `${x1.toFixed(2)} ${y1.toFixed(2)} m ${x2.toFixed(2)} ${y2.toFixed(2)} l S\n`;
  };

  const addText = (text, x, y, font = '/F1', size = 10, r = 0.1, g = 0.1, b = 0.1) => {
    const escaped = text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
    stream += `BT\n`;
    stream += `${font} ${size} Tf\n`;
    stream += `${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)} rg\n`;
    stream += `${x.toFixed(2)} ${y.toFixed(2)} Td\n`;
    stream += `(${escaped}) Tj\n`;
    stream += `ET\n`;
  };

  // 1. Top Luxury Header Banner (Deep Navy Gradient representation)
  fillRect(0, 715, width, 126.89, 0.043, 0.078, 0.165); // #0B142A
  fillRect(0, 710, width, 5, 0.0, 0.4, 1.0); // Electric Blue accent line

  // Header Title & Branding
  addText("EXECUTIVE ENGINEERING PROFILE & TECHNICAL PHILANTHROPY", 40, 805, '/F2', 8.5, 0.22, 0.74, 0.97);
  addText("ANIL SHARMA", 40, 770, '/F2', 26, 1.0, 1.0, 1.0);
  addText("Reliability & Maintenance Expert | E&I Specialist | Projects Execution | Trainer", 40, 748, '/F2', 11.5, 0.9, 0.95, 1.0);
  addText("Senior Engineering & Reliability Leader (28+ Years Industrial Rigor)", 40, 730, '/F1', 9.5, 0.7, 0.8, 0.9);

  // Contact Info Ribbon
  fillRect(0, 680, width, 30, 0.94, 0.96, 0.98);
  addText("Domain: https://toanilsharma.co.in   |   LinkedIn: linkedin.com/in/toanilsharma   |   Email: toanilsharma@gmail.com", 40, 691, '/F2', 8.5, 0.1, 0.25, 0.5);

  // 2. Executive Summary Block
  addText("EXECUTIVE OVERVIEW", 40, 650, '/F2', 12, 0.0, 0.4, 0.9);
  drawLine(40, 642, width - 40, 642, 0.8, 0.85, 0.9, 1);

  const summary = [
    "Distinguished industrial engineering leader with 28+ years of extensive, hands-on leadership across mega continuous-process",
    "manufacturing complexes (Reliance Industries Limited, Ambuja Cements). Specialist in asset life-cycle optimization, Reliability-",
    "Centered Maintenance (RCM), Failure Mode and Effects Analysis (FMEA), Root Cause Analysis (RCA), and high-voltage power distribution.",
    "Certified SHRM Facilitator and DNV GL IMS Lead Auditor (ISO 9001/14001/45001) with a deep passion for institutionalizing zero-unplanned-",
    "breakdown cultures, training 200+ engineers, and pioneering 100% free, first-principles virtual simulation tools for global education."
  ];

  let currY = 626;
  for (const line of summary) {
    addText(line, 40, currY, '/F1', 9, 0.2, 0.25, 0.3);
    currY -= 14;
  }

  // 3. Core Competencies & Industrial Scope (Two Column Grid)
  currY -= 10;
  addText("CORE AREAS OF EXPERTISE & METHODOLOGIES", 40, currY, '/F2', 12, 0.0, 0.4, 0.9);
  drawLine(40, currY - 8, width - 40, currY - 8, 0.8, 0.85, 0.9, 1);

  currY -= 24;
  const col1 = [
    "* Asset Reliability Strategy: RCM, FMEA, Weibull, PM/PdM Optimization",
    "* Power Systems Automation: 66kV/11kV/415V Switchgears, Transformers",
    "* Turbomachinery Dynamics: Vibration analysis, Dynamic rotor balance",
    "* Safety Governance: IEC 61508 / 61511 Safety Instrumented Systems (SIS)"
  ];
  const col2 = [
    "* AI & Modern Web Solutions: Browser float64 physics simulators",
    "* Standards Compliance: IEC, IEEE, ASME, NFPA, API, ISO 55000",
    "* Root Cause Problem Solving: Ishikawa, 5-Why, TapRooT, Fault Tree",
    "* People Development: SHRM-certified competency building & workshops"
  ];

  for (let i = 0; i < col1.length; i++) {
    addText(col1[i], 40, currY - (i * 15), '/F1', 8.5, 0.15, 0.2, 0.25);
    addText(col2[i], 310, currY - (i * 15), '/F1', 8.5, 0.15, 0.2, 0.25);
  }

  // 4. Global Engineering Philanthropy Platforms (Card representations)
  currY -= 80;
  addText("GLOBAL OPEN-ACCESS PLATFORMS (100% FREE PHILANTHROPY)", 40, currY, '/F2', 12, 0.0, 0.4, 0.9);
  drawLine(40, currY - 8, width - 40, currY - 8, 0.8, 0.85, 0.9, 1);

  const platforms = [
    {
      title: "LiveSimulators.com (65+ Interactive Virtual Laboratories)",
      desc: "Real-time float64 physics simulators spanning Power Electronics (Buck/Boost/SPWM), Power Systems Automation, SafeOps UPS, ElectroLive Safety, and Turbomachinery. Accessible in-browser with zero install."
    },
    {
      title: "DesignCalculators.co.in (150+ Standardized Engineering Calculators)",
      desc: "Comprehensive engineering calculation suite adhering strictly to IEC, IEEE, ASME, and NFPA codes. Utilized by tens of thousands of practicing engineers and university students globally."
    },
    {
      title: "ReliabilityTools.co.in & ElectroSafe.homes",
      desc: "Advanced industrial reliability suites for MTBF, Weibull, Availability modeling, and global educational resources for electrical fire risk prevention and residential protection."
    }
  ];

  currY -= 24;
  for (const plat of platforms) {
    fillRect(40, currY - 36, width - 80, 46, 0.96, 0.98, 1.0);
    drawLine(40, currY - 36, 40, currY + 10, 0.0, 0.4, 0.9, 3);
    addText(plat.title, 52, currY - 3, '/F2', 9.5, 0.05, 0.2, 0.45);
    addText(plat.desc, 52, currY - 18, '/F1', 8, 0.3, 0.35, 0.4);
    currY -= 54;
  }

  // 5. Professional Credentials & Formal Education
  currY -= 10;
  addText("FORMAL CREDENTIALS & CERTIFICATIONS", 40, currY, '/F2', 12, 0.0, 0.4, 0.9);
  drawLine(40, currY - 8, width - 40, currY - 8, 0.8, 0.85, 0.9, 1);

  currY -= 24;
  const certs = [
    "DNV GL Certified IMS Lead Auditor - ISO 9001 (Quality), ISO 14001 (Environment), ISO 45001 (Safety)",
    "SHRM Certified Facilitator - Executive Capability, Technical Mentorship & Leadership Facilitation",
    "Certified Electrical & Process Safety Auditor - Mega Continuous Process & Petrochemical Complexes",
    "MBA in Project Management - Sikkim Manipal University",
    "Diploma in Electrical Engineering - Chandigarh College of Engineering & Technology"
  ];

  for (const cert of certs) {
    addText(`*  ${cert}`, 40, currY, '/F1', 8.5, 0.15, 0.2, 0.25);
    currY -= 14;
  }

  // 6. Footer Stamp
  currY -= 16;
  fillRect(40, currY - 24, width - 80, 30, 0.94, 0.95, 0.97);
  addText("Verified Executive Document  *  Official Web Hub: https://toanilsharma.co.in  *  Connect: toanilsharma@gmail.com", 60, currY - 12, '/F2', 8, 0.3, 0.4, 0.5);

  // Construct PDF Objects
  const streamLength = Buffer.byteLength(stream);

  let objects = [];
  const addObject = (content) => {
    objects.push(content);
    return objects.length;
  };

  addObject(`<< /Type /Catalog /Pages 2 0 R >>`);
  addObject(`<< /Type /Pages /Kids [3 0 R] /Count 1 >>`);
  addObject(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${width} ${height}] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>`);
  addObject(`<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>`);
  addObject(`<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>`);
  addObject(`<< /Length ${streamLength} >>\nstream\n${stream}\nendstream`);

  // Assemble cross reference table (xref)
  let offset = 0;
  let pdf = `%PDF-1.4\n`;
  offset = Buffer.byteLength(pdf);

  const offsets = [];
  for (let i = 0; i < objects.length; i++) {
    offsets.push(offset);
    const objStr = `${i + 1} 0 obj\n${objects[i]}\nendobj\n`;
    pdf += objStr;
    offset += Buffer.byteLength(objStr);
  }

  const xrefOffset = offset;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (const off of offsets) {
    pdf += `${off.toString().padStart(10, '0')} 00000 n \n`;
  }

  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  const outputPath = path.join(dir, 'Anil_Sharma_Executive_Profile.pdf');
  fs.writeFileSync(outputPath, pdf);
  console.log('Executive profile PDF successfully written to:', outputPath);
}

createExecutivePdf();
