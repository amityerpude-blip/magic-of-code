/*====================================================
    SPIDER WEB NEXUS
    TOPOLOGY BUILDER - SURGICAL PATCH

    This file changes ONLY the topology-building interaction.
    The transmission simulator, packet switching, message switching,
    circuit switching, security and battle modules are untouched.
====================================================*/

(function () {
    "use strict";

    if (window.__SPIDER_TOPOLOGY_PATCH__) return;
    window.__SPIDER_TOPOLOGY_PATCH__ = true;

    function topologyIsActive() {
        return !!(
            window.NetworkEngine &&
            NetworkEngine.state &&
            NetworkEngine.state.topology
        );
    }

    /*
       BUILD MODE:
       Students must be allowed to draw ANY connection first.
       Correctness is checked only when Validate is pressed.
       The previous version rejected incorrect connections here,
       which made the builder appear broken and made it impossible
       for students to construct-and-check a topology.
    */
    window.canConnect = function (from, to) {
        if (!topologyIsActive()) {
            if (typeof window.showNotification === "function") {
                showNotification("Please select a topology first.", "warning");
            }
            return false;
        }

        if (!from || !to || from === to) {
            if (typeof window.showNotification === "function") {
                showNotification("Choose two different devices.", "warning");
            }
            return false;
        }

        return true;
    };

    /*
       Explicitly replace connection creation so the patch does not
       depend on the old validation gate inside network.js.
    */
    window.createConnection = function (from, to) {
        if (!window.NetworkEngine || !NetworkEngine.state) return;

        if (!window.canConnect(from, to)) return;

        const exists = NetworkEngine.state.connections.some(function (c) {
            return (
                (c.from === from && c.to === to) ||
                (c.from === to && c.to === from)
            );
        });

        if (exists) {
            if (typeof window.showTopologyResult === "function") {
                showTopologyResult("🔗 This cable already exists.", "warning");
            }
            return;
        }

        const connection = { from: from, to: to };
        NetworkEngine.state.connections.push(connection);

        if (typeof window.drawConnection === "function") {
            drawConnection(connection);
        }

        if (typeof window.checkTopologyCompletion === "function") {
            checkTopologyCompletion();
        }

        if (typeof window.showTopologyResult === "function") {
            showTopologyResult(
                "🔗 Cable added. Build the topology, then press Validate.",
                "info"
            );
        }
    };

    /*
       The original SVG layer is intentionally left intact.
       This helper makes the active builder state explicit after
       a topology is selected, without touching transmission.
    */
    window.__resetTopologyBuilderSelection = function () {
        if (!window.NetworkEngine || !NetworkEngine.state) return;
        NetworkEngine.state.selectedNode = null;
    };

    console.log("🛠️ Spider Web Nexus topology interaction patch loaded.");
})();
