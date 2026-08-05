
(function injectTransmissionLayoutFix() {
    const css = `
/* ===== DATA TRANSMISSION LAYOUT FIX ===== */
#transmissionCanvas,
.transmissionCanvas {
    position: relative !important;
    width: 100% !important;
    min-height: 280px !important;
    height: 320px !important;
    margin: 28px auto !important;
    padding: 0 !important;
    overflow: hidden !important;
    box-sizing: border-box !important;
    border: 2px solid rgba(79,195,247,.35) !important;
    border-radius: 18px !important;
    background: rgba(10,20,40,.75) !important;
}

#transmissionCanvas .networkNode,
.transmissionCanvas .networkNode {
    position: absolute !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    width: 110px !important;
    min-width: 110px !important;
    height: 100px !important;
    z-index: 5 !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    box-sizing: border-box !important;
}

#transmissionCanvas .sender,
.transmissionCanvas .sender {
    left: 7% !important;
}

#transmissionCanvas .receiver,
.transmissionCanvas .receiver {
    left: auto !important;
    right: 7% !important;
}

#transmissionCanvas .transmissionPath,
.transmissionCanvas .transmissionPath {
    position: absolute !important;
    left: 18% !important;
    right: 18% !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    height: 8px !important;
    z-index: 1 !important;
}

#transmissionCanvas .dataPacket,
.transmissionCanvas .dataPacket {
    position: absolute !important;
    z-index: 10 !important;
    top: calc(50% - 18px) !important;
}

@media (max-width: 700px) {
    #transmissionCanvas,
    .transmissionCanvas {
        min-height: 360px !important;
        height: 360px !important;
    }

    #transmissionCanvas .networkNode,
    .transmissionCanvas .networkNode {
        width: 90px !important;
        min-width: 90px !important;
    }

    #transmissionCanvas .sender,
    .transmissionCanvas .sender {
        left: 4% !important;
    }

    #transmissionCanvas .receiver,
    .transmissionCanvas .receiver {
        right: 4% !important;
    }

    #transmissionCanvas .transmissionPath,
    .transmissionCanvas .transmissionPath {
        left: 17% !important;
        right: 17% !important;
    }
}
`;
    function applyTransmissionFix() {
        if (!document.getElementById("transmissionLayoutFix")) {
            const style = document.createElement("style");
            style.id = "transmissionLayoutFix";
            style.textContent = css;
            document.head.appendChild(style);
        }
    }
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", applyTransmissionFix);
    } else {
        applyTransmissionFix();
    }
})();


/*==================================================
        NETWORK TOPOLOGY VISUAL HELP
==================================================*/

(function injectNetworkTopologyStyles(){

    if (document.getElementById("networkTopologyVisualFix")) {
        return;
    }

    const style = document.createElement("style");
    style.id = "networkTopologyVisualFix";

    style.textContent = `
        #topologyCanvas {
            position: relative !important;
            min-height: 440px !important;
            overflow: hidden !important;
        }

        #topologyCanvas .topologyPlayHint {
            position: absolute;
            left: 50%;
            top: 14px;
            transform: translateX(-50%);
            z-index: 20;
            width: min(430px, calc(100% - 40px));
            padding: 9px 14px;
            border: 1px solid rgba(0,217,255,.35);
            border-radius: 12px;
            background: rgba(7,25,48,.88);
            color: #fff;
            text-align: center;
            pointer-events: none;
            box-sizing: border-box;
        }

        #topologyCanvas .topologyPlayHint span {
            margin-right: 5px;
        }

        #topologyCanvas .topologyPlayHint strong {
            display: inline-block;
            margin-right: 5px;
        }

        #topologyCanvas .topologyPlayHint small {
            display: block;
            opacity: .78;
            margin-top: 2px;
            font-size: 11px;
        }

        #topologyCanvas .topologyNode {
            z-index: 10;
            box-sizing: border-box;
            transition: transform .15s ease, box-shadow .15s ease;
        }

        #topologyCanvas .topologyNode:hover {
            transform: translate(-50%,-50%) scale(1.05);
        }

        #topologyCanvas .topologyNode.selected {
            border-color: #ffe066 !important;
            box-shadow:
                0 0 0 4px rgba(255,224,102,.22),
                0 0 24px rgba(255,224,102,.65) !important;
            transform: translate(-50%,-50%) scale(1.08);
        }

        #topologyCanvas .topologyNode.dragging {
            opacity: .9;
            cursor: grabbing;
            z-index: 30;
        }

        #topologyCanvas .connectionLayer {
            z-index: 1;
        }
    `;

    document.head.appendChild(style);

})();

/*==================================================
        SPIDER WEB NEXUS - NETWORK SIMULATOR
        COMPLETE REPLACEMENT FILE
==================================================*/

const NetworkEngine = {
    data: null,
    simulator: null,
    container: null,
    workspace: null,
    activeModule: 0,

    state: {
        topology: null,
        selectedNode: null,
        connections: [],
        transmission: null,
        packets: [],
        score: 0,
        lives: 3,
        completed: false,
        playerHealth: 100,
        enemyHealth: 100,
        currentQuestion: 0,
        securityStarted: false,
        securityChecked: false,
        battleStarted: false
    }
};

/*==================================================
        COMPONENT SHELL
==================================================*/

function NetworkSimulatorComponent() {
    return `
        <section id="networkSection" class="lessonContent">
            <div id="networkSimulator"></div>
        </section>
    `;
}

/*==================================================
        INITIALIZATION
==================================================*/

async function initializeNetworkSimulator(data) {
    console.log("Initializing Spider Web Nexus...");

    if (!data) {
        console.error("NetworkEngine: kingdom data is missing.");
        return;
    }

    NetworkEngine.data = data;
    NetworkEngine.simulator = data.networkSimulator || data;

    if (!NetworkEngine.simulator ||
        !Array.isArray(NetworkEngine.simulator.modules)) {
        console.error(
            "NetworkEngine: networkSimulator.modules was not found."
        );
        return;
    }

    let container = document.getElementById("networkSimulator");

    if (!container) {
        const section = document.getElementById("networkSection");

        if (section) {
            container = document.createElement("div");
            container.id = "networkSimulator";
            section.appendChild(container);
        }
    }

    if (!container) {
        console.error(
            "NetworkEngine: #networkSimulator container not found."
        );
        return;
    }

    NetworkEngine.container = container;

    resetNetworkState();
    renderNetwork();

    console.log("Spider Web Nexus Ready.");
}

/* Backward-compatible name */
function initializeNetwork(data) {
    return initializeNetworkSimulator(data);
}

/*==================================================
        RESET STATE
==================================================*/

function resetNetworkState() {
    NetworkEngine.activeModule = 0;

    NetworkEngine.state = {
        topology: null,
        selectedNode: null,
        connections: [],
        transmission: null,
        packets: [],
        score: 0,
        lives: 3,
        completed: false,
        playerHealth: 100,
        enemyHealth: 100,
        currentQuestion: 0,
        securityStarted: false,
        securityChecked: false,
        battleStarted: false
    };
}

/*==================================================
        MAIN RENDER
==================================================*/

function renderNetwork() {
    const container = NetworkEngine.container;

    if (!container) return;

    container.innerHTML = "";

    container.appendChild(createHeader());
    container.appendChild(createNavigation());

    const workspace = document.createElement("section");

    workspace.id = "networkWorkspace";
    workspace.className = "networkWorkspace";

    container.appendChild(workspace);

    NetworkEngine.workspace = workspace;

    openModule(0);
}

/*==================================================
        HEADER
==================================================*/

function createHeader() {
    const header = document.createElement("section");

    header.className = "networkHero";

    const title = document.createElement("h2");

    title.className = "networkTitle";

    title.textContent =
        NetworkEngine.simulator.title ||
        "🕸️ Spider Web Nexus";

    const description = document.createElement("p");

    description.className = "networkDescription";

    description.textContent =
        NetworkEngine.simulator.description ||
        "Build the network, transmit data, defend the system and defeat the Dark Hacker.";

    const status = document.createElement("div");

    status.className = "networkStatus";

    status.innerHTML = `
        <div class="statusCard">
            ⭐ Score
            <span id="networkScore">0</span>
        </div>

        <div class="statusCard">
            ❤️ Lives
            <span id="networkLives">3</span>
        </div>
    `;

    header.appendChild(title);
    header.appendChild(description);
    header.appendChild(status);

    return header;
}

/*==================================================
        NAVIGATION
==================================================*/

function createNavigation() {
    const navigation = document.createElement("nav");

    navigation.className = "networkNavigation";

    NetworkEngine.simulator.modules.forEach(
        (module, index) => {

            const button =
                document.createElement("button");

            button.className = "networkTab";

            button.dataset.index = index;

            if (index === NetworkEngine.activeModule) {
                button.classList.add("active");
            }

            button.innerHTML = `
                <span class="tabIcon">
                    ${module.icon || "🌐"}
                </span>

                <span class="tabTitle">
                    ${module.title || module.id}
                </span>
            `;

            button.addEventListener(
                "click",
                () => openModule(index)
            );

            navigation.appendChild(button);
        }
    );

    return navigation;
}

/*==================================================
        OPEN MODULE
==================================================*/

