/*==================================================

            MAGIC OF CODE
        SPIDER WEB NEXUS

        networkSimulator.js

            PART 1

==================================================*/


"use strict";

/*==================================================
        NETWORK SIMULATOR COMPONENT
==================================================*/

function NetworkSimulatorComponent(){

    return `

    <section
        id="networkSection"
        class="lessonContent">

        <div id="networkSimulator"></div>

    </section>

    `;

}
/*==================================================
                GLOBAL VARIABLES
==================================================*/

let simulator;

let currentModule=0;

let selectedTopology=null;

let selectedSwitching=null;

let selectedDevice=null;

let userConnections=[];

let packetAnimations=[];


/*==================================================
            INITIALIZE SIMULATOR
==================================================*/

function initializeNetworkSimulator(){

    simulator=
    KINGDOM_DATA.networkSimulator;

    renderNetworkSimulator();

}


/*==================================================
            RENDER SIMULATOR
==================================================*/

function renderNetworkSimulator(){

    const container=
    document.getElementById(
        "networkSimulator"
    );

    if(!container) return;

    container.innerHTML=`

        <div class="networkSimulator">

            ${renderHeader()}

            ${renderTopologyBuilder()}

            ${renderTransmission()}

        </div>

    `;

}


/*==================================================
                HEADER
==================================================*/

