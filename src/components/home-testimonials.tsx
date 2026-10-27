"use client";

import { useState } from "react";
import { Container } from "@/components/container";
import { PanelCorners, ReviewCard, ReviewStars } from "@/components/review-card";
import {
  formatReviewCount,
  getHomepageReviews,
  getReviewStats,
} from "@/lib/reviews";

const PAGE_SIZE = 3;

export function HomeTestimonials() {
  const reviews = getHomepageReviews();
  const stats = getReviewStats();
  const preview = stats === null;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleReviews = reviews.slice(0, visibleCount);
  const remaining = reviews.length - visibleCount;

  return (
    <section
      className="relative bg-ink text-paper"
      aria-label="Client reviews"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
      >
        <div className="hero-grid absolute inset-0" />
      </div>

      <Container className="relative pt-12 pb-24 lg:pt-16 lg:pb-32">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="max-w-3xl lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal">
              05 / Client reviews
            </p>
            <h2 className="mt-6 font-serif text-[clamp(2.4rem,5.4vw,4.25rem)] leading-[0.98] tracking-[-0.04em]">
              Good work.
              <span className="mt-1 block text-signal">Great feedback.</span>
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-paper/68 sm:text-lg">
              {preview
                ? "Client feedback coming soon. The cards below are a layout preview only, not published reviews."
                : "The best part of bringing a website to life is hearing what the people behind the business think. Here’s what our clients have to say about working with Designed to Click."}
            </p>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            {stats ? (
              <RatingSummary average={stats.average} count={stats.count} />
            ) : (
              <RatingEmptyState />
            )}
          </div>
        </div>

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {visibleReviews.map((review, index) => (
            <li
              key={review.id}
              className={index >= PAGE_SIZE ? "review-fade" : undefined}
            >
              <ReviewCard review={review} preview={preview} />
            </li>
          ))}
        </ul>

        {remaining > 0 ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
              className="inline-flex w-full items-center justify-center border border-signal px-6 py-3 text-sm font-medium text-signal transition-colors hover:bg-signal hover:text-ink focus-visible:outline-offset-4 sm:w-auto"
            >
              View more reviews
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}

function RatingSummary({
  average,
  count,
}: {
  average: number;
  count: number;
}) {
  return (
    <div className="review-rating relative border border-signal/40 bg-[#0a1414] px-6 py-7">
      <PanelCorners />
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
        Client satisfaction
      </p>
      <p className="mt-4 font-serif text-6xl leading-none tracking-[-0.04em]">
        {average.toFixed(1)}
      </p>
      <div className="mt-4">
        <ReviewStars rating={average} size="lg" animate />
      </div>
      <p className="mt-4 font-mono text-[11px] tracking-[0.08em] text-paper/45">
        {formatReviewCount(count)}
      </p>
    </div>
  );
}

function RatingEmptyState() {
  return (
    <div className="relative border border-signal/25 bg-[#0a1414] px-6 py-7">
      <PanelCorners />
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
        Client satisfaction
      </p>
      <p className="mt-4 font-serif text-4xl leading-none tracking-[-0.04em] text-paper/35">
        —
      </p>
      <div className="mt-4">
        <ReviewStars rating={0} size="lg" />
      </div>
      <p className="mt-4 font-mono text-[11px] tracking-[0.08em] text-paper/45">
        Awaiting first published review
      </p>
    </div>
  );
}