function openModule(index) {

    if (!NetworkEngine.simulator ||
        !Array.isArray(NetworkEngine.simulator.modules)) {
        return;
    }

    if (
        index < 0 ||
        index >= NetworkEngine.simulator.modules.length
    ) {
        return;
    }

    NetworkEngine.activeModule = index;

    document
        .querySelectorAll(".networkTab")
        .forEach((tab, i) => {

            tab.classList.toggle(
                "active",
                i === index
            );

        });

    if (!NetworkEngine.workspace) return;

    NetworkEngine.workspace.innerHTML = "";

    const module =
        NetworkEngine.simulator.modules[index];

    /*
       Some versions of the Spider Web JSON use different IDs for the
       same module (for example "switching", "transmission", or no id).
       Therefore identify the module by BOTH id and title.
    */
    const moduleId = String(module.id || module.key || module.name || "").toLowerCase();
    const moduleTitle = String(module.title || module.name || module.label || "").toLowerCase();
    const moduleText = JSON.stringify(module).toLowerCase();

    if (
        moduleId === "topologybuilder" ||
        moduleId === "topology" ||
        moduleTitle.includes("topology") ||
        moduleTitle.includes("build the network")
    ) {
        renderTopologyModule(module);
        return;
    }

    /*
       The second simulator tab is the Data Transmission / Switching
       section in this project. Some older JSON files do not give this
       module a stable id or title, so use the tab position as a final
       fallback. This prevents the section from becoming blank.
    */
    if (
        index === 1 ||
        moduleId === "datatransmission" ||
        moduleId === "transmission" ||
        moduleId === "switching" ||
        moduleId.includes("transmission") ||
        moduleId.includes("switch") ||
        moduleTitle.includes("data transmission") ||
        moduleTitle.includes("transmission") ||
        moduleTitle.includes("switching") ||
        moduleText.includes("packet switching") ||
        moduleText.includes("circuit switching") ||
        moduleText.includes("message switching")
    ) {
        renderTransmissionModule(module);
        return;
    }

    if (
        moduleId === "networksecurity" ||
        moduleId === "security" ||
        moduleTitle.includes("network security")
    ) {
        renderSecurityModule(module);
        return;
    }

    if (
        moduleId === "finalbattle" ||
        moduleId === "battle" ||
        moduleTitle.includes("final battle")
    ) {
        renderFinalBattle(module);
        return;
    }

    NetworkEngine.workspace.innerHTML = `
        <div class="comingSoon">
            <h2>🚧</h2>
            <p>${module.title || module.id || "This module"} is coming soon.</p>
        </div>
    `;
}

/*==================================================
        TOPOLOGY MODULE
==================================================*/

function renderTopologyModule(module) {

    const section =
        document.createElement("section");

    section.className = "networkModule";

    section.innerHTML = `
        <div class="moduleHeader">

            <h2>
                ${module.icon || "🌐"}
                ${module.title || "Topology Builder"}
            </h2>

            <p>
                ${module.description ||
                "Choose a topology and connect the devices correctly."}
            </p>

        </div>

        <div
            id="topologyCards"
            class="topologyGrid">
        </div>

        <div class="topologyInstruction">

            <strong>How to play:</strong>

            Select a topology.
            Then click one device and click another
            device to create a connection.

            Click a cable to remove it.
            You can also drag devices around the canvas.

        </div>

        <div
            id="topologyCanvas"
            class="topologyCanvas">
        </div>

        <div class="topologyControls">

            <button
                class="magicBtn"
                id="validateTopologyBtn">

                ${module.controls?.validateButton ||
                "✅ Validate"}

            </button>

            <button
                class="magicBtn"
                id="resetTopologyBtn">

                ${module.controls?.resetButton ||
                "🔄 Reset"}

            </button>

        </div>

        <div
            id="topologyResult"
            class="resultPanel">
        </div>
    `;

    NetworkEngine.workspace.appendChild(section);

    const grid =
        section.querySelector("#topologyCards");

    const topologies =
        Array.isArray(module.topologies)
            ? module.topologies
            : [];

    topologies.forEach(
        topology => {

            grid.appendChild(
                createTopologyCard(topology)
            );

        }
    );

    section
        .querySelector("#validateTopologyBtn")
        .addEventListener(
            "click",
            validateTopology
        );

    section
        .querySelector("#resetTopologyBtn")
        .addEventListener(
            "click",
            resetTopology
        );

    /*
       IMPORTANT:
       Automatically selects the first topology.
       Therefore Validate will never show
       "Please select a topology first"
       immediately after loading.
    */

    if (topologies.length > 0) {

        selectTopology(
            topologies[0].id
        );

    }
    else {

        showTopologyResult(
            "No topology definitions were found in the JSON data.",
            "warning"
        );

    }
}

/*==================================================
        TOPOLOGY CARD
==================================================*/

function createTopologyCard(topology) {

    const card =
        document.createElement("button");

    card.type = "button";

    card.className = "topologyCard";

    card.dataset.id = topology.id;

    card.innerHTML = `
        <div class="topologyIcon">
            🌐
        </div>

        <h3>
            ${topology.name || topology.id}
        </h3>

        <p>
            ${topology.description || ""}
        </p>
    `;

    card.addEventListener(
        "click",
        () => selectTopology(topology.id)
    );

    return card;
}

/*==================================================
        SELECT TOPOLOGY
==================================================*/

function selectTopology(topologyId) {

    const module =
        getModule("topologyBuilder");

    if (!module) return;

    const topology =
        (module.topologies || []).find(
            item => item.id === topologyId
        );

    if (!topology) {

        showNotification(
            "Selected topology was not found.",
            "warning"
        );

        return;
    }

    NetworkEngine.state.topology =
        topology.id;

    NetworkEngine.state.selectedNode =
        null;

    NetworkEngine.state.connections =
        [];

    NetworkEngine.state.completed =
        false;

    document
        .querySelectorAll(".topologyCard")
        .forEach(card => {

            card.classList.toggle(
                "active",
                card.dataset.id === topology.id
            );

        });

    renderNetworkDevices(topology);

    showTopologyResult(
        `🌐 ${topology.name || topology.id}
         selected. Connect the devices.`,
        "info"
    );
}


/*==================================================
        DEVICE SOURCE FIX
        Spider Web Nexus data defines devices at
        topologyBuilder.devices, not inside each
        individual topology.
==================================================*/

function getTopologyDevices() {

    const module = getModule("topologyBuilder");

    if (!module || !Array.isArray(module.devices)) {
        return [];
    }

    return module.devices;
}

/*==================================================
        RENDER DEVICES
==================================================*/

function renderNetworkDevices(topology) {

    const canvas =
        document.getElementById(
            "topologyCanvas"
        );

    if (!canvas) return;

    canvas.innerHTML = "";

    createSVGCanvas();

    // Devices are defined once in topologyBuilder.devices.
    // The selected topology supplies only its connection rules.
    const devices = getTopologyDevices();

    if (!devices.length) {

        canvas.innerHTML = `
            <div class="emptyCanvas">
                No devices are defined for this topology.
            </div>
        `;

        return;
    }

    const hint = document.createElement("div");
    hint.className = "topologyPlayHint";
    hint.innerHTML = `
        <span>🕸️</span>
        <strong>Connect the network</strong>
        <small>Click one device, then click another device.</small>
        <small>Click a glowing cable to remove it.</small>
    `;
    canvas.appendChild(hint);

    devices.forEach(
        (device, index) => {

            const node =
                createNetworkDevice(
                    device,
                    index
                );

            canvas.appendChild(node);

        }
    );

    initializeTopologyDragDrop();
}

/*==================================================
        DEVICE POSITION
==================================================*/

function getDevicePosition(
    device,
    index
) {

    if (
        Number.isFinite(
            Number(device.x)
        ) &&
        Number.isFinite(
            Number(device.y)
        )
    ) {

        return {
            x: Number(device.x),
            y: Number(device.y)
        };

    }

    const canvas =
        document.getElementById(
            "topologyCanvas"
        );

    const width =
        canvas
            ? canvas.clientWidth
            : 900;

    const columns = 4;

    const col =
        index % columns;

    const row =
        Math.floor(
            index / columns
        );

    return {

        x:
            60 +
            col *
            Math.max(
                150,
                (width - 220) /
                columns
            ),

        y:
            60 +
            row * 150

    };
}

/*==================================================
        CREATE DEVICE
==================================================*/

function createNetworkDevice(
    device,
    index
) {

    const node =
        document.createElement("div");

    node.className =
        "topologyNode";

    node.dataset.id =
        device.id;

    const position =
        getDevicePosition(
            device,
            index
        );

    node.style.left =
        `${position.x}px`;

    node.style.top =
        `${position.y}px`;

    node.innerHTML = `
        <div class="topologyNodeIcon">
            ${device.icon || "💻"}
        </div>

        <div class="topologyNodeName">
            ${device.name || device.id}
        </div>
    `;

    node.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            selectNetworkDevice(node);

        }
    );

    makeDraggable(node);

    return node;
}

/*==================================================
        SELECT DEVICE
==================================================*/

function selectNetworkDevice(node) {

    const deviceId =
        node.dataset.id;

    if (
        NetworkEngine.state.selectedNode === null
    ) {

        NetworkEngine.state.selectedNode =
            deviceId;

        node.classList.add(
            "selected"
        );

        showTopologyResult(
            `🔗 ${getDeviceName(deviceId)}
             selected. Now choose another device.`,
            "info"
        );

        return;
    }

    if (
        NetworkEngine.state.selectedNode ===
        deviceId
    ) {

        node.classList.remove(
            "selected"
        );

        NetworkEngine.state.selectedNode =
            null;

        return;
    }

    const from =
        NetworkEngine.state.selectedNode;

    const to =
        deviceId;

    createConnection(
        from,
        to
    );

    document
        .querySelectorAll(".topologyNode")
        .forEach(device => {

            device.classList.remove(
                "selected"
            );

        });

    NetworkEngine.state.selectedNode =
        null;
}

