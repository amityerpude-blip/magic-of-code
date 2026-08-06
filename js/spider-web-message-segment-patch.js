/*====================================================
    SPIDER WEB NEXUS
    MESSAGE SWITCHING — HOP-BY-HOP VISUAL PATCH

    Only Message Switching visualization is changed here.
    Packet Switching, Circuit Switching and topology builder are untouched.

    Behaviour:
    • One complete message/envelope travels node-to-node.
    • Only the CURRENT link glows.
    • Once a hop is completed, that link is released/dimmed.
    • At an intermediate router the message is STORE → WAIT → FORWARD.
    • The next link glows only when the message starts the next hop.
====================================================*/
(function () {
    "use strict";

    if (window.__SPIDER_MESSAGE_SEGMENT_PATCH__) return;
    window.__SPIDER_MESSAGE_SEGMENT_PATCH__ = true;

    function getPointPosition(point) {
        return {
            x: Number(point?.x) || 0,
            y: Number(point?.y) || 0
        };
    }

    function clearAllMessageEdgeGlow() {
        document.querySelectorAll(".cleanRouteLine").forEach(line => {
            line.setAttribute("stroke-opacity", ".14");
            line.setAttribute("stroke-width", "4");
        });
        document.querySelectorAll(".cleanCrossLink").forEach(line => {
            line.classList.remove("activeCross");
        });
    }

    function samePoint(a, b) {
        return Math.abs(Number(a) - Number(b)) < 0.2;
    }

    function highlightMessageEdge(from, to) {
        clearAllMessageEdgeGlow();

        const a = getPointPosition(from);
        const b = getPointPosition(to);
        let found = false;

        document.querySelectorAll(".cleanRouteLine").forEach(line => {
            const x1 = parseFloat(line.getAttribute("x1"));
            const y1 = parseFloat(line.getAttribute("y1"));
            const x2 = parseFloat(line.getAttribute("x2"));
            const y2 = parseFloat(line.getAttribute("y2"));

            const forward =
                samePoint(x1, a.x) && samePoint(y1, a.y) &&
                samePoint(x2, b.x) && samePoint(y2, b.y);
            const reverse =
                samePoint(x1, b.x) && samePoint(y1, b.y) &&
                samePoint(x2, a.x) && samePoint(y2, a.y);

            if (forward || reverse) {
                line.setAttribute("stroke-opacity", "1");
                line.setAttribute("stroke-width", "8");
                found = true;
            }
        });

        document.querySelectorAll(".cleanCrossLink").forEach(line => {
            const fromId = line.dataset.from;
            const toId = line.dataset.to;
            const matches =
                (fromId === from.id && toId === to.id) ||
                (fromId === to.id && toId === from.id);

            if (matches) {
                line.classList.add("activeCross");
                found = true;
            }
        });

        const fromEl = document.getElementById("tnode-" + from.id);
        const toEl = document.getElementById("tnode-" + to.id);
        fromEl?.classList.add("pathActive");
        toEl?.classList.add("pathActive");

        return found;
    }

    function clearHopNodeGlow() {
        document.querySelectorAll(".cleanTransmissionNode").forEach(node => {
            node.classList.remove("pathActive", "currentHop", "packetNode");
        });
    }

    function updateMessageStatus(point, hop, total) {
        const result = document.getElementById("resultPanel");
        if (!result) return;
        result.innerHTML =
            `<b>📨 Message Switching — Hop ${hop} of ${total}</b><br>` +
            `Complete message is travelling node-to-node.<br>` +
            `<strong>Current node: ${point.name || point.id}</strong>`;
    }

    function moveMessageBetween(from, to, duration, done) {
        const canvas = document.getElementById("transmissionCanvas");
        if (!canvas) {
            done?.();
            return;
        }

        const packet = document.createElement("div");
        packet.className = "cleanPacket messageHopPacket";
        packet.textContent = "📨";
        packet.style.position = "absolute";
        packet.style.zIndex = "20";
        packet.style.pointerEvents = "none";
        packet.style.fontSize = "26px";
        packet.style.transform = "translate(-50%, -50%)";
        canvas.appendChild(packet);

        const start = getPointPosition(from);
        const end = getPointPosition(to);
        const startTime = performance.now();

        function frame(now) {
            const progress = Math.min(1, (now - startTime) / duration);
            const eased = progress * (2 - progress);
            const x = start.x + (end.x - start.x) * eased;
            const y = start.y + (end.y - start.y) * eased;

            packet.style.left = x + "%";
            packet.style.top = y + "%";

            if (progress < 1) {
                requestAnimationFrame(frame);
            } else {
                packet.remove();
                done?.();
            }
        }

        packet.style.left = start.x + "%";
        packet.style.top = start.y + "%";
        requestAnimationFrame(frame);
    }

    function runHopByHopMessage(candidate) {
        const points = typeof window.getNamedRoutePoints === "function"
            ? window.getNamedRoutePoints(candidate.nodes)
            : [];

        if (!points || points.length < 2) return;

        const totalHops = points.length - 1;
        const result = document.getElementById("resultPanel");

        document.querySelectorAll(".transmissionPathBtn").forEach(btn => {
            btn.classList.remove("active");
        });
        clearAllMessageEdgeGlow();
        clearHopNodeGlow();

        if (result) {
            result.innerHTML =
                `<b>📨 Message Switching</b><br>` +
                `One complete message is travelling through <strong>${candidate.name}</strong>.<br>` +
                `Each link is released after its hop is completed.`;
        }

        let index = 0;

        function nextHop() {
            if (index >= totalHops) {
                clearAllMessageEdgeGlow();
                clearHopNodeGlow();
                window.transmissionCompleted?.(
                    `📨 The complete message reached the receiver after STORE → WAIT → FORWARD at each intermediate router on ${candidate.name}.`
                );
                return;
            }

            const from = points[index];
            const to = points[index + 1];

            clearHopNodeGlow();
            highlightMessageEdge(from, to);
            updateMessageStatus(to, index + 1, totalHops);

            moveMessageBetween(from, to, 900, () => {
                clearHopNodeGlow();
                const destinationEl = document.getElementById("tnode-" + to.id);
                destinationEl?.classList.add("currentHop");

                /* Store-and-forward at every intermediate router. */
                if (index + 1 < points.length - 1 && typeof window.storeAndForwardPause === "function") {
                    window.storeAndForwardPause(to, 900, () => {
                        clearAllMessageEdgeGlow();
                        clearHopNodeGlow();
                        index++;
                        setTimeout(nextHop, 160);
                    });
                } else {
                    clearAllMessageEdgeGlow();
                    clearHopNodeGlow();
                    index++;
                    setTimeout(nextHop, 160);
                }
            });
        }

        nextHop();
    }

    /* Override only Message Switching after the existing visual patch loads. */
    window.runMessageSwitching = function () {
        if (typeof TransmissionNetwork === "undefined" ||
            !Array.isArray(TransmissionNetwork.alternateRoutes) ||
            !TransmissionNetwork.alternateRoutes.length) {
            return;
        }

        const candidate =
            TransmissionNetwork.alternateRoutes[
                Math.floor(Math.random() * TransmissionNetwork.alternateRoutes.length)
            ];

        runHopByHopMessage(candidate);
    };

    console.log("📨 Message Switching hop-by-hop visual patch ACTIVE.");
})();
