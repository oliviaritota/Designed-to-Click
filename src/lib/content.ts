export const services = [
  {
    slug: "new-websites",
    title: "New websites",
    summary:
      "A complete marketing site, from the sitemap through launch. For a practice, a small company, or a new offer that does not have a site yet.",
    includes: [
      "A sitemap and a page-by-page content outline",
      "Design developed in the browser, not only in a static file",
      "A Next.js build you own in your repository",
      "Page titles, descriptions, and a sitemap for search engines",
      "Launch help for the domain, and a walkthrough at handoff",
    ],
  },
  {
    slug: "redesigns",
    title: "Redesigns",
    summary:
      "A new version of a site that no longer explains the work. We keep what is still true, remove what gets in the way, and rebuild when the current setup is holding the site back.",
    includes: [
      "A review of the live site and what it needs to do now",
      "A revised structure, including which pages stay, merge, or go",
      "Design and development of the new pages",
      "Redirects for important existing URLs when we replace a live site",
      "A launch plan so the changeover is deliberate",
    ],
  },
  {
    slug: "landing-pages",
    title: "Landing pages",
    summary:
      "One page for one offer. The headline, the proof, and the next step are the whole design problem.",
    includes: [
      "A single page with one clear action",
      "Help tightening the words so the offer is specific",
      "A layout that still reads clearly on a phone",
      "Metadata so the page can be shared with a sensible title and description",
    ],
  },
  {
    slug: "site-care",
    title: "Site care",
    summary:
      "After launch, the site still needs a person. Care covers content updates, small improvements, and the work of keeping the build current.",
    includes: [
      "Text and image updates you send over",
      "Small layout and content improvements",
      "Dependency and framework updates on an agreed rhythm",
      "A place to send something when it breaks",
    ],
  },
] as const;

export const projects = [
  {
    slug: "practice-sites",
    index: "01",
    title: "Practice sites",
    audience: "Independent professionals",
    summary:
      "A multi-page site for a person whose work needs explaining: services, a short account of the practice, and a direct way to get in touch.",
    focus: [
      "A page order that matches how a new client decides",
      "Service descriptions that say what the work is, and what it is not",
      "A contact path that is present without shouting",
    ],
    panel: "bg-ink text-paper",
  },
  {
    slug: "booking-sites",
    index: "02",
    title: "Booking-led business sites",
    audience: "Studios, clinics, and shops",
    summary:
      "Fewer pages and a stronger hierarchy, for a business whose site should explain the offer and move someone toward a booking or an inquiry.",
    focus: [
      "The offer and the next step visible without a hunt",
      "Practical details — location, hours, what to expect — where people look for them",
      "A phone layout that is as considered as the desktop page",
    ],
    panel: "bg-signal text-paper",
  },
  {
    slug: "campaign-pages",
    index: "03",
    title: "Campaign pages",
    audience: "A single offer or event",
    summary:
      "One page, one offer, and a form or link that is impossible to miss. Built to be shared, and built so it still makes sense if someone lands mid-page.",
    focus: [
      "One action, repeated only where it helps",
      "Proof near the claim it supports",
      "A page that stays fast, because it has a single job",
    ],
    panel: "bg-pine text-paper",
  },
  {
    slug: "content-sites",
    index: "04",
    title: "Content sites",
    audience: "Writing, projects, and resources",
    summary:
      "A home for a body of work: an archive people can browse, with reading comfort and navigation treated as the design problem.",
    focus: [
      "A way to browse that does not depend on remembering the menu",
      "Type, measure, and spacing chosen for reading",
      "Room to add work later without a redesign",
    ],
    panel: "bg-sand text-ink",
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "Start",
    summary:
      "You send a note or we talk. We need the goal of the site, who it is for, what already exists, and any deadline that is real.",
    detail:
      "If the project is a fit, you receive a written scope: the pages, who is responsible for content, the timeline, and the price. Design does not start until that scope is agreed.",
  },
  {
    number: "02",
    title: "Shape",
    summary:
      "We map the site and the job of each page. You see a sitemap and a first design direction before the rest of the site is built.",
    detail:
      "Feedback is easier when there is something specific to react to. This is when we settle the page list, the tone, and the one action each page should support.",
  },
  {
    number: "03",
    title: "Build",
    summary:
      "We design and develop in the browser, in Next.js. You review real pages on a phone and a desktop, not only pictures of them.",
    detail:
      "Along the way we check headings, keyboard use, contrast, and how the layout behaves when the text is longer than the draft. Revision rounds are named in the scope so the review stays finite.",
  },
  {
    number: "04",
    title: "Launch",
    summary:
      "We connect the domain, set page titles and the sitemap, and walk through how the site is updated.",
    detail:
      "You receive the repository and a short handoff. The site should not be trapped in an account you cannot access. Important old URLs get redirects when we are replacing a live site.",
  },
  {
    number: "05",
    title: "After",
    summary:
      "Launch is not the last time the site should change. Care can be a few hours when you need them, or a monthly rhythm.",
    detail:
      "We agree on that before it starts. A care arrangement has a scope of its own, so small updates do not turn into an open-ended rebuild.",
  },
] as const;

export const faqs = [
  {
    question: "What kinds of projects do you take?",
    answer: [
      "Marketing sites, redesigns, landing pages, and care for sites that are already live. The work is usually for an independent practice, a local or specialist business, or a small team.",
      "A large product platform, a native app, or a brand campaign with no website is a poor fit. We will say so.",
    ],
  },
  {
    question: "Do I need finished copy before we start?",
    answer: [
      "You need to know what the site is for. Finished prose can wait. We help structure each page and edit toward something specific.",
      "If you already have strong copy, we use it. We do not rewrite work that is already doing its job.",
    ],
  },
  {
    question: "How long does a website take?",
    answer: [
      "A focused marketing site is often a few weeks once the scope is agreed and the content is moving. A larger page list, or a project waiting on decisions, takes longer.",
      "The proposal names a range based on the pages, the content, and the review rhythm. It does not promise a universal timeline.",
    ],
  },
  {
    question: "How do projects start?",
    answer: [
      "Send a note through the contact page with the goal, any real deadline, and a link to the current site if you have one. A short message is enough.",
      "We reply to say whether we can take it on, and what the next conversation needs to cover.",
    ],
  },
  {
    question: "Can you work with a site I already have?",
    answer: [
      "Yes. Sometimes the right move is a redesign on a new build. Sometimes it is a repair: clearer structure, a faster page, or a contact path people can find.",
      "We recommend one of those after seeing the site, and we explain why.",
    ],
  },
  {
    question: "What is included in the build?",
    answer: [
      "Design, development, a layout that works on a phone, accessible structure, page metadata, and launch help. Writing support means structuring and editing the pages in scope.",
      "Photography, custom illustration, and paid advertising are separate. If a project needs them, they are named in the scope or left with you.",
    ],
  },
  {
    question: "Will I be able to update the site?",
    answer: [
      "The site is a Next.js project in your repository. Changing the text means changing the code, unless we later add a content tool.",
      "For many small sites, a simple care arrangement is easier than a heavy editor. We will say which one fits before launch, not after you are stuck.",
    ],
  },
  {
    question: "Where do you work?",
    answer: [
      "Remotely. Meetings are calls. Reviews happen in the browser, on a shared link, so both sides are looking at the same pages.",
    ],
  },
] as const;