/*==================================================
        CREATE CONNECTION
==================================================*/

function createConnection(
    from,
    to
) {

    if (
        !canConnect(
            from,
            to
        )
    ) {
        return;
    }

    const exists =
        NetworkEngine.state.connections.some(
            connection => {

                return (

                    connection.from === from &&
                    connection.to === to

                ) || (

                    connection.from === to &&
                    connection.to === from

                );

            }
        );

    if (exists) {
        // Duplicate connections are ignored silently.
        return;
    }

    const connection = {
        from,
        to
    };

    NetworkEngine.state.connections.push(
        connection
    );

    drawConnection(
        connection
    );

    checkTopologyCompletion();
}

/*==================================================
        CONNECTION VALIDATION
==================================================*/

function canConnect(
    from,
    to
) {

    if (
        !NetworkEngine.state.topology
    ) {

        showNotification(
            "Please select a topology first.",
            "warning"
        );

        return false;
    }

    if (from === to) {

        showNotification(
            "A device cannot connect to itself.",
            "warning"
        );

        return false;
    }

    const topology =
        getSelectedTopology();

    if (!topology) return false;

    /*
       Only allow connections explicitly
       defined in the selected topology.
    */

    const topologyConnections =
        getTopologyConnections(topology);

    if (!topologyConnections.length) {
        return false;
    }

    const allowed =
        topologyConnections.some(
            connection => {

                return (

                    connection.from === from &&
                    connection.to === to

                ) || (

                    connection.from === to &&
                    connection.to === from

                );

            }
        );
    // Incorrect connections are intentionally silent.
    // Validate is the only place that reports whether the final network is correct.
    return allowed;
}

/*==================================================
        SVG CONNECTION LAYER
==================================================*/

function createSVGCanvas() {

    const canvas =
        document.getElementById(
            "topologyCanvas"
        );

    if (!canvas) return null;

    let svg =
        canvas.querySelector(
            "svg.connectionLayer"
        );

    if (svg) return svg;

    svg =
        document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
        );

    svg.classList.add(
        "connectionLayer"
    );

    svg.setAttribute(
        "width",
        "100%"
    );

    svg.setAttribute(
        "height",
        "100%"
    );

    Object.assign(
        svg.style,
        {
            position: "absolute",
            left: "0",
            top: "0",
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            overflow: "visible"
        }
    );

    canvas.prepend(svg);

    return svg;
}

/*==================================================
        DRAW CONNECTION
==================================================*/

function drawConnection(
    connection
) {

    const svg =
        createSVGCanvas();

    if (!svg) return;

    const from =
        document.querySelector(
            `.topologyNode[data-id="${cssEscape(connection.from)}"]`
        );

    const to =
        document.querySelector(
            `.topologyNode[data-id="${cssEscape(connection.to)}"]`
        );

    const canvas =
        document.getElementById(
            "topologyCanvas"
        );

    if (
        !from ||
        !to ||
        !canvas
    ) {
        return;
    }

    const canvasRect =
        canvas.getBoundingClientRect();

    const fromRect =
        from.getBoundingClientRect();

    const toRect =
        to.getBoundingClientRect();

    const x1 =
        fromRect.left -
        canvasRect.left +
        fromRect.width / 2;

    const y1 =
        fromRect.top -
        canvasRect.top +
        fromRect.height / 2;

    const x2 =
        toRect.left -
        canvasRect.left +
        toRect.width / 2;

    const y2 =
        toRect.top -
        canvasRect.top +
        toRect.height / 2;

    const line =
        document.createElementNS(
            "http://www.w3.org/2000/svg",
            "line"
        );

    line.setAttribute(
        "x1",
        x1
    );

    line.setAttribute(
        "y1",
        y1
    );

    line.setAttribute(
        "x2",
        x2
    );

    line.setAttribute(
        "y2",
        y2
    );

    line.setAttribute(
        "stroke",
        "#4FC3F7"
    );

    line.setAttribute(
        "stroke-width",
        "5"
    );

    line.setAttribute(
        "stroke-linecap",
        "round"
    );

    line.setAttribute(
        "stroke-dasharray",
        "12 8"
    );

    line.classList.add(
        "networkCable"
    );

    line.dataset.from =
        connection.from;

    line.dataset.to =
        connection.to;

    line.style.pointerEvents =
        "stroke";

    line.style.cursor =
        "pointer";

    line.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            removeConnection(
                connection
            );

        }
    );

    svg.appendChild(line);
}

/*==================================================
        UPDATE CONNECTIONS
==================================================*/

function updateConnections() {

    const svg =
        document.querySelector(
            "#topologyCanvas .connectionLayer"
        );

    if (!svg) return;

    svg.innerHTML = "";

    NetworkEngine.state.connections.forEach(
        connection => {

            drawConnection(
                connection
            );

        }
    );
}

/*==================================================
        DRAG DEVICES
==================================================*/

function makeDraggable(node) {

    let dragging = false;

    let offsetX = 0;
    let offsetY = 0;

    node.addEventListener(
        "mousedown",
        startDrag
    );

    function startDrag(event) {

        if (event.button !== 0) return;

        dragging = true;

        const rect =
            node.getBoundingClientRect();

        offsetX =
            event.clientX -
            rect.left;

        offsetY =
            event.clientY -
            rect.top;

        node.classList.add(
            "dragging"
        );

        document.addEventListener(
            "mousemove",
            drag
        );

        document.addEventListener(
            "mouseup",
            stopDrag
        );
    }

    function drag(event) {

        if (!dragging) return;

        const canvas =
            document.getElementById(
                "topologyCanvas"
            );

        if (!canvas) return;

        const rect =
            canvas.getBoundingClientRect();

        let left =
            event.clientX -
            rect.left -
            offsetX;

        let top =
            event.clientY -
            rect.top -
            offsetY;

        left =
            Math.max(
                5,
                Math.min(
                    left,
                    canvas.clientWidth -
                    node.offsetWidth -
                    5
                )
            );

        top =
            Math.max(
                5,
                Math.min(
                    top,
                    canvas.clientHeight -
                    node.offsetHeight -
                    5
                )
            );

        node.style.left =
            `${left}px`;

        node.style.top =
            `${top}px`;

        updateConnections();
    }

    function stopDrag() {

        dragging = false;

        node.classList.remove(
            "dragging"
        );

        document.removeEventListener(
            "mousemove",
            drag
        );

        document.removeEventListener(
            "mouseup",
            stopDrag
        );
    }
}

/*==================================================
        DRAG/DROP COMPATIBILITY
==================================================*/

let draggedDeviceId = null;

function initializeTopologyDragDrop() {

    const canvas =
        document.getElementById(
            "topologyCanvas"
        );

    if (!canvas) return;

    if (
        canvas.dataset.dragDropReady ===
        "true"
    ) {
        return;
    }

    canvas.dataset.dragDropReady =
        "true";

    canvas.addEventListener(
        "dragover",
        event => {

            event.preventDefault();

            event.dataTransfer.dropEffect =
                "copy";

        }
    );

    canvas.addEventListener(
        "drop",
        event => {

            event.preventDefault();

            const deviceId =
                event.dataTransfer.getData(
                    "text/plain"
                ) ||
                draggedDeviceId;

            if (!deviceId) return;

            addDeviceToCanvas(
                deviceId,
                event.clientX,
                event.clientY
            );
        }
    );
}

function startDeviceDrag(event) {

    draggedDeviceId =
        event.currentTarget.dataset.id;

    event.dataTransfer.effectAllowed =
        "copy";

    event.dataTransfer.setData(
        "text/plain",
        draggedDeviceId
    );
}

function handleDeviceDragOver(event) {

    event.preventDefault();

    event.dataTransfer.dropEffect =
        "copy";
}

function allowDeviceDrop(event) {

    event.preventDefault();

    event.dataTransfer.dropEffect =
        "copy";
}

function handleDeviceDrop(event) {

    event.preventDefault();

    const deviceId =
        event.dataTransfer.getData(
            "text/plain"
        ) ||
        draggedDeviceId;

    if (!deviceId) return;

    addDeviceToCanvas(
        deviceId,
        event.clientX,
        event.clientY
    );
}

function addDeviceToCanvas(
    deviceId,
    clientX,
    clientY
) {

    const topology =
        getSelectedTopology();

    const canvas =
        document.getElementById(
            "topologyCanvas"
        );

    if (
        !topology ||
        !canvas
    ) {
        return;
    }

    const device =
        getTopologyDevices().find(
            item => item.id === deviceId
        );

    if (!device) return;

    const rect =
        canvas.getBoundingClientRect();

    const node =
        createNetworkDevice(
            device,
            0
        );

    node.style.left =
        `${Math.max(
            5,
            clientX -
            rect.left -
            40
        )}px`;

    node.style.top =
        `${Math.max(
            5,
            clientY -
            rect.top -
            35
        )}px`;

    canvas.appendChild(
        node
    );
}


/*==================================================
        TOPOLOGY DATA ADAPTER
==================================================*/

