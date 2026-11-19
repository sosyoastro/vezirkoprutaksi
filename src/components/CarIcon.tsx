export default function CarIcon({ stroke = "#121214" }: { stroke?: string }) {
  return (
    <svg viewBox="0 0 100 45" width="40" height="20" style={{ display: "inline-block", verticalAlign: "middle" }} aria-hidden="true">
      <path
        d="M5 30 Q 15 28 20 20 Q 30 10 50 10 Q 70 10 80 20 Q 85 28 95 30 Q 98 32 95 34 Q 90 34 85 34 C 82 28, 72 28, 69 34 H 31 C 28 28, 18 28, 15 34 H 8 Q 4 34 5 30 Z"
        fill="none"
        stroke={stroke}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="23" cy="34" r="5.5" fill="#ffffff" stroke="#121214" strokeWidth="3" />
      <circle cx="75" cy="34" r="5.5" fill="#ffffff" stroke="#121214" strokeWidth="3" />
    </svg>
  );
}

export function BrandTag({ text, mb = "0.75rem" }: { text: string; mb?: string }) {
  return (
    <div className="why-brand-title" style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: mb }}>
      <CarIcon stroke="#f5b700" />
      <span
        className="why-tag"
        style={{ color: "var(--primary)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: 2, fontWeight: 600 }}
      >
        {text}
      </span>
    </div>
  );
}