function renderHeader(){

    return`

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
            TOPOLOGY BUILDER
==================================================*/

function renderTopologyBuilder(){

    const module=
    simulator.modules[0];

    return`

    <div class="networkModule">

        <div class="moduleHeader">

            <div class="moduleTitle">

                ${module.icon}
                ${module.title}

            </div>

            <div class="moduleDescription">

                ${module.description}

            </div>

        </div>

        <div class="topologyGrid">

            ${module.topologies
                .map(renderTopologyCard)
                .join("")}

        </div>

        <div

            class="networkCanvas"

            id="topologyCanvas"

        >

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
            TOPOLOGY CARD
==================================================*/

function renderTopologyCard(topology){

    return`

    <div

        class="topologyCard"

        onclick="selectTopology('${topology.id}')"

    >

        <div class="topologyIcon">

            ${topology.name.split(" ")[0]}

        </div>

        <div class="topologyName">

            ${topology.name}

        </div>

        <p>

            ${topology.description}

        </p>

    </div>

    `;

}


/*==================================================
            TRANSMISSION
==================================================*/

function renderTransmission(){

    const module=
    simulator.modules[1];

    return`

    <div class="networkModule">

        <div class="moduleHeader">

            <div class="moduleTitle">

                ${module.icon}

                ${module.title}

            </div>

            <div class="moduleDescription">

                ${module.description}

            </div>

        </div>

        <div class="switchingGrid">

            ${module.options
                .map(renderSwitchCard)
                .join("")}

        </div>

        <div

            class="transmissionCanvas"

            id="transmissionCanvas"

        >

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

            class="resultPanel"

            id="resultPanel">

        </div>

    </div>

    `;

}


/*==================================================
            SWITCH CARD
==================================================*/

function renderSwitchCard(option){

    return`

    <div

        class="switchCard"

        onclick="selectSwitching('${option.id}')"

    >

        <div class="switchIcon">

            ${option.title.split(" ")[0]}

        </div>

        <div class="switchTitle">

            ${option.title}

        </div>

        <div class="switchDescription">

            ${option.description}

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
            SELECT TOPOLOGY
==================================================*/

function selectTopology(id){

    selectedTopology=id;

    userConnections=[];

    selectedDevice=null;

    document

    .querySelectorAll(".topologyCard")

    .forEach(card=>{

        card.classList.remove("active");

    });

    event.currentTarget.classList.add("active");

    renderTopologyCanvas();

}


/*==================================================
        RENDER TOPOLOGY CANVAS
==================================================*/

function renderTopologyCanvas(){

    if(!selectedTopology) return;

    const canvas=

    document.getElementById(

        "topologyCanvas"

    );

    const module=

    simulator.modules[0];

    canvas.innerHTML="";

    const positions={

        pc1:{left:120,top:120},

        pc2:{left:120,top:320},

        pc3:{left:620,top:120},

        pc4:{left:620,top:320},

        switch:{left:370,top:120},

        router:{left:370,top:320}

    };

    module.devices.forEach(device=>{

        const node=

        createDevice(

            device,

            positions[device.id]

        );

        canvas.appendChild(node);

    });

}


/*==================================================
            CREATE DEVICE
==================================================*/

function createDevice(

    device,

    position

){

    const div=

    document.createElement("div");

    div.className="device";

    div.dataset.id=device.id;

    div.style.left=

    position.left+"px";

    div.style.top=

    position.top+"px";

    div.innerHTML=`

        ${device.icon}

        <div class="deviceLabel">

            ${device.name}

        </div>

    `;

    div.addEventListener(

        "click",

        ()=>selectDevice(

            device.id,

            div

        )

    );

    return div;

}


/*==================================================
            SELECT DEVICE
==================================================*/

function selectDevice(

    id,

    element

){

    if(!selectedDevice){

        selectedDevice=id;

        element.classList.add(

            "selected"

        );

        return;

    }

    if(selectedDevice===id){

        selectedDevice=null;

        element.classList.remove(

            "selected"

        );

        return;

    }

    createConnection(

        selectedDevice,

        id

    );

    document

    .querySelectorAll(".device")

    .forEach(device=>{

        device.classList.remove(

            "selected"

        );

    });

    selectedDevice=null;

}


/*==================================================
        CREATE CONNECTION
==================================================*/

function createConnection(

    from,

    to

){

    if(

        connectionExists(

            from,

            to

        )

    ) return;

    userConnections.push([

        from,

        to

    ]);

    drawConnection(

        from,

        to,

        "#4fc3f7"

    );

}


/*==================================================
        CONNECTION EXISTS
==================================================*/

function connectionExists(

    from,

    to

){

    return userConnections.some(

        connection=>{

            return(

                (

                    connection[0]===from &&

                    connection[1]===to

                )

                ||

                (

                    connection[0]===to &&

                    connection[1]===from

                )

            );

        }

    );

}


/*==================================================
            DRAW CONNECTION
==================================================*/

function drawConnection(

    from,

    to,

    color

){

    const canvas=

    document.getElementById(

        "topologyCanvas"

    );

    const node1=

    document.querySelector(

        `[data-id="${from}"]`

    );

    const node2=

    document.querySelector(

        `[data-id="${to}"]`

    );

    if(

        !node1 ||

        !node2

    ) return;

    const x1=

    node1.offsetLeft+35;

    const y1=

    node1.offsetTop+35;

    const x2=

    node2.offsetLeft+35;

    const y2=

    node2.offsetTop+35;

    const length=

    Math.hypot(

        x2-x1,

        y2-y1

    );

    const angle=

    Math.atan2(

        y2-y1,

        x2-x1

    )*180/Math.PI;

    const line=

    document.createElement("div");

    line.className=

    "connectionLine";

    line.style.width=

    length+"px";

    line.style.left=

    x1+"px";

    line.style.top=

    y1+"px";

    line.style.transform=

    `rotate(${angle}deg)`;

    line.style.background=

    color;

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

        TOPOLOGY VALIDATION

==================================================*/


/*==================================================
            VALIDATE TOPOLOGY
==================================================*/

function validateTopology(){

    if(!selectedTopology){

        alert("Please select a topology.");

        return;

    }

    const module=

    simulator.modules[0];

    const expected=

    module.validation[selectedTopology];

    if(

        userConnections.length===0

    ){

        showResult(

            module.messages.incomplete,

            false

        );

        return;

    }

    const result=

    compareConnections(

        expected,

        userConnections

    );

    highlightConnections(

        expected,

        result.correct

    );

    if(result.success){

        playSuccess();

        showResult(

            module.messages.success,

            true

        );

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

function compareConnections(

    expected,

    user

){

    let correct=[];

    expected.forEach(connection=>{

        const found=

        user.some(item=>

            sameConnection(

                connection,

                item

            )

        );

        if(found){

            correct.push(connection);

        }

    });

    return{

        success:

        correct.length===expected.length &&

        user.length===expected.length,

        correct

    };

}


/*==================================================
        SAME CONNECTION
==================================================*/

function sameConnection(

    a,

    b

){

    return(

        (

            a[0]===b[0] &&

            a[1]===b[1]

        )

        ||

        (

            a[0]===b[1] &&

            a[1]===b[0]

        )

    );

}


/*==================================================
        HIGHLIGHT CONNECTIONS
==================================================*/

function highlightConnections(

    expected,

    correct

){

    document

    .querySelectorAll(

        ".connectionLine"

    )

    .forEach(line=>{

        line.remove();

    });

    userConnections.forEach(connection=>{

        const valid=

        correct.some(item=>

            sameConnection(

                item,

                connection

            )

        );

        drawConnection(

            connection[0],

            connection[1],

            valid

            ?

            "#2ecc71"

            :

            "#ff4d6d"

        );

    });

}


/*==================================================
            RESET TOPOLOGY
==================================================*/

function resetTopology(){

    selectedDevice=null;

    userConnections=[];

    renderTopologyCanvas();

    hideResult();

}


/*==================================================
            SHOW RESULT
==================================================*/

function showResult(

    message,

    success

){

    const panel=

    document.getElementById(

        "resultPanel"

    );

    if(!panel) return;

    panel.classList.add(

        "show"

    );

    panel.innerHTML=`

        <div class="resultTitle">

            ${success

                ?

                "✅ Success"

                :

                "❌ Try Again"

            }

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

    const panel=

    document.getElementById(

        "resultPanel"

    );

    if(panel){

        panel.classList.remove(

            "show"

        );

        panel.innerHTML="";

    }

}


/*==================================================
            SUCCESS SOUND
==================================================*/

function playSuccess(){

    const audio=

    document.getElementById(

        "successSound"

    );

    if(audio){

        audio.currentTime=0;

        audio.play();

    }

}

/*==================================================

        NETWORK SIMULATOR
            PART 4

        DATA TRANSMISSION

==================================================*/


/*==================================================
        SELECT SWITCHING METHOD
==================================================*/

function selectSwitching(id){

    selectedSwitching=id;

    document

    .querySelectorAll(".switchCard")

    .forEach(card=>{

        card.classList.remove("active");

    });

    event.currentTarget.classList.add("active");

    renderTransmissionCanvas();

}


/*==================================================
    RENDER TRANSMISSION NETWORK
==================================================*/

function renderTransmissionCanvas(){

    if(!selectedSwitching) return;

    const canvas=

    document.getElementById(

        "transmissionCanvas"

    );

    canvas.innerHTML="";

    const module=

    simulator.modules[1];

    const positions={

        pc1:{x:80,y:120},
        pc2:{x:180,y:120},
        pc3:{x:280,y:120},
        pc4:{x:380,y:120},
        pc5:{x:480,y:120},

        pc6:{x:80,y:360},
        pc7:{x:180,y:360},
        pc8:{x:280,y:360},
        pc9:{x:380,y:360},
        pc10:{x:480,y:360},

        pc11:{x:80,y:600},
        pc12:{x:180,y:600},
        pc13:{x:280,y:600},
        pc14:{x:380,y:600},
        pc15:{x:480,y:600},

        server:{x:850,y:360}

    };

    module.nodes.forEach(node=>{

        const div=

        document.createElement("div");

        div.className="networkNode";

        div.id=node.id;

        div.style.left=

        positions[node.id].x+"px";

        div.style.top=

        positions[node.id].y+"px";

        div.innerHTML=node.label;

        canvas.appendChild(div);

    });

    drawTransmissionLinks();

}


/*==================================================
        DRAW NETWORK LINKS
==================================================*/

function drawTransmissionLinks(){

    const module=

    simulator.modules[1];

    module.paths.forEach(path=>{

        const nodes=path.nodes;

        for(

            let i=0;

            i<nodes.length-1;

            i++

        ){

            drawNetworkLine(

                nodes[i],

                nodes[i+1]

            );

        }

    });

}


/*==================================================
        DRAW SINGLE LINK
==================================================*/

function drawNetworkLine(

    from,

    to

){

    const canvas=

    document.getElementById(

        "transmissionCanvas"

    );

    const start=

    document.getElementById(from);

    const end=

    document.getElementById(to);

    if(

        !start ||

        !end

    ) return;

    const x1=

    start.offsetLeft+32;

    const y1=

    start.offsetTop+32;

    const x2=

    end.offsetLeft+32;

    const y2=

    end.offsetTop+32;

    const length=

    Math.hypot(

        x2-x1,

        y2-y1

    );

    const angle=

    Math.atan2(

        y2-y1,

        x2-x1

    )*180/Math.PI;

    const line=

    document.createElement("div");

    line.className=

    "connectionLine";

    line.style.left=

    x1+"px";

    line.style.top=

    y1+"px";

    line.style.width=

    length+"px";

    line.style.transform=

    `rotate(${angle}deg)`;

    canvas.appendChild(line);

}


/*==================================================
        START TRANSMISSION
==================================================*/

function startTransmission(){

    if(!selectedSwitching){

        alert(

        "Select a switching technique."

        );

        return;

    }

    if(

        selectedSwitching==="packet"

    ){

        startPacketTransmission();

    }

    else if(

        selectedSwitching==="message"

    ){

        startMessageTransmission();

    }

    else{

        startCircuitTransmission();

    }

}


/*==================================================
        RESET TRANSMISSION
==================================================*/

function resetTransmission(){

    packetAnimations=[];

    renderTransmissionCanvas();

    hideResult();

}

/*==================================================

        NETWORK SIMULATOR
            PART 5

    PACKET • MESSAGE • CIRCUIT

==================================================*/


/*==================================================
        PACKET SWITCHING
==================================================*/

async function startPacketTransmission(){

    const module=

    simulator.modules[1];

    clearPackets();

    const packets=

    module.packetTransmission.packets;

    for(const packet of packets){

        animatePacket(packet);

        await sleep(500);

    }

    showResult(

        module.messages.packet,

        true

    );

}


/*==================================================
        ANIMATE ONE PACKET
==================================================*/

async function animatePacket(packet){

    const module=

    simulator.modules[1];

    const route=

    module.paths.find(

        path=>path.id===packet.route

    );

    if(!route) return;

    const dot=

    createPacket(

        packet

    );

    for(const node of route.nodes){

        await movePacketToNode(

            dot,

            node

        );

    }

    dot.remove();

}


/*==================================================
            CREATE PACKET
==================================================*/

function createPacket(packet){

    const canvas=

    document.getElementById(

        "transmissionCanvas"

    );

    const div=

    document.createElement("div");

    div.className="packet";

    div.style.background=

    packet.color;

    div.innerHTML=

    packet.id;

    canvas.appendChild(div);

    return div;

}


/*==================================================
        MESSAGE SWITCHING
==================================================*/

async function startMessageTransmission(){

    const module=

    simulator.modules[1];

    clearPackets();

    const packet=

    createPacket({

        id:"MSG",

        color:"#9C27B0"

    });

    const route=

    module.paths.find(

        path=>

        path.id===

        module.messageTransmission.route

    );

    for(

        const node

        of route.nodes

    ){

        await movePacketToNode(

            packet,

            node

        );

        await sleep(400);

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

    const module=

    simulator.modules[1];

    clearPackets();

    const route=

    module.paths.find(

        path=>

        path.id===

        module.circuitTransmission.route

    );

    highlightRoute(route);

    await sleep(800);

    const packet=

    createPacket({

        id:"MSG",

        color:"#ff9800"

    });

    for(

        const node

        of route.nodes

    ){

        await movePacketToNode(

            packet,

            node

        );

    }

    packet.remove();

    clearHighlights();

    showResult(

        module.messages.circuit,

        true

    );

}


/*==================================================
        MOVE PACKET
==================================================*/

function movePacketToNode(

    packet,

    nodeId

){

    return new Promise(resolve=>{

        const node=

        document.getElementById(

            nodeId

        );

        if(!node){

            resolve();

            return;

        }

        packet.style.left=

        node.offsetLeft+20+"px";

        packet.style.top=

        node.offsetTop+20+"px";

        node.classList.add("active");

        setTimeout(()=>{

            node.classList.remove(

                "active"

            );

            resolve();

        },500);

    });

}


/*==================================================
        CLEAR PACKETS
==================================================*/

function clearPackets(){

    document

    .querySelectorAll(".packet")

    .forEach(packet=>packet.remove());

}


/*==================================================
        HIGHLIGHT ROUTE
==================================================*/

function highlightRoute(route){

    route.nodes.forEach(id=>{

        const node=

        document.getElementById(id);

        if(node){

            node.classList.add(

                "active"

            );

        }

    });

}


/*==================================================
        CLEAR HIGHLIGHTS
==================================================*/

function clearHighlights(){

    document

    .querySelectorAll(

        ".networkNode"

    )

    .forEach(node=>{

        node.classList.remove(

            "active"

        );

    });

}


/*==================================================
            SLEEP
==================================================*/

function sleep(ms){

    return new Promise(resolve=>

        setTimeout(resolve,ms)

    );

}

