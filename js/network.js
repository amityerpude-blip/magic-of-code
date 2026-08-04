
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

function renderTransmissionModule(
    module
) {

    const section =
        document.createElement(
            "section"
        );

    section.className =
        "networkModule";

    section.innerHTML = `
        <div class="moduleHeader" style="display:block;visibility:visible;opacity:1;padding:18px;margin-bottom:18px;">
            <h2 style="display:block;visibility:visible;color:#fff;margin:0 0 8px;font-size:28px;">
                ${module.icon || "📡"} ${module.title || "Data Transmission"}
            </h2>
            <p style="display:block;visibility:visible;color:#dbeafe;margin:0;">
                ${module.description || "Choose a switching technique and observe how data travels through a network."}
            </p>
        </div>

        <div id="switchingGrid" class="switchingGrid" style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin:18px 0;visibility:visible;opacity:1;"></div>

        <div id="transmissionCanvas" class="transmissionCanvas" style="display:block;min-height:220px;padding:20px;border:1px solid #0ea5e9;border-radius:16px;visibility:visible;opacity:1;"></div>

        <div class="controlPanel" style="display:flex;gap:12px;margin:18px 0;visibility:visible;opacity:1;">
            <button class="magicBtn" id="sendTransmissionBtn" type="button" style="display:inline-block;visibility:visible;opacity:1;">
                ${module.controls?.sendButton || "📡 Send Data"}
            </button>
            <button class="magicBtn" id="resetTransmissionBtn" type="button" style="display:inline-block;visibility:visible;opacity:1;">
                ${module.controls?.resetButton || "🔄 Reset"}
            </button>
        </div>

        <div id="resultPanel" class="resultPanel" style="display:block;min-height:40px;visibility:visible;opacity:1;"></div>
    `;

    NetworkEngine.workspace.appendChild(
        section
    );

    const grid =
        section.querySelector(
            "#switchingGrid"
        );

    const options = getSwitchingOptions(module);

    options.forEach(option => {
        grid.appendChild(createSwitchCard(option));
    });

    if (!grid.children.length) {
        getDefaultSwitchingOptions().forEach(option => {
            grid.appendChild(createSwitchCard(option));
        });
    }

    section
        .querySelector(
            "#sendTransmissionBtn"
        )
        .addEventListener(
            "click",
            startTransmission
        );

    section
        .querySelector(
            "#resetTransmissionBtn"
        )
        .addEventListener(
            "click",
            resetTransmission
        );

    if (options.length) {
        initializeTransmission(options[0]);
        section.querySelector(".switchCard")?.classList.add("active");
    } else {
        initializeTransmission(getDefaultSwitchingOptions()[0]);
    }
}

/*==================================================
        SWITCHING OPTIONS NORMALIZER
==================================================*/

function getDefaultSwitchingOptions() {
    return [
        { id: "packetSwitching", title: "Packet Switching", icon: "📦", description: "Data is divided into small packets. Each packet can travel independently through the network." },
        { id: "circuitSwitching", title: "Circuit Switching", icon: "🔌", description: "A dedicated communication path is established before the data is sent." },
        { id: "messageSwitching", title: "Message Switching", icon: "📨", description: "The complete message is stored and forwarded from one node to another." }
    ];
}

function getSwitchingOptions(module) {
    if (!module) return getDefaultSwitchingOptions();
    const candidates = [module.options, module.techniques, module.methods, module.switchingMethods, module.switchingTechniques, module.transmissionMethods, module.transmissionTechniques, module.modes];
    let options = candidates.find(value => Array.isArray(value) && value.length);
    if (!options && module.data && typeof module.data === "object") {
        options = [module.data.packetSwitching, module.data.circuitSwitching, module.data.messageSwitching].filter(Boolean);
    }
    if (!Array.isArray(options) || !options.length) return getDefaultSwitchingOptions();
    return options.map(option => {
        if (typeof option === "string") {
            const id = option;
            return getDefaultSwitchingOptions().find(item => item.id === id) || { id, title: id.replace(/([A-Z])/g, " $1").replace(/^./, ch => ch.toUpperCase()), icon: "📡", description: "Explore this data transmission technique." };
        }
        const id = option.id || option.key || option.type || option.mode;
        const defaults = getDefaultSwitchingOptions().find(item => item.id === id);
        return { ...(defaults || {}), ...option, id: id || defaults?.id || "packetSwitching", title: option.title || option.name || defaults?.title || "Transmission Technique", icon: option.icon || defaults?.icon || "📡", description: option.description || option.explanation || defaults?.description || "Explore this data transmission technique." };
    });
}

/*==================================================
        SWITCH CARD
==================================================*/

