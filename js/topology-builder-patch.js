/*====================================================
   SPIDER WEB NEXUS
   TOPOLOGY BUILDER — RESTORE PREVIOUS INTERACTION

   Surgical topology-only patch.
   - Drag devices
   - Select device -> select another device -> connect
   - Draw visible network links
   - Click a cable to remove it
   - Keeps NetworkEngine.state.connections in sync
   - Does NOT modify transmission / packet / message / circuit logic
====================================================*/
(function () {
    "use strict";

    if (window.__SPIDER_TOPOLOGY_BUILDER_PATCH__) return;
    window.__SPIDER_TOPOLOGY_BUILDER_PATCH__ = true;

    const NODE_SELECTOR = "#topologyCanvas .topologyNode";
    const SVG_ID = "topologyPatchConnections";

    function getCanvas() {
        return document.getElementById("topologyCanvas");
    }

    function getState() {
        return window.NetworkEngine && window.NetworkEngine.state
            ? window.NetworkEngine.state
            : null;
    }

    function getNodes() {
        const canvas = getCanvas();
        return canvas ? Array.from(canvas.querySelectorAll(".topologyNode")) : [];
    }

    function nodeId(node) {
        return node && (node.dataset.id || node.getAttribute("data-id"));
    }

    function findNode(id) {
        return getNodes().find(n => nodeId(n) === String(id));
    }

    function ensureConnections() {
        const state = getState();
        if (!state) return [];
        if (!Array.isArray(state.connections)) state.connections = [];
        return state.connections;
    }

    function normalizeConnection(c) {
        if (!c) return null;
        const from = c.from ?? c.source ?? c.a;
        const to = c.to ?? c.target ?? c.b;
        if (from == null || to == null || String(from) === String(to)) return null;
        return { from: String(from), to: String(to) };
    }

    function sameConnection(a, b) {
        if (!a || !b) return false;
        return (a.from === b.from && a.to === b.to) ||
               (a.from === b.to && a.to === b.from);
    }

    function ensureSvg() {
        const canvas = getCanvas();
        if (!canvas) return null;

        let svg = canvas.querySelector("#" + SVG_ID);
        if (!svg) {
            svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.id = SVG_ID;
            svg.setAttribute("aria-hidden", "true");
            svg.style.cssText = [
                "position:absolute",
                "inset:0",
                "width:100%",
                "height:100%",
                "z-index:2",
                "pointer-events:none",
                "overflow:visible"
            ].join(";");
            canvas.prepend(svg);
        }
        return svg;
    }

    function pointForNode(node, canvasRect) {
        const r = node.getBoundingClientRect();
        return {
            x: r.left - canvasRect.left + r.width / 2,
            y: r.top - canvasRect.top + r.height / 2
        };
    }

    function drawConnections() {
        const canvas = getCanvas();
        const svg = ensureSvg();
        if (!canvas || !svg) return;

        while (svg.firstChild) svg.removeChild(svg.firstChild);

        const rect = canvas.getBoundingClientRect();
        const connections = ensureConnections();

        connections.forEach((raw, index) => {
            const c = normalizeConnection(raw);
            if (!c) return;

            const a = findNode(c.from);
            const b = findNode(c.to);
            if (!a || !b) return;

            const p1 = pointForNode(a, rect);
            const p2 = pointForNode(b, rect);

            const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
            group.dataset.connectionIndex = String(index);
            group.style.pointerEvents = "auto";
            group.style.cursor = "pointer";

            const hit = document.createElementNS("http://www.w3.org/2000/svg", "line");
            hit.setAttribute("x1", p1.x);
            hit.setAttribute("y1", p1.y);
            hit.setAttribute("x2", p2.x);
            hit.setAttribute("y2", p2.y);
            hit.setAttribute("stroke", "transparent");
            hit.setAttribute("stroke-width", "18");
            hit.setAttribute("pointer-events", "stroke");

            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", p1.x);
            line.setAttribute("y1", p1.y);
            line.setAttribute("x2", p2.x);
            line.setAttribute("y2", p2.y);
            line.setAttribute("stroke", "#39d5ff");
            line.setAttribute("stroke-width", "4");
            line.setAttribute("stroke-linecap", "round");
            line.setAttribute("opacity", "0.9");
            line.setAttribute("pointer-events", "none");

            const glow = document.createElementNS("http://www.w3.org/2000/svg", "line");
            glow.setAttribute("x1", p1.x);
            glow.setAttribute("y1", p1.y);
            glow.setAttribute("x2", p2.x);
            glow.setAttribute("y2", p2.y);
            glow.setAttribute("stroke", "#39d5ff");
            glow.setAttribute("stroke-width", "10");
            glow.setAttribute("stroke-linecap", "round");
            glow.setAttribute("opacity", "0.12");
            glow.setAttribute("pointer-events", "none");

            group.appendChild(glow);
            group.appendChild(line);
            group.appendChild(hit);
            svg.appendChild(group);
        });
    }

    function clearSelection() {
        const state = getState();
        if (!state) return;
        state.selectedNode = null;
        getNodes().forEach(n => n.classList.remove("selected"));
    }

    function selectNode(node) {
        const state = getState();
        if (!state) return;

        const id = nodeId(node);
        if (!id) return;

        if (!state.selectedNode) {
            clearSelection();
            state.selectedNode = String(id);
            node.classList.add("selected");
            if (typeof window.showTopologyResult === "function") {
                window.showTopologyResult("🔗 " + id + " selected. Now choose another device.", "info");
            }
            return;
        }

        const previous = String(state.selectedNode);
        const current = String(id);

        if (previous === current) {
            clearSelection();
            return;
        }

        const connection = { from: previous, to: current };
        const connections = ensureConnections();

        if (!connections.some(c => sameConnection(normalizeConnection(c), connection))) {
            connections.push(connection);
        }

        clearSelection();
        drawConnections();

        if (typeof window.showTopologyResult === "function") {
            window.showTopologyResult("🔗 Connection created: " + previous + " ↔ " + current, "info");
        }
    }

    function removeConnectionAt(index) {
        const connections = ensureConnections();
        if (index < 0 || index >= connections.length) return;
        connections.splice(index, 1);
        drawConnections();
    }

    function prepareNode(node) {
        if (!node || node.dataset.topologyPatchReady === "true") return;
        node.dataset.topologyPatchReady = "true";
        node.style.cursor = "grab";
        node.style.userSelect = "none";
        node.style.touchAction = "none";

        let dragging = false;
        let moved = false;
        let startX = 0;
        let startY = 0;
        let offsetX = 0;
        let offsetY = 0;
        let rect = null;

        node.addEventListener("pointerdown", function (event) {
            if (event.button !== 0 || !getState() || !getCanvas()) return;
            const nr = node.getBoundingClientRect();
            rect = getCanvas().getBoundingClientRect();
            startX = event.clientX;
            startY = event.clientY;
            offsetX = event.clientX - nr.left;
            offsetY = event.clientY - nr.top;
            dragging = true;
            moved = false;
            node.classList.add("dragging");
            try { node.setPointerCapture(event.pointerId); } catch (e) {}
        });

        node.addEventListener("pointermove", function (event) {
            if (!dragging || !getCanvas()) return;

            const dx = event.clientX - startX;
            const dy = event.clientY - startY;
            if (!moved && Math.hypot(dx, dy) < 5) return;
            moved = true;

            const canvas = getCanvas();
            let left = event.clientX - rect.left - offsetX;
            let top = event.clientY - rect.top - offsetY;

            left = Math.max(5, Math.min(left, canvas.clientWidth - node.offsetWidth - 5));
            top = Math.max(5, Math.min(top, canvas.clientHeight - node.offsetHeight - 5));

            node.style.left = left + "px";
            node.style.top = top + "px";
            node.style.transform = "none";

            drawConnections();
        });

        node.addEventListener("pointerup", function (event) {
            dragging = false;
            node.classList.remove("dragging");
            try { node.releasePointerCapture(event.pointerId); } catch (e) {}
            drawConnections();
        });

        node.addEventListener("pointercancel", function () {
            dragging = false;
            node.classList.remove("dragging");
            drawConnections();
        });
    }

    function prepareNodes() {
        getNodes().forEach(prepareNode);
        drawConnections();
    }

    /* Capture click before the original topology handlers. */
    document.addEventListener("click", function (event) {
        const canvas = getCanvas();
        if (!canvas || !getState()) return;

        const node = event.target.closest ? event.target.closest(NODE_SELECTOR) : null;
        if (node) {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            selectNode(node);
            return;
        }

        const group = event.target.closest ? event.target.closest("#" + SVG_ID + " g[data-connection-index]") : null;
        if (group) {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            removeConnectionAt(Number(group.dataset.connectionIndex));
        }
    }, true);

    let observer = null;

    function startObserver() {
        if (observer) return;
        observer = new MutationObserver(function () {
            prepareNodes();
        });
        observer.observe(document.body, { childList: true, subtree: true });
        prepareNodes();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", startObserver, { once: true });
    } else {
        startObserver();
    }

    window.updateTopologyPatchConnections = drawConnections;
    window.__resetTopologyBuilderSelection = clearSelection;

    console.log("🛠️ Spider Web Nexus topology builder patch ACTIVE — drag + select-to-connect + visible links restored.");
})();
