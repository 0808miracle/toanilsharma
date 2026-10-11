import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { 
  Activity, 
  Cpu, 
  ExternalLink, 
  Sliders, 
  Zap, 
  RotateCw,
  Sparkles,
  Gauge,
  ShieldAlert,
  Flame,
  Layers,
  Play,
  Pause,
  AlertTriangle,
  CheckCircle2,
  RefreshCw,
  TrendingUp,
  Compass,
  Maximize2,
  Minimize2,
  Camera,
  Download
} from 'lucide-react';
import { MathTex } from '@/components/ui/MathTex';
import { sounds } from '@/utils/soundEffects';

type SimulatorEngine = 'power-electronics' | 'arc-flash' | 'turbomachinery' | 'ups-transfer';

export const LiveWaveformSimulator = () => {
  const [activeEngine, setActiveEngine] = useState<SimulatorEngine>('power-electronics');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // --- Engine 1: Power Electronics State ---
  const [peTopology, setPeTopology] = useState<'buck' | 'boost' | 'spwm'>('buck');
  const [peDuty, setPeDuty] = useState<number>(60); // %
  const [peFreqKHz, setPeFreqKHz] = useState<number>(30); // kHz
  const [peLoadCurrent, setPeLoadCurrent] = useState<number>(15); // Amps

  // --- Engine 2: Arc Flash State ---
  const [arcFaultKA, setArcFaultKA] = useState<number>(35); // kA bolted fault
  const [arcClearingMs, setArcClearingMs] = useState<number>(120); // ms breaker clearing
  const [arcDistanceMm, setArcDistanceMm] = useState<number>(610); // mm working distance (24 inches)

  // --- Engine 3: Turbomachinery Rotor Dynamics State ---
  const [rotorRpm, setRotorRpm] = useState<number>(3200); // RPM
  const [rotorUnbalanceG, setRotorUnbalanceG] = useState<number>(8.5); // grams
  const [rotorDamping, setRotorDamping] = useState<number>(0.12); // damping ratio zeta

  // --- Engine 4: UPS Dual-Bus Transfer State ---
  const [upsMainsHealthy, setUpsMainsHealthy] = useState<boolean>(true);
  const [upsTransferTriggered, setUpsTransferTriggered] = useState<boolean>(false);
  const [upsBatterySoc, setUpsBatterySoc] = useState<number>(98); // %
  const [upsLoadKW, setUpsLoadKW] = useState<number>(220); // kW load

  // --- Oscilloscope Inspection & Channels State ---
  const cursorRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });
  const [ch1Visible, setCh1Visible] = useState<boolean>(true);
  const [ch2Visible, setCh2Visible] = useState<boolean>(true);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isExpanded) {
        setIsExpanded(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isExpanded]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleExportSnapshot = () => {
    sounds.playClick();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `AnilSharma_${activeEngine}_Scope_Trace.png`;
    a.click();
  };

  // Physics Solvers
  // 1. Power Electronics Solver
  const peVin = 400; // 400V DC link
  const peL = 220e-6; // 220uH
  const peD = peDuty / 100;
  const peTsw = 1 / (peFreqKHz * 1000);
  
  let peVout = 0;
  let peDeltaIL = 0;
  let peTHD = 1.8;
  let peEfficiency = 98.4;

  if (peTopology === 'buck') {
    peVout = peVin * peD;
    peDeltaIL = ((peVin - peVout) * peD * peTsw) / peL;
    peTHD = 1.2 + (1 - peD) * 1.5;
    peEfficiency = 98.7 - peD * 0.4;
  } else if (peTopology === 'boost') {
    peVout = peVin / Math.max(0.05, 1 - peD);
    peDeltaIL = (peVin * peD * peTsw) / peL;
    peTHD = 2.1 + peD * 1.8;
    peEfficiency = 97.9 - peD * 0.7;
  } else {
    // SPWM Inverter
    peVout = peVin * peD * 0.707;
    peDeltaIL = peVin * 0.12;
    peTHD = 1.4 + (1 - peD) * 1.2;
    peEfficiency = 98.1;
  }

  // 2. Arc Flash Solver (IEEE 1584-2018 Simplified Model)
  const arcWorkingDistInches = arcDistanceMm / 25.4;
  const arcClearingSec = arcClearingMs / 1000;
  // Incident Energy formula approx: Ei = 4.184 * 1.5 * (I_bf / 20)^1.1 * (t / 0.2) * (24 / D)^1.47
  const arcEi = Math.max(0.1, 4.184 * 1.45 * Math.pow(arcFaultKA / 25, 1.08) * (arcClearingSec / 0.2) * Math.pow(24 / arcWorkingDistInches, 1.47));
  // Arc Flash Boundary (Ei = 1.2 cal/cm2 threshold)
  const arcBoundaryMeters = Math.max(0.4, Math.sqrt((arcFaultKA * arcClearingSec * 4.2) / 1.2) * 0.35);

  let ppeCategory = 1;
  let ppeLabel = 'Category 1 (4 cal/cm²) - Arc Shirt & Glasses';
  let ppeColor = 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
  let ppeDanger = false;

  if (arcEi <= 4.0) {
    ppeCategory = 1;
    ppeLabel = 'Category 1 (4 cal/cm²) - Arc Shirt & Safety Glasses';
    ppeColor = 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
  } else if (arcEi <= 8.0) {
    ppeCategory = 2;
    ppeLabel = 'Category 2 (8 cal/cm²) - Arc Rated Face Shield & Jacket';
    ppeColor = 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10';
  } else if (arcEi <= 25.0) {
    ppeCategory = 3;
    ppeLabel = 'Category 3 (25 cal/cm²) - Multi-Layer Arc Suit & Hood';
    ppeColor = 'text-amber-400 border-amber-500/30 bg-amber-500/10';
  } else if (arcEi <= 40.0) {
    ppeCategory = 4;
    ppeLabel = 'Category 4 (40 cal/cm²) - Heavy Flash Suit & Remote Racking';
    ppeColor = 'text-orange-400 border-orange-500/30 bg-orange-500/10';
  } else {
    ppeCategory = 5;
    ppeLabel = 'CRITICAL DANGER: EXCEEDS 40 cal/cm² - NO LIVE WORK PERMITTED';
    ppeColor = 'text-rose-400 border-rose-500/30 bg-rose-500/20';
    ppeDanger = true;
  }

  // 3. Turbomachinery Rotor Dynamics Solver (API 617 / ISO 10816)
  const critRpm1 = 3200; // 1st critical speed
  const critRpm2 = 7400; // 2nd critical speed
  const speedRatio1 = rotorRpm / critRpm1;
  const speedRatio2 = rotorRpm / critRpm2;
  // Resonance amplification factor: Q = 1 / sqrt((1 - r^2)^2 + (2*zeta*r)^2)
  const amp1 = 1 / Math.sqrt(Math.pow(1 - Math.pow(speedRatio1, 2), 2) + Math.pow(2 * rotorDamping * speedRatio1, 2));
  const amp2 = 0.5 / Math.sqrt(Math.pow(1 - Math.pow(speedRatio2, 2), 2) + Math.pow(2 * rotorDamping * speedRatio2, 2));
  const dynamicAmp = Math.min(12, 1 + amp1 + amp2);
  const vibrationSeverityMmS = Math.min(18.5, (rotorUnbalanceG * 0.18) * dynamicAmp * (rotorRpm / 3000));
  const isResonanceZone = Math.abs(rotorRpm - critRpm1) < 350 || Math.abs(rotorRpm - critRpm2) < 450;

  let isoZone = 'Zone A (Good)';
  let isoColor = 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
  if (vibrationSeverityMmS < 2.8) {
    isoZone = 'Zone A: Like New Condition';
    isoColor = 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
  } else if (vibrationSeverityMmS < 4.5) {
    isoZone = 'Zone B: Unrestricted Operation';
    isoColor = 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10';
  } else if (vibrationSeverityMmS < 7.1) {
    isoZone = 'Zone C: Restricted Continuous Alert';
    isoColor = 'text-amber-400 border-amber-500/30 bg-amber-500/10';
  } else {
    isoZone = 'Zone D: Trip Level Exceeded (API 670 Trip)';
    isoColor = 'text-rose-400 border-rose-500/30 bg-rose-500/20';
  }

  // 4. UPS Transfer Solver
  const peukertExponent = 1.15;
  const batteryMinutes = Math.round((upsBatterySoc / 100) * (360 / Math.pow(upsLoadKW / 100, peukertExponent)));

  // Simulated power outage transfer action
  const handleTriggerUpsTransfer = () => {
    setUpsMainsHealthy(false);
    setUpsTransferTriggered(true);
    setTimeout(() => {
      setUpsTransferTriggered(false);
    }, 1800);
  };

  const handleRestoreUpsMains = () => {
    setUpsMainsHealthy(true);
    setUpsTransferTriggered(false);
  };

  // Canvas Animation Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;

      // Deep dark oscilloscope phosphor canvas
      ctx.fillStyle = '#050B16';
      ctx.fillRect(0, 0, w, h);

      // --- Grid Matrix ---
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.09)';
      ctx.lineWidth = 1;
      const xSpacing = w / 12;
      const ySpacing = h / 8;
      for (let x = 0; x < w; x += xSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += ySpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Center reference axes
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.22)';
      ctx.beginPath();
      ctx.moveTo(0, h / 2);
      ctx.lineTo(w, h / 2);
      ctx.moveTo(w / 2, 0);
      ctx.lineTo(w / 2, h);
      ctx.stroke();

      // RENDER BASED ON ACTIVE ENGINE
      if (activeEngine === 'power-electronics') {
        // --- 1. POWER ELECTRONICS DSO TRACES & FFT ---
        // Trace 1: Output Voltage (Cyan)
        ctx.strokeStyle = '#00F0FF';
        ctx.lineWidth = 2.5;
        ctx.shadowColor = 'rgba(0, 240, 255, 0.6)';
        ctx.shadowBlur = 10;
        ctx.beginPath();

        const period = Math.max(30, 160 - (peFreqKHz * 1.2));
        const onTime = period * peD;

        for (let x = 0; x < w; x++) {
          const cyc = (x + t) % period;
          let y = h / 2;
          if (peTopology === 'buck' || peTopology === 'boost') {
            const isHigh = cyc < onTime;
            const vHeight = (peVout / 800) * (h * 0.38);
            // Slight parasitic ringing at switching transitions
            const ring = Math.exp(-(cyc % (period / 2)) * 0.15) * Math.sin(cyc * 0.8) * 12;
            y = isHigh ? (h * 0.42 - vHeight + ring) : (h * 0.42 + 25);
          } else {
            // SPWM pure sine with carrier ripple
            const fund = Math.sin((x + t) * 0.035) * (h * 0.3);
            const ripple = Math.sin((x + t) * (peFreqKHz * 0.08)) * (1 - peD * 0.4) * 8;
            y = (h * 0.45) - fund - ripple;
          }
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Trace 2: Inductor Current Ripple (Amber)
        ctx.strokeStyle = '#F59E0B';
        ctx.lineWidth = 2;
        ctx.shadowColor = 'rgba(245, 158, 11, 0.5)';
        ctx.shadowBlur = 8;
        ctx.beginPath();

        for (let x = 0; x < w; x++) {
          const cyc = (x + t) % period;
          const norm = cyc < onTime 
            ? (cyc / onTime) 
            : 1 - ((cyc - onTime) / (period - onTime));
          const iBase = h * 0.76;
          const iAmp = (peDeltaIL * 2.2);
          const y = iBase - (norm * iAmp);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Bottom FFT Spectrum Analyzer Bars
        const fftX = w - 210;
        const fftY = h - 20;
        ctx.fillStyle = 'rgba(11, 19, 43, 0.85)';
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.25)';
        ctx.strokeRect(fftX - 10, h - 90, 210, 80);
        ctx.fillRect(fftX - 10, h - 90, 210, 80);

        ctx.font = '10px "Space Grotesk", monospace';
        ctx.fillStyle = '#00F0FF';
        ctx.fillText('FFT SPECTRUM (IEEE 519)', fftX, h - 75);

        const harmonics = [
          { f: '1st', mag: 55 },
          { f: '3rd', mag: Math.max(4, 28 * (1 - peD)) },
          { f: '5th', mag: Math.max(3, 16 * (1 - peD)) },
          { f: '7th', mag: Math.max(2, 10 * peD) },
          { f: '9th', mag: 5 },
          { f: '11th', mag: 3 }
        ];

        harmonics.forEach((harm, i) => {
          const barW = 16;
          const barX = fftX + 8 + (i * 32);
          const barH = harm.mag;
          ctx.fillStyle = i === 0 ? '#00F0FF' : '#F59E0B';
          ctx.fillRect(barX, fftY - barH, barW, barH);
          ctx.fillStyle = 'rgba(255,255,255,0.6)';
          ctx.fillText(harm.f, barX - 1, fftY + 12);
        });

        // Top Telemetry Overlay Text
        ctx.font = '11px "Space Grotesk", monospace';
        ctx.fillStyle = '#00F0FF';
        ctx.fillText(`CH1: V_out = ${peVout.toFixed(1)}V`, 16, 24);
        ctx.fillStyle = '#F59E0B';
        ctx.fillText(`CH2: ΔI_L = ${peDeltaIL.toFixed(1)}A pk-pk`, 16, 42);
        ctx.fillStyle = '#10B981';
        ctx.fillText(`THD: ${peTHD.toFixed(2)}% | η: ${peEfficiency.toFixed(1)}%`, 16, 60);

      } else if (activeEngine === 'arc-flash') {
        // --- 2. ARC FLASH PLASMA & SHOCKWAVE RADIUS ---
        const cx = w * 0.35;
        const cy = h / 2;

        // Draw Switchgear Cubicle
        ctx.strokeStyle = '#64748B';
        ctx.lineWidth = 3;
        ctx.strokeRect(cx - 100, cy - 85, 200, 170);
        ctx.fillStyle = 'rgba(30, 41, 59, 0.6)';
        ctx.fillRect(cx - 100, cy - 85, 200, 170);

        // 3-Phase Busbars
        ['-30', '0', '30'].forEach((offset, i) => {
          ctx.fillStyle = ['#EF4444', '#F59E0B', '#3B82F6'][i];
          ctx.fillRect(cx + parseInt(offset) - 6, cy - 60, 12, 120);
        });

        // Dynamic Arc Blast Glow Wavefront
        const blastRadius = Math.min(180, 45 + (arcEi * 3.8));
        const pulse = Math.sin(t * 0.15) * 8;

        const radGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, blastRadius + pulse);
        if (ppeDanger) {
          radGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
          radGrad.addColorStop(0.25, 'rgba(239, 68, 68, 0.85)');
          radGrad.addColorStop(0.65, 'rgba(220, 38, 38, 0.35)');
          radGrad.addColorStop(1, 'rgba(239, 68, 68, 0)');
        } else {
          radGrad.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
          radGrad.addColorStop(0.2, 'rgba(245, 158, 11, 0.8)');
          radGrad.addColorStop(0.6, 'rgba(14, 165, 233, 0.3)');
          radGrad.addColorStop(1, 'rgba(14, 165, 233, 0)');
        }
        ctx.fillStyle = radGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, blastRadius + pulse, 0, Math.PI * 2);
        ctx.fill();

        // Radiating Spark Particles
        ctx.fillStyle = '#FFFFFF';
        for (let i = 0; i < 24; i++) {
          const angle = (i * (Math.PI / 12)) + (t * 0.05);
          const dist = 30 + ((i * 19 + t * 4) % (blastRadius + 20));
          const px = cx + Math.cos(angle) * dist;
          const py = cy + Math.sin(angle) * dist;
          ctx.fillRect(px, py, 2.5, 2.5);
        }

        // Boundary Rings
        // Arc Flash Boundary (Ei = 1.2 cal/cm2)
        const afbPixels = Math.min(w * 0.48, arcBoundaryMeters * 80);
        ctx.strokeStyle = '#EF4444';
        ctx.setLineDash([6, 4]);
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, afbPixels, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);

        // Working Distance Marker (Electrician Location)
        const workerX = cx + (arcDistanceMm / 910) * 220;
        ctx.strokeStyle = '#00F0FF';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(workerX, cy - 50);
        ctx.lineTo(workerX, cy + 50);
        ctx.stroke();

        ctx.font = '11px "Space Grotesk", monospace';
        ctx.fillStyle = '#00F0FF';
        ctx.fillText(`Worker (${arcDistanceMm}mm)`, workerX - 35, cy + 65);
        ctx.fillStyle = '#EF4444';
        ctx.fillText(`AFB Boundary (${arcBoundaryMeters.toFixed(2)}m)`, cx + afbPixels - 60, cy - 10);

        // HUD Readouts
        ctx.font = '12px "Space Grotesk", monospace';
        ctx.fillStyle = ppeDanger ? '#EF4444' : '#F59E0B';
        ctx.fillText(`INCIDENT ENERGY: ${arcEi.toFixed(1)} cal/cm²`, 16, 24);
        ctx.fillStyle = '#00F0FF';
        ctx.fillText(`CLEARING: ${arcClearingMs}ms | FAULT: ${arcFaultKA}kA`, 16, 44);

      } else if (activeEngine === 'turbomachinery') {
        // --- 3. TURBOMACHINERY ROTOR ORBIT LISSAJOUS ---
        const cx = w * 0.38;
        const cy = h / 2;
        const bearingRadius = 100;

        // Bearing Clearance Boundary (Circle)
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, bearingRadius, 0, Math.PI * 2);
        ctx.stroke();

        // Orthogonal Proximity Probes X & Y
        ctx.fillStyle = '#38BDF8';
        ctx.fillRect(cx - bearingRadius - 18, cy - 6, 18, 12); // Probe X (0 deg)
        ctx.fillRect(cx - 6, cy - bearingRadius - 18, 12, 18); // Probe Y (90 deg)
        ctx.font = '10px monospace';
        ctx.fillText('PROBE X', cx - bearingRadius - 62, cy + 4);
        ctx.fillText('PROBE Y', cx - 20, cy - bearingRadius - 22);

        // Shaft Center & Orbit Precession (Lissajous Path)
        const orbitScale = Math.min(88, (vibrationSeverityMmS / 12) * 55);
        const phaseShift = Math.PI / 4;
        const freqRatio = 1.0; // 1X synchronous unbalance

        ctx.strokeStyle = isResonanceZone ? '#EF4444' : '#00F0FF';
        ctx.lineWidth = isResonanceZone ? 3.5 : 2;
        ctx.shadowColor = isResonanceZone ? 'rgba(239,68,68,0.8)' : 'rgba(0,240,255,0.7)';
        ctx.shadowBlur = isResonanceZone ? 16 : 8;
        ctx.beginPath();

        const samples = 120;
        for (let i = 0; i < samples; i++) {
          const theta = (i / samples) * Math.PI * 2;
          const xDisp = Math.cos(theta * freqRatio) * orbitScale;
          const yDisp = Math.sin((theta * freqRatio) + phaseShift) * (orbitScale * 0.75);
          
          const ox = cx + xDisp;
          const oy = cy + yDisp;
          if (i === 0) ctx.moveTo(ox, oy);
          else ctx.lineTo(ox, oy);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Live Spinning Shaft Keyphasor Dot
        const shaftAngle = t * (rotorRpm / 1200);
        const currX = cx + Math.cos(shaftAngle) * orbitScale;
        const currY = cy + Math.sin(shaftAngle + phaseShift) * (orbitScale * 0.75);

        ctx.fillStyle = '#F59E0B';
        ctx.beginPath();
        ctx.arc(currX, currY, 6, 0, Math.PI * 2);
        ctx.fill();

        // Right side: Campbell Diagram & ISO Severity Meter
        const meterX = w - 190;
        const meterY = h - 30;
        ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.strokeRect(meterX - 10, 40, 190, h - 60);
        ctx.fillRect(meterX - 10, 40, 190, h - 60);

        ctx.font = '11px "Space Grotesk", monospace';
        ctx.fillStyle = '#00F0FF';
        ctx.fillText('ISO 10816-3 SEVERITY', meterX, 60);

        // Vertical severity bar
        const maxV = 15; // mm/s
        const barHeight = 120;
        const fillHeight = Math.min(barHeight, (vibrationSeverityMmS / maxV) * barHeight);

        // Background zone bands
        ctx.fillStyle = 'rgba(16, 185, 129, 0.2)'; // Zone A
        ctx.fillRect(meterX + 20, meterY - barHeight, 28, barHeight * 0.25);
        ctx.fillStyle = 'rgba(6, 182, 212, 0.2)'; // Zone B
        ctx.fillRect(meterX + 20, meterY - barHeight * 0.75, 28, barHeight * 0.25);
        ctx.fillStyle = 'rgba(245, 158, 11, 0.2)'; // Zone C
        ctx.fillRect(meterX + 20, meterY - barHeight * 0.5, 28, barHeight * 0.25);
        ctx.fillStyle = 'rgba(239, 68, 68, 0.25)'; // Zone D
        ctx.fillRect(meterX + 20, meterY - barHeight * 0.25, 28, barHeight * 0.25);

        // Actual value indicator
        ctx.fillStyle = isResonanceZone ? '#EF4444' : '#00F0FF';
        ctx.fillRect(meterX + 20, meterY - fillHeight, 28, fillHeight);

        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(`${vibrationSeverityMmS.toFixed(1)} mm/s RMS`, meterX + 55, meterY - fillHeight + 10);

        // Telemetry top text
        ctx.font = '11px "Space Grotesk", monospace';
        ctx.fillStyle = isResonanceZone ? '#EF4444' : '#00F0FF';
        ctx.fillText(`ROTOR SPEED: ${rotorRpm} RPM`, 16, 24);
        ctx.fillStyle = '#F59E0B';
        ctx.fillText(`UNBALANCE: ${rotorUnbalanceG}g | DAMPING ζ: ${rotorDamping}`, 16, 42);
        if (isResonanceZone) {
          ctx.fillStyle = '#EF4444';
          ctx.fillText('⚠️ CRITICAL SPEED RESONANCE ZONE (API 684)', 16, 60);
        }

      } else if (activeEngine === 'ups-transfer') {
        // --- 4. INDUSTRIAL 2N UPS & STATIC TRANSFER ---
        const busAY = h * 0.32;
        const busBY = h * 0.68;
        const loadX = w * 0.8;
        const loadY = h / 2;

        // Bus A (Mains Utility 415V)
        ctx.strokeStyle = upsMainsHealthy ? '#00F0FF' : '#EF4444';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(40, busAY);
        ctx.lineTo(w * 0.5, busAY);
        ctx.stroke();

        ctx.font = '11px "Space Grotesk", monospace';
        ctx.fillStyle = upsMainsHealthy ? '#00F0FF' : '#EF4444';
        ctx.fillText(upsMainsHealthy ? 'BUS A: UTILITY GRID (ONLINE)' : 'BUS A: UTILITY GRID (TRIPPED / FAULT)', 40, busAY - 10);

        // Bus B (UPS Inverter & Battery Bank)
        ctx.strokeStyle = '#10B981';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(40, busBY);
        ctx.lineTo(w * 0.5, busBY);
        ctx.stroke();

        ctx.fillStyle = '#10B981';
        ctx.fillText('BUS B: 2N UPS INVERTER & BATTERY (ACTIVE)', 40, busBY + 22);

        // Flowing Power Particle Electrons
        ctx.fillStyle = '#FFFFFF';
        const numParticles = 8;
        for (let i = 0; i < numParticles; i++) {
          const flowX = 40 + ((i * 45 + t * 4) % (w * 0.46));
          if (upsMainsHealthy) {
            ctx.fillRect(flowX, busAY - 2, 4, 4);
          } else {
            ctx.fillRect(flowX, busBY - 2, 4, 4);
          }
        }

        // Static Transfer Switch (STS) Cubicle
        const stsX = w * 0.52;
        const stsY = h / 2;
        ctx.fillStyle = 'rgba(30, 41, 59, 0.9)';
        ctx.strokeStyle = upsTransferTriggered ? '#F59E0B' : '#00F0FF';
        ctx.lineWidth = 2;
        ctx.strokeRect(stsX, stsY - 55, 90, 110);
        ctx.fillRect(stsX, stsY - 55, 90, 110);

        ctx.font = '10px "Space Grotesk", monospace';
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText('SOLID-STATE', stsX + 12, stsY - 30);
        ctx.fillText('STATIC SWITCH', stsX + 8, stsY - 15);
        ctx.fillStyle = upsTransferTriggered ? '#F59E0B' : '#10B981';
        ctx.fillText(upsTransferTriggered ? '<1.8ms TRANSFER' : 'LATCHED OK', stsX + 10, stsY + 15);

        // Lines into load
        ctx.strokeStyle = '#00F0FF';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(stsX + 90, stsY);
        ctx.lineTo(loadX, stsY);
        ctx.stroke();

        // Critical Plant DCS Load Box
        ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
        ctx.strokeStyle = '#10B981';
        ctx.strokeRect(loadX, stsY - 40, 110, 80);
        ctx.fillRect(loadX, stsY - 40, 110, 80);

        ctx.fillStyle = '#10B981';
        ctx.font = '11px "Space Grotesk", monospace';
        ctx.fillText('CRITICAL LOAD', loadX + 14, stsY - 15);
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(`${upsLoadKW} kW DCS BUS`, loadX + 14, stsY + 5);
        ctx.fillStyle = '#38BDF8';
        ctx.fillText('ZERO DOWNTIME', loadX + 14, stsY + 22);

        // Top Status HUD
        ctx.font = '11px "Space Grotesk", monospace';
        ctx.fillStyle = upsMainsHealthy ? '#10B981' : '#F59E0B';
        ctx.fillText(`SYSTEM STATUS: ${upsMainsHealthy ? 'DUAL-BUS NORMAL OPERATION' : 'SUB-CYCLE TRANSFER TO BATTERY COMPLETE'}`, 16, 24);
        ctx.fillStyle = '#00F0FF';
        ctx.fillText(`TRANSFER TIME: 1.8ms (<0.1 CYCLE) | PEUKERT AUTONOMY: ${batteryMinutes} MINS`, 16, 42);
      }

      // --- Oscilloscope Hover Crosshairs & Real-Time Signal Inspector ---
      if (cursorRef.current.active) {
        const cx = cursorRef.current.x;
        const cy = cursorRef.current.y;

        ctx.save();
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.6)';
        ctx.lineWidth = 1;

        // Vertical probe line
        ctx.beginPath();
        ctx.moveTo(cx, 0);
        ctx.lineTo(cx, h);
        ctx.stroke();

        // Horizontal probe line
        ctx.beginPath();
        ctx.moveTo(0, cy);
        ctx.lineTo(w, cy);
        ctx.stroke();
        ctx.setLineDash([]);

        // Real-time Telemetry Readout Box at Cursor
        const tMs = ((cx / w) * (1000 / peFreqKHz)).toFixed(2);
        const readout = activeEngine === 'power-electronics'
          ? `T: ${tMs}ms | V: ${peVout.toFixed(1)}V | IL: ${peLoadCurrent}A`
          : activeEngine === 'arc-flash'
          ? `Dist: ${arcDistanceMm}mm | Ei: ${arcEi.toFixed(1)} cal/cm²`
          : activeEngine === 'turbomachinery'
          ? `RPM: ${rotorRpm} | Vib: ${vibrationSeverityMmS.toFixed(2)} mm/s`
          : `STS: <1.8ms | Load: ${upsLoadKW}kW | Batt: ${batteryMinutes}m`;

        const boxW = 210;
        const boxH = 26;
        const boxX = Math.min(w - boxW - 8, Math.max(8, cx + 12));
        const boxY = Math.min(h - boxH - 8, Math.max(8, cy - 32));

        ctx.fillStyle = 'rgba(7, 13, 26, 0.92)';
        ctx.strokeStyle = '#06b6d4';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.rect(boxX, boxY, boxW, boxH);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#00F0FF';
        ctx.font = 'bold 10px monospace';
        ctx.fillText(readout, boxX + 8, boxY + 16);
        ctx.restore();
      }

      if (isPlaying) {
        t += 2;
      }
      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [
    activeEngine,
    isPlaying,
    peTopology,
    peDuty,
    peFreqKHz,
    peVout,
    peDeltaIL,
    peD,
    arcFaultKA,
    arcClearingMs,
    arcDistanceMm,
    arcEi,
    arcBoundaryMeters,
    ppeDanger,
    rotorRpm,
    rotorUnbalanceG,
    rotorDamping,
    vibrationSeverityMmS,
    isResonanceZone,
    upsMainsHealthy,
    upsTransferTriggered,
    upsLoadKW,
    batteryMinutes
  ]);

  return (
    <>
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/85 backdrop-blur-md z-[85] transition-opacity animate-in fade-in duration-200"
          onClick={() => setIsExpanded(false)}
        />
      )}
      <div className={`mb-14 p-6 sm:p-8 rounded-3xl transition-all duration-300 ${
        isExpanded 
          ? 'fixed inset-2 sm:inset-6 z-[90] overflow-y-auto bg-background/98 dark:bg-[#070D1A]/98 border-2 border-primary/50 shadow-[0_0_80px_rgba(0,102,255,0.35)] backdrop-blur-3xl' 
          : 'bg-background/95 dark:bg-[#070D1A]/95 border border-primary/20 dark:border-white/10 shadow-[0_0_50px_rgba(0,102,255,0.12)] backdrop-blur-2xl'
      }`}>
      {/* Console Header & Tab Navigation */}
      <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-5 pb-6 border-b border-border/60 dark:border-white/10">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
              Flagship Interactive Engineering Laboratory • 60 FPS Float64 Physics
            </span>
          </div>
          <h3 className="font-grotesk text-2xl sm:text-3xl font-extrabold mt-1 text-foreground">
            Multi-Lab First-Principles Engineering Simulator
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-2xl">
            Switch between 4 high-fidelity simulation engines. Adjust high-voltage parameters, rotor dynamics, and power switching to experience first-principles physics directly in your browser.
          </p>
        </div>

        {/* Engine Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-secondary/80 dark:bg-card/80 border border-border/80 dark:border-white/10 shadow-inner">
          <button
            onClick={() => setActiveEngine('power-electronics')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
              activeEngine === 'power-electronics'
                ? 'bg-primary text-primary-foreground shadow-md shadow-primary/30 scale-105'
                : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Power Electronics</span>
          </button>

          <button
            onClick={() => setActiveEngine('arc-flash')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
              activeEngine === 'arc-flash'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30 scale-105'
                : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Arc Flash Blast</span>
          </button>

          <button
            onClick={() => setActiveEngine('turbomachinery')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
              activeEngine === 'turbomachinery'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-105'
                : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
            }`}
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span>Rotor Dynamics</span>
          </button>

          <button
            onClick={() => setActiveEngine('ups-transfer')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
              activeEngine === 'ups-transfer'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 scale-105'
                : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>2N UPS Transfer</span>
          </button>
        </div>
      </div>

      {/* Simulator Workspace Grid */}
      <div className="grid lg:grid-cols-12 gap-7 mt-7 items-center">
        {/* 60 FPS Interactive Canvas Display (7 Cols) */}
        <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-border/80 dark:border-white/10 shadow-2xl bg-slate-950 group">
          <canvas
            ref={canvasRef}
            width={680}
            height={360}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const scaleX = 680 / rect.width;
              const scaleY = 360 / rect.height;
              cursorRef.current = {
                x: (e.clientX - rect.left) * scaleX,
                y: (e.clientY - rect.top) * scaleY,
                active: true,
              };
            }}
            onMouseLeave={() => {
              cursorRef.current.active = false;
            }}
            className="w-full h-[260px] sm:h-[340px] block cursor-crosshair"
          />

          {/* Top-Left Channel Status Badges */}
          <div className="absolute top-3 left-3 flex items-center space-x-1.5 pointer-events-none">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 backdrop-blur-md">
              CH1: ACTIVE
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 backdrop-blur-md">
              CH2: ACTIVE
            </span>
          </div>

          {/* Floating Canvas Badges & Tool Controls */}
          <div className="absolute top-3 right-3 flex items-center space-x-2">
            {/* Snapshot Camera Export Button */}
            <button
              onClick={handleExportSnapshot}
              className="p-1.5 rounded-lg bg-black/60 hover:bg-black/80 text-white/80 hover:text-cyan-400 border border-white/10 backdrop-blur-md transition-all text-xs flex items-center gap-1 cursor-pointer"
              title="Download High-Resolution PNG Trace Snapshot"
            >
              <Camera className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline text-[10px] font-mono">PNG TRACE</span>
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={() => { sounds.playClick(); setIsPlaying(!isPlaying); }}
              className="p-1.5 rounded-lg bg-black/60 hover:bg-black/80 text-white/80 border border-white/10 backdrop-blur-md transition-all text-xs flex items-center gap-1 cursor-pointer"
              title={isPlaying ? "Pause Physics Simulation" : "Resume Physics Simulation"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
              <span className="text-[10px] font-mono">{isPlaying ? "PAUSE" : "RESUME"}</span>
            </button>

            {/* Fullscreen Expand Workbench Button */}
            <button
              onClick={() => { sounds.playClick(); setIsExpanded(!isExpanded); }}
              className="p-1.5 rounded-lg bg-black/60 hover:bg-black/80 text-white/80 hover:text-primary border border-white/10 backdrop-blur-md transition-all text-xs flex items-center gap-1 cursor-pointer"
              title={isExpanded ? "Collapse Workbench" : "Expand to Fullscreen Workbench"}
            >
              {isExpanded ? <Minimize2 className="w-3.5 h-3.5 text-primary" /> : <Maximize2 className="w-3.5 h-3.5 text-primary" />}
              <span className="hidden sm:inline text-[10px] font-mono">{isExpanded ? "COLLAPSE" : "EXPAND"}</span>
            </button>

            <span className="hidden sm:inline-flex px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-primary/20 text-primary border border-primary/30 backdrop-blur-md">
              PROBE HOVER ACTIVE
            </span>
          </div>

          <div className="absolute bottom-3 left-3 text-[10px] font-mono text-white/50 bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-md border border-white/5">
            {activeEngine === 'power-electronics' && "Hover probe across waveform to inspect instantaneous V(t) & I_L(t)"}
            {activeEngine === 'arc-flash' && "Hover probe to measure incident energy vs NFPA 70E boundaries"}
            {activeEngine === 'turbomachinery' && "Hover probe to measure API 617 orbit amplitude & vibration severity"}
            {activeEngine === 'ups-transfer' && "IEC 62040-3 Sub-Cycle Static Bypass Transfer (<1.8ms)"}
          </div>
        </div>

        {/* Interactive Controls & Telemetry Column (5 Cols) */}
        <div className="lg:col-span-5 space-y-5">
          {/* Controls specific to Engine 1: Power Electronics */}
          {activeEngine === 'power-electronics' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Topology</span>
                <div className="flex gap-1">
                  {(['buck', 'boost', 'spwm'] as const).map(top => (
                    <button
                      key={top}
                      onClick={() => setPeTopology(top)}
                      className={`px-2.5 py-1 rounded text-xs font-semibold uppercase ${
                        peTopology === top ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'
                      }`}
                    >
                      {top}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                  <span className="flex items-center gap-1.5 text-foreground">
                    <Sliders className="w-3.5 h-3.5 text-primary" />
                    Duty Cycle (D)
                  </span>
                  <span className="font-mono text-primary text-sm font-bold">{peDuty}%</span>
                </div>
                <Slider value={[peDuty]} min={10} max={90} step={1} onValueChange={(val) => setPeDuty(val[0])} />
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                  <span className="flex items-center gap-1.5 text-foreground">
                    <RotateCw className="w-3.5 h-3.5 text-cyan-400" />
                    Switching Frequency (f_sw)
                  </span>
                  <span className="font-mono text-cyan-400 text-sm font-bold">{peFreqKHz} kHz</span>
                </div>
                <Slider value={[peFreqKHz]} min={10} max={100} step={5} onValueChange={(val) => setPeFreqKHz(val[0])} />
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-secondary/50 dark:bg-card/50 border border-border/70">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground block">Output Voltage</span>
                  <span className="text-lg font-black font-grotesk text-foreground block">{peVout.toFixed(1)} V</span>
                  <span className="text-[10px] text-muted-foreground">Input: 400V DC Bus</span>
                </div>
                <div className="p-3 rounded-xl bg-secondary/50 dark:bg-card/50 border border-border/70">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground block">Current Ripple ΔI_L</span>
                  <span className="text-lg font-black font-grotesk text-amber-500 block">{peDeltaIL.toFixed(1)} A</span>
                  <span className="text-[10px] text-muted-foreground">IEEE 519 Pass</span>
                </div>
              </div>

              <a href="https://livesimulators.com/lab/power-electronics-lab" target="_blank" rel="noopener noreferrer" className="block pt-1">
                <Button className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-xs shadow-md shadow-blue-500/20 group">
                  <span>Launch Full Power Electronics Laboratory</span>
                  <ExternalLink className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </a>
            </div>
          )}

          {/* Controls specific to Engine 2: Arc Flash */}
          {activeEngine === 'arc-flash' && (
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                  <span className="flex items-center gap-1.5 text-foreground">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    Bolted Fault Current (I_bf)
                  </span>
                  <span className="font-mono text-amber-500 text-sm font-bold">{arcFaultKA} kA</span>
                </div>
                <Slider value={[arcFaultKA]} min={10} max={65} step={1} onValueChange={(val) => setArcFaultKA(val[0])} />
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                  <span className="flex items-center gap-1.5 text-foreground">
                    <Activity className="w-3.5 h-3.5 text-primary" />
                    Breaker Clearing Time (t_arc)
                  </span>
                  <span className="font-mono text-primary text-sm font-bold">{arcClearingMs} ms</span>
                </div>
                <Slider value={[arcClearingMs]} min={30} max={350} step={10} onValueChange={(val) => setArcClearingMs(val[0])} />
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                  <span className="flex items-center gap-1.5 text-foreground">
                    <Compass className="w-3.5 h-3.5 text-cyan-400" />
                    Working Distance (D)
                  </span>
                  <span className="font-mono text-cyan-400 text-sm font-bold">{arcDistanceMm} mm ({arcWorkingDistInches.toFixed(0)}")</span>
                </div>
                <Slider value={[arcDistanceMm]} min={455} max={910} step={15} onValueChange={(val) => setArcDistanceMm(val[0])} />
              </div>

              {/* PPE Recommendation Badge Box */}
              <div className={`p-3.5 rounded-xl border ${ppeColor} space-y-1`}>
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                  <span>NFPA 70E Compliance Rating</span>
                  <span className="font-mono text-sm">{arcEi.toFixed(1)} cal/cm²</span>
                </div>
                <p className="text-xs font-semibold leading-tight">{ppeLabel}</p>
                <p className="text-[10px] opacity-80">Arc Flash Boundary: {arcBoundaryMeters.toFixed(2)} meters ({((arcBoundaryMeters * 3.28)).toFixed(1)} ft)</p>
              </div>

              <a href="https://livesimulators.com/lab/electrolive-electrical-safety" target="_blank" rel="noopener noreferrer" className="block pt-1">
                <Button className="w-full rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold text-xs shadow-md shadow-amber-600/20 group">
                  <span>Launch Full Arc Flash Safety Laboratory</span>
                  <ExternalLink className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </a>
            </div>
          )}

          {/* Controls specific to Engine 3: Turbomachinery */}
          {activeEngine === 'turbomachinery' && (
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                  <span className="flex items-center gap-1.5 text-foreground">
                    <RotateCw className="w-3.5 h-3.5 text-indigo-400" />
                    Rotor Speed (RPM)
                  </span>
                  <span className={`font-mono text-sm font-bold ${isResonanceZone ? 'text-rose-500 animate-pulse' : 'text-indigo-400'}`}>
                    {rotorRpm} RPM {isResonanceZone && '⚠️ CRITICAL'}
                  </span>
                </div>
                <Slider value={[rotorRpm]} min={800} max={9000} step={50} onValueChange={(val) => setRotorRpm(val[0])} />
                <div className="flex justify-between text-[10px] text-muted-foreground font-mono mt-1">
                  <span>800 RPM</span>
                  <span className="text-amber-500 font-bold">1st Crit: 3200</span>
                  <span className="text-amber-500 font-bold">2nd Crit: 7400</span>
                  <span>9000 RPM</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                  <span className="flex items-center gap-1.5 text-foreground">
                    <Sliders className="w-3.5 h-3.5 text-primary" />
                    Unbalance Mass (m_unbal)
                  </span>
                  <span className="font-mono text-primary text-sm font-bold">{rotorUnbalanceG} g</span>
                </div>
                <Slider value={[rotorUnbalanceG]} min={1} max={25} step={0.5} onValueChange={(val) => setRotorUnbalanceG(val[0])} />
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                  <span className="flex items-center gap-1.5 text-foreground">
                    <Layers className="w-3.5 h-3.5 text-cyan-400" />
                    Bearing Damping Ratio (ζ)
                  </span>
                  <span className="font-mono text-cyan-400 text-sm font-bold">{rotorDamping.toFixed(2)}</span>
                </div>
                <Slider value={[rotorDamping]} min={0.05} max={0.35} step={0.01} onValueChange={(val) => setRotorDamping(val[0])} />
              </div>

              <div className={`p-3.5 rounded-xl border ${isoColor} space-y-1`}>
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                  <span>ISO 10816-3 Vibration Severity</span>
                  <span className="font-mono text-sm">{vibrationSeverityMmS.toFixed(1)} mm/s RMS</span>
                </div>
                <p className="text-xs font-semibold leading-tight">{isoZone}</p>
                <p className="text-[10px] opacity-80">API 617 Jeffcott Rotor • Hydrodynamic Tilting-Pad Bearing</p>
              </div>

              <a href="https://mech.livesimulators.com/" target="_blank" rel="noopener noreferrer" className="block pt-1">
                <Button className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xs shadow-md shadow-indigo-600/20 group">
                  <span>Launch Turbomachinery Dynamics Suite</span>
                  <ExternalLink className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </a>
            </div>
          )}

          {/* Controls specific to Engine 4: UPS Transfer */}
          {activeEngine === 'ups-transfer' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-xl bg-secondary/50 dark:bg-card/50 border border-border/70">
                <div>
                  <span className="text-xs font-bold text-foreground block">Mains Utility Status</span>
                  <span className={`text-xs font-mono font-bold ${upsMainsHealthy ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {upsMainsHealthy ? '415V 50.0Hz • GRID NORMAL' : 'GRID VOLTAGE COLLAPSED (0V)'}
                  </span>
                </div>
                {upsMainsHealthy ? (
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={handleTriggerUpsTransfer}
                    className="font-bold text-xs shadow-md shadow-rose-500/20"
                  >
                    Simulate Grid Outage
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    onClick={handleRestoreUpsMains}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-500/20"
                  >
                    Restore Utility Grid
                  </Button>
                )}
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                  <span className="flex items-center gap-1.5 text-foreground">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    Critical Load (P_load)
                  </span>
                  <span className="font-mono text-emerald-400 text-sm font-bold">{upsLoadKW} kW</span>
                </div>
                <Slider value={[upsLoadKW]} min={50} max={400} step={10} onValueChange={(val) => setUpsLoadKW(val[0])} />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-secondary/50 dark:bg-card/50 border border-border/70">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground block">Static Transfer Time</span>
                  <span className="text-lg font-black font-grotesk text-emerald-400 block">&lt; 1.8 ms</span>
                  <span className="text-[10px] text-muted-foreground">CBEMA / ITIC Compliant</span>
                </div>
                <div className="p-3 rounded-xl bg-secondary/50 dark:bg-card/50 border border-border/70">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground block">Peukert Autonomy</span>
                  <span className="text-lg font-black font-grotesk text-cyan-400 block">{batteryMinutes} Mins</span>
                  <span className="text-[10px] text-muted-foreground">Battery: {upsBatterySoc}% SOC</span>
                </div>
              </div>

              <a href="https://livesimulators.com/lab/safeops-ups" target="_blank" rel="noopener noreferrer" className="block pt-1">
                <Button className="w-full rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold text-xs shadow-md shadow-emerald-600/20 group">
                  <span>Launch SafeOps UPS Laboratory</span>
                  <ExternalLink className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
};
