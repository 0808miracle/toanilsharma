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
  Gauge
} from 'lucide-react';

type ConverterMode = 'buck' | 'boost' | 'spwm';

export const LiveWaveformSimulator = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mode, setMode] = useState<ConverterMode>('buck');
  const [dutyCycle, setDutyCycle] = useState<number>(60); // 60%
  const [frequencyKHz, setFrequencyKHz] = useState<number>(25); // 25 kHz
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // Constants
  const Vin = 400; // 400V DC bus
  const L = 220e-6; // 220 uH inductor
  const Rload = 10; // 10 ohms

  // Float64 analytical solver
  const D = dutyCycle / 100;
  const fsw = frequencyKHz * 1000;
  const T = 1 / fsw;

  let Vout = 0;
  let deltaIL = 0;
  let efficiency = 98.4;

  if (mode === 'buck') {
    Vout = Vin * D;
    deltaIL = (Vin - Vout) * D * T / L;
    efficiency = 98.6 - (D * 0.4);
  } else if (mode === 'boost') {
    Vout = Vin / (1 - D);
    deltaIL = Vin * D * T / L;
    efficiency = 97.8 - (D * 0.8);
  } else {
    // SPWM Inverter
    Vout = (Vin * D * 0.707); // RMS equivalent
    deltaIL = (Vin * 0.15);
    efficiency = 98.1;
  }

  // Animation Loop on Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;

      // Dark oscilloscope background
      ctx.fillStyle = '#060A12';
      ctx.fillRect(0, 0, width, height);

      // Grid Lines
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.12)';
      ctx.lineWidth = 1;

      // Vertical divisions
      const xDiv = width / 10;
      for (let x = 0; x < width; x += xDiv) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal divisions
      const yDiv = height / 6;
      for (let y = 0; y < height; y += yDiv) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Center Reference Axis
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.25)';
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();

      // Draw Voltage Waveform (Cyan Trace)
      ctx.strokeStyle = '#06B6D4'; // Cyan
      ctx.lineWidth = 2.5;
      ctx.shadowColor = 'rgba(6, 182, 212, 0.5)';
      ctx.shadowBlur = 8;
      ctx.beginPath();

      const periodPx = 80;
      const onPx = periodPx * D;

      for (let x = 0; x < width; x++) {
        let y = height / 2;

        if (mode === 'buck' || mode === 'boost') {
          const cyclePos = (x + time) % periodPx;
          const isHigh = cyclePos < onPx;
          const vScale = mode === 'buck' ? 0.28 : 0.22;
          const targetY = isHigh ? (height / 2 - (Vout * vScale)) : (height / 2 + 30);
          y = targetY;
        } else {
          // SPWM Inverter sine output with ripple
          const fundamental = Math.sin((x + time) * 0.04);
          const carrier = Math.sin((x + time) * (fsw / 800)) * (1 - D * 0.5) * 6;
          y = (height / 2) - (fundamental * 65) - carrier;
        }

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw Inductor Current Ripple Trace (Amber Glow)
      ctx.strokeStyle = '#F59E0B'; // Amber
      ctx.lineWidth = 2;
      ctx.shadowColor = 'rgba(245, 158, 11, 0.4)';
      ctx.shadowBlur = 6;
      ctx.beginPath();

      for (let x = 0; x < width; x++) {
        const cyclePos = (x + time) % periodPx;
        const normalized = cyclePos < onPx 
          ? (cyclePos / onPx) 
          : 1 - ((cyclePos - onPx) / (periodPx - onPx));
        const currentY = (height * 0.75) - (normalized * 28);

        if (x === 0) ctx.moveTo(x, currentY);
        else ctx.lineTo(x, currentY);
      }
      ctx.stroke();
      ctx.shadowBlur = 0; // reset

      // Oscilloscope Overlay Label
      ctx.font = '11px "Space Grotesk", monospace';
      ctx.fillStyle = '#06B6D4';
      ctx.fillText(`CH1: V_out (${Vout.toFixed(1)}V)`, 14, 22);

      ctx.fillStyle = '#F59E0B';
      ctx.fillText(`CH2: I_L Ripple (Δ${deltaIL.toFixed(1)}A)`, 14, 40);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.fillText(`f_sw: ${frequencyKHz}kHz | D: ${dutyCycle}%`, width - 150, 22);

      if (isPlaying) {
        time += 2;
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [mode, D, fsw, Vout, deltaIL, frequencyKHz, dutyCycle, isPlaying]);

  return (
    <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-background/90 dark:bg-card/90 border border-border/80 dark:border-white/10 shadow-2xl backdrop-blur-xl">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-border/60 dark:border-white/10">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase text-primary tracking-wider">
              Flagship Simulator Micro-Preview • 60 FPS Browser Physics
            </span>
          </div>
          <h3 className="font-grotesk text-xl sm:text-2xl font-bold mt-1 text-foreground">
            Power Electronics &amp; Converter Waveform Oscilloscope
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
            Test switching topologies in real-time. Drag duty cycle and switching frequency to watch the transient output waveforms adjust live.
          </p>
        </div>

        {/* Mode Selector Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-secondary/80 dark:bg-secondary/40 border border-border/60">
          <button
            onClick={() => setMode('buck')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              mode === 'buck'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Buck Step-Down
          </button>
          <button
            onClick={() => setMode('boost')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              mode === 'boost'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Boost Step-Up
          </button>
          <button
            onClick={() => setMode('spwm')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              mode === 'spwm'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            SPWM Inverter
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 mt-6 items-center">
        {/* Real-time Oscilloscope Canvas (7 Cols) */}
        <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-border/70 dark:border-white/10 shadow-inner bg-slate-950">
          <canvas
            ref={canvasRef}
            width={640}
            height={280}
            className="w-full h-[240px] sm:h-[280px] block"
          />
          <div className="absolute bottom-2.5 right-3 flex items-center space-x-2 text-[10px] font-mono text-white/50 bg-black/60 px-2 py-0.5 rounded-md backdrop-blur-sm">
            <span>Float64 Real-Time Numerical Solver</span>
          </div>
        </div>

        {/* Live Controls & Telemetry Readouts (5 Cols) */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Duty Cycle Slider */}
          <div>
            <div className="flex justify-between items-center text-xs font-bold font-grotesk mb-2">
              <span className="text-foreground flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-primary" />
                Duty Cycle (D)
              </span>
              <span className="font-mono text-primary text-sm">{dutyCycle}%</span>
            </div>
            <Slider
              value={[dutyCycle]}
              min={10}
              max={90}
              step={1}
              onValueChange={(val) => setDutyCycle(val[0])}
            />
            <div className="flex justify-between text-[10px] text-muted-foreground font-mono mt-1">
              <span>10%</span>
              <span>50% (Nominal)</span>
              <span>90%</span>
            </div>
          </div>

          {/* Switching Frequency Slider */}
          <div>
            <div className="flex justify-between items-center text-xs font-bold font-grotesk mb-2">
              <span className="text-foreground flex items-center gap-1.5">
                <RotateCw className="w-3.5 h-3.5 text-cyan-500" />
                Switching Frequency (f_sw)
              </span>
              <span className="font-mono text-cyan-500 text-sm">{frequencyKHz} kHz</span>
            </div>
            <Slider
              value={[frequencyKHz]}
              min={10}
              max={100}
              step={5}
              onValueChange={(val) => setFrequencyKHz(val[0])}
            />
            <div className="flex justify-between text-[10px] text-muted-foreground font-mono mt-1">
              <span>10 kHz (IGBT)</span>
              <span>100 kHz (SiC / GaN)</span>
            </div>
          </div>

          {/* Telemetry Metric Badges */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="p-3 rounded-xl bg-secondary/50 dark:bg-card/50 border border-border/60">
              <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                Calculated V_out
              </span>
              <span className="text-lg font-black font-grotesk text-foreground block">
                {Vout.toFixed(1)} V
              </span>
              <span className="text-[10px] text-muted-foreground">Input: 400V DC</span>
            </div>

            <div className="p-3 rounded-xl bg-secondary/50 dark:bg-card/50 border border-border/60">
              <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                Inductor Ripple ΔI_L
              </span>
              <span className="text-lg font-black font-grotesk text-amber-500 block">
                {deltaIL.toFixed(1)} A
              </span>
              <span className="text-[10px] text-muted-foreground">L = 220 μH</span>
            </div>
          </div>

          {/* Launch Full Lab Action */}
          <a
            href="https://livesimulators.com/lab/power-electronics-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="block pt-1"
          >
            <Button className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-xs shadow-md shadow-blue-500/20 group">
              <span>Launch Full Power Electronics Laboratory</span>
              <ExternalLink className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
