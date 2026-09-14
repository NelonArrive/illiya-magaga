interface IconProps {
  className?: string;
}

export function FilterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
      <path d="M4 5h16M7 12h10M10 19h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