function getTopologyConnections(topology) {

    if (!topology) return [];

    // Support the newer object format if present.
    if (Array.isArray(topology.connections)) {
        return topology.connections.map(connection => ({
            from: connection.from,
            to: connection.to
        }));
    }

    // Current Spider Web Nexus data stores the rules as:
    // topologyBuilder.validation[topology.id]
    const module = getModule("topologyBuilder");

    if (
        module &&
        module.validation &&
        Array.isArray(module.validation[topology.id])
    ) {
        return module.validation[topology.id].map(pair => ({
            from: pair[0],
            to: pair[1]
        }));
    }

    return [];
}

/*==================================================
        VALIDATE TOPOLOGY
==================================================*/

function validateTopology() {

    const topology =
        getSelectedTopology();

    if (!topology) {

        showNotification(
            "Please select a topology first.",
            "warning"
        );

        return false;
    }

    const actual =
        NetworkEngine.state.connections;

    const expected =
        getTopologyConnections(topology);

    let correct = 0;
    let wrong = 0;

    actual.forEach(
        connection => {

            if (
                isConnectionValid(
                    topology,
                    connection
                )
            ) {

                correct++;

            }
            else {

                wrong++;

            }

        }
    );

    const expectedCount =
        expected.length;

    const completed =
        correct === expectedCount &&
        wrong === 0 &&
        actual.length === expectedCount;

    if (completed) {

        NetworkEngine.state.completed =
            true;

        NetworkEngine.state.score +=
            20;

        updateScore();

        highlightConnections();

        showTopologyResult(
            `🏆 Excellent!
             Correct ${topology.name || "topology"}
             created. +20 points`,
            "success"
        );

        showNotification(
            "✅ Correct topology!",
            "success"
        );

        unlockTopologyReward();

        return true;
    }

    highlightConnections();

    showTopologyResult(
        `
            Correct connections:
            ${correct} / ${expectedCount}

            <br>

            Wrong connections:
            ${wrong}

            <br>

            Your current connections:
            ${actual.length}
        `,
        "warning"
    );

    showNotification(
        "The topology is not complete yet.",
        "warning"
    );

    return false;
}

/*==================================================
        CHECK CONNECTION
==================================================*/

function isConnectionValid(
    topology,
    connection
) {

    const topologyConnections =
        getTopologyConnections(topology);

    return topologyConnections.some(
        validConnection => {

            return (

                validConnection.from ===
                connection.from &&

                validConnection.to ===
                connection.to

            ) || (

                validConnection.from ===
                connection.to &&

                validConnection.to ===
                connection.from

            );

        }
    );
}

/*==================================================
        AUTO COMPLETION CHECK
==================================================*/

function checkTopologyCompletion() {

    const topology =
        getSelectedTopology();

    if (!topology) return;

    const expected =
        getTopologyConnections(topology);

    if (
        NetworkEngine.state.connections.length !==
        expected.length
    ) {
        return;
    }

    const complete =
        NetworkEngine.state.connections.every(
            connection =>
                isConnectionValid(
                    topology,
                    connection
                )
        );

    if (
        complete &&
        expected.length > 0
    ) {

        NetworkEngine.state.completed =
            true;

        showTopologyResult(
            "🏆 All connections are correct! Click Validate to claim the points.",
            "success"
        );
    }
}

/*==================================================
        HIGHLIGHT CONNECTIONS
==================================================*/

function highlightConnections() {

    const lines =
        document.querySelectorAll(
            "#topologyCanvas .connectionLayer line"
        );

    const topology =
        getSelectedTopology();

    if (!topology) return;

    lines.forEach(
        line => {

            const connection = {
                from: line.dataset.from,
                to: line.dataset.to
            };

            if (
                isConnectionValid(
                    topology,
                    connection
                )
            ) {

                line.setAttribute(
                    "stroke",
                    "#22C55E"
                );

            }
            else {

                line.setAttribute(
                    "stroke",
                    "#EF4444"
                );

            }
        }
    );
}

/*==================================================
        REMOVE CONNECTION
==================================================*/

function removeConnection(
    connection
) {

    NetworkEngine.state.connections =
        NetworkEngine.state.connections.filter(
            item => {

                return !(
                    (
                        item.from ===
                        connection.from &&

                        item.to ===
                        connection.to
                    ) ||

                    (
                        item.from ===
                        connection.to &&

                        item.to ===
                        connection.from
                    )
                );

            }
        );

    NetworkEngine.state.completed =
        false;

    updateConnections();
}

/*==================================================
        RESET TOPOLOGY
==================================================*/

function resetTopology() {

    NetworkEngine.state.selectedNode =
        null;

    NetworkEngine.state.connections =
        [];

    NetworkEngine.state.completed =
        false;

    document
        .querySelectorAll(".topologyNode")
        .forEach(
            device => {

                device.classList.remove(
                    "selected"
                );

            }
        );

    const topology =
        getSelectedTopology();

    if (topology) {

        renderNetworkDevices(
            topology
        );

        showTopologyResult(
            `${topology.name || "Topology"}
             reset. Build it again.`,
            "info"
        );
    }
}

/*==================================================
        TOPOLOGY REWARD
==================================================*/

function unlockTopologyReward() {

    if (
        typeof showReward ===
        "function"
    ) {

        showReward(
            "🌐 Network Architect",
            "You mastered this topology."
        );

    }
}

/*==================================================
        TRANSMISSION MODULE
==================================================*/


/*==================================================
        CLEAN DATA TRANSMISSION MODULE
        15 ROUTERS / 3 PATHS
==================================================*/

const TransmissionNetwork = {
    nodes: [
        {id:"S",  name:"Sender",   icon:"💻", x:6,  y:50, endpoint:true},
        {id:"A1", name:"Router 1",  icon:"🔵", x:18, y:16},
        {id:"A2", name:"Router 2",  icon:"🔵", x:30, y:16},
        {id:"A3", name:"Router 3",  icon:"🔵", x:42, y:16},
        {id:"A4", name:"Router 4",  icon:"🔵", x:54, y:16},
        {id:"A5", name:"Router 5",  icon:"🔵", x:66, y:16},
        {id:"B1", name:"Router 6",  icon:"🟣", x:18, y:50},
        {id:"B2", name:"Router 7",  icon:"🟣", x:30, y:50},
        {id:"B3", name:"Router 8",  icon:"🟣", x:42, y:50},
        {id:"B4", name:"Router 9",  icon:"🟣", x:54, y:50},
        {id:"B5", name:"Router 10", icon:"🟣", x:66, y:50},
        {id:"C1", name:"Router 11", icon:"🟢", x:18, y:84},
        {id:"C2", name:"Router 12", icon:"🟢", x:30, y:84},
        {id:"C3", name:"Router 13", icon:"🟢", x:42, y:84},
        {id:"C4", name:"Router 14", icon:"🟢", x:54, y:84},
        {id:"C5", name:"Router 15", icon:"🟢", x:66, y:84},
        {id:"R",  name:"Receiver",  icon:"🖥️", x:94, y:50, endpoint:true}
    ],

    routes: [
        {id:0, name:"Path 1", color:"#38bdf8", label:"🔵 Path 1", nodes:["S","A1","A2","A3","A4","A5","R"]},
        {id:1, name:"Path 2", color:"#c084fc", label:"🟣 Path 2", nodes:["S","B1","B2","B3","B4","B5","R"]},
        {id:2, name:"Path 3", color:"#4ade80", label:"🟢 Path 3", nodes:["S","C1","C2","C3","C4","C5","R"]}
    ],

    selectedPath: 0,
    selectedTechnique: "packetSwitching",
    svg: null,
    animationIds: []
};

