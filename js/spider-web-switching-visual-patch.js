/*====================================================
    SPIDER WEB NEXUS
    SWITCHING VISUAL PATCH

    Purpose:
    - Keep the existing packet/message/circuit logic intact.
    - Make the ACTUAL route used during transmission glow.
    - Remove the misleading Path 1 highlight when automatic
      routing is selected.
    - Highlight cross-links only when the actual route uses them.
    - Keep circuit switching visually dedicated to its selected path.
====================================================*/
(function () {
    "use strict";

    if (window.__SPIDER_SWITCHING_VISUAL_PATCH__) return;
    window.__SPIDER_SWITCHING_VISUAL_PATCH__ = true;

    function routeIds(nodes) {
        return new Set((nodes || []).map(n => typeof n === "string" ? n : n.id));
    }

    function clearRouteGlow() {
        document.querySelectorAll(".cleanRouteLine").forEach(line => {
            line.setAttribute("stroke-opacity", ".16");
            line.setAttribute("stroke-width", "4");
        });
        document.querySelectorAll(".cleanTransmissionNode").forEach(node => {
            node.classList.remove("pathActive");
        });
        document.querySelectorAll(".cleanCrossLink").forEach(line => {
            line.classList.remove("activeCross");
        });
    }

    /* Highlight any route, including alternate cross-link routes. */
    function highlightActualRoute(nodes) {
        const ids = routeIds(nodes);
        clearRouteGlow();

        /* Main-route segments that belong to this actual route. */
        document.querySelectorAll(".cleanRouteLine").forEach(line => {
            const routeIndex = Number(line.dataset.route);
            const route = window.TransmissionNetwork?.routes?.[routeIndex];
            if (!route) return;

            const routeNodeIds = route.nodes;
            let belongs = false;
            for (let i = 0; i < routeNodeIds.length - 1; i++) {
                const a = routeNodeIds[i];
                const b = routeNodeIds[i + 1];
                if (ids.has(a) && ids.has(b)) {
                    belongs = true;
                    break;
                }
            }

            line.setAttribute("stroke-opacity", belongs ? "1" : ".12");
            line.setAttribute("stroke-width", belongs ? "8" : "4");
        });

        /* Highlight every node actually used by the route. */
        ids.forEach(id => {
            document.getElementById("tnode-" + id)?.classList.add("pathActive");
        });

        /* Highlight only cross-links that are actually traversed. */
        document.querySelectorAll(".cleanCrossLink").forEach(line => {
            const from = line.dataset.from;
            const to = line.dataset.to;
            const active = ids.has(from) && ids.has(to);
            line.classList.toggle("activeCross", active);
        });
    }

    function clearAutomaticPathButtonGlow() {
        document.querySelectorAll(".transmissionPathBtn").forEach(btn => {
            btn.classList.remove("active");
        });
    }

    /* Wrap the existing UI updater so automatic techniques do not falsely
       display Path 1 as if it were selected by the student. */
    const originalUpdateUI = window.updateTransmissionTechniqueUI;
    if (typeof originalUpdateUI === "function") {
        window.updateTransmissionTechniqueUI = function (technique) {
            originalUpdateUI.apply(this, arguments);
            if (technique !== "circuitSwitching") {
                clearAutomaticPathButtonGlow();
                clearRouteGlow();
            }
        };
    }

    /* Circuit switching: the selected dedicated path remains the only glowing
       route. This simply reinforces the existing behavior. */
    const originalSelectPath = window.selectTransmissionPath;
    if (typeof originalSelectPath === "function") {
        window.selectTransmissionPath = function (index) {
            originalSelectPath.apply(this, arguments);
            const route = window.TransmissionNetwork?.routes?.[index];
            if (route) highlightActualRoute(route.nodes);
        };
    }

    /* Packet switching: each packet highlights the route it is actually using,
       including alternate cross-link routes. */
    const originalRunPacket = window.runPacketSwitching;
    if (typeof originalRunPacket === "function") {
        window.runPacketSwitching = function () {
            const routePool = [
                ...(window.TransmissionNetwork?.routes || []).map(r => ({ name: r.name, nodes: r.nodes })),
                ...(window.TransmissionNetwork?.alternateRoutes || [])
            ];
            const chosen = [];
            while (chosen.length < 5 && routePool.length) {
                const candidate = routePool[Math.floor(Math.random() * routePool.length)];
                if (!chosen.includes(candidate)) chosen.push(candidate);
            }

            const result = document.getElementById("resultPanel");
            if (result) {
                result.innerHTML = `<b>📦 Packet Switching</b><br>Five packets are being sent. Watch each packet choose its own route.`;
            }

            let done = 0;
            chosen.forEach((item, index) => setTimeout(() => {
                highlightActualRoute(item.nodes);
                if (typeof window.highlightCrossLinksForNodes === "function") {
                    window.highlightCrossLinksForNodes(window.getNamedRoutePoints(item.nodes));
                }

                const points = typeof window.getNamedRoutePoints === "function"
                    ? window.getNamedRoutePoints(item.nodes)
                    : [];

                if (typeof window.animateNodeSequence === "function") {
                    window.animateNodeSequence("📦", points, 3200, {}, () => {
                        done++;
                        if (done === chosen.length) {
                            clearRouteGlow();
                            window.transmissionCompleted?.("📦 All packets reached the receiver. Different packets used different routes, including cross-links.");
                        }
                    });
                }
            }, index * 650));
        };
    }

    /* Message switching: highlight the complete store-and-forward route before
       the envelope starts, rather than leaving Path 1 glowing. */
    const originalRunMessage = window.runMessageSwitching;
    if (typeof originalRunMessage === "function") {
        window.runMessageSwitching = function () {
            const routes = window.TransmissionNetwork?.alternateRoutes || [];
            const candidate = routes[Math.floor(Math.random() * routes.length)];
            if (!candidate) return originalRunMessage.apply(this, arguments);

            const points = typeof window.getNamedRoutePoints === "function"
                ? window.getNamedRoutePoints(candidate.nodes)
                : [];
            const result = document.getElementById("resultPanel");

            clearAutomaticPathButtonGlow();
            highlightActualRoute(candidate.nodes);

            if (result) {
                result.innerHTML = `<b>📨 Message Switching</b><br>One complete message is travelling through <strong>${candidate.name}</strong>. Watch each router STORE the message, pause, then FORWARD it.`;
            }

            if (typeof window.animateMessageSwitching === "function") {
                window.animateMessageSwitching(points, () => {
                    clearRouteGlow();
                    window.transmissionCompleted?.(`📨 The complete message reached the receiver after STORE → WAIT → FORWARD at each intermediate router on ${candidate.name}.`);
                });
            }
        };
    }

    /* Circuit switching should not be affected by automatic-route cleanup. */
    const originalRunCircuit = window.runCircuitSwitching;
    if (typeof originalRunCircuit === "function") {
        window.runCircuitSwitching = function () {
            const index = window.TransmissionNetwork?.selectedPath ?? 0;
            const route = window.TransmissionNetwork?.routes?.[index];
            if (route) highlightActualRoute(route.nodes);
            return originalRunCircuit.apply(this, arguments);
        };
    }

    /* The existing animation calls markCurrentHop with routeIndex 0 even for
       cross-link routes. Replace only the visual part so the current hop is
       still highlighted without changing transmission behavior. */
    const originalMarkHop = window.markCurrentHop;
    if (typeof originalMarkHop === "function") {
        window.markCurrentHop = function (point, routeIndex, hopIndex, totalHops) {
            document.querySelectorAll(".cleanTransmissionNode").forEach(n => n.classList.remove("currentHop"));
            if (point) document.getElementById("tnode-" + point.id)?.classList.add("currentHop");
            return originalMarkHop.apply(this, arguments);
        };
    }

    console.log("✨ Spider Web Nexus switching visual patch ACTIVE — actual packet/message/circuit routes now glow correctly.");
})();