function createSwitchCard(
    option
) {

    const card =
        document.createElement(
            "button"
        );

    card.type = "button";

    card.className =
        "switchCard";
    card.style.cssText = "display:block;width:100%;min-height:130px;padding:18px;border:2px solid #0ea5e9;border-radius:16px;background:#10233d;color:#fff;cursor:pointer;text-align:center;visibility:visible;opacity:1;";

    card.dataset.id =
        option.id;

    card.innerHTML = `
        <div class="switchIcon" style="font-size:36px;margin-bottom:8px;">
            ${option.icon || "📡"}
        </div>

        <h3>
            ${option.title || option.id}
        </h3>

        <p>
            ${option.description || ""}
        </p>
    `;

    card.addEventListener(
        "click",
        () => {

            document
                .querySelectorAll(
                    ".switchCard"
                )
                .forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );

            card.classList.add(
                "active"
            );

            initializeTransmission(
                option
            );
        }
    );

    return card;
}

function normalizeTransmissionOption(option) {
    const raw = option || {};
    const rawId = String(raw.id || raw.key || raw.type || raw.mode || "packetSwitching");
    const idMap = { packet: "packetSwitching", packetswitching: "packetSwitching", packet_switching: "packetSwitching", circuit: "circuitSwitching", circuitswitching: "circuitSwitching", circuit_switching: "circuitSwitching", message: "messageSwitching", messageswitching: "messageSwitching", message_switching: "messageSwitching" };
    const id = idMap[rawId.toLowerCase()] || rawId;
    const fallback = getDefaultSwitchingOptions().find(item => item.id === id) || getDefaultSwitchingOptions()[0];
    return { ...fallback, ...raw, id, title: raw.title || raw.name || fallback.title, icon: raw.icon || fallback.icon, description: raw.description || raw.explanation || fallback.description };
}

/*==================================================
        INITIALIZE TRANSMISSION
==================================================*/

function initializeTransmission(
    option
) {

    const normalizedOption = normalizeTransmissionOption(option);

    NetworkEngine.state.transmission =
        normalizedOption.id;

    NetworkEngine.state.packets =
        [];

    const canvas =
        document.getElementById(
            "transmissionCanvas"
        );

    const result =
        document.getElementById(
            "resultPanel"
        );

    if (!canvas) return;

    canvas.innerHTML = `
        <div
            class="networkNode sender"
            id="senderNode">

            <div class="nodeIcon">
                💻
            </div>

            <div class="nodeLabel">
                Sender
            </div>

        </div>

        <div
            class="transmissionPath"
            id="transmissionPath">
        </div>

        <div
            class="networkNode receiver"
            id="receiverNode">

            <div class="nodeIcon">
                🖥️
            </div>

            <div class="nodeLabel">
                Receiver
            </div>

        </div>
    `;

    if (result) {

        result.innerHTML = `
            <strong>
                ${normalizedOption.title}
            </strong>

            <br>

            Ready to transmit.
        `;
    }
}

/*==================================================
        START TRANSMISSION
==================================================*/

function startTransmission(
    mode
) {

    /*
       Supports both:
       startTransmission()
       startTransmission("packet")
       startTransmission("circuit")
       startTransmission("message")
    */

    if (mode) {

        const aliases = {

            packet:
                "packetSwitching",

            circuit:
                "circuitSwitching",

            message:
                "messageSwitching"

        };

        NetworkEngine.state.transmission =
            aliases[mode] || mode;
    }

    if (
        !NetworkEngine.state.transmission
    ) {

        showNotification(
            "Please select a transmission technique.",
            "warning"
        );

        return;
    }

    switch (
        NetworkEngine.state.transmission
    ) {

        case "packetSwitching":

            packetSwitching();

            break;

        case "messageSwitching":

            messageSwitching();

            break;

        case "circuitSwitching":

            circuitSwitching();

            break;

        default:

            showNotification(
                "Unknown transmission mode.",
                "warning"
            );
    }
}

/*==================================================
        PACKET SWITCHING
==================================================*/

function packetSwitching() {

    const result =
        document.getElementById(
            "resultPanel"
        );

    if (result) {

        result.innerHTML =
            "📦 Sending packets independently...";

    }

    let delivered = 0;

    for (
        let i = 0;
        i < 5;
        i++
    ) {

        setTimeout(
            () => {

                const packet =
                    createPacket("📦");

                animatePacket(
                    packet,
                    5,
                    () => {

                        delivered++;

                        if (
                            delivered === 5
                        ) {

                            transmissionCompleted(
                                "📦 Packet switching: all packets delivered."
                            );

                        }
                    }
                );

            },
            i * 250
        );
    }
}

/*==================================================
        MESSAGE SWITCHING
==================================================*/

