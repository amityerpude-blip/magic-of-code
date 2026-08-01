/*==================================================

            MAGIC OF CODE
        SPIDER WEB NEXUS

        networkSimulator.js

                PART 1

==================================================*/

"use strict";


/*==================================================
                GLOBAL VARIABLES
==================================================*/

let simulator = null;

let selectedTopology = null;
let selectedSwitching = null;
let selectedDevice = null;

let userConnections = [];


/*==================================================
        NETWORK SIMULATOR COMPONENT
==================================================*/

function NetworkSimulatorComponent(){

    return `

    <section
    id="networkSection"
    class="lessonContent">

        <div id="networkSimulator">

        </div>

    </section>

    `;

}


/*==================================================
        INITIALIZE NETWORK SIMULATOR
==================================================*/

function initializeNetworkSimulator(){

    simulator = KINGDOM_DATA.networkSimulator;

    if(!simulator){

        console.error("Network Simulator data missing.");

        return;

    }

    renderNetworkSimulator();

}


/*==================================================
        RENDER COMPLETE SIMULATOR
==================================================*/

function renderNetworkSimulator(){

    const container =
    document.getElementById("networkSimulator");

    if(!container) return;

    container.innerHTML =

        renderHeader() +

        renderTopologyModule() +

        renderTransmissionModule();

}


/*==================================================
                HEADER
==================================================*/

function renderHeader(){

    return `

    <div class="networkHeader">

        <h2>

            ${simulator.title}

        </h2>

        <p>

            ${simulator.description}

        </p>

    </div>

    `;

}


/*==================================================
        TOPOLOGY BUILDER MODULE
==================================================*/

function renderTopologyModule(){

    const module =
    simulator.modules.find(

        m => m.id === "topologyBuilder"

    );

    return `

    <div class="networkModule">

        <div class="moduleHeader">

            <h2>

                ${module.icon}
                ${module.title}

            </h2>

            <p>

                ${module.description}

            </p>

        </div>

        <div class="topologyGrid">

            ${module.topologies
                .map(renderTopologyCard)
                .join("")}

        </div>

        <div
        id="topologyCanvas"
        class="topologyCanvas">

        </div>

        <div class="controlPanel">

            <button
            class="magicBtn"
            onclick="validateTopology()">

                ${module.controls.validateButton}

            </button>

            <button
            class="magicBtn"
            onclick="resetTopology()">

                ${module.controls.resetButton}

            </button>

            <button
            class="magicBtn"
            onclick="clearConnections()">

                ${module.controls.clearButton}

            </button>

        </div>

    </div>

    `;

}


/*==================================================
        TRANSMISSION MODULE
==================================================*/

function renderTransmissionModule(){

    const module =
simulator.modules.find(
    m => m.id === "dataTransmission"
);

    return `

    <div class="networkModule">

        <div class="moduleHeader">

            <h2>

                ${module.icon}
                ${module.title}

            </h2>

            <p>

                ${module.description}

            </p>

        </div>

        <div class="switchingGrid">

            ${module.options
                .map(renderSwitchCard)
                .join("")}

        </div>

        <div
        id="transmissionCanvas"
        class="transmissionCanvas">

        </div>

        <div class="controlPanel">

            <button
            class="magicBtn"
            onclick="startTransmission()">

                ${module.controls.sendButton}

            </button>

            <button
            class="magicBtn"
            onclick="resetTransmission()">

                ${module.controls.resetButton}

            </button>

        </div>

        <div
        id="resultPanel"
        class="resultPanel">

        </div>

    </div>

    `;

}

/*==================================================

            NETWORK SIMULATOR
                PART 2

        TOPOLOGY BUILDER ENGINE

==================================================*/


/*==================================================
            TOPOLOGY CARD
==================================================*/

function renderTopologyCard(topology){

    return `

    <div
    class="topologyCard"
    onclick="selectTopology('${topology.id}',this)">

        <div class="topologyIcon">

            🌐

        </div>

        <h3>

            ${topology.name}

        </h3>

        <p>

            ${topology.description}

        </p>

    </div>

    `;

}


/*==================================================
            SWITCH CARD
==================================================*/

function renderSwitchCard(option){

    return `

    <div
    class="switchCard"
    onclick="selectSwitching('${option.id}',this)">

        <div class="switchIcon">

            📡

        </div>

        <h3>

            ${option.title}

        </h3>

        <p>

            ${option.description}

        </p>

    </div>

    `;

}


/*==================================================
            SELECT TOPOLOGY
==================================================*/

