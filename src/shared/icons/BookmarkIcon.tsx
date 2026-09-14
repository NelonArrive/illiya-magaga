interface IconProps {
  className?: string;
}

export function BookmarkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
      <path d="M6 3h12v18l-6-4-6 4V3Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
