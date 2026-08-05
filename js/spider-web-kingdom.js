/*====================================================
    MAGIC OF CODE — SPIDER WEB NEXUS
    NETWORK-KINGDOM-ONLY CONTROLLER

    This file belongs only to the Spider Web Nexus.
    It intentionally does NOT modify the shared kingdom.js.
====================================================*/
(function () {
    "use strict";

    if (window.__SPIDER_WEB_KINGDOM__) return;
    window.__SPIDER_WEB_KINGDOM__ = true;

    function spiderWebButtons(data) {
        const startButton = document.getElementById("beginAdventure");
        if (startButton) {
            startButton.onclick = function () {
                const map = document.getElementById("kingdomMap");
                if (map) map.scrollIntoView({ behavior: "smooth" });
            };
        }

        const nextButton = document.getElementById("nextKingdom");
        if (nextButton && data && data.footer && data.footer.next) {
            nextButton.onclick = function () {
                window.location.href = data.footer.next;
            };
        }

        const finishButton = document.getElementById("completeKingdom");
        if (finishButton) {
            finishButton.onclick = function () {
                if (typeof saveProgress === "function" && data && data.id) {
                    saveProgress(data.id);
                }
                if (typeof showReward === "function") {
                    showReward("🏆 Kingdom Completed!");
                }
            };
        }
    }

    function spiderWebHideLoading() {
        const loader = document.getElementById("loadingScreen");
        if (!loader) return;

        setTimeout(function () {
            loader.style.opacity = "0";
            setTimeout(function () {
                if (loader.parentNode) loader.remove();
            }, 600);
        }, 500);
    }

    async function initializeSpiderWebKingdom(data) {
        console.log("🕸 Spider Web Nexus kingdom controller started");

        if (typeof initializeNavigation === "function") {
            initializeNavigation();
        }

        if (typeof initializeComic === "function") {
            initializeComic(data);
        }

        /*
           Spider Web owns its network shell. Mount it explicitly here
           before starting network.js. This removes the dependency on
           the shared components.js network branch.
        */
        if (typeof mountSpiderWebNetworkComponent === "function") {
            mountSpiderWebNetworkComponent();
        } else {
            console.error("🕸 Spider Web network component is not loaded.");
        }

        /* Network kingdom uses the network simulator instead of
           the normal Python coding engine. */
        if (typeof initializeNetworkSimulator === "function") {
            await initializeNetworkSimulator(data.networkSimulator || data);
        } else {
            console.error("🕸 initializeNetworkSimulator is not available.");
        }

        if (typeof initializeQuiz === "function") {
            initializeQuiz(data);
        }

        if (typeof initializeEffects === "function") {
            initializeEffects();
        }

        if (typeof initializeStorage === "function") {
            initializeStorage(data);
        }

        spiderWebButtons(data);
        spiderWebHideLoading();

        console.log("🕸 Spider Web Nexus kingdom controller ready");
    }

    window.initializeSpiderWebKingdom = initializeSpiderWebKingdom;
})();
