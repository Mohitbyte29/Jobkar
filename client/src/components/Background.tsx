import React, { useEffect, useRef } from "react";

type Props = {
  /** 0–1, overall animation speed multiplier. Default 1. */
  speed?: number;
  /** 0–1, how strong the mouse parallax feels. Default 1. */
  parallax?: number;
};

const LINE_COUNT = 9;

function buildGrowthLine(index: number, seed: number) {
  // Diagonal ascending path, gentle sine wobble, unique per index.
  const startY = 980 + index * 40;
  const slope = 1.35 + (index % 3) * 0.15;
  const amp = 18 + (index % 4) * 8;
  const phase = index * 0.9 + seed;
  const pts: string[] = [];
  const nodes: { x: number; y: number }[] = [];
  for (let x = -200; x <= 1800; x += 40) {
    const y = startY - x * slope * 0.001 * 100 + Math.sin(x / 180 + phase) * amp;
    pts.push(`${pts.length === 0 ? "M" : "L"} ${x} ${y.toFixed(1)}`);
    if (x % 400 === 0) nodes.push({ x, y });
  }
  return { d: pts.join(" "), nodes };
}

export default function Background({
  speed = 1,
  parallax = 1,
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2 * parallax;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2 * parallax;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.04;
      currentY += (targetY - currentY) * 0.04;
      root.style.setProperty("--mx", currentX.toFixed(4));
      root.style.setProperty("--my", currentY.toFixed(4));
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMouseMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, [parallax]);

  const lines = Array.from({ length: LINE_COUNT }, (_, i) =>
    buildGrowthLine(i, 3.1)
  );

  const durA = (34 / speed).toFixed(1);
  const durB = (46 / speed).toFixed(1);
  const durRise = (18 / speed).toFixed(1);
  const durPulse = (3.2 / speed).toFixed(2);

  return (
    <div ref={rootRef} className="jkb-root" aria-hidden="true">
      <style>{`
        .jkb-root {
          --mx: 0;
          --my: 0;
          position: absolute;
          inset: 0;
          overflow: hidden;
          background: #050b08;
          isolation: isolate;
        }

        .jkb-base {
          position: absolute;
          inset: -10%;
          background:
            radial-gradient(70% 55% at 18% 12%, #0e3626 0%, transparent 60%),
            radial-gradient(60% 50% at 85% 82%, #123a2a 0%, transparent 65%),
            linear-gradient(160deg, #04100a 0%, #071e14 45%, #05130d 100%);
          animation: jkb-base-shift ${durB}s ease-in-out infinite;
          transform: translate3d(calc(var(--mx) * -10px), calc(var(--my) * -10px), 0);
        }

        @keyframes jkb-base-shift {
          0%, 100% { filter: hue-rotate(0deg) brightness(1); }
          50% { filter: hue-rotate(6deg) brightness(1.07); }
        }

        .jkb-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          will-change: transform;
        }

        .jkb-glow-a {
          width: 55vw;
          height: 55vw;
          top: -16vw;
          left: -10vw;
          background: radial-gradient(circle, #1f7a5c 0%, rgba(31, 122, 92, 0) 70%);
          opacity: 0.5;
          transform: translate3d(calc(var(--mx) * -16px), calc(var(--my) * -16px), 0);
          animation: jkb-drift-a ${durA}s ease-in-out infinite;
        }

        .jkb-glow-b {
          width: 42vw;
          height: 42vw;
          bottom: -12vw;
          right: -8vw;
          background: radial-gradient(circle, #34d399 0%, rgba(52, 211, 153, 0) 72%);
          opacity: 0.22;
          transform: translate3d(calc(var(--mx) * 12px), calc(var(--my) * 12px), 0);
          animation: jkb-drift-b ${durB}s ease-in-out infinite;
        }

        @keyframes jkb-drift-a {
          0%, 100% { transform: translate3d(calc(var(--mx) * -16px), calc(var(--my) * -16px), 0) scale(1); }
          50% { transform: translate3d(calc(var(--mx) * -16px + 26px), calc(var(--my) * -16px + 18px), 0) scale(1.08); }
        }

        @keyframes jkb-drift-b {
          0%, 100% { transform: translate3d(calc(var(--mx) * 12px), calc(var(--my) * 12px), 0) scale(1); }
          50% { transform: translate3d(calc(var(--mx) * 12px - 22px), calc(var(--my) * 12px - 16px), 0) scale(1.1); }
        }

        .jkb-lines {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0.55;
        }

        .jkb-line-group {
          animation: jkb-rise ${durRise}s linear infinite;
        }

        @keyframes jkb-rise {
          0% { transform: translateY(0); }
          100% { transform: translateY(-120px); }
        }

        .jkb-lines path {
          fill: none;
          stroke: url(#jkb-line-gradient);
          stroke-width: 1.4;
          vector-effect: non-scaling-stroke;
          opacity: 0.5;
        }

        .jkb-lines path.jkb-accent {
          stroke: #6ee7b7;
          opacity: 0.7;
          stroke-width: 1.6;
        }

        .jkb-node {
          fill: #6ee7b7;
          animation: jkb-pulse ${durPulse}s ease-in-out infinite;
        }

        @keyframes jkb-pulse {
          0%, 100% { opacity: 0.25; r: 2.2; }
          50% { opacity: 0.9; r: 3.4; }
        }

        .jkb-grid {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle, rgba(110, 231, 183, 0.06) 1px, transparent 1px);
          background-size: 30px 30px;
          opacity: 0.4;
          mask-image: radial-gradient(120% 100% at 50% 100%, #000 25%, transparent 80%);
        }

        .jkb-grain {
          position: absolute;
          inset: -20%;
          opacity: 0.045;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'>\
<filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter>\
<rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
        }

        .jkb-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(120% 100% at 50% 60%, transparent 50%, rgba(0, 6, 4, 0.65) 100%);
        }

        @media (prefers-reduced-motion: reduce) {
          .jkb-base, .jkb-glow-a, .jkb-glow-b, .jkb-line-group, .jkb-node {
            animation: none !important;
          }
        }
      `}</style>

      <div className="jkb-base" />
      <div className="jkb-glow jkb-glow-a" />
      <div className="jkb-glow jkb-glow-b" />

      <svg
        className="jkb-lines"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="jkb-line-gradient" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#0f3d2e" />
            <stop offset="55%" stopColor="#1f7a5c" />
            <stop offset="100%" stopColor="#6ee7b7" />
          </linearGradient>
        </defs>
        <g className="jkb-line-group">
          {lines.map((line, i) => (
            <g key={i}>
              <path d={line.d} className={i % 4 === 0 ? "jkb-accent" : undefined} />
              {line.nodes.map((n, j) => (
                <circle
                  key={j}
                  cx={n.x}
                  cy={n.y}
                  r={2.4}
                  className="jkb-node"
                  style={{ animationDelay: `${(i * 0.4 + j * 0.6) % 3}s` }}
                />
              ))}
            </g>
          ))}
        </g>
      </svg>

      <div className="jkb-grid" />
      <div className="jkb-grain" />
      <div className="jkb-vignette" />
    </div>
  );
}