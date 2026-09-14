interface IconProps {
  className?: string;
}

export function NewspaperIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <rect x="3" y="5" width="14" height="14" rx="1.5" />
      <path d="M17 8h4v9.5a2 2 0 0 1-2 2H7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.5 8.5h6M6.5 11.5h6M6.5 14.5h4" strokeLinecap="round" />
    </svg>
  );
}
