/*====================================================
    SPIDER WEB NEXUS
    SWITCHING VISUAL PATCH

    Only fixes route visualization. Existing transmission behavior
    and topology interaction remain untouched.
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

    /* Highlight an arbitrary route, including cross-link routes. */
    function highlightActualRoute(nodes) {
        const ids = routeIds(nodes);
        clearRouteGlow();

        document.querySelectorAll(".cleanRouteLine").forEach(line => {
            const routeIndex = Number(line.dataset.route);
            const route = typeof TransmissionNetwork !== "undefined"
                ? TransmissionNetwork.routes?.[routeIndex]
                : null;
            if (!route) return;

            let belongs = false;
            for (let i = 0; i < route.nodes.length - 1; i++) {
                const a = route.nodes[i];
                const b = route.nodes[i + 1];
                if (ids.has(a) && ids.has(b)) {
                    belongs = true;
                    break;
                }
            }

            line.setAttribute("stroke-opacity", belongs ? "1" : ".12");
            line.setAttribute("stroke-width", belongs ? "8" : "4");
        });

        ids.forEach(id => {
            document.getElementById("tnode-" + id)?.classList.add("pathActive");
        });

        document.querySelectorAll(".cleanCrossLink").forEach(line => {
            const active = ids.has(line.dataset.from) && ids.has(line.dataset.to);
            line.classList.toggle("activeCross", active);
        });
    }

    function clearAutomaticPathButtonGlow() {
        document.querySelectorAll(".transmissionPathBtn").forEach(btn => {
            btn.classList.remove("active");
        });
    }

    /* Automatic modes must not leave Path 1 looking selected. */
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

    /* Circuit switching keeps the selected dedicated path glowing. */
    const originalSelectPath = window.selectTransmissionPath;
    if (typeof originalSelectPath === "function") {
        window.selectTransmissionPath = function (index) {
            originalSelectPath.apply(this, arguments);
            if (typeof TransmissionNetwork !== "undefined") {
                const route = TransmissionNetwork.routes?.[index];
                if (route) highlightActualRoute(route.nodes);
            }
        };
    }

    /* Packet switching: highlight the actual route of each packet. */
    const originalRunPacket = window.runPacketSwitching;
    if (typeof originalRunPacket === "function") {
        window.runPacketSwitching = function () {
            if (typeof TransmissionNetwork === "undefined") {
                return originalRunPacket.apply(this, arguments);
            }

            const routePool = [
                ...TransmissionNetwork.routes.map(r => ({ name: r.name, nodes: r.nodes })),
                ...TransmissionNetwork.alternateRoutes
            ];

            const chosen = [];
            while (chosen.length < 5 && routePool.length) {
                const candidate = routePool[Math.floor(Math.random() * routePool.length)];
                if (!chosen.includes(candidate)) chosen.push(candidate);
            }

            const result = document.getElementById("resultPanel");
            if (result) result.innerHTML = `<b>📦 Packet Switching</b><br>Five packets are being sent. Watch each packet choose its own route.`;

            let done = 0;
            chosen.forEach((item, index) => setTimeout(() => {
                highlightActualRoute(item.nodes);

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

    /* Message switching: the complete message route glows before and during
       STORE → WAIT → FORWARD. */
    const originalRunMessage = window.runMessageSwitching;
    if (typeof originalRunMessage === "function") {
        window.runMessageSwitching = function () {
            if (typeof TransmissionNetwork === "undefined") {
                return originalRunMessage.apply(this, arguments);
            }

            const routes = TransmissionNetwork.alternateRoutes || [];
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

    /* Circuit switching: reinforce the selected dedicated route. */
    const originalRunCircuit = window.runCircuitSwitching;
    if (typeof originalRunCircuit === "function") {
        window.runCircuitSwitching = function () {
            if (typeof TransmissionNetwork !== "undefined") {
                const index = TransmissionNetwork.selectedPath ?? 0;
                const route = TransmissionNetwork.routes?.[index];
                if (route) highlightActualRoute(route.nodes);
            }
            return originalRunCircuit.apply(this, arguments);
        };
    }

    console.log("✨ Spider Web Nexus switching visual patch ACTIVE — actual routes now glow correctly.");
})();
