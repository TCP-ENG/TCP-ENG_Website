// Self-contained SVG of a microcontroller on a PCB with glowing traces.
// Used as the hero artwork so the site needs no external image to look complete.
export default function HeroVisual({ className = "" }) {
  const pins = Array.from({ length: 9 });
  return (
    <svg
      viewBox="0 0 520 420"
      className={className}
      role="img"
      aria-label="Microcontroller on a printed circuit board"
    >
      <defs>
        <linearGradient id="board" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0c1b33" />
          <stop offset="1" stopColor="#050b16" />
        </linearGradient>
        <linearGradient id="chip" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#16335c" />
          <stop offset="1" stopColor="#0a1628" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="45%" r="60%">
          <stop offset="0" stopColor="#1f6fe5" stopOpacity="0.45" />
          <stop offset="1" stopColor="#1f6fe5" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="520" height="420" rx="16" fill="url(#board)" />
      <rect x="0" y="0" width="520" height="420" rx="16" fill="url(#glow)" />

      {/* Traces */}
      <g stroke="#1f6fe5" strokeOpacity="0.5" strokeWidth="2" fill="none">
        <path d="M20 60 H140 V120" />
        <path d="M20 360 H120 V300 H180" />
        <path d="M500 80 H380 V150" />
        <path d="M500 340 H400 V270" />
        <path d="M260 20 V90" />
        <path d="M260 400 V330" />
        <path d="M60 200 H150" />
        <path d="M470 210 H370" />
      </g>
      <g fill="#3b8aff">
        <circle cx="20" cy="60" r="4" />
        <circle cx="20" cy="360" r="4" />
        <circle cx="500" cy="80" r="4" />
        <circle cx="500" cy="340" r="4" />
        <circle cx="260" cy="20" r="4" />
        <circle cx="260" cy="400" r="4" />
        <circle cx="60" cy="200" r="4" />
        <circle cx="470" cy="210" r="4" />
      </g>

      {/* Animated signal pulses */}
      <g fill="#7cc0ff">
        <circle r="3.5" cx="0" cy="0">
          <animateMotion dur="2.6s" repeatCount="indefinite" path="M20 60 H140 V120" />
        </circle>
        <circle r="3.5" cx="0" cy="0">
          <animateMotion dur="3.2s" repeatCount="indefinite" path="M500 80 H380 V150" />
        </circle>
        <circle r="3.5" cx="0" cy="0">
          <animateMotion dur="3s" repeatCount="indefinite" path="M20 360 H120 V300 H180" />
        </circle>
      </g>

      {/* Chip body */}
      <g>
        <rect x="170" y="130" width="180" height="160" rx="10" fill="url(#chip)" stroke="#2b4a78" strokeWidth="2" />
        {/* pins */}
        {pins.map((_, i) => {
          const x = 178 + i * 19;
          return (
            <g key={i} fill="#cfe0f5">
              <rect x={x} y="116" width="9" height="16" rx="2" />
              <rect x={x} y="288" width="9" height="16" rx="2" />
            </g>
          );
        })}
        {pins.map((_, i) => {
          const y = 138 + i * 17;
          return (
            <g key={`v${i}`} fill="#cfe0f5">
              <rect x="154" y={y} width="16" height="9" rx="2" />
              <rect x="350" y={y} width="16" height="9" rx="2" />
            </g>
          );
        })}
        {/* die / marking */}
        <rect x="200" y="160" width="120" height="100" rx="6" fill="#0a1628" stroke="#1f6fe5" strokeOpacity="0.4" />
        <circle cx="214" cy="174" r="4" fill="#1f6fe5" />
        <text x="260" y="216" textAnchor="middle" fontFamily="monospace" fontSize="16" fill="#3b8aff" letterSpacing="2">
          TCP
        </text>
        <text x="260" y="236" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#5b7aa6" letterSpacing="3">
          MCU-01
        </text>
      </g>
    </svg>
  );
}
