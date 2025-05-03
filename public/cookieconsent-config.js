document.addEventListener('DOMContentLoaded', () => {
  if (!window.CookieConsent) {
    console.error('CookieConsent library not loaded yet');
    return;
  }

  window.CookieConsent.run({
    guiOptions: {
      consentModal: {
        layout: 'box',
        position: 'bottom left',
        equalWeightButtons: true,
        flipButtons: false,
      },
    },
    categories: {
      necessary: {readOnly: true},
      analytics: {},
    },
    language: {
      default: 'sk',
      translations: {
        sk: {
          consentModal: {
            title: 'Používame cookies',
            description:
              'Na tejto stránke používame iba nevyhnutné cookies a Google Maps, ktoré môžu ukladať cookies po vašom súhlase.',
            acceptAllBtn: 'Prijať všetko',
            acceptNecessaryBtn: 'Odmietnuť analytické',
            showPreferencesBtn: 'Spravovať nastavenia',
            footer: '<a href="/privacy-policy">Zásady ochrany osobných údajov</a>',
          },
          preferencesModal: {
            title: 'Centrum preferencií',
            acceptAllBtn: 'Prijať všetko',
            acceptNecessaryBtn: 'Odmietnuť analytické',
            savePreferencesBtn: 'Uložiť nastavenia',
            closeIconLabel: 'Zavrieť',
            sections: [
              {
                title: 'Nevyhnutné cookies',
                description:
                  'Tieto cookies sú potrebné pre fungovanie webu a nie je možné ich vypnúť.',
              },
              {
                title: 'Google Maps',
                description:
                  'Google Maps môže ukladať cookies a spracovávať vaše osobné údaje po vašom súhlase.',
                linkedCategory: 'analytics',
              },
            ],
          },
        },
      },
    },
  });
});
