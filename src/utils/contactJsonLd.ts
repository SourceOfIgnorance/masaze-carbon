export const businessName = "Masáže Carbon";
export const streetAddress = "Tovarnícka 412/9";
export const addressLocality = "Topoľčany";
export const postalCode = "955 01";
export const addressCountry = "SK";
export const phone = "+421919236109";
export const email = "masaze.carbon@gmail.com";
export const facebookUrl = "https://www.facebook.com/share/1C9hradLsV/";
export const instagramUrl = "https://www.instagram.com/masaze_carbon?igsh=YnpqZmo1MnNoNDZo";
export const openFrom = "08:00"
export const openUntil = "20:00"

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "DaySpa",
  "name": businessName,
  "url": "http://www.masaze-carbon.sk",
  "telephone": phone,
  "email": email,
  "description": "Profesionálne masážne služby v Topoľčanoch. Klasické, športové a hĺbkové masáže.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": streetAddress,
    "addressLocality": addressLocality,
    "postalCode": postalCode,
    "addressCountry": addressCountry
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "48.5603713",
    "longitude": "18.1657966"
  },
  "hasMap": "https://maps.app.goo.gl/CPPm8TeMQPdMaR4u6",
  "sameAs": [
    facebookUrl,
    instagramUrl
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      "opens": openFrom,
      "closes": openUntil
    },
  ],
  "image": "https://masaze-carbon.sk/masaze-carbon-favicon.png"
};
