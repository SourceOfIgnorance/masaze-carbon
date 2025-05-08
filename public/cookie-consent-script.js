document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const manageBtn = document.getElementById("manage-cookies-btn");
  const modal = document.getElementById("cookie-preferences-modal");
  const form = document.getElementById("cookie-preferences-form");
  const closeBtn = document.getElementById("preferences-close");
  const cancelBtn = document.getElementById("preferences-cancel");
  const mapContainer = document.getElementById("google-map-container");

  // Default consent state
  const defaultConsent = {
    necessary: true,
    googleMaps: false,
    analytics: false,
  };

  // Toggle visibility
  function updateManageButtonVisibility() {
    const hasConsent = localStorage.getItem("cookieConsent") !== null;
    manageBtn.classList.toggle("hidden", !hasConsent);
  }

  // Get consent from localStorage or default
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

  // Save consent to localStorage
  function setConsent(consent) {
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    updateAnalytics(consent.analytics);
    updateMap(consent.googleMaps);
  }

  // Show banner if no consent recorded yet
  function shouldShowBanner() {
    return !localStorage.getItem("cookieConsent");
  }

  // Render or remove Google Maps iframe based on consent
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
      // Remove iframe and show placeholder text
      mapContainer.innerHTML = `<span id="show-map" style="padding:1em;">
        Mapa sa zobrazí po udelení súhlasu s cookies.
      </span>`;
    }
  }

  // Initialize Google Analytics
  function updateAnalytics(analyticsConsent) {
    const consent = analyticsConsent !== undefined ? {analytics: analyticsConsent} : getConsent();

    if (consent.analytics && !window._gaInitialized) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-CSW7TMJ625';
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];

      function gtag() {
        dataLayer.push(arguments);
      }

      // Set default consent FIRST
      gtag('consent', 'default', {
        'analytics_storage': 'denied'
      });

      // Update based on user choice
      gtag('consent', 'update', {
        'analytics_storage': consent.analytics ? 'granted' : 'denied'
      });

      gtag('js', new Date());
      gtag('config', 'G-CSW7TMJ625');
      window._gaInitialized = true;
    }
  }

  // Show banner if needed
  if (shouldShowBanner()) {
    banner.style.display = "flex";
  }

  // Banner buttons
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

  // Manage cookies button opens modal
  manageBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);
  cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    closeModal();
  });

  // Handle preferences form submit
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

  // Modal open function
  function openModal() {
    const consent = getConsent();
    form.googleMaps.checked = !!consent.googleMaps;
    form.analytics.checked = !!consent.analytics;
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
    manageBtn.setAttribute("aria-expanded", "true");
  }

  // Modal close function
  function closeModal() {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
    manageBtn.setAttribute("aria-expanded", "false");
  }

  updateManageButtonVisibility();
  updateMap();
  updateAnalytics();
})