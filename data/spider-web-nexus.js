/*
 * Spider Web Nexus - CSS/visual helper
 *
 * This file is intentionally limited to presentation enhancements.
 * It does NOT replace or alter network.js or the transmission simulation.
 */
(function () {
  "use strict";

  function markActiveTab(container) {
    if (!container) return;
    const buttons = container.querySelectorAll("button");
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
  }

  function enhanceTabs() {
    const selectors = [
      ".network-tabs",
      ".simulator-tabs",
      ".tab-container",
      ".tabs",
      "[role='tablist']"
    ];

    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(markActiveTab);
    });

    document.querySelectorAll("button").forEach(btn => {
      const text = (btn.textContent || "").trim().toLowerCase();
      if (
        text.includes("build the network") ||
        text.includes("data transmission")
      ) {
        btn.classList.add("swn-tab-button");
      }
    });
  }

  function init() {
    enhanceTabs();

    // The page may create simulator controls dynamically.
    const observer = new MutationObserver(() => enhanceTabs());
    observer.observe(document.body, { childList: true, subtree: true });

    // Stop observing after a short setup period to avoid unnecessary work.
    setTimeout(() => observer.disconnect(), 8000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