function messageSwitching() {

    const result =
        document.getElementById(
            "resultPanel"
        );

    if (result) {

        result.innerHTML =
            "📨 Store-and-forwarding complete message...";

    }

    const packet =
        createPacket("📨");

    animatePacket(
        packet,
        3,
        () => {

            transmissionCompleted(
                "📨 Message switching: complete message delivered."
            );

        }
    );
}

/*==================================================
        CIRCUIT SWITCHING
==================================================*/

function circuitSwitching() {

    const path =
        document.getElementById(
            "transmissionPath"
        );

    const result =
        document.getElementById(
            "resultPanel"
        );

    if (!path) return;

    path.classList.add(
        "activeCircuit"
    );

    if (result) {

        result.innerHTML =
            "🔌 Establishing dedicated circuit...";

    }

    setTimeout(
        () => {

            let delivered = 0;

            for (
                let i = 0;
                i < 3;
                i++
            ) {

                setTimeout(
                    () => {

                        const packet =
                            createPacket("📦");

                        animatePacket(
                            packet,
                            7,
                            () => {

                                delivered++;

                                if (
                                    delivered === 3
                                ) {

                                    path.classList.remove(
                                        "activeCircuit"
                                    );

                                    transmissionCompleted(
                                        "🔌 Circuit switching: dedicated path established and data delivered."
                                    );

                                }

                            }
                        );

                    },
                    i * 120
                );
            }

        },
        1000
    );
}

/*==================================================
        PACKET CREATION
==================================================*/

function createPacket(
    icon = "📦"
) {

    const canvas =
        document.getElementById(
            "transmissionCanvas"
        );

    if (!canvas) return null;

    const packet =
        document.createElement(
            "div"
        );

    packet.className =
        "dataPacket";

    packet.textContent =
        icon;

    canvas.appendChild(
        packet
    );

    return packet;
}

/*==================================================
        PACKET ANIMATION
==================================================*/

function animatePacket(
    packet,
    speed = 5,
    onComplete
) {

    if (!packet) return;

    const sender =
        document.getElementById(
            "senderNode"
        );

    const receiver =
        document.getElementById(
            "receiverNode"
        );

    if (
        !sender ||
        !receiver
    ) {
        return;
    }

    const start =
        sender.offsetLeft +
        sender.offsetWidth;

    const end =
        receiver.offsetLeft -
        40;

    let x = start;

    packet.style.left =
        `${x}px`;

    packet.style.top =
        `${sender.offsetTop + 20}px`;

    const timer =
        setInterval(
            () => {

                x += speed;

                packet.style.left =
                    `${x}px`;

                if (
                    x >= end
                ) {

                    clearInterval(
                        timer
                    );

                    packet.remove();

                    if (
                        typeof onComplete ===
                        "function"
                    ) {

                        onComplete();

                    }
                }

            },
            16
        );
}

/*==================================================
        COMPATIBILITY PACKET FUNCTIONS
==================================================*/

function animateMultiplePackets(
    count,
    delay = 250
) {

    let current = 0;

    function sendNext() {

        if (
            current >= count
        ) {
            return;
        }

        createPacketAnimation(
            current + 1,
            count
        );

        current++;

        setTimeout(
            sendNext,
            delay
        );
    }

    sendNext();
}

function createPacketAnimation(
    number,
    total
) {

    const packet =
        createPacket("📦");

    animatePacket(
        packet,
        5,
        () => {

            console.log(
                `Packet ${number}/${total} delivered.`
            );

        }
    );
}

/*==================================================
        TRANSMISSION COMPLETE
==================================================*/

function transmissionCompleted(
    message =
        "✅ Transmission Successful"
) {

    NetworkEngine.state.score +=
        10;

    updateScore();

    const result =
        document.getElementById(
            "resultPanel"
        );

    if (result) {

        result.innerHTML =
            message;

    }

    showNotification(
        "📡 Transmission Completed! +10 points",
        "success"
    );
}

/*==================================================
        RESET TRANSMISSION
==================================================*/

function resetTransmission() {

    NetworkEngine.state.packets =
        [];

    const canvas =
        document.getElementById(
            "transmissionCanvas"
        );

    if (canvas) {

        canvas
            .querySelectorAll(
                ".dataPacket"
            )
            .forEach(
                packet => packet.remove()
            );
    }

    const module =
        getModule(
            "dataTransmission"
        );

    const option =
        module?.options?.find(
            item =>
                item.id ===
                NetworkEngine.state.transmission
        );

    if (option) {

        initializeTransmission(
            option
        );
    }

    const result =
        document.getElementById(
            "resultPanel"
        );

    if (result) {

        result.innerHTML =
            "Transmission reset. Ready to send.";

    }
}

/*==================================================
        SECURITY MODULE
==================================================*/

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
