export const richServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Masáže Carbon",
  "image": "https://masaze-carbon.sk/masaze-carbon-favicon.png",
  "telephone": "+421919236109",
  "email": "masaze.carbon@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Tovarnícka 412/9",
    "addressLocality": "Topoľčany",
    "postalCode": "955 01",
    "addressCountry": "SK"
  },
  "url": "https://masaze-carbon.sk",
  "priceRange": "€",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Cenník služieb",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Klasická masáž",
          "description": "Overená klasika pre uvoľnenie tela aj mysle"
        },
        "priceSpecification": [
          {
            "@type": "UnitPriceSpecification",
            "price": 20,
            "priceCurrency": "EUR",
            "eligibleQuantity": {
              "@type": "QuantitativeValue",
              "value": 30,
              "unitCode": "MIN",
              "unitText": "minute"
            }
          },
          {
            "@type": "UnitPriceSpecification",
            "price": 30,
            "priceCurrency": "EUR",
            "eligibleQuantity": {
              "@type": "QuantitativeValue",
              "value": 60,
              "unitCode": "MIN",
              "unitText": "minute"
            }
          },
          {
            "@type": "UnitPriceSpecification",
            "price": 45,
            "priceCurrency": "EUR",
            "eligibleQuantity": {
              "@type": "QuantitativeValue",
              "value": 90,
              "unitCode": "MIN",
              "unitText": "minute"
            }
          }
        ]
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Športová masáž",
          "description": "Vhodná pre aktívnych ľudí pred aj po športovom výkone"
        },
        "priceSpecification": [
          {
            "@type": "UnitPriceSpecification",
            "price": 20,
            "priceCurrency": "EUR",
            "eligibleQuantity": {
              "@type": "QuantitativeValue",
              "value": 30,
              "unitCode": "MIN",
              "unitText": "minute"
            }
          },
          {
            "@type": "UnitPriceSpecification",
            "price": 30,
            "priceCurrency": "EUR",
            "eligibleQuantity": {
              "@type": "QuantitativeValue",
              "value": 60,
              "unitCode": "MIN",
              "unitText": "minute"
            }
          },
          {
            "@type": "UnitPriceSpecification",
            "price": 45,
            "priceCurrency": "EUR",
            "eligibleQuantity": {
              "@type": "QuantitativeValue",
              "value": 90,
              "unitCode": "MIN",
              "unitText": "minute"
            }
          }
        ]
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Relaxačná masáž",
          "description": "Uvoľnite telo i myseľ v príjemnej atmosfére"
        },
        "priceSpecification": [
          {
            "@type": "UnitPriceSpecification",
            "price": 20,
            "priceCurrency": "EUR",
            "eligibleQuantity": {
              "@type": "QuantitativeValue",
              "value": 30,
              "unitCode": "MIN",
              "unitText": "minute"
            }
          },
          {
            "@type": "UnitPriceSpecification",
            "price": 30,
            "priceCurrency": "EUR",
            "eligibleQuantity": {
              "@type": "QuantitativeValue",
              "value": 60,
              "unitCode": "MIN",
              "unitText": "minute"
            }
          },
          {
            "@type": "UnitPriceSpecification",
            "price": 45,
            "priceCurrency": "EUR",
            "eligibleQuantity": {
              "@type": "QuantitativeValue",
              "value": 90,
              "unitCode": "MIN",
              "unitText": "minute"
            }
          }
        ]
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hĺbková masáž",
          "description": "Intenzívna úľava a regenerácia v jednom"
        },
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": 35,
          "priceCurrency": "EUR",
          "eligibleQuantity": {
            "@type": "QuantitativeValue",
            "value": 60,
            "unitCode": "MIN",
            "unitText": "minute"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Maderoterapia",
          "description": "Formovanie postavy s využitím drevených nástrojov"
        },
        "priceSpecification": [
          {
            "@type": "UnitPriceSpecification",
            "price": 20,
            "priceCurrency": "EUR",
            "eligibleQuantity": {
              "@type": "QuantitativeValue",
              "value": 30,
              "unitCode": "MIN",
              "unitText": "minute"
            }
          },
          {
            "@type": "UnitPriceSpecification",
            "price": 30,
            "priceCurrency": "EUR",
            "eligibleQuantity": {
              "@type": "QuantitativeValue",
              "value": 60,
              "unitCode": "MIN",
              "unitText": "minute"
            }
          }
        ]
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pre firmy",
          "description": "“Zdraví a spokojní zamestnanci, lepší výkon na pracovisku”"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "description": "Dohodou"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "U vás doma",
          "description": "“Relax až k vám - oddýchnite si bez cestovania.”"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "description": "Dohodou"
        }
      }
    ]
  }
}
