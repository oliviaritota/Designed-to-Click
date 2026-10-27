import type { Review } from "@/lib/reviews";

export function ReviewStars({
  rating,
  size = "sm",
  animate = false,
}: {
  rating: number;
  size?: "sm" | "lg";
  animate?: boolean;
}) {
  const starSize = size === "lg" ? "size-5" : "size-3.5";

  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => {
        const fill = Math.min(1, Math.max(0, rating - index));
        return (
          <span
            key={index}
            className={`relative inline-block text-signal ${starSize} ${
              animate ? "review-star" : ""
            }`}
            style={animate ? { animationDelay: `${index * 70}ms` } : undefined}
          >
            <StarIcon className={`${starSize} text-signal/25`} />
            {fill > 0 ? (
              <span
                className="absolute inset-0 overflow-hidden text-signal"
                style={{ width: `${fill * 100}%` }}
              >
                <StarIcon className={starSize} filled />
              </span>
            ) : null}
          </span>
        );
      })}
    </div>
  );
}

export function ReviewCard({
  review,
  preview = false,
}: {
  review: Review;
  preview?: boolean;
}) {
  return (
    <article className="review-card group relative flex h-full flex-col border border-signal/25 bg-[#0a1414] p-6 motion-safe:transition-[border-color,box-shadow,transform] motion-safe:duration-300 motion-safe:hover:-translate-y-1 hover:border-signal hover:shadow-[0_0_28px_rgb(56_204_208_/_0.12)]">
      <PanelCorners />
      <div className="flex items-start justify-between gap-4">
        <ReviewStars rating={review.rating} />
        <span
          aria-hidden="true"
          className="font-serif text-3xl leading-none text-signal/25"
        >
          ”
        </span>
      </div>
      {review.projectType ? (
        <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-signal">
          {review.projectType}
        </p>
      ) : null}
      <blockquote className="mt-3 text-[15px] leading-relaxed text-paper/85">
        {review.reviewText}
      </blockquote>
      <footer className="mt-6 border-t border-white/10 pt-4">
        {preview ? (
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/35">
            Sample layout
          </p>
        ) : null}
        <p className="mt-1 text-sm font-medium">{review.clientName}</p>
        <p className="mt-1 text-xs text-paper/50">
          {[review.clientRole, review.businessName].filter(Boolean).join(", ")}
        </p>
      </footer>
    </article>
  );
}

export function PanelCorners() {
  return (
    <>
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 h-3 w-3 border-t border-l border-signal/70"
      />
      <span
        aria-hidden="true"
        className="absolute top-0 right-0 h-3 w-3 border-t border-r border-signal/70"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-signal/70"
      />
      <span
        aria-hidden="true"
        className="absolute right-0 bottom-0 h-3 w-3 border-r border-b border-signal/70"
      />
    </>
  );
}

function StarIcon({
  className,
  filled = false,
}: {
  className?: string;
  filled?: boolean;
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="m12 3.2 2.4 5.1 5.6.7-4.1 3.8 1.1 5.5L12 15.6 7 18.3l1.1-5.5-4.1-3.8 5.6-.7Z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
