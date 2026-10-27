import { faqs } from "@/lib/content";

export function FaqList({
  items = faqs,
}: {
  items?: readonly (typeof faqs)[number][];
}) {
  return (
    <div className="border-b border-line">
      {items.map((item) => (
        <details key={item.question} className="group border-t border-line">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-serif text-2xl leading-snug tracking-[-0.02em] text-ink sm:text-[1.7rem]">
            <span>{item.question}</span>
            <span className="faq-icon shrink-0 font-sans text-2xl text-signal-deep" aria-hidden="true" />
          </summary>
          <div className="max-w-2xl space-y-4 pb-7 text-base leading-relaxed text-muted">
            {item.answer.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}
