/*==================================================
  SPIDER WEB NEXUS - NODE TO NODE PACKET ANIMATION
  Keeps the network visible, but only the CURRENT
  segment glows while a packet is travelling.
==================================================*/
(function () {
    "use strict";

    function pointMatches(line, a, b) {
        if (!line || !a || !b) return false;
        const x1 = String(line.getAttribute("x1"));
        const y1 = String(line.getAttribute("y1"));
        const x2 = String(line.getAttribute("x2"));
        const y2 = String(line.getAttribute("y2"));
        const ax = a.x + "%";
        const ay = a.y + "%";
        const bx = b.x + "%";
        const by = b.y + "%";
        return (x1 === ax && y1 === ay && x2 === bx && y2 === by) ||
               (x1 === bx && y1 === by && x2 === ax && y2 === ay);
    }

    function clearSegmentGlow() {
        document.querySelectorAll(".cleanRouteLine").forEach(line => {
            line.setAttribute("stroke-opacity", ".16");
            line.setAttribute("stroke-width", "4");
            line.style.filter = "none";
        });
        document.querySelectorAll(".cleanCrossLink").forEach(line => {
            line.classList.remove("activeCross");
            line.style.strokeWidth = "2.5";
            line.style.strokeOpacity = ".38";
            line.style.filter = "none";
        });
    }

    function highlightCurrentSegment(a, b) {
        clearSegmentGlow();
        if (!a || !b) return;

        let found = false;

        document.querySelectorAll(".cleanRouteLine").forEach(line => {
            if (pointMatches(line, a, b)) {
                line.setAttribute("stroke-opacity", "1");
                line.setAttribute("stroke-width", "9");
                line.style.filter = "drop-shadow(0 0 7px rgba(250,204,21,.95))";
                found = true;
            }
        });

        document.querySelectorAll(".cleanCrossLink").forEach(line => {
            const from = TransmissionNetwork.nodes.find(n => n.id === line.dataset.from);
            const to = TransmissionNetwork.nodes.find(n => n.id === line.dataset.to);
            if ((from === a && to === b) || (from === b && to === a)) {
                line.classList.add("activeCross");
                line.style.strokeWidth = "6";
                line.style.strokeOpacity = ".98";
                line.style.filter = "drop-shadow(0 0 7px rgba(250,204,21,.95))";
                found = true;
            }
        });

        return found;
    }

    function markPacketHop(point, nextPoint, hopIndex, totalHops, routeName) {
        document.querySelectorAll(".cleanTransmissionNode").forEach(n => {
            n.classList.remove("packetNode", "currentHop", "storingNode");
        });

        const node = document.getElementById("tnode-" + point.id);
        if (node) node.classList.add("currentHop");

        highlightCurrentSegment(point, nextPoint);

        const result = document.getElementById("resultPanel");
        if (result) {
            result.innerHTML = `<b>📦 Packet is travelling...</b><br>${routeName || "Route"} &nbsp;|&nbsp; Hop ${Math.min(hopIndex + 1, totalHops)} of ${totalHops}<br><strong>Current node: ${point.name}</strong>`;
        }
    }

    /* Replace the shared animation so each packet lights only its active hop. */
    window.animateNodeSequence = function (icon, points, duration, options = {}, onDone) {
        const canvas = document.getElementById("transmissionCanvas");
        if (!canvas || !points || points.length < 2) {
            onDone?.();
            return;
        }

        const packet = document.createElement("div");
        packet.className = "cleanPacket";
        packet.textContent = icon;
        canvas.appendChild(packet);

        const segmentDuration = Math.max(260, duration / (points.length - 1));
        let segment = 0;
        let stopped = false;

        const routeName = options.routeName || "Automatic route";

        function finish() {
            if (stopped) return;
            stopped = true;
            packet.remove();
            document.querySelectorAll(".cleanTransmissionNode").forEach(n =>
                n.classList.remove("packetNode", "currentHop", "storingNode")
            );
            document.querySelectorAll(".storeBadge").forEach(b => b.remove());
            clearSegmentGlow();
            onDone?.();
        }

        function travelSegment() {
            if (segment >= points.length - 1) {
                finish();
                return;
            }

            const a = points[segment];
            const b = points[segment + 1];
            markPacketHop(a, b, segment, points.length - 1, routeName);

            const start = performance.now();
            function frame(now) {
                if (stopped) return;
                const t = Math.min(1, (now - start) / segmentDuration);
                packet.style.left = (a.x + (b.x - a.x) * t) + "%";
                packet.style.top = (a.y + (b.y - a.y) * t) + "%";

                if (t < 1) {
                    const id = requestAnimationFrame(frame);
                    TransmissionNetwork.animationIds.push(id);
                } else {
                    segment++;
                    if (options.storeForward && segment < points.length - 1) {
                        if (typeof storeAndForwardPause === "function") {
                            storeAndForwardPause(b, options.storeDuration || 850, travelSegment);
                        } else {
                            setTimeout(travelSegment, options.hopDelay || 180);
                        }
                    } else {
                        setTimeout(travelSegment, options.hopDelay || 180);
                    }
                }
            }

            const id = requestAnimationFrame(frame);
            TransmissionNetwork.animationIds.push(id);
        }

        travelSegment();
    };

    /* Packet switching must NOT pre-highlight a complete route. */
    window.runPacketSwitching = function () {
        const result = document.getElementById("resultPanel");
        if (result) {
            result.innerHTML = `<b>📦 Packet Switching</b><br>Five packets are being sent. Each packet may use a different route, and only its current node-to-node link glows.`;
        }

        const routePool = [
            ...TransmissionNetwork.routes.map(r => ({ name: r.name, nodes: r.nodes })),
            ...TransmissionNetwork.alternateRoutes
        ];
        const chosen = [];
        while (chosen.length < 5) {
            const candidate = routePool[Math.floor(Math.random() * routePool.length)];
            if (!chosen.includes(candidate)) chosen.push(candidate);
        }

        let done = 0;
        chosen.forEach((item, index) => setTimeout(() => {
            clearSegmentGlow();
            const points = getNamedRoutePoints(item.nodes);
            animateNodeSequence("📦", points, 3200, {
                routeName: item.name
            }, () => {
                done++;
                if (done === chosen.length) {
                    clearSegmentGlow();
                    document.querySelectorAll(".cleanTransmissionNode").forEach(n =>
                        n.classList.remove("currentHop")
                    );
                    transmissionCompleted("📦 All packets reached the receiver. Each packet travelled hop-by-hop, using different routes where appropriate.");
                }
            });
        }, index * 650));
    };

    /* Message switching also uses hop-by-hop highlighting; the full route stays dim. */
    window.runMessageSwitching = function () {
        const candidate = TransmissionNetwork.alternateRoutes[
            Math.floor(Math.random() * TransmissionNetwork.alternateRoutes.length)
        ];
        const points = getNamedRoutePoints(candidate.nodes);
        const result = document.getElementById("resultPanel");
        if (result) {
            result.innerHTML = `<b>📨 Message Switching</b><br>One complete message is travelling through <strong>${candidate.name}</strong>. Watch each router STORE the message, pause, then FORWARD it.`;
        }
        clearSegmentGlow();
        animateNodeSequence("📨", points, Math.max(5200, (points.length - 1) * 900), {
            routeName: candidate.name,
            storeForward: true,
            storeDuration: 900,
            hopDelay: 120
        }, () => transmissionCompleted(`📨 The complete message reached the receiver after STORE → WAIT → FORWARD at each intermediate router on ${candidate.name}.`));
    };

    /* Circuit switching intentionally keeps its complete dedicated path glowing. */
    console.log("🕸️ Node-to-node packet animation fix loaded");
})();
