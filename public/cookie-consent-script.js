document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("cookie-banner");
    const manageBtn = document.getElementById("manage-cookies-btn");
    const modal = document.getElementById("cookie-preferences-modal");
    const form = document.getElementById("cookie-preferences-form");
    const closeBtn = document.getElementById("preferences-close");
    const cancelBtn = document.getElementById("preferences-cancel");
    const mapContainer = document.getElementById("google-map-container");

    const defaultConsent = {
      necessary: true,
      googleMaps: false,
      analytics: false,
    };

    function updateManageButtonVisibility() {
      const hasConsent = localStorage.getItem("cookieConsent") !== null;
      manageBtn.classList.toggle("hidden", !hasConsent);
    }

    function getConsent() {
      const stored = localStorage.getItem("cookieConsent");
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch {
          return {...defaultConsent};
        }
      }
      return {...defaultConsent};
    }

    function setConsent(consent) {
      localStorage.setItem("cookieConsent", JSON.stringify(consent));
      updateAnalytics(consent.analytics);
      updateMap(consent.googleMaps);
    }

    function shouldShowBanner() {
      return !localStorage.getItem("cookieConsent");
    }

    function updateMap(googleMapsConsent) {
      if (!mapContainer) return;
      const consent = googleMapsConsent !== undefined ? {googleMaps: googleMapsConsent} : getConsent();
      if (consent.googleMaps) {
        if (!mapContainer.querySelector("iframe")) {
          mapContainer.innerHTML = `
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d165.03647136594418!2d18.165796606608236!3d48.5603713259538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b4b0063373029%3A0x7124fd43d1696af1!2zTWFzw6HFvmUgQ2FyYm9u!5e0!3m2!1sen!2ssk!4v1745959330335!5m2!1sen!2ssk"
            class="w-full h-full"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Mapa Masáže Carbon Topoľčany"
          ></iframe>
        `;
        }
      } else {
        mapContainer.innerHTML = `<span id="show-map" style="padding:1em;">
        Mapa sa zobrazí po udelení súhlasu s cookies.
      </span>`;
      }
    }

    function waitForGtag(callback) {
      if (typeof gtag === 'function') {
        callback();
      } else {
        setTimeout(() => waitForGtag(callback), 100);
      }
    }

    function updateAnalytics(analyticsConsent) {
      const consent = analyticsConsent !== undefined ? {analytics: analyticsConsent} : getConsent();

      waitForGtag(() => {
        gtag('consent', 'update', {
          'ad_storage': consent.analytics ? 'granted' : 'denied',
          'analytics_storage': consent.analytics ? 'granted' : 'denied',
          'ad_personalization': consent.analytics ? 'granted' : 'denied',
          'ad_user_data': consent.analytics ? 'granted' : 'denied'
        });
      });
    }

    if (shouldShowBanner()) {
      banner.style.display = "flex";
    }

    document.getElementById("accept-all").addEventListener("click", () => {
      setConsent({necessary: true, googleMaps: true, analytics: true});
      banner.style.display = "none";
      updateManageButtonVisibility();
    });

    document.getElementById("decline-analytics").addEventListener("click", () => {
      setConsent({necessary: true, googleMaps: false, analytics: false});
      banner.style.display = "none";
      updateManageButtonVisibility();
    });

    manageBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);
    cancelBtn.addEventListener("click", (e) => {
      e.preventDefault();
      closeModal();
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const consent = {
        necessary: true,
        googleMaps: form.googleMaps.checked,
        analytics: form.analytics.checked,
      };
      setConsent(consent);
      closeModal();
      banner.style.display = "none";
      updateManageButtonVisibility();
    });

    function openModal() {
      const consent = getConsent();
      form.googleMaps.checked = !!consent.googleMaps;
      form.analytics.checked = !!consent.analytics;
      modal.classList.remove("hidden");
      modal.setAttribute("aria-hidden", "false");
      manageBtn.setAttribute("aria-expanded", "true");
    }

    function closeModal() {
      modal.classList.add("hidden");
      modal.setAttribute("aria-hidden", "true");
      manageBtn.setAttribute("aria-expanded", "false");
    }

    updateManageButtonVisibility();
    updateMap();
    updateAnalytics();
  }
)