import type {ServiceItem} from '../const/serviceData';

export function generatePriceListJson(services: ServiceItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Masáže Carbon - Cenník služieb",
    "itemListElement": services.map((service, index) => {
      const offers = service.options
        ? service.options.map(option => ({
          "@type": "Offer",
          "price": option.price.replace(/[^\d.]/g, ""), // extract numeric price
          "priceCurrency": "EUR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": option.price.replace(/[^\d.]/g, ""),
            "priceCurrency": "EUR",
            "referenceQuantity": {
              "@type": "QuantitativeValue",
              "value": option.duration,
              "unitCode": "MIN",
              "unitText": "minutes"
            }
          }
        }))
        : service.singlePrice
          ? [{
            "@type": "Offer",
            "price": service.singlePrice.replace(/[^\d.]/g, ""),
            "priceCurrency": "EUR",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": service.singlePrice.replace(/[^\d.]/g, ""),
              "priceCurrency": "EUR",
              "referenceQuantity": {
                "@type": "QuantitativeValue",
                "value": service.singleDuration ?? 0,
                "unitCode": "MIN",
                "unitText": "minutes"
              }
            }
          }]
          : service.specialInfo
            ? [{
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "0",
                "priceCurrency": "EUR",
                "description": service.specialInfo
              }
            }]
            : [];

      return {
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Service",
          "name": service.name,
          "description": service.description ?? "",
          "offers": offers
        }
      };
    })
  };
}
