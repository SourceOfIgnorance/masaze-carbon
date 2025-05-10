export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  datePublished: string;
}

export function getReviewsJsonLd(reviews: Review[], businessName = "Masáže Carbon") {
  if (!reviews.length) {
    return null;
  }

  const averageRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1);

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessName,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": averageRating,
      "reviewCount": reviews.length,
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.map((r) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": r.author,
      },
      "datePublished": r.datePublished,
      "reviewBody": r.comment,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": r.rating.toString(),
        "bestRating": "5",
        "worstRating": "1",
      }
    }))
  };
}
