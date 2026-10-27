"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";

const stages = [
  {
    number: "01",
    title: "Discover",
    detail:
      "First, we get to know you, your business, and what you want your website to accomplish. We’ll discuss your ideas, goals, and everything needed to get started.",
    icon: ChatIcon,
    url: "workspace://sitemap",
    caption: "Planning the pages",
  },
  {
    number: "02",
    title: "Design",
    detail:
      "Here’s where your vision starts taking shape. We’ll create a thoughtful design that reflects your brand, connects with your audience, and brings your ideas to life.",
    icon: PenIcon,
    url: "workspace://design",
    caption: "Shaping the layout",
  },
  {
    number: "03",
    title: "Develop",
    detail:
      "Once the design is approved, we’ll turn it into a fully functional, responsive website, bringing every page, detail, and interaction together.",
    icon: CodeIcon,
    url: "workspace://build",
    caption: "Building in the browser",
  },
  {
    number: "04",
    title: "Launch",
    detail:
      "After testing and final approval, it’s time to go live! We’ll make sure everything is working properly and help you feel confident managing your new website.",
    icon: RocketIcon,
    url: "https://your-site.com",
    caption: "Site live",
  },
];

export function HomeProcessWorkspace() {
  const [active, setActive] = useState(0);
  const panelId = useId();
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const stage = stages[active];

  function select(index: number) {
    setActive(index);
  }

  function onStageKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    const last = stages.length - 1;
    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = Math.min(last, index + 1);
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = Math.max(0, index - 1);
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;
    else return;

    event.preventDefault();
    select(next);
    itemRefs.current[next]?.focus();
  }

  return (
    <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:items-start lg:gap-x-12">
      <ol
        className="max-w-xl lg:col-span-6 lg:max-w-none"
        aria-label="Process stages"
      >
        {stages.map((item, index) => {
          const Icon = item.icon;
          const last = index === stages.length - 1;
          const isActive = index === active;

          return (
            <li key={item.number} className="flex gap-5">
              <div className="flex w-10 shrink-0 flex-col items-center">
                <span
                  className={`grid size-10 place-items-center rounded-full border bg-ink ${
                    isActive
                      ? "border-signal bg-signal/15 text-signal"
                      : "border-signal text-signal"
                  }`}
                >
                  <Icon />
                </span>
                {last ? null : (
                  <span
                    aria-hidden="true"
                    className="w-px flex-1 bg-white/15"
                  />
                )}
              </div>
              <div className={last ? "min-w-0 pb-0" : "min-w-0 pb-10"}>
                <button
                  ref={(node) => {
                    itemRefs.current[index] = node;
                  }}
                  type="button"
                  id={`${panelId}-tab-${index}`}
                  aria-controls={panelId}
                  aria-pressed={isActive}
                  onClick={() => select(index)}
                  onKeyDown={(event) => onStageKeyDown(event, index)}
                  className="w-full rounded-sm text-left focus-visible:outline-offset-4"
                >
                  <p
                    className={`text-[11px] font-medium tracking-[0.08em] ${
                      isActive ? "text-signal" : "text-paper/40"
                    }`}
                  >
                    {item.number} / 04
                  </p>
                  <span
                    className={`mt-0.5 block text-[1.55rem] font-semibold tracking-[-0.03em] ${
                      isActive ? "text-signal" : "text-paper"
                    }`}
                  >
                    {item.title}
                  </span>
                  <p className="mt-2 text-[15px] leading-relaxed text-paper/55">
                    {item.detail}
                  </p>
                </button>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="lg:col-span-5 lg:col-start-8 lg:sticky lg:top-28 lg:self-start">
        <div
          id={panelId}
          role="region"
          aria-labelledby={`${panelId}-tab-${active}`}
          aria-live="polite"
          className="overflow-hidden rounded-xl border border-signal/30 bg-[#070c0c]"
        >
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-2.5">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="size-2 rounded-full bg-white/15" />
              <span className="size-2 rounded-full bg-white/15" />
              <span className="size-2 rounded-full bg-white/15" />
            </div>
            <p className="min-w-0 flex-1 truncate rounded bg-black/50 px-3 py-1 font-mono text-[10px] tracking-[0.04em] text-paper/45">
              {stage.url}
            </p>
          </div>
          <div className="flex items-baseline justify-between gap-4 border-b border-white/10 px-4 py-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal">
              {stage.number} / {stage.title}
            </p>
            <p className="font-mono text-[10px] tracking-[0.08em] text-paper/40">
              {stage.caption}
            </p>
          </div>
          <div className="relative min-h-[22rem] overflow-hidden lg:min-h-[26rem]">
            <div
              key={stage.number}
              className="process-fade absolute inset-0"
            >
              {active === 0 ? <DiscoverPreview /> : null}
              {active === 1 ? <DesignPreview /> : null}
              {active === 2 ? <DevelopPreview /> : null}
              {active === 3 ? <LaunchPreview /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DiscoverPreview() {
  return (
    <div className="flex h-full flex-col justify-between p-5 sm:p-6">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/35">
          Sitemap / draft
        </p>
        <div className="mt-8 flex flex-col items-center">
          <PageNode label="Home" featured />
          <span className="h-7 w-px bg-signal/35" aria-hidden="true" />
          <div className="relative flex w-full max-w-sm justify-between">
            <span
              className="absolute top-0 right-[16%] left-[16%] h-px bg-signal/35"
              aria-hidden="true"
            />
            <PageNode label="About" />
            <PageNode label="Services" />
            <PageNode label="Work" />
          </div>
          <span className="h-7 w-px bg-signal/35" aria-hidden="true" />
          <PageNode label="Contact" />
        </div>
      </div>
      <dl className="mt-8 grid grid-cols-3 gap-3 font-mono text-[10px] tracking-[0.08em] text-paper/40">
        <div>
          <dt className="text-signal/70">Audience</dt>
          <dd className="mt-1 text-paper/55">New clients</dd>
        </div>
        <div>
          <dt className="text-signal/70">Goal</dt>
          <dd className="mt-1 text-paper/55">Book a call</dd>
        </div>
        <div>
          <dt className="text-signal/70">Pages</dt>
          <dd className="mt-1 text-paper/55">Five to start</dd>
        </div>
      </dl>
    </div>
  );
}

function DesignPreview() {
  return (
    <div className="flex h-full flex-col p-5 sm:p-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <span className="font-serif text-sm tracking-[-0.03em]">Studio</span>
        <div className="flex gap-3" aria-hidden="true">
          <span className="h-1.5 w-8 rounded-full bg-white/15" />
          <span className="h-1.5 w-8 rounded-full bg-white/15" />
          <span className="h-1.5 w-8 rounded-full bg-signal/50" />
        </div>
      </div>
      <div className="mt-6">
        <p className="font-serif text-[1.65rem] leading-[0.95] tracking-[-0.03em] sm:text-[1.85rem]">
          Look good.
          <span className="mt-1 block text-signal">Make sense.</span>
        </p>
        <div className="mt-4 space-y-2" aria-hidden="true">
          <span className="block h-1.5 w-4/5 rounded-full bg-white/12" />
          <span className="block h-1.5 w-3/5 rounded-full bg-white/12" />
        </div>
      </div>
      <div className="mt-8 grid flex-1 grid-cols-2 gap-3">
        <div className="rounded-md border border-signal/25 bg-[#0a1414]" />
        <div className="space-y-2 pt-1" aria-hidden="true">
          <span className="block h-2 w-20 rounded-full bg-signal/40" />
          <span className="block h-1.5 w-full rounded-full bg-white/12" />
          <span className="block h-1.5 w-5/6 rounded-full bg-white/12" />
          <span className="block h-1.5 w-2/3 rounded-full bg-white/12" />
          <span className="mt-3 block h-7 w-24 rounded-sm bg-signal/80" />
        </div>
      </div>
    </div>
  );
}

function DevelopPreview() {
  return (
    <div className="grid h-full grid-cols-1 sm:grid-cols-2">
      <div className="border-b border-white/10 bg-black/40 p-4 font-mono text-[10px] leading-5 sm:border-r sm:border-b-0">
        <p className="text-paper/30">page.tsx</p>
        <pre className="mt-3 overflow-x-auto text-paper/70">
          <span className="text-signal">export function</span>
          {` Home() {\n  `}
          <span className="text-signal">return</span>
          {` (\n    <`}
          <span className="text-signal">main</span>
          {`>\n      <`}
          <span className="text-signal">h1</span>
          {`>Northline</`}
          <span className="text-signal">h1</span>
          {`>\n      <`}
          <span className="text-signal">p</span>
          {`>Clear on\n      a first read.</`}
          <span className="text-signal">p</span>
          {`>\n    </`}
          <span className="text-signal">main</span>
          {`>\n  )\n}`}
        </pre>
      </div>
      <div className="p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/35">
          Preview
        </p>
        <div className="mt-4 rounded-md border border-signal/25 bg-[#0a1414] p-4">
          <p className="font-serif text-2xl tracking-[-0.03em]">Northline</p>
          <p className="mt-2 text-xs leading-relaxed text-paper/55">
            Clear on a first read.
          </p>
          <span className="mt-4 inline-block bg-signal px-2.5 py-1 text-[10px] font-medium text-ink">
            Start a project
          </span>
        </div>
      </div>
    </div>
  );
}

function LaunchPreview() {
  return (
    <div className="flex h-full flex-col p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <p className="font-serif text-lg tracking-[-0.03em]">Northline</p>
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal">
          Site live
        </p>
      </div>
      <div className="mt-5 rounded-md border border-signal/30 bg-[#0a1414] p-4">
        <p className="font-serif text-[1.45rem] leading-[0.98] tracking-[-0.03em]">
          Practice, explained.
        </p>
        <p className="mt-3 max-w-xs text-xs leading-relaxed text-paper/55">
          A clear site for the work, and an obvious next step.
        </p>
        <span className="mt-4 inline-block bg-signal px-2.5 py-1 text-[10px] font-medium text-ink">
          Book a conversation
        </span>
      </div>
      <ul className="mt-6 space-y-2.5 font-mono text-[11px] text-paper/60">
        <li className="flex items-center gap-2">
          <span className="text-signal" aria-hidden="true">
            ✓
          </span>
          Domain connected
        </li>
        <li className="flex items-center gap-2">
          <span className="text-signal" aria-hidden="true">
            ✓
          </span>
          Pages live
        </li>
        <li className="flex items-center gap-2">
          <span className="text-signal" aria-hidden="true">
            ✓
          </span>
          Forms tested
        </li>
      </ul>
    </div>
  );
}

function PageNode({
  label,
  featured = false,
}: {
  label: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`min-w-[4.5rem] rounded-md border px-2.5 py-2 text-center ${
        featured
          ? "border-signal bg-signal/10"
          : "border-signal/30 bg-[#0a1414]"
      }`}
    >
      <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-paper/35">
        Page
      </p>
      <p className="mt-0.5 text-xs font-medium">{label}</p>
    </div>
  );
}

function ChatIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="size-[18px]"
    >
      <path
        d="M6 8.2A2.2 2.2 0 0 1 8.2 6h7.6A2.2 2.2 0 0 1 18 8.2v5.1A2.2 2.2 0 0 1 15.8 15.5H10l-3.4 2.3V15.5H8.2A2.2 2.2 0 0 1 6 13.3V8.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PenIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="size-[18px]"
    >
      <path
        d="M14.4 5.4c.6-.6 1.6-.6 2.2 0l2 2c.6.6.6 1.6 0 2.2l-8.6 8.6L6 19.4l1.2-4 8.6-8.6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="m13.8 6 4.2 4.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="size-[18px]"
    >
      <path
        d="m8.5 8-3.5 4 3.5 4M15.5 8l3.5 4-3.5 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="size-[18px]"
    >
      <path
        d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