function selectTopology(id,card){

    selectedTopology=id;

    selectedDevice=null;

    userConnections=[];

    document
    .querySelectorAll(".topologyCard")
    .forEach(c=>c.classList.remove("active"));

    card.classList.add("active");

    renderTopologyCanvas();

}


/*==================================================
        SELECT SWITCHING
==================================================*/

function selectSwitching(id,card){

    selectedSwitching=id;

    document
    .querySelectorAll(".switchCard")
    .forEach(c=>c.classList.remove("active"));

    card.classList.add("active");

    renderTransmissionCanvas();

}


/*==================================================
        TOPOLOGY CANVAS
==================================================*/

function renderTopologyCanvas(){

    const canvas=
    document.getElementById("topologyCanvas");

    if(!canvas) return;

    canvas.innerHTML="";

    const module=
    simulator.modules.find(
        m=>m.id==="topologyBuilder"
    );

    const positions={

        pc1:{x:120,y:80},

        pc2:{x:120,y:260},

        pc3:{x:520,y:80},

        pc4:{x:520,y:260},

        switch:{x:320,y:80},

        router:{x:320,y:260}

    };

    module.devices.forEach(device=>{

        canvas.appendChild(

            createDevice(

                device,

                positions[device.id]

            )

        );

    });

}


/*==================================================
            CREATE DEVICE
==================================================*/

function createDevice(device,pos){

    const div=
    document.createElement("div");

    div.className="device";

    div.dataset.id=device.id;

    div.style.left=pos.x+"px";

    div.style.top=pos.y+"px";

    div.innerHTML=`

        <div class="deviceIcon">

            ${device.icon}

        </div>

        <div class="deviceLabel">

            ${device.name}

        </div>

    `;

    div.onclick=()=>{

        selectDevice(device.id,div);

    };

    return div;

}


/*==================================================
            SELECT DEVICE
==================================================*/

function selectDevice(id,element){

    if(selectedDevice===null){

        selectedDevice=id;

        element.classList.add("selected");

        return;

    }

    if(selectedDevice===id){

        selectedDevice=null;

        element.classList.remove("selected");

        return;

    }

    createConnection(selectedDevice,id);

    document
    .querySelectorAll(".device")
    .forEach(d=>d.classList.remove("selected"));

    selectedDevice=null;

}


/*==================================================
        CREATE CONNECTION
==================================================*/

function createConnection(from,to){

    if(connectionExists(from,to)) return;

    userConnections.push([from,to]);

    drawConnection(from,to);

}


/*==================================================
        CONNECTION EXISTS
==================================================*/

function connectionExists(from,to){

    return userConnections.some(c=>

        (c[0]===from && c[1]===to)

        ||

        (c[0]===to && c[1]===from)

    );

}


/*==================================================
        DRAW CONNECTION
==================================================*/

function drawConnection(

    from,

    to,

    color="#4fc3f7"

){

    const canvas=
    document.getElementById("topologyCanvas");

    const a=
    document.querySelector(`[data-id="${from}"]`);

    const b=
    document.querySelector(`[data-id="${to}"]`);

    if(!a || !b) return;

    const x1=a.offsetLeft+35;
    const y1=a.offsetTop+35;

    const x2=b.offsetLeft+35;
    const y2=b.offsetTop+35;

    const length=Math.hypot(

        x2-x1,

        y2-y1

    );

    const angle=Math.atan2(

        y2-y1,

        x2-x1

    )*180/Math.PI;

    const line=document.createElement("div");

    line.className="connectionLine";

    line.style.left=x1+"px";

    line.style.top=y1+"px";

    line.style.width=length+"px";

    line.style.transform=`rotate(${angle}deg)`;

    line.style.background=color;

    canvas.appendChild(line);

}


/*==================================================
        CLEAR CONNECTIONS
==================================================*/

function clearConnections(){

    userConnections=[];

    selectedDevice=null;

    renderTopologyCanvas();

}

/*==================================================

            NETWORK SIMULATOR
                PART 3

        TOPOLOGY VALIDATION &
        TRANSMISSION NETWORK

==================================================*/


/*==================================================
            VALIDATE TOPOLOGY
==================================================*/

function validateTopology(){

    if(!selectedTopology){

        alert("Please select a topology first.");

        return;

    }

    const module =
    simulator.modules.find(
        m => m.id === "topologyBuilder"
    );

    const expected =
    module.validation[selectedTopology];

    if(!expected){

        showResult(
            "Validation data not found.",
            false
        );

        return;

    }

    const result =
    compareConnections(
        expected,
        userConnections
    );

    if(result){

        showResult(
            module.messages.success,
            true
        );

        playSuccess();

    }
    else{

        showResult(
            module.messages.failure,
            false
        );

    }

}