(function injectCleanTransmissionStyles(){
    if(document.getElementById("cleanTransmissionStyles")) return;
    const style=document.createElement("style");
    style.id="cleanTransmissionStyles";
    style.textContent=`
        .transmissionModuleClean{width:100%;box-sizing:border-box}
        .transmissionTechniqueGrid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin:18px 0}
        .transmissionTechniqueBtn,.transmissionPathBtn{appearance:none;border:2px solid rgba(148,163,184,.35);background:linear-gradient(145deg,#13253f,#0b172b);color:#fff;border-radius:16px;padding:15px;cursor:pointer;transition:.2s;box-sizing:border-box}
        .transmissionTechniqueBtn:hover,.transmissionPathBtn:hover{transform:translateY(-2px);border-color:#38bdf8}
        .transmissionTechniqueBtn.active,.transmissionPathBtn.active{border-color:#facc15;box-shadow:0 0 0 3px rgba(250,204,21,.15),0 0 22px rgba(56,189,248,.22);background:linear-gradient(145deg,#17395b,#10243d)}
        .transmissionTechniqueBtn .bigIcon{font-size:30px;display:block;margin-bottom:5px}
        .transmissionTechniqueBtn strong{display:block;font-size:16px}
        .transmissionTechniqueBtn small{display:block;margin-top:5px;color:#cbd5e1;line-height:1.35}
        .transmissionPathPanel{padding:15px;border:1px solid rgba(56,189,248,.3);border-radius:16px;background:rgba(2,6,23,.55);margin:12px 0 16px}
        .transmissionPathPanel h3{margin:0 0 10px;color:#fff}
        .transmissionPathButtons{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
        .transmissionPathBtn{padding:11px;font-weight:700}
        .transmissionPathBtn.active{color:#fff}
        .transmissionCanvasClean{position:relative;width:100%;height:560px;min-height:560px;overflow:hidden;border:2px solid rgba(56,189,248,.3);border-radius:20px;background:radial-gradient(circle at 50% 50%,rgba(20,45,78,.85),rgba(2,6,23,.98) 75%);box-sizing:border-box}
        .transmissionCanvasClean svg{position:absolute;inset:0;width:100%;height:100%;z-index:1;pointer-events:none}
        .cleanRouteLine{transition:.2s}
        .cleanTransmissionNode{position:absolute;z-index:5;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;justify-content:center;box-sizing:border-box;color:#fff;border-radius:14px;background:linear-gradient(145deg,#1e293b,#0f172a);border:2px solid rgba(148,163,184,.5);box-shadow:0 5px 14px rgba(0,0,0,.35);user-select:none}
        .cleanTransmissionNode.router{width:74px;height:62px}
        .cleanTransmissionNode.endpoint{width:100px;height:78px;border-color:#38bdf8;box-shadow:0 0 20px rgba(56,189,248,.35)}
        .cleanTransmissionNode .nodeIcon{font-size:22px;line-height:1}
        .cleanTransmissionNode.endpoint .nodeIcon{font-size:29px}
        .cleanTransmissionNode .nodeName{font-size:10px;font-weight:800;margin-top:4px;white-space:nowrap}
        .cleanTransmissionNode.endpoint .nodeName{font-size:12px}
        .cleanTransmissionNode.pathActive{border-color:#facc15;box-shadow:0 0 0 3px rgba(250,204,21,.14),0 0 22px rgba(250,204,21,.45)}
        .cleanTransmissionNode.packetNode{box-shadow:0 0 20px rgba(56,189,248,.75)}
        .cleanPacket{position:absolute;z-index:20;width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:23px;background:rgba(2,6,23,.9);box-shadow:0 0 18px rgba(56,189,248,.9);pointer-events:none;transform:translate(-50%,-50%)}
        .transmissionLegendClean{position:absolute;z-index:10;left:50%;top:10px;transform:translateX(-50%);display:flex;gap:12px;align-items:center;justify-content:center;flex-wrap:wrap;max-width:90%;padding:8px 12px;border:1px solid rgba(148,163,184,.3);border-radius:14px;background:rgba(2,6,23,.9);color:#fff;font-size:12px;box-sizing:border-box}
        .transmissionStatusClean{margin:12px 0;padding:14px 16px;border-radius:14px;background:rgba(15,23,42,.75);border:1px solid rgba(148,163,184,.25);color:#e2e8f0;min-height:24px;line-height:1.5}
        .transmissionControlsClean{display:flex;gap:12px;flex-wrap:wrap;margin-top:14px}
        .transmissionPathBtn.disabledPath{opacity:.45;cursor:not-allowed;filter:grayscale(.5)}
        .transmissionPathBtn:disabled:hover{transform:none;border-color:rgba(148,163,184,.35)}
        .cleanTransmissionNode.currentHop{border-color:#facc15!important;box-shadow:0 0 0 4px rgba(250,204,21,.18),0 0 30px rgba(250,204,21,.9)!important;transform:translate(-50%,-50%) scale(1.08)}
        .cleanPacket{animation:packetGlow .65s ease-in-out infinite alternate}
        @keyframes packetGlow{from{box-shadow:0 0 12px rgba(56,189,248,.7)}to{box-shadow:0 0 28px rgba(250,204,21,1)}}
        @media(max-width:850px){.transmissionTechniqueGrid,.transmissionPathButtons{grid-template-columns:1fr}.transmissionCanvasClean{height:520px;min-height:520px}.cleanTransmissionNode.router{width:64px;height:58px}.cleanTransmissionNode.endpoint{width:82px;height:70px}.cleanTransmissionNode .nodeName{font-size:8px}}
    `;
    document.head.appendChild(style);
})();

function getTransmissionTechniques(module){
    const defaults=[
        {id:"packetSwitching",title:"Packet Switching",icon:"📦",description:"Data is divided into packets. Packets can use different routes."},
        {id:"circuitSwitching",title:"Circuit Switching",icon:"🔌",description:"One dedicated route is established before transmission."},
        {id:"messageSwitching",title:"Message Switching",icon:"📨",description:"The complete message is stored and forwarded node by node."}
    ];
    const raw=module && (module.options||module.techniques||module.methods||module.modes);
    if(!Array.isArray(raw)||!raw.length) return defaults;
    return raw.map((x,i)=>{
        if(typeof x==='string') return defaults.find(d=>d.id===x)||defaults[i]||defaults[0];
        const key=String(x.id||x.key||x.type||x.mode||'').toLowerCase();
        const map={packet:'packetSwitching',packetswitching:'packetSwitching',packet_switching:'packetSwitching',circuit:'circuitSwitching',circuitswitching:'circuitSwitching',circuit_switching:'circuitSwitching',message:'messageSwitching',messageswitching:'messageSwitching',message_switching:'messageSwitching'};
        const id=map[key]||x.id||defaults[i]?.id||'packetSwitching';
        const d=defaults.find(v=>v.id===id)||defaults[i]||defaults[0];
        return {...d,...x,id,title:x.title||x.name||d.title,icon:x.icon||d.icon,description:x.description||x.explanation||d.description};
    });
}

function renderTransmissionModule(module){
    const section=document.createElement("section");
    section.className="networkModule transmissionModuleClean";
    section.innerHTML=`
        <div class="moduleHeader">
            <h2>${module?.icon||"📡"} ${module?.title||"Data Transmission"}</h2>
            <p>${module?.description||"Watch data travel through a real-looking 15-router network."}</p>
        </div>

        <div class="transmissionTechniqueGrid" id="transmissionTechniqueGrid"></div>

        <div class="transmissionPathPanel" id="transmissionPathPanel">
            <h3>🛣️ Dedicated Circuit Path</h3>
            <div class="transmissionPathButtons" id="transmissionPathButtons"></div>
            <div id="selectedPathInfo" class="transmissionStatusClean"></div>
        </div>

        <div id="transmissionCanvas" class="transmissionCanvasClean"></div>

        <div class="transmissionControlsClean">
            <button class="magicBtn" id="sendTransmissionBtn" type="button">📡 Transmit Data</button>
            <button class="magicBtn" id="resetTransmissionBtn" type="button">🔄 Reset</button>
        </div>

        <div id="resultPanel" class="transmissionStatusClean"></div>
    `;
    NetworkEngine.workspace.appendChild(section);

    const techniques=getTransmissionTechniques(module);
    const techGrid=section.querySelector("#transmissionTechniqueGrid");

    techniques.forEach(t=>{
        const btn=document.createElement("button");
        btn.type="button";
        btn.className="transmissionTechniqueBtn";
        btn.dataset.id=t.id;
        btn.innerHTML=`<span class="bigIcon">${t.icon}</span><strong>${t.title}</strong><small>${t.description}</small>`;
        btn.addEventListener("click",()=>{
            NetworkEngine.state.transmission=t.id;
            techGrid.querySelectorAll(".transmissionTechniqueBtn").forEach(b=>b.classList.toggle("active",b===btn));
            updateTransmissionTechniqueUI(t.id);
            clearTransmissionAnimation();
            if(t.id==="circuitSwitching"){
                selectTransmissionPath(TransmissionNetwork.selectedPath);
            }else{
                showRandomTransmissionInfo(t.id);
            }
        });
        techGrid.appendChild(btn);
    });

    const pathGrid=section.querySelector("#transmissionPathButtons");
    TransmissionNetwork.routes.forEach(route=>{
        const btn=document.createElement("button");
        btn.type="button";
        btn.className="transmissionPathBtn";
        btn.dataset.path=route.id;
        btn.textContent=route.label;
        btn.addEventListener("click",()=>{
            if(NetworkEngine.state.transmission!=="circuitSwitching") return;
            selectTransmissionPath(route.id);
        });
        pathGrid.appendChild(btn);
    });

    section.querySelector("#sendTransmissionBtn").addEventListener("click",startTransmission);
    section.querySelector("#resetTransmissionBtn").addEventListener("click",resetTransmission);

    NetworkEngine.state.transmission=techniques[0]?.id||"packetSwitching";
    techGrid.querySelector(".transmissionTechniqueBtn")?.classList.add("active");
    buildTransmissionNetwork();
    updateTransmissionTechniqueUI(NetworkEngine.state.transmission);
}

function updateTransmissionTechniqueUI(technique){
    const panel=document.getElementById("transmissionPathPanel");
    const pathButtons=document.querySelectorAll(".transmissionPathBtn");
    if(!panel) return;

    const isCircuit=technique==="circuitSwitching";
    panel.classList.toggle("circuitOnly",isCircuit);
    panel.querySelector("h3").innerHTML=isCircuit
        ? "🛣️ Select a Dedicated Circuit Path"
        : "🎲 Automatic Routing";

    pathButtons.forEach(btn=>{
        btn.disabled=!isCircuit;
        btn.classList.toggle("disabledPath",!isCircuit);
    });

    if(isCircuit){
        selectTransmissionPath(TransmissionNetwork.selectedPath);
    }else{
        const label=technique==="packetSwitching" ? "📦 Packet Switching" : "📨 Message Switching";
        updateTransmissionStatus(`<b>${label}</b><br>Routes are selected automatically. Students do not choose a path for this technique.`);
    }
}

