/**
 * Animated sea-wave SVG — purely decorative.
 * Uses two seamless wave cycles + SVG animateTransform for a
 * smooth, CSS-free infinite scroll. Color inherited via currentColor.
 */
export default function WaveDecoration({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 48 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={10}
      className={`inline-block overflow-hidden shrink-0 ${className ?? ""}`}
    >
      <g>
        {/* Translate left by exactly one cycle (48 units) so the loop is seamless */}
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          from="0 0"
          to="-48 0"
          dur="3s"
          repeatCount="indefinite"
        />
        {/*
         * Two identical sine-wave cycles:
         *   cycle 1: x 0 → 48
         *   cycle 2: x 48 → 96  (continues past viewBox — visible as cycle 1 exits)
         */}
        <path
          d="M 0,5 C 6,1 18,1 24,5 C 30,9 42,9 48,5 C 54,1 66,1 72,5 C 78,9 90,9 96,5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