/*==================================================
        COMPARE CONNECTIONS
==================================================*/

function compareConnections(expected,user){

    if(expected.length!==user.length){

        return false;

    }

    return expected.every(connection=>{

        return user.some(item=>{

            return (

                (connection[0]===item[0] &&
                 connection[1]===item[1])

                ||

                (connection[0]===item[1] &&
                 connection[1]===item[0])

            );

        });

    });

}


/*==================================================
            RESET TOPOLOGY
==================================================*/

function resetTopology(){

    selectedTopology=null;

    selectedDevice=null;

    userConnections=[];

    document
    .querySelectorAll(".topologyCard")
    .forEach(card=>{

        card.classList.remove("active");

    });

    document.getElementById(
        "topologyCanvas"
    ).innerHTML="";

    hideResult();

}


/*==================================================
        TRANSMISSION CANVAS
==================================================*/

function renderTransmissionCanvas(){

    const canvas =
    document.getElementById(
        "transmissionCanvas"
    );

    if(!canvas) return;

    canvas.innerHTML="";

    const module =
    simulator.modules.find(
        m=>m.id==="transmission"
    );

    module.nodes.forEach(node=>{

        const div =
        document.createElement("div");

        div.className="networkNode";

        div.id=node.id;

        div.style.left=node.x+"px";

        div.style.top=node.y+"px";

        div.innerHTML=node.label;

        canvas.appendChild(div);

    });

    drawTransmissionLinks();

}


/*==================================================
        DRAW ALL LINKS
==================================================*/

function drawTransmissionLinks(){

    const module =
    simulator.modules.find(
        m=>m.id==="transmission"
    );

    module.paths.forEach(path=>{

        for(

            let i=0;

            i<path.nodes.length-1;

            i++

        ){

            drawNetworkLine(

                path.nodes[i],

                path.nodes[i+1]

            );

        }

    });

}


/*==================================================
        DRAW SINGLE LINK
==================================================*/

function drawNetworkLine(from,to){

    const canvas =
    document.getElementById(
        "transmissionCanvas"
    );

    const start =
    document.getElementById(from);

    const end =
    document.getElementById(to);

    if(!start || !end) return;

    const x1 =
    start.offsetLeft+30;

    const y1 =
    start.offsetTop+30;

    const x2 =
    end.offsetLeft+30;

    const y2 =
    end.offsetTop+30;

    const length =
    Math.hypot(

        x2-x1,

        y2-y1

    );

    const angle =
    Math.atan2(

        y2-y1,

        x2-x1

    )*180/Math.PI;

    const line =
    document.createElement("div");

    line.className="connectionLine";

    line.style.left=x1+"px";

    line.style.top=y1+"px";

    line.style.width=length+"px";

    line.style.transform=
    `rotate(${angle}deg)`;

    canvas.appendChild(line);

}

/*==================================================

            NETWORK SIMULATOR
                PART 4

        TRANSMISSION ENGINE

==================================================*/


/*==================================================
            START TRANSMISSION
==================================================*/

function startTransmission(){

    if(!selectedSwitching){

        alert("Please select a switching technique.");

        return;

    }

    switch(selectedSwitching){

        case "packet":

            startPacketTransmission();
            break;

        case "message":

            startMessageTransmission();
            break;

        case "circuit":

            startCircuitTransmission();
            break;

    }

}


/*==================================================
            RESET TRANSMISSION
==================================================*/

function resetTransmission(){

    clearPackets();

    renderTransmissionCanvas();

    hideResult();

}


/*==================================================
        PACKET SWITCHING
==================================================*/

async function startPacketTransmission(){

    const module =
    simulator.modules.find(
        m=>m.id==="transmission"
    );

    clearPackets();

    for(const packet of module.packetTransmission.packets){

        await animatePacket(packet);

        await sleep(300);

    }

    showResult(
        module.messages.packet,
        true
    );

}


/*==================================================
        MESSAGE SWITCHING
==================================================*/

async function startMessageTransmission(){

    const module =
    simulator.modules.find(
        m=>m.id==="transmission"
    );

    clearPackets();

    const packet = createPacket({

        id:"MSG",

        color:"#9c27b0"

    });

    const route =
    module.paths.find(

        p=>p.id===module.messageTransmission.route

    );

    for(const node of route.nodes){

        await movePacketToNode(packet,node);

        await sleep(300);

    }

    packet.remove();

    showResult(
        module.messages.message,
        true
    );

}