function updateTransmissionStatus(html){
    const box=document.getElementById("selectedPathInfo");
    if(box) box.innerHTML=html;
}

function showRandomTransmissionInfo(technique){
    const label=technique==="packetSwitching" ? "📦 Packet Switching" : "📨 Message Switching";
    updateTransmissionStatus(`<b>${label}</b><br>🎲 The network will automatically choose routes and routers during transmission.`);
}

function selectTransmissionPath(index){
    TransmissionNetwork.selectedPath=index;
    document.querySelectorAll(".transmissionPathBtn").forEach(btn=>btn.classList.toggle("active",Number(btn.dataset.path)===index));
    const route=TransmissionNetwork.routes[index];
    updateTransmissionStatus(`<b>${route.label} selected.</b><br>💻 Sender → ${route.nodes.slice(1,-1).map(id=>TransmissionNetwork.nodes.find(n=>n.id===id)?.name).join(" → ")} → 🖥️ Receiver`);
    highlightTransmissionPath(index);
}

function buildTransmissionNetwork(){
    const canvas=document.getElementById("transmissionCanvas");
    if(!canvas) return;
    clearTransmissionAnimation();
    canvas.innerHTML="";

    const svg=document.createElementNS("http://www.w3.org/2000/svg","svg");
    svg.classList.add("transmissionNetworkSvg");
    canvas.appendChild(svg);
    TransmissionNetwork.svg=svg;

    TransmissionNetwork.routes.forEach(route=>{
        const pts=route.nodes.map(id=>TransmissionNetwork.nodes.find(n=>n.id===id));
        for(let i=0;i<pts.length-1;i++){
            const line=document.createElementNS("http://www.w3.org/2000/svg","line");
            line.classList.add("cleanRouteLine");
            line.dataset.route=route.id;
            line.setAttribute("x1",pts[i].x+"%");
            line.setAttribute("y1",pts[i].y+"%");
            line.setAttribute("x2",pts[i+1].x+"%");
            line.setAttribute("y2",pts[i+1].y+"%");
            line.setAttribute("stroke",route.color);
            line.setAttribute("stroke-width","5");
            line.setAttribute("stroke-opacity",".55");
            line.setAttribute("stroke-linecap","round");
            svg.appendChild(line);
        }
    });

    TransmissionNetwork.nodes.forEach(n=>{
        const el=document.createElement("div");
        el.id="tnode-"+n.id;
        el.className="cleanTransmissionNode "+(n.endpoint?"endpoint":"router");
        el.style.left=n.x+"%";
        el.style.top=n.y+"%";
        el.innerHTML=`<div class="nodeIcon">${n.icon}</div><div class="nodeName">${n.name}</div>`;
        canvas.appendChild(el);
    });

    const legend=document.createElement("div");
    legend.className="transmissionLegendClean";
    legend.innerHTML=`<b>🌐 LIVE NETWORK</b><span>🔵 Path 1</span><span>🟣 Path 2</span><span>🟢 Path 3</span><span>17 nodes</span>`;
    canvas.appendChild(legend);

    const result=document.getElementById("resultPanel");
    if(result) result.innerHTML=`<b>📡 Network Ready</b><br>Select a transmission technique and click <b>Transmit Data</b>.`;
}

function highlightTransmissionPath(index){
    document.querySelectorAll(".cleanRouteLine").forEach(line=>{
        const active=Number(line.dataset.route)===index;
        line.setAttribute("stroke-opacity",active?"1":".16");
        line.setAttribute("stroke-width",active?"8":"4");
    });
    document.querySelectorAll(".cleanTransmissionNode").forEach(n=>n.classList.remove("pathActive"));
    const route=TransmissionNetwork.routes[index];
    if(!route) return;
    route.nodes.forEach(id=>document.getElementById("tnode-"+id)?.classList.add("pathActive"));
}

function clearTransmissionAnimation(){
    TransmissionNetwork.animationIds.forEach(id=>cancelAnimationFrame(id));
    TransmissionNetwork.animationIds=[];
    document.querySelectorAll(".cleanPacket").forEach(p=>p.remove());
    document.querySelectorAll(".cleanTransmissionNode").forEach(n=>n.classList.remove("packetNode","currentHop"));
}

function getRoutePoints(routeIndex){
    return TransmissionNetwork.routes[routeIndex].nodes.map(id=>TransmissionNetwork.nodes.find(n=>n.id===id));
}

function markCurrentHop(point, routeIndex, hopIndex, totalHops){
    document.querySelectorAll(".cleanTransmissionNode").forEach(n=>n.classList.remove("packetNode","currentHop"));
    const node=document.getElementById("tnode-"+point.id);
    if(node) node.classList.add("currentHop");
    const result=document.getElementById("resultPanel");
    if(result && point){
        const route=TransmissionNetwork.routes[routeIndex];
        result.innerHTML=`<b>📡 Data is travelling...</b><br>${route.label} &nbsp;|&nbsp; Hop ${Math.min(hopIndex+1,totalHops)} of ${totalHops}<br><strong>Current node: ${point.name}</strong>`;
    }
}

function animateCleanPacket(icon,routeIndex,duration,onDone){
    const canvas=document.getElementById("transmissionCanvas");
    if(!canvas){onDone?.();return;}

    const packet=document.createElement("div");
    packet.className="cleanPacket";
    packet.textContent=icon;
    canvas.appendChild(packet);

    const points=getRoutePoints(routeIndex);
    const segmentDuration=Math.max(280,duration/(points.length-1));
    let segment=0;

    function travelSegment(){
        if(segment>=points.length-1){
            packet.remove();
            document.querySelectorAll(".cleanTransmissionNode").forEach(n=>n.classList.remove("packetNode","currentHop"));
            onDone?.();
            return;
        }

        const a=points[segment];
        const b=points[segment+1];
        markCurrentHop(a,routeIndex,segment,points.length-1);

        const start=performance.now();
        function frame(now){
            const t=Math.min(1,(now-start)/segmentDuration);
            packet.style.left=(a.x+(b.x-a.x)*t)+"%";
            packet.style.top=(a.y+(b.y-a.y)*t)+"%";
            if(t<1){
                const id=requestAnimationFrame(frame);
                TransmissionNetwork.animationIds.push(id);
            }else{
                markCurrentHop(b,routeIndex,segment+1,points.length-1);
                segment++;
                setTimeout(travelSegment,180);
            }
        }
        const id=requestAnimationFrame(frame);
        TransmissionNetwork.animationIds.push(id);
    }
    travelSegment();
}

function randomRouteIndex(exclude=[]){
    const choices=TransmissionNetwork.routes.map((_,i)=>i).filter(i=>!exclude.includes(i));
    return choices[Math.floor(Math.random()*choices.length)] ?? 0;
}

function startTransmission(mode){
    // The transmit button is wired directly with addEventListener, so the
    // first argument can be a MouseEvent. Do not treat that event as a mode.
    if(mode && typeof mode === "object" && typeof mode.preventDefault === "function"){
        mode = null;
    }

    if(mode){
        const map={packet:"packetSwitching",circuit:"circuitSwitching",message:"messageSwitching"};
        NetworkEngine.state.transmission=map[mode]||mode;
        updateTransmissionTechniqueUI(NetworkEngine.state.transmission);
    }

    const technique=NetworkEngine.state.transmission||"packetSwitching";
    clearTransmissionAnimation();

    if(technique==="packetSwitching") return runPacketSwitching();
    if(technique==="circuitSwitching") return runCircuitSwitching();
    if(technique==="messageSwitching") return runMessageSwitching();
}

function runPacketSwitching(){
    const result=document.getElementById("resultPanel");
    if(result) result.innerHTML=`<b>📦 Packet Switching</b><br>Data is divided into packets. Each packet will be routed automatically.`;

    const packets=[
        {route:randomRouteIndex(),delay:0},
        {route:randomRouteIndex(),delay:500},
        {route:randomRouteIndex(),delay:1000},
        {route:randomRouteIndex(),delay:1500},
        {route:randomRouteIndex(),delay:2000}
    ];

    let done=0;
    packets.forEach((item,index)=>setTimeout(()=>{
        highlightTransmissionPath(item.route);
        animateCleanPacket("📦",item.route,3000,()=>{
            done++;
            if(done===packets.length){
                document.querySelectorAll(".cleanTransmissionNode").forEach(n=>n.classList.remove("currentHop"));
                transmissionCompleted("📦 All packets reached the receiver using automatically selected routes.");
            }
        });
    },item.delay));
}

function runCircuitSwitching(){
    const route=TransmissionNetwork.selectedPath;
    const r=TransmissionNetwork.routes[route];
    const result=document.getElementById("resultPanel");
    if(result) result.innerHTML=`<b>🔌 Circuit Switching</b><br>Dedicated <strong>${r.name}</strong> is being established. All data will use this route.`;

    highlightTransmissionPath(route);

    setTimeout(()=>{
        let done=0;
        for(let i=0;i<3;i++){
            setTimeout(()=>animateCleanPacket("📦",route,3000,()=>{
                done++;
                if(done===3) transmissionCompleted(`🔌 Dedicated ${r.name} stayed reserved for the complete transmission.`);
            }),i*550);
        }
    },800);
}

