/*====================================================
    SPIDER WEB NEXUS
    TOPOLOGY BUILDER - SURGICAL PATCH

    ONLY the Build the Network interaction is patched here.
    Transmission simulation is intentionally untouched.
====================================================*/

(function () {
    "use strict";

    if (window.__SPIDER_TOPOLOGY_PATCH__) return;
    window.__SPIDER_TOPOLOGY_PATCH__ = true;

    function active() {
        return !!(
            window.NetworkEngine &&
            NetworkEngine.state &&
            NetworkEngine.state.topology
        );
    }

    function addCable(from, to) {
        if (!active() || !from || !to || from === to) return;

        const connections = NetworkEngine.state.connections ||
            (NetworkEngine.state.connections = []);

        const exists = connections.some(function (c) {
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
        connections.push(connection);

        /* Use the existing renderer from network.js. */
        if (typeof window.drawConnection === "function") {
            window.drawConnection(connection);
        }

        if (typeof window.showTopologyResult === "function") {
            showTopologyResult(
                "🔗 Cable added. Continue building, then press Validate.",
                "info"
            );
        }
    }

    /*
       IMPORTANT FIX:
       network.js contains its own lexical selectNetworkDevice()
       and canConnect() functions. Replacing window.canConnect or
       window.createConnection therefore does not reliably replace
       those internal calls.

       We intercept clicks during CAPTURE phase, before the original
       node click handler runs. This makes the builder independent of
       the old connection-validation gate.
    */
    document.addEventListener("click", function (event) {
        const node = event.target.closest
            ? event.target.closest("#topologyCanvas .topologyNode")
            : null;

        if (!node || !active()) return;

        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        const id = node.dataset.id;
        const previous = NetworkEngine.state.selectedNode;

        if (!previous) {
            NetworkEngine.state.selectedNode = id;
            document.querySelectorAll("#topologyCanvas .topologyNode.selected")
                .forEach(function (n) { n.classList.remove("selected"); });
            node.classList.add("selected");

            if (typeof window.showTopologyResult === "function") {
                showTopologyResult(
                    `🔗 ${id} selected. Now choose another device.`,
                    "info"
                );
            }
            return;
        }

        if (previous === id) {
            node.classList.remove("selected");
            NetworkEngine.state.selectedNode = null;
            return;
        }

        addCable(previous, id);

        document.querySelectorAll("#topologyCanvas .topologyNode.selected")
            .forEach(function (n) { n.classList.remove("selected"); });

        NetworkEngine.state.selectedNode = null;
    }, true);

    /* Allow the existing drag logic to remain untouched. */
    window.__resetTopologyBuilderSelection = function () {
        if (!window.NetworkEngine || !NetworkEngine.state) return;
        NetworkEngine.state.selectedNode = null;
        document.querySelectorAll("#topologyCanvas .topologyNode.selected")
            .forEach(function (n) { n.classList.remove("selected"); });
    };

    console.log("🛠️ Spider Web Nexus topology capture patch loaded.");
})();
