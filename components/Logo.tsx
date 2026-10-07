export default function Logo({ light = false }: { light?: boolean }) {
  const ink = light ? "#F5F1E8" : "#0E1F17";
  return (
    <span className="logo" aria-label="B&M Expertise – Audit">
      <svg width="34" height="30" viewBox="0 0 34 30" fill="none" aria-hidden>
        <rect x="1" y="7" width="20" height="20" rx="3" stroke={ink} strokeOpacity=".25" strokeWidth="2" />
        <path d="M5 16.5l6 6L31 2" stroke="#D9343B" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="logo-text" style={{ color: ink }}>
        <span className="logo-main">B&amp;M</span>
        <span className="logo-sub">Expertise · Audit</span>
      </span>
    </span>
  );
}