function runMessageSwitching(){
    const route=randomRouteIndex();
    const r=TransmissionNetwork.routes[route];
    const result=document.getElementById("resultPanel");
    if(result) result.innerHTML=`<b>📨 Message Switching</b><br>The complete message is automatically routed through <strong>${r.name}</strong> and stored/forwarded at each router.`;

    highlightTransmissionPath(route);
    animateCleanPacket("📨",route,5000,()=>transmissionCompleted(`📨 The complete message reached the receiver after being stored and forwarded through ${r.name}.`));
}

function transmissionCompleted(message){
    NetworkEngine.state.score=(NetworkEngine.state.score||0)+10;
    const score=document.getElementById("networkScore");
    if(score) score.textContent=NetworkEngine.state.score;
    const result=document.getElementById("resultPanel");
    if(result) result.innerHTML=`<b>✅ Transmission Complete!</b><br>${message||"Data delivered successfully."}`;
    if(typeof showNotification==="function") showNotification("📡 Data transmitted successfully!","success");
}

function resetTransmission(){
    clearTransmissionAnimation();
    buildTransmissionNetwork();
    updateTransmissionTechniqueUI(NetworkEngine.state.transmission||"packetSwitching");
    const result=document.getElementById("resultPanel");
    if(result) result.innerHTML=`<b>🔄 Network reset.</b><br>Packet and message switching will choose routes automatically. Circuit switching requires a dedicated path.`;
}

function renderSecurityModule(
    module
) {

    const section =
        document.createElement(
            "section"
        );

    section.className =
        "networkModule";

    section.innerHTML = `
        <div class="moduleHeader">

            <h2>
                ${module.icon || "🔐"}
                ${module.title ||
                "Network Security"}
            </h2>

            <p>
                ${module.description || ""}
            </p>

        </div>

        <div
            id="securityArena"
            class="securityArena">
        </div>

        <div class="controlPanel">

            <button
                class="magicBtn"
                id="startSecurityBtn">

                ${module.controls?.startButton ||
                "🛡 Start Security"}

            </button>

            <button
                class="magicBtn"
                id="checkSecurityBtn">

                ✔ Check Answers

            </button>

            <button
                class="magicBtn"
                id="resetSecurityBtn">

                ${module.controls?.resetButton ||
                "🔄 Reset"}

            </button>

        </div>

        <div
            id="securityResult"
            class="resultPanel">
        </div>
    `;

    NetworkEngine.workspace.appendChild(
        section
    );

    section
        .querySelector(
            "#startSecurityBtn"
        )
        .addEventListener(
            "click",
            startSecurityGame
        );

    section
        .querySelector(
            "#checkSecurityBtn"
        )
        .addEventListener(
            "click",
            checkSecurityAnswers
        );

    section
        .querySelector(
            "#resetSecurityBtn"
        )
        .addEventListener(
            "click",
            resetSecurityGame
        );

    startSecurityGame();
}

/*==================================================
        START SECURITY
==================================================*/

function startSecurityGame() {

    const arena =
        document.getElementById(
            "securityArena"
        );

    if (!arena) return;

    arena.innerHTML = "";

    const threats =
        generateRandomThreats();

    const options = [

        "🔒 Antivirus",

        "🛡 Firewall",

        "🔐 Encryption",

        "🔑 Authentication",

        "📡 Secure Network"

    ];

    threats.forEach(
        threat => {

            const row =
                document.createElement(
                    "div"
                );

            row.className =
                "securityRow";

            row.innerHTML = `
                <span class="attack">
                    ${threat.attack}
                </span>

                <select
                    class="defenseSelect"
                    data-answer="${threat.defense}">

                    <option value="">
                        Select Protection
                    </option>

                    ${options
                        .map(
                            option =>
                                `<option value="${option}">
                                    ${option}
                                </option>`
                        )
                        .join("")}

                </select>
            `;

            arena.appendChild(
                row
            );
        }
    );

    NetworkEngine.state.securityStarted =
        true;

    NetworkEngine.state.securityChecked =
        false;

    const result =
        document.getElementById(
            "securityResult"
        );

    if (result) {

        result.innerHTML =
            "Choose the correct defense for every threat.";

    }
}

/*==================================================
        CHECK SECURITY
==================================================*/

function checkSecurityAnswers() {

    const answers =
        document.querySelectorAll(
            ".defenseSelect"
        );

    if (!answers.length) {

        showNotification(
            "Start the security challenge first.",
            "warning"
        );

        return;
    }

    let score = 0;

    answers.forEach(
        answer => {

            if (
                answer.value ===
                answer.dataset.answer
            ) {

                score++;

                answer.style.borderColor =
                    "#22C55E";

            }
            else {

                answer.style.borderColor =
                    "#EF4444";

            }
        }
    );

    NetworkEngine.state.score +=
        score * 5;

    NetworkEngine.state.securityChecked =
        true;

    updateScore();

    const result =
        document.getElementById(
            "securityResult"
        );

    if (result) {

        result.innerHTML = `
            <h3>
                🛡 Score:
                ${score} / ${answers.length}
            </h3>

            <p>
                ${
                    score === answers.length
                        ? "All threats neutralized!"
                        : "Some threats are still active."
                }
            </p>
        `;
    }

    if (
        score === answers.length
    ) {

        showNotification(
            "🛡 Network Secured!",
            "success"
        );

    }
    else {

        showNotification(
            "Some threats are still active.",
            "warning"
        );

    }
}

/*==================================================
        RESET SECURITY
==================================================*/

function resetSecurityGame() {
    startSecurityGame();
}

/*==================================================
        RANDOM THREATS
==================================================*/

function generateRandomThreats() {

    const attacks = [

        {
            attack: "🦠 Virus",
            defense: "🔒 Antivirus"
        },

        {
            attack: "🎣 Phishing",
            defense: "🔑 Authentication"
        },

        {
            attack: "🐴 Trojan",
            defense: "🛡 Firewall"
        },

        {
            attack: "💣 Malware",
            defense: "🔒 Antivirus"
        },

        {
            attack: "👾 Spyware",
            defense: "🛡 Firewall"
        },

        {
            attack: "🌐 Hacker",
            defense: "🔐 Encryption"
        }

    ];

    return [...attacks]
        .sort(
            () => Math.random() - 0.5
        )
        .slice(0, 5);
}

/*==================================================
        FINAL BATTLE
==================================================*/

function renderFinalBattle(
    module
) {

    const section =
        document.createElement(
            "section"
        );

    section.className =
        "networkModule";

    section.innerHTML = `
        <div class="moduleHeader">

            <h2>
                ${module.icon || "⚔️"}
                ${module.title ||
                "Final Battle"}
            </h2>

            <p>
                ${module.description || ""}
            </p>

        </div>

        <div class="battleArena">

            <div
                class="battleCharacter hero">

                <div class="battleAvatar">
                    🧙‍♂️
                </div>

                <h3>
                    Network Wizard
                </h3>

                <div class="healthBar">

                    <div
                        id="playerHealth"
                        class="healthFill"
                        style="width:100%">
                    </div>

                </div>

            </div>

            <div
                class="battleCharacter enemy">

                <div class="battleAvatar">
                    🕷️
                </div>

                <h3>
                    Spider King
                </h3>

                <div class="healthBar">

                    <div
                        id="enemyHealth"
                        class="healthFill enemy"
                        style="width:100%">
                    </div>

                </div>

            </div>

        </div>

        <div
            id="battleQuestion"
            class="battleQuestion">

            <p>
                Press Start Battle to face
                the Spider King.
            </p>

        </div>

        <div
            id="battleOptions"
            class="battleOptions">
        </div>

        <div class="controlPanel">

            <button
                class="magicBtn"
                id="startBattleBtn">

                ⚔ Start Battle

            </button>

        </div>
    `;

    NetworkEngine.workspace.appendChild(
        section
    );

    section
        .querySelector(
            "#startBattleBtn"
        )
        .addEventListener(
            "click",
            startFinalBattle
        );

    updateBattleHealth();
}

/*==================================================
        START BATTLE
==================================================*/

function startFinalBattle() {

    const module =
        getModule(
            "finalBattle"
        );

    if (!module) {

        showNotification(
            "Final Battle data was not found.",
            "warning"
        );

        return;
    }

    if (
        !Array.isArray(
            module.questions
        ) ||
        module.questions.length === 0
    ) {

        showNotification(
            "No battle questions were found.",
            "warning"
        );

        return;
    }

    NetworkEngine.state.playerHealth =
        100;

    NetworkEngine.state.enemyHealth =
        100;

    NetworkEngine.state.currentQuestion =
        0;

    NetworkEngine.state.battleStarted =
        true;

    updateBattleHealth();

    nextBattleQuestion();
}

/*==================================================
        NEXT BATTLE QUESTION
==================================================*/

function nextBattleQuestion() {

    const module =
        getModule(
            "finalBattle"
        );

    if (!module) return;

    if (
        NetworkEngine.state.currentQuestion >=
        module.questions.length
    ) {

        battleWon();

        return;
    }

    const question =
        module.questions[
            NetworkEngine.state.currentQuestion
        ];

    renderBattleQuestion(
        question
    );
}

/*==================================================
        RENDER BATTLE QUESTION
==================================================*/

function renderBattleQuestion(
    question
) {

    const questionBox =
        document.getElementById(
            "battleQuestion"
        );

    const options =
        document.getElementById(
            "battleOptions"
        );

    if (
        !questionBox ||
        !options
    ) {
        return;
    }

    questionBox.innerHTML = `
        <h3>
            ${question.question}
        </h3>
    `;

    options.innerHTML = "";

    (
        question.options || []
    ).forEach(
        (option, index) => {

            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "battleOption";

            button.textContent =
                option;

            button.addEventListener(
                "click",
                () => {

                    checkBattleAnswer(
                        index,
                        question.answer
                    );

                }
            );

            options.appendChild(
                button
            );
        }
    );
}

