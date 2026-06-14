/**
 * HeroBoat — animated flat-bottom fishing boat silhouette for the hero section.
 * Purely decorative (aria-hidden). Uses inline <style> so no globals change needed.
 */
export default function HeroBoat({ className }: { className?: string }) {
  return (
    <>
      <style>{`
        @keyframes jb-boat-bob {
          0%, 100% { transform: translateY(0px)   rotate(-0.4deg); }
          50%       { transform: translateY(-14px) rotate(0.6deg);  }
        }
        @keyframes jb-water-pulse {
          0%, 100% { opacity: 0.7; }
          50%       { opacity: 1;   }
        }
        .jb-boat  {
          animation: jb-boat-bob    4s ease-in-out infinite;
          transform-origin: 185px 170px;
        }
        .jb-water {
          animation: jb-water-pulse 4s ease-in-out infinite;
        }
      `}</style>

      <svg
        viewBox="0 0 400 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        className={className}
      >
        {/* ── Water body ──────────────────────────────────────── */}
        <path
          d="M0,182 Q100,172 200,182 Q300,192 400,182 L400,250 L0,250 Z"
          fill="rgba(0,183,241,0.10)"
        />

        {/* Water surface ripple lines */}
        <g className="jb-water">
          <path
            d="M0,182 Q100,172 200,182 Q300,192 400,182"
            stroke="rgba(0,183,241,0.45)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M20,194 Q110,186 200,194 Q290,202 370,194"
            stroke="rgba(255,255,255,0.10)"
            strokeWidth="1"
            fill="none"
          />
        </g>

        {/* ── Boat (bobbing) ───────────────────────────────────── */}
        <g className="jb-boat">

          {/* Hull exterior — flat-bottom aluminum fishing boat */}
          <path
            d="M 42,128
               L 42,180
               L 308,180
               Q 332,176 340,160
               Q 338,98  326,92
               Q 300,84  272,88
               L 62,112
               Z"
            fill="rgba(0,183,241,0.35)"
          />

          {/* Hull interior / deck */}
          <path
            d="M 58,124
               L 58,172
               L 304,172
               Q 324,168 330,152
               Q 326,104 316,100
               Q 292,95  266,98
               L 76,110
               Z"
            fill="rgba(0,25,75,0.60)"
          />

          {/* Center console */}
          <path
            d="M 178,110
               L 178,172
               L 234,172
               L 234,117
               L 224,107
               L 188,107
               Z"
            fill="rgba(0,85,145,0.75)"
          />

          {/* Windshield */}
          <path
            d="M 181,107 L 186,88 L 225,88 L 234,107"
            fill="rgba(0,183,241,0.16)"
            stroke="rgba(0,183,241,0.55)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Steering wheel */}
          <circle
            cx="206" cy="113" r="9"
            stroke="rgba(255,255,255,0.32)"
            strokeWidth="2"
            fill="none"
          />
          <line x1="206" y1="104" x2="206" y2="122" stroke="rgba(255,255,255,0.32)" strokeWidth="1.2" />
          <line x1="197" y1="113" x2="215" y2="113" stroke="rgba(255,255,255,0.32)" strokeWidth="1.2" />

          {/* Outboard motor body */}
          <path
            d="M 42,124 L 26,118 L 20,136 L 20,178 L 42,178"
            fill="rgba(0,55,105,0.80)"
          />
          {/* Prop */}
          <ellipse
            cx="22" cy="175" rx="7" ry="4"
            fill="rgba(0,183,241,0.55)"
            transform="rotate(-15 22 175)"
          />

          {/* Fishing rod — front (bow side) */}
          <line
            x1="296" y1="96"  x2="335" y2="36"
            stroke="rgba(255,255,255,0.48)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Fishing line — front */}
          <path
            d="M 335,36 Q 354,68 344,92"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="0.75"
            fill="none"
          />

          {/* Fishing rod — rear (stern side) */}
          <line
            x1="82" y1="113" x2="48" y2="48"
            stroke="rgba(255,255,255,0.48)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Fishing line — rear */}
          <path
            d="M 48,48 Q 28,78 36,102"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="0.75"
            fill="none"
          />

          {/* Bow running light (green) */}
          <circle cx="330" cy="94" r="2.5" fill="rgba(0,255,120,0.85)" />

          {/* Stern light (red) */}
          <circle cx="42" cy="130" r="2.5" fill="rgba(255,75,75,0.85)" />

          {/* Waterline stripe */}
          <line
            x1="42" y1="180" x2="308" y2="180"
            stroke="rgba(0,183,241,0.55)"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </>
  );
}