/*==================================================
        CIRCUIT SWITCHING
==================================================*/

async function startCircuitTransmission(){

    const module =
    simulator.modules.find(
        m=>m.id==="transmission"
    );

    clearPackets();

    const route =
    module.paths.find(

        p=>p.id===module.circuitTransmission.route

    );

    highlightRoute(route);

    await sleep(500);

    const packet = createPacket({

        id:"MSG",

        color:"#ff9800"

    });

    for(const node of route.nodes){

        await movePacketToNode(packet,node);

        await sleep(250);

    }

    packet.remove();

    clearHighlights();

    showResult(
        module.messages.circuit,
        true
    );

}


/*==================================================
            ANIMATE PACKET
==================================================*/

async function animatePacket(packet){

    const module =
    simulator.modules.find(
        m=>m.id==="transmission"
    );

    const route =
    module.paths.find(

        p=>p.id===packet.route

    );

    if(!route) return;

    const dot = createPacket(packet);

    for(const node of route.nodes){

        await movePacketToNode(dot,node);

        await sleep(200);

    }

    dot.remove();

}


/*==================================================
            CREATE PACKET
==================================================*/

function createPacket(packet){

    const canvas =
    document.getElementById(
        "transmissionCanvas"
    );

    const div =
    document.createElement("div");

    div.className="packet";

    div.innerHTML=packet.id;

    div.style.background=packet.color;

    canvas.appendChild(div);

    return div;

}


/*==================================================
            MOVE PACKET
==================================================*/

function movePacketToNode(packet,nodeId){

    return new Promise(resolve=>{

        const node =
        document.getElementById(nodeId);

        if(!node){

            resolve();

            return;

        }

        packet.style.left =
        (node.offsetLeft+20)+"px";

        packet.style.top =
        (node.offsetTop+20)+"px";

        node.classList.add("active");

        setTimeout(()=>{

            node.classList.remove("active");

            resolve();

        },350);

    });

}

/*==================================================

            NETWORK SIMULATOR
                PART 5

        UTILITIES & RESULT ENGINE

==================================================*/


/*==================================================
        HIGHLIGHT ROUTE
==================================================*/

function highlightRoute(route){

    if(!route) return;

    route.nodes.forEach(id=>{

        const node =
        document.getElementById(id);

        if(node){

            node.classList.add("active");

        }

    });

}


/*==================================================
        CLEAR HIGHLIGHTS
==================================================*/

function clearHighlights(){

    document
    .querySelectorAll(".networkNode")
    .forEach(node=>{

        node.classList.remove("active");

    });

}


/*==================================================
        CLEAR PACKETS
==================================================*/

function clearPackets(){

    document
    .querySelectorAll(".packet")
    .forEach(packet=>{

        packet.remove();

    });

}


/*==================================================
            SHOW RESULT
==================================================*/

function showResult(message,success){

    const panel =
    document.getElementById("resultPanel");

    if(!panel) return;

    panel.classList.add("show");

    panel.innerHTML=`

        <div class="resultTitle">

            ${success ? "✅ Success" : "❌ Try Again"}

        </div>

        <div class="resultText">

            ${message}

        </div>

    `;

}


/*==================================================
            HIDE RESULT
==================================================*/

function hideResult(){

    const panel =
    document.getElementById("resultPanel");

    if(!panel) return;

    panel.classList.remove("show");

    panel.innerHTML="";

}


/*==================================================
            SUCCESS SOUND
==================================================*/

function playSuccess(){

    const audio =
    document.getElementById("successSound");

    if(audio){

        audio.currentTime=0;

        audio.play().catch(()=>{});

    }

}


/*==================================================
            SLEEP
==================================================*/

function sleep(ms){

    return new Promise(resolve=>{

        setTimeout(resolve,ms);

    });

}


/*==================================================
            RESIZE SUPPORT
==================================================*/

window.addEventListener("resize",()=>{

    if(selectedTopology){

        renderTopologyCanvas();

        userConnections.forEach(connection=>{

            drawConnection(

                connection[0],

                connection[1],

                "#4fc3f7"

            );

        });

    }

    if(selectedSwitching){

        renderTransmissionCanvas();

    }

});


/*==================================================
            AUTO START
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    if(

        typeof KINGDOM_DATA!=="undefined" &&

        KINGDOM_DATA.networkSimulator

    ){

        initializeNetworkSimulator();

    }

});