/*==================================================
        CHECK BATTLE ANSWER
==================================================*/

function checkBattleAnswer(
    selected,
    correct
) {

    if (
        !NetworkEngine.state.battleStarted
    ) {
        return;
    }

    disableBattleOptions();

    if (
        selected === correct
    ) {

        NetworkEngine.state.enemyHealth -=
            20;

        NetworkEngine.state.enemyHealth =
            Math.max(
                0,
                NetworkEngine.state.enemyHealth
            );

        showNotification(
            "⚔ Critical Hit!",
            "success"
        );

    }
    else {

        NetworkEngine.state.playerHealth -=
            20;

        NetworkEngine.state.playerHealth =
            Math.max(
                0,
                NetworkEngine.state.playerHealth
            );

        showNotification(
            "🕷 Spider King attacks!",
            "warning"
        );

    }

    updateBattleHealth();

    if (
        NetworkEngine.state.enemyHealth ===
        0
    ) {

        battleWon();

        return;
    }

    if (
        NetworkEngine.state.playerHealth ===
        0
    ) {

        battleLost();

        return;
    }

    NetworkEngine.state.currentQuestion++;

    setTimeout(
        () => {

            enableBattleOptions();

            nextBattleQuestion();

        },
        800
    );
}

/*==================================================
        UPDATE BATTLE HEALTH
==================================================*/

function updateBattleHealth() {

    const player =
        document.getElementById(
            "playerHealth"
        );

    const enemy =
        document.getElementById(
            "enemyHealth"
        );

    if (player) {

        player.style.width =
            `${NetworkEngine.state.playerHealth}%`;

    }

    if (enemy) {

        enemy.style.width =
            `${NetworkEngine.state.enemyHealth}%`;

    }
}

/*==================================================
        BATTLE WON
==================================================*/

function battleWon() {

    NetworkEngine.state.battleStarted =
        false;

    NetworkEngine.state.completed =
        true;

    NetworkEngine.state.score +=
        50;

    updateScore();

    const question =
        document.getElementById(
            "battleQuestion"
        );

    const options =
        document.getElementById(
            "battleOptions"
        );

    if (question) {

        question.innerHTML = `
            <h2>
                🏆 Victory!
            </h2>

            <p>
                You defeated the Spider King!
            </p>
        `;
    }

    if (options) {

        options.innerHTML = "";

    }

    showNotification(
        "🎉 Kingdom Cleared! +50 points",
        "success"
    );

    finishKingdom();
}

/*==================================================
        BATTLE LOST
==================================================*/

function battleLost() {

    NetworkEngine.state.battleStarted =
        false;

    const question =
        document.getElementById(
            "battleQuestion"
        );

    const options =
        document.getElementById(
            "battleOptions"
        );

    if (question) {

        question.innerHTML = `
            <h2>
                ☠ Defeat
            </h2>

            <p>
                The Spider King defeated you.
            </p>
        `;
    }

    if (options) {

        options.innerHTML = `
            <button
                class="magicBtn"
                id="retryBattleBtn">

                🔄 Try Again

            </button>
        `;

        options
            .querySelector(
                "#retryBattleBtn"
            )
            .addEventListener(
                "click",
                resetBattle
            );
    }

    showNotification(
        "Better luck next time!",
        "warning"
    );
}

/*==================================================
        RESET BATTLE
==================================================*/

function resetBattle() {

    NetworkEngine.state.playerHealth =
        100;

    NetworkEngine.state.enemyHealth =
        100;

    NetworkEngine.state.currentQuestion =
        0;

    NetworkEngine.state.battleStarted =
        true;

    updateBattleHealth();

    nextBattleQuestion();
}

/*==================================================
        BATTLE OPTION CONTROL
==================================================*/

function disableBattleOptions() {

    document
        .querySelectorAll(
            ".battleOption"
        )
        .forEach(
            button => {

                button.disabled =
                    true;

            }
        );
}

function enableBattleOptions() {

    document
        .querySelectorAll(
            ".battleOption"
        )
        .forEach(
            button => {

                button.disabled =
                    false;

            }
        );
}

/*==================================================
        FINISH KINGDOM
==================================================*/

function finishKingdom() {

    NetworkEngine.state.completed =
        true;

    saveNetworkProgress();

    if (
        typeof saveProgress ===
        "function"
    ) {

        try {

            saveProgress(
                NetworkEngine.simulator.id ||
                "spiderwebnexus"
            );

        }
        catch (error) {

            console.warn(
                "saveProgress() could not be completed:",
                error
            );

        }
    }

    if (
        typeof showReward ===
        "function"
    ) {

        showReward(
            "🕸 Spider Web Nexus Complete!",
            "You have mastered Computer Networks."
        );

    }
}

/*==================================================
        SCORE / LIVES
==================================================*/

function updateScore() {

    const score =
        document.getElementById(
            "networkScore"
        );

    if (score) {

        score.textContent =
            NetworkEngine.state.score;

    }

    const lives =
        document.getElementById(
            "networkLives"
        );

    if (lives) {

        lives.textContent =
            NetworkEngine.state.lives;

    }
}

/*==================================================
        NOTIFICATION
==================================================*/

function showNotification(
    message,
    type = "info"
) {

    let notification =
        document.getElementById(
            "networkNotification"
        );

    if (!notification) {

        notification =
            document.createElement(
                "div"
            );

        notification.id =
            "networkNotification";

        notification.className =
            "networkNotification";

        document.body.appendChild(
            notification
        );
    }

    notification.className =
        `networkNotification ${type}`;

    notification.textContent =
        message;

    notification.classList.add(
        "show"
    );

    clearTimeout(
        notification.timer
    );

    notification.timer =
        setTimeout(
            () => {

                notification.classList.remove(
                    "show"
                );

            },
            3000
        );
}

function hideNotification() {

    const notification =
        document.getElementById(
            "networkNotification"
        );

    if (notification) {

        notification.classList.remove(
            "show"
        );

    }
}

/*==================================================
        RESULT HELPER
==================================================*/

function showTopologyResult(
    message,
    type = "info"
) {

    const result =
        document.getElementById(
            "topologyResult"
        );

    if (!result) return;

    result.className =
        `resultPanel ${type}`;

    result.innerHTML =
        message;
}

/*==================================================
        DATA HELPERS
==================================================*/

function getModule(id) {

    if (!NetworkEngine.simulator) {
        return null;
    }

    return NetworkEngine
        .simulator
        .modules
        .find(
            module =>
                module.id === id
        ) || null;
}

function getSelectedTopology() {

    const module =
        getModule(
            "topologyBuilder"
        );

    if (
        !module ||
        !NetworkEngine.state.topology
    ) {
        return null;
    }

    return (
        module.topologies || []
    ).find(
        topology =>
            topology.id ===
            NetworkEngine.state.topology
    ) || null;
}

function getDeviceName(id) {

    const topology =
        getSelectedTopology();

    if (!topology) return id;

    const device =
        getTopologyDevices().find(
            item => item.id === id
        );

    return device?.name || id;
}

function cssEscape(value) {

    if (
        window.CSS &&
        typeof window.CSS.escape ===
        "function"
    ) {

        return window.CSS.escape(
            String(value)
        );
    }

    return String(value).replace(
        /["\\]/g,
        "\\$&"
    );
}

/*==================================================
        SAVE PROGRESS
==================================================*/

function saveNetworkProgress() {

    const progress = {

        score:
            NetworkEngine.state.score,

        topology:
            NetworkEngine.state.topology,

        completed:
            NetworkEngine.state.completed,

        transmission:
            NetworkEngine.state.transmission,

        playerHealth:
            NetworkEngine.state.playerHealth,

        enemyHealth:
            NetworkEngine.state.enemyHealth,

        currentQuestion:
            NetworkEngine.state.currentQuestion
    };

    try {

        localStorage.setItem(
            "SpiderWebNexus",
            JSON.stringify(progress)
        );

    }
    catch (error) {

        console.warn(
            "Could not save SpiderWebNexus progress:",
            error
        );

    }
}

/*==================================================
        LOAD PROGRESS
==================================================*/

function loadNetworkProgress() {

    try {

        const data =
            localStorage.getItem(
                "SpiderWebNexus"
            );

        if (!data) return;

        const progress =
            JSON.parse(data);

        Object.assign(
            NetworkEngine.state,
            progress
        );

        updateScore();

        updateBattleHealth();

    }
    catch (error) {

        console.warn(
            "Could not load SpiderWebNexus progress:",
            error
        );

    }
}

/*==================================================
        RESIZE SUPPORT
==================================================*/

window.addEventListener(
    "resize",
    () => {

        if (
            NetworkEngine.activeModule ===
            0
        ) {

            setTimeout(
                updateConnections,
                50
            );

        }

    }
);

/*==================================================
        GLOBAL COMPATIBILITY
==================================================*/

window.NetworkEngine =
    NetworkEngine;

window.initializeNetworkSimulator =
    initializeNetworkSimulator;

window.initializeNetwork =
    initializeNetwork;

console.log(
    "🕸 Spider Web Nexus Network Simulator loaded."
);
