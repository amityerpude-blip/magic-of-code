/*====================================================
    MAGIC OF CODE — SPIDER WEB NEXUS
    KINGDOM-SPECIFIC COMPONENTS

    This file belongs ONLY to the Spider Web Nexus.
    Shared components.js is intentionally left untouched
    for all other kingdoms.
====================================================*/
(function () {
    "use strict";

    if (window.__SPIDER_WEB_COMPONENTS__) return;
    window.__SPIDER_WEB_COMPONENTS__ = true;

    /**
     * Creates the dedicated mount point used by network.js.
     * network.js owns the complete simulator UI and behaviour.
     */
    function SpiderWebNetworkComponent() {
        return `
            <section id="networkSection" class="lessonContent">
                <div id="networkSimulator" class="spiderWebNetworkMount"></div>
            </section>
        `;
    }

    /**
     * Mount the network shell into the Spider Web kingdom page.
     * Existing content is removed first so the simulator can never
     * accidentally be mounted twice.
     */
    function mountSpiderWebNetworkComponent() {
        const root = document.getElementById("kingdomContainer");
        if (!root) {
            console.error("🕸 Spider Web: kingdomContainer not found.");
            return false;
        }

        let section = document.getElementById("networkSection");

        if (!section) {
            root.insertAdjacentHTML("beforeend", SpiderWebNetworkComponent());
            section = document.getElementById("networkSection");
        }

        if (!section) {
            console.error("🕸 Spider Web: failed to create networkSection.");
            return false;
        }

        section.classList.add("lessonContent", "spiderWebNetworkSection");
        return true;
    }

    window.SpiderWebNetworkComponent = SpiderWebNetworkComponent;
    window.mountSpiderWebNetworkComponent = mountSpiderWebNetworkComponent;

    console.log("🕸 Spider Web components loaded.");
})();
