/**
 * The soft wave that separates the hero artwork from the dark page body.
 * Drawn as a stretched SVG so the silhouette keeps its shape at any width;
 * the fill is the page background, so the artwork appears to be cut by it.
 */
export default function HeroCurve() {
  return (
    <svg
      viewBox="0 0 1854 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[120px] w-full"
    >
      <path
        d="M0,35 C160,20 320,0 480,0 C900,0 1250,38 1580,52 C1700,57 1790,44 1854,26 L1854,120 L0,120 Z"
        fill="var(--color-edenic-bg)"
      />
    </svg>
  );
}
