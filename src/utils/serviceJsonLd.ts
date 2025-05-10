import type {ServiceItem} from '../const/serviceData';

export const businessName = "Masáže Carbon";
export const streetAddress = "Tovarnícka 412/9";
export const addressLocality = "Topoľčany";
export const postalCode = "955 01";
export const addressCountry = "SK";
export const phone = "+421919236109";
export const email = "masaze.carbon@gmail.com";

export function getServiceJsonLd(services: ServiceItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Masáže Carbon - Cenník služieb",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": createServiceSchema(service)
    })),
    "provider": {
      "@type": "LocalBusiness",
      "name": `${businessName}`,
      "image": "https://masaze-carbon.sk/masaze-carbon-favicon.png",
      "priceRange": "€",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": `${streetAddress}`,
        "addressLocality": `${addressLocality}`,
        "postalCode": `${postalCode}`,
        "addressCountry": `${addressCountry}`
      },
      "telephone": `${phone}`,
      "email": `${email}`,
      "url": "https://masaze-carbon.sk"
    }
  };
}

function createServiceSchema(service: ServiceItem) {
  return {
    "@type": "Service",
    "name": service.name,
    "description": service.description || undefined, // Omit if empty
    "offers": createOffers(service),
    "serviceType": "Massage Therapy"
  };
}

function createOffers(service: ServiceItem) {
  if (service.options) {
    return service.options.map(option => ({
      "@type": "Offer",
      "price": extractNumber(option.price),
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": extractNumber(option.price),
        "priceCurrency": "EUR",
        "eligibleQuantity": {
          "@type": "QuantitativeValue",
          "value": option.duration,
          "unitCode": "MIN",
          "unitText": "minute"
        }
      }
    }));
  }

  if (service.singlePrice) {
    return [{
      "@type": "Offer",
      "price": extractNumber(service.singlePrice),
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": extractNumber(service.singlePrice),
        "priceCurrency": "EUR",
        "eligibleQuantity": {
          "@type": "QuantitativeValue",
          "value": service.singleDuration || 0,
          "unitCode": "MIN",
          "unitText": "minute"
        }
      }
    }];
  }

  if (service.specialInfo) {
    return [{
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "description": service.specialInfo
      }
    }];
  }

  return [];
}

function extractNumber(priceString: string): number {
  const numericValue = parseFloat(priceString.replace(/[^\d.]/g, ''));
  return isNaN(numericValue) ? 0 : numericValue;
}
