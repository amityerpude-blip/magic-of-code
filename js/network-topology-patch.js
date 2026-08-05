/*====================================================
    SPIDER WEB NEXUS
    TOPOLOGY BUILDER — RESTORE PREVIOUS INTERACTION

    This patch restores ONLY the old topology-builder interaction:
      • devices can be dragged around the network canvas
      • click one device, then another device to connect them
      • connections are visible immediately
      • cables can be clicked to remove them
      • topology correctness is checked by Validate

    Transmission / packet / message / circuit switching is untouched.
====================================================*/

(function () {
    "use strict";

    if (window.__SPIDER_TOPOLOGY_PATCH__) return;
    window.__SPIDER_TOPOLOGY_PATCH__ = true;

    function ready() {
        return !!(
            window.NetworkEngine &&
            NetworkEngine.state &&
            document.getElementById("topologyCanvas")
        );
    }

    function getNode(target) {
        if (!target || !target.closest) return null;
        return target.closest("#topologyCanvas .topologyNode");
    }

    function clearSelection() {
        document
            .querySelectorAll("#topologyCanvas .topologyNode.selected")
            .forEach(function (node) {
                node.classList.remove("selected");
            });
        NetworkEngine.state.selectedNode = null;
    }

    function connectDevices(from, to) {
        if (!ready() || !from || !to || from === to) return;

        const connections =
            NetworkEngine.state.connections ||
            (NetworkEngine.state.connections = []);

        const exists = connections.some(function (connection) {
            return (
                (connection.from === from && connection.to === to) ||
                (connection.from === to && connection.to === from)
            );
        });

        if (exists) {
            if (typeof window.showTopologyResult === "function") {
                window.showTopologyResult(
                    "🔗 This connection already exists.",
                    "warning"
                );
            }
            return;
        }

        const connection = { from: from, to: to };
        connections.push(connection);

        /* Draw immediately — exactly as the previous builder did. */
        if (typeof window.drawConnection === "function") {
            window.drawConnection(connection);
        }

        if (typeof window.showTopologyResult === "function") {
            window.showTopologyResult(
                "🔗 Connection created. Continue building the network.",
                "info"
            );
        }
    }

    /*
       The old network.js validates a connection inside its lexical
       canConnect() function. That made the builder reject a connection
       before students could build and validate the topology.

       Capture the device click first so the old click handler cannot
       block the previous select-A -> select-B interaction.
    */
    document.addEventListener("click", function (event) {
        const node = getNode(event.target);
        if (!node || !ready()) return;

        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        const id = node.dataset.id;
        const selected = NetworkEngine.state.selectedNode;

        if (!selected) {
            NetworkEngine.state.selectedNode = id;
            clearVisualSelectionOnly();
            node.classList.add("selected");

            if (typeof window.showTopologyResult === "function") {
                window.showTopologyResult(
                    `🔗 ${nodeName(node)} selected — now select another device.`,
                    "info"
                );
            }
            return;
        }

        if (selected === id) {
            node.classList.remove("selected");
            NetworkEngine.state.selectedNode = null;
            return;
        }

        connectDevices(selected, id);
        clearSelection();
    }, true);

    function clearVisualSelectionOnly() {
        document
            .querySelectorAll("#topologyCanvas .topologyNode.selected")
            .forEach(function (node) {
                node.classList.remove("selected");
            });
    }

    function nodeName(node) {
        const label = node.querySelector(
            ".topologyNodeName, .deviceTitle"
        );
        return label ? label.textContent.trim() : node.dataset.id;
    }

    /*====================================================
        RESTORE DRAGGABLE DEVICES
    ====================================================*/

    function prepareNode(node) {
        if (!node || node.dataset.previousBuilderReady === "true") {
            return;
        }

        node.dataset.previousBuilderReady = "true";
        node.style.cursor = "grab";
        node.style.userSelect = "none";
        node.style.touchAction = "none";

        /* Native drag support as well as the existing mouse dragging. */
        node.setAttribute("draggable", "true");

        node.addEventListener("dragstart", function (event) {
            event.dataTransfer.effectAllowed = "move";
            event.dataTransfer.setData("text/plain", node.dataset.id || "");
            node.classList.add("dragging");
        });

        node.addEventListener("dragend", function () {
            node.classList.remove("dragging");
        });

        /* Reliable pointer dragging for desktop/touch. */
        node.addEventListener("pointerdown", function (event) {
            if (event.button !== 0) return;
            if (event.target.closest && event.target.closest("button")) return;

            const canvas = document.getElementById("topologyCanvas");
            if (!canvas) return;

            const rect = node.getBoundingClientRect();
            const canvasRect = canvas.getBoundingClientRect();
            const offsetX = event.clientX - rect.left;
            const offsetY = event.clientY - rect.top;

            let moved = false;

            function move(e) {
                const dx = e.clientX - event.clientX;
                const dy = e.clientY - event.clientY;

                if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
                    moved = true;
                }

                if (!moved) return;

                let left = e.clientX - canvasRect.left - offsetX;
                let top = e.clientY - canvasRect.top - offsetY;

                left = Math.max(
                    5,
                    Math.min(left, canvas.clientWidth - node.offsetWidth - 5)
                );

                top = Math.max(
                    5,
                    Math.min(top, canvas.clientHeight - node.offsetHeight - 5)
                );

                node.style.left = `${left}px`;
                node.style.top = `${top}px`;
                node.classList.add("dragging");

                if (typeof window.updateConnections === "function") {
                    window.updateConnections();
                }
            }

            function up() {
                document.removeEventListener("pointermove", move);
                document.removeEventListener("pointerup", up);
                node.classList.remove("dragging");
            }

            document.addEventListener("pointermove", move);
            document.addEventListener("pointerup", up);
        });
    }

    function prepareAllNodes() {
        if (!ready()) return;
        document
            .querySelectorAll("#topologyCanvas .topologyNode")
            .forEach(prepareNode);
    }

    const observer = new MutationObserver(function () {
        prepareAllNodes();
    });

    function startObserver() {
        const canvas = document.getElementById("topologyCanvas");
        if (!canvas) return;
        observer.observe(canvas, { childList: true, subtree: true });
        prepareAllNodes();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", startObserver);
    } else {
        startObserver();
    }

    window.__resetTopologyBuilderSelection = clearSelection;

    console.log(
        "🛠️ Spider Web Nexus: previous drag + select-to-connect topology builder restored."
    );
})();
