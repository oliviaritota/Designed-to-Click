export function Mark({ className = "size-8" }: { className?: string }) {
  return (
    <span
      className={`grid place-items-center rounded-[7px] bg-ink text-paper ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="size-[58%]" fill="currentColor">
        <path d="M6.2 3.2 18.4 11.2l-5.3.5 2.9 5.5-2.3 1.2-3-5.6-3.2 3.4V3.2z" />
      </svg>
    </span>
  );
}
