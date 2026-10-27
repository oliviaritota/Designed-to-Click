export type Review = {
  id: string;
  clientName: string;
  clientRole: string;
  businessName: string;
  rating: number;
  reviewText: string;
  projectType?: string;
  projectSlug?: string;
  published: boolean;
  featured: boolean;
};

/**
 * Sample notes for layout only. Keep `published: false` so they never
 * count as real reviews or feed the public rating summary.
 */
export const reviews: Review[] = [
  {
    id: "sample-maya-chen",
    clientName: "Maya Chen",
    clientRole: "Principal",
    businessName: "Northline Practice",
    rating: 5,
    reviewText:
      "The site finally says what we do on the first screen. People book without calling to ask the same three questions.",
    projectType: "Custom website",
    published: false,
    featured: true,
  },
  {
    id: "sample-jordan-hale",
    clientName: "Jordan Hale",
    clientRole: "Owner",
    businessName: "Hale & Co.",
    rating: 5,
    reviewText:
      "We already had a website. Nobody could use it. The new one is quieter, faster, and the next step is obvious.",
    projectType: "Website redesign",
    published: false,
    featured: true,
  },
  {
    id: "sample-priya-shah",
    clientName: "Priya Shah",
    clientRole: "Founder",
    businessName: "Shore Goods",
    rating: 5,
    reviewText:
      "It looks like us, and it works on a phone. That was the whole brief, and they treated it like one.",
    projectType: "E-commerce",
    published: false,
    featured: true,
  },
  {
    id: "sample-elena-voss",
    clientName: "Elena Voss",
    clientRole: "Director",
    businessName: "Field & Form",
    rating: 5,
    reviewText:
      "The process was calm and specific. We always knew what was being made, and what they needed from us next.",
    projectType: "Custom website",
    published: false,
    featured: false,
  },
  {
    id: "sample-marcus-reid",
    clientName: "Marcus Reid",
    clientRole: "Partner",
    businessName: "Reid Studio",
    rating: 4,
    reviewText:
      "Clear pages, no extra chrome. The contact path is where people expect it, and the site is easy to update.",
    projectType: "Website redesign",
    published: false,
    featured: false,
  },
  {
    id: "sample-nina-okoye",
    clientName: "Nina Okoye",
    clientRole: "Founder",
    businessName: "Okoye Atelier",
    rating: 5,
    reviewText:
      "It reads as a real practice, not a template. The first visit is enough to decide whether to write.",
    projectType: "Custom website",
    published: false,
    featured: false,
  },
];

export function isValidRating(rating: number) {
  return Number.isFinite(rating) && rating >= 1 && rating <= 5;
}

export function getPublishedReviews(items: Review[] = reviews) {
  return items.filter((review) => review.published && isValidRating(review.rating));
}

export function getReviewStats(items: Review[] = getPublishedReviews()) {
  if (items.length === 0) return null;

  const total = items.reduce((sum, review) => sum + review.rating, 0);
  const average = Math.round((total / items.length) * 10) / 10;

  return {
    average,
    count: items.length,
  };
}

export function getHomepageReviews(items: Review[] = reviews) {
  const published = getPublishedReviews(items);
  const source = published.length > 0 ? published : items.filter((review) => !review.published);

  return [
    ...source.filter((review) => review.featured),
    ...source.filter((review) => !review.featured),
  ];
}

export function formatReviewCount(count: number) {
  return `${count} published ${count === 1 ? "review" : "reviews"}`;
}
