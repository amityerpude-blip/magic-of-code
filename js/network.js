/*==================================================
            NETWORK ENGINE
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

        packets: [],

        score: 0,

        lives: 3,

        completed: false

    }

};
/*==================================================
        INITIALIZE NETWORK ENGINE
==================================================*/

function initializeNetwork(data){

    if(!data){

        console.error("NetworkEngine : Kingdom data missing.");

        return;

    }

    if(!data.networkSimulator){

        console.error("NetworkEngine : networkSimulator section missing.");

        return;

    }

    const container=document.getElementById("networkSimulator");

    if(!container){

        console.error("NetworkEngine : #networkSimulator container not found.");

        return;

    }

    NetworkEngine.data=data;

    NetworkEngine.simulator=data.networkSimulator;

    NetworkEngine.container=container;

    NetworkEngine.activeModule=0;

    NetworkEngine.state={

        topology:null,

        selectedNode:null,

        connections:[],

        packets:[],

        score:0,

        lives:3,

        completed:false

    };

    renderNetwork();

}
/*==================================================
                RENDER NETWORK
==================================================*/

function renderNetwork(){

    const container=NetworkEngine.container;

    if(!container)return;

    container.innerHTML="";

    container.appendChild(

        createHeader()

    );

    container.appendChild(

        createNavigation()

    );

    const workspace=document.createElement("section");

    workspace.id="networkWorkspace";

    workspace.className="networkWorkspace";

    container.appendChild(workspace);

    NetworkEngine.workspace=workspace;

    openModule(0);

}
/*==================================================
                CREATE HEADER
==================================================*/

function createHeader(){

    const header=document.createElement("section");

    header.className="networkHero";



    const title=document.createElement("h2");

    title.className="networkTitle";

    title.textContent=

    NetworkEngine.simulator.title;



    const description=document.createElement("p");

    description.className="networkDescription";

    description.textContent=

    NetworkEngine.simulator.description;



    const score=document.createElement("div");

    score.className="networkStatus";



    score.innerHTML=`

        <div class="statusCard">

            ⭐ Score

            <span id="networkScore">

                0

            </span>

        </div>

        <div class="statusCard">

            ❤️ Lives

            <span id="networkLives">

                3

            </span>

        </div>

    `;



    header.appendChild(title);

    header.appendChild(description);

    header.appendChild(score);



    return header;

}
/*==================================================
            CREATE NAVIGATION
==================================================*/

function createNavigation(){

    const navigation=document.createElement("nav");

    navigation.className="networkNavigation";

    NetworkEngine.simulator.modules.forEach(

        (module,index)=>{

            const button=document.createElement("button");

            button.className="networkTab";

            if(index===NetworkEngine.activeModule){

                button.classList.add("active");

            }

            button.dataset.index=index;

            button.innerHTML=`

                <span class="tabIcon">

                    ${module.icon}

                </span>

                <span class="tabTitle">

                    ${module.title}

                </span>

            `;

            button.addEventListener(

                "click",

                ()=>{

                    openModule(index);

                }

            );

            navigation.appendChild(button);

        }

    );

    return navigation;

}
/*==================================================
                OPEN MODULE
==================================================*/

function openModule(index){

    if(

        index<0 ||

        index>=NetworkEngine.simulator.modules.length

    ){

        return;

    }

    NetworkEngine.activeModule=index;

    document

    .querySelectorAll(".networkTab")

    .forEach((tab,i)=>{

        tab.classList.toggle(

            "active",

            i===index

        );

    });

    NetworkEngine.workspace.innerHTML="";

    const module=

    NetworkEngine.simulator.modules[index];

    switch(module.id){

        case "topologyBuilder":

            renderTopologyModule(module);

            break;

        case "dataTransmission":

            renderTransmissionModule(module);

            break;

        case "networkSecurity":

            renderSecurityModule(module);

            break;

        case "finalBattle":

            renderFinalBattle(module);

            break;

        default:

            NetworkEngine.workspace.innerHTML=`

                <div class="comingSoon">

                    <h2>

                        🚧

                    </h2>

                    <p>

                        ${module.title}

                        is coming soon.

                    </p>

                </div>

            `;

    }

}
/*==================================================
            RENDER TOPOLOGY MODULE
==================================================*/

function renderTopologyModule(module){

    const section=document.createElement("section");

    section.className="networkModule";



    /*=========================================
                Module Header
    =========================================*/

    const header=document.createElement("div");

    header.className="moduleHeader";



    const title=document.createElement("h2");

    title.innerHTML=`${module.icon} ${module.title}`;



    const description=document.createElement("p");

    description.textContent=module.description;



    header.appendChild(title);

    header.appendChild(description);



    section.appendChild(header);



    /*=========================================
                Topology Cards
    =========================================*/

    const grid=document.createElement("div");

    grid.className="topologyGrid";



    module.topologies.forEach(topology=>{

        grid.appendChild(

            createTopologyCard(topology)

        );

    });



    section.appendChild(grid);



    /*=========================================
                Drawing Area
    =========================================*/

    const canvas=document.createElement("div");

    canvas.id="topologyCanvas";

    canvas.className="topologyCanvas";



    section.appendChild(canvas);



    /*=========================================
                Controls
    =========================================*/

    const controls=document.createElement("div");

    controls.className="topologyControls";



    const validateButton=document.createElement("button");

    validateButton.className="magicBtn";

    validateButton.textContent=

        module.controls.validateButton;



    validateButton.onclick=validateTopology;



    const resetButton=document.createElement("button");

    resetButton.className="magicBtn";

    resetButton.textContent=

        module.controls.resetButton;



    resetButton.onclick=resetTopology;



    controls.appendChild(validateButton);

    controls.appendChild(resetButton);



    section.appendChild(controls);



    NetworkEngine.workspace.appendChild(section);

}
/*==================================================
            CREATE TOPOLOGY CARD
==================================================*/

function createTopologyCard(topology){

    const card=document.createElement("div");

    card.className="topologyCard";



    card.dataset.id=topology.id;



    const icon=document.createElement("div");

    icon.className="topologyIcon";

    icon.textContent="🌐";



    const title=document.createElement("h3");

    title.textContent=topology.name;



    const description=document.createElement("p");

    description.textContent=

        topology.description;



    card.appendChild(icon);

    card.appendChild(title);

    card.appendChild(description);



    card.onclick=function(){

        document

        .querySelectorAll(".topologyCard")

        .forEach(c=>{

            c.classList.remove("active");

        });



        card.classList.add("active");



        NetworkEngine.state.topology=

            topology.id;



        renderNetworkDevices(

            topology

        );

    };



    return card;

}
/*==================================================
            RENDER NETWORK DEVICES
==================================================*/

function renderNetworkDevices(topology){

    const canvas=document.getElementById("topologyCanvas");

    if(!canvas)return;

    canvas.innerHTML="";

    NetworkEngine.state.selectedNode=null;

    NetworkEngine.state.connections=[];

    if(!topology.devices){

        canvas.innerHTML=`

            <div class="emptyCanvas">

                No devices available.

            </div>

        `;

        return;

    }

    topology.devices.forEach(device=>{

        const node=createNetworkDevice(device);

        canvas.appendChild(node);

    });

}
/*==================================================
            CREATE NETWORK DEVICE
==================================================*/

function createNetworkDevice(device){

    const node=document.createElement("div");

    node.className="networkDevice";

    node.dataset.id=device.id;

    node.style.left=device.x+"px";

    node.style.top=device.y+"px";



    const icon=document.createElement("div");

    icon.className="deviceIcon";

    icon.textContent=device.icon;



    const title=document.createElement("div");

    title.className="deviceTitle";

    title.textContent=device.name;



    node.appendChild(icon);

    node.appendChild(title);



    node.addEventListener(

        "click",

        function(){

            selectNetworkDevice(node);

        }

    );



    makeDraggable(node);



    return node;

}/*==================================================
            SELECT NETWORK DEVICE
==================================================*/

function selectNetworkDevice(node){

    const deviceId=node.dataset.id;

    /*------------------------------------------
            First Device Selected
    ------------------------------------------*/

    if(NetworkEngine.state.selectedNode===null){

        NetworkEngine.state.selectedNode=deviceId;

        node.classList.add("selected");

        return;

    }

    /*------------------------------------------
            Same Device Clicked Again
    ------------------------------------------*/

    if(NetworkEngine.state.selectedNode===deviceId){

        node.classList.remove("selected");

        NetworkEngine.state.selectedNode=null;

        return;

    }

    /*------------------------------------------
            Create Connection
    ------------------------------------------*/

    createConnection(

        NetworkEngine.state.selectedNode,

        deviceId

    );

    document

        .querySelectorAll(".networkDevice")

        .forEach(device=>{

            device.classList.remove("selected");

        });

    NetworkEngine.state.selectedNode=null;

}
/*==================================================
            CREATE CONNECTION
==================================================*/

function createConnection(from,to){

    /*------------------------------------------
            Prevent Duplicate
    ------------------------------------------*/

    if(

    !canConnect(

        from,

        to

    )

){

    return;

}

const exists=

    NetworkEngine.state.connections.some(connection=>{

        return(

            (

                connection.from===from &&

                connection.to===to

            )

            ||

            (

                connection.from===to &&

                connection.to===from

            )

        );

    });

    if(exists){

        return;

    }

    /*------------------------------------------
            Save Connection
    ------------------------------------------*/

    const connection={

        from,

        to

    };

    NetworkEngine.state.connections.push(

        connection

    );

    /*------------------------------------------
            Draw Line
    ------------------------------------------*/

    drawConnection(connection);
  checkTopologyCompletion();

}
/*==================================================
            CREATE SVG LAYER
==================================================*/

function createSVGCanvas(){

    const canvas=document.getElementById("topologyCanvas");

    if(!canvas)return null;

    let svg=canvas.querySelector("svg.connectionLayer");

    if(svg)return svg;

    svg=document.createElementNS(

        "http://www.w3.org/2000/svg",

        "svg"

    );

    svg.classList.add("connectionLayer");

    svg.setAttribute("width","100%");

    svg.setAttribute("height","100%");

    svg.style.position="absolute";

    svg.style.left="0";

    svg.style.top="0";

    svg.style.pointerEvents="none";

    svg.style.overflow="visible";

    canvas.prepend(svg);

    return svg;

}
/*==================================================
            DRAW CONNECTION
==================================================*/

function drawConnection(connection){

    const svg=createSVGCanvas();

    if(!svg)return;

    const from=document.querySelector(

        `.networkDevice[data-id="${connection.from}"]`

    );

    const to=document.querySelector(

        `.networkDevice[data-id="${connection.to}"]`

    );

    if(!from || !to)return;

    const canvas=document.getElementById("topologyCanvas");

    const canvasRect=canvas.getBoundingClientRect();

    const fromRect=from.getBoundingClientRect();

    const toRect=to.getBoundingClientRect();

    const x1=

        fromRect.left-

        canvasRect.left+

        fromRect.width/2;

    const y1=

        fromRect.top-

        canvasRect.top+

        fromRect.height/2;

    const x2=

        toRect.left-

        canvasRect.left+

        toRect.width/2;

    const y2=

        toRect.top-

        canvasRect.top+

        toRect.height/2;

    const line=document.createElementNS(

        "http://www.w3.org/2000/svg",

        "line"

    );

    line.setAttribute("x1",x1);

    line.setAttribute("y1",y1);

    line.setAttribute("x2",x2);

    line.setAttribute("y2",y2);

    line.setAttribute("stroke","#4FC3F7");

    line.setAttribute("stroke-width","5");

    line.setAttribute("stroke-linecap","round");

    line.setAttribute("stroke-dasharray","12 8");

    line.classList.add("networkCable");

    line.dataset.from=connection.from;

    line.dataset.to=connection.to;

   enableConnectionEvents(

    line,

    connection

);

svg.appendChild(line);

}
/*==================================================
                MAKE DRAGGABLE
==================================================*/

function makeDraggable(node){

    let dragging=false;

    let offsetX=0;

    let offsetY=0;

    node.addEventListener("mousedown",startDrag);

    function startDrag(event){

        dragging=true;

        const rect=node.getBoundingClientRect();

        offsetX=event.clientX-rect.left;

        offsetY=event.clientY-rect.top;

        node.classList.add("dragging");

        document.addEventListener("mousemove",drag);

        document.addEventListener("mouseup",stopDrag);

    }

    function drag(event){

        if(!dragging)return;

        const canvas=document.getElementById("topologyCanvas");

        const canvasRect=canvas.getBoundingClientRect();

        let left=event.clientX-canvasRect.left-offsetX;

        let top=event.clientY-canvasRect.top-offsetY;

        left=Math.max(

            0,

            Math.min(

                left,

                canvas.clientWidth-node.offsetWidth

            )

        );

        top=Math.max(

            0,

            Math.min(

                top,

                canvas.clientHeight-node.offsetHeight

            )

        );

        node.style.left=left+"px";

        node.style.top=top+"px";

        updateConnections();

    }

    function stopDrag(){

        dragging=false;

        node.classList.remove("dragging");

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
            UPDATE CONNECTIONS
==================================================*/

function updateConnections(){

    const svg=document.querySelector(

        ".connectionLayer"

    );

    if(!svg)return;

    svg.innerHTML="";

    NetworkEngine.state.connections.forEach(

        connection=>{

            drawConnection(connection);

        }

    );

}

/*==================================================
            VALIDATE TOPOLOGY
==================================================*/

function validateTopology(){

    if(!NetworkEngine.state.topology){

        alert("Please select a topology first.");

        return;

    }

    const module=

    NetworkEngine.simulator.modules.find(

        module=>module.id==="topologyBuilder"

    );

    if(!module){

        console.error("Topology module not found.");

        return;

    }

    const topology=

    module.topologies.find(

        topology=>

        topology.id===

        NetworkEngine.state.topology

    );

    if(!topology){

        console.error("Selected topology not found.");

        return;

    }

    let correct=0;

    let wrong=0;

    NetworkEngine.state.connections.forEach(

        connection=>{

            if(

                isConnectionValid(

                    topology,

                    connection

                )

            ){

                correct++;

            }

            else{

                wrong++;

            }

        }

    );

    const expected=

    topology.connections.length;

    const completed=

    correct===expected &&

    wrong===0;

    if(completed){

        NetworkEngine.state.score+=20;

        document.getElementById(

            "networkScore"

        ).textContent=

        NetworkEngine.state.score;

        showNotification(

            "✅ Excellent! Correct topology created.",

            "success"

        );

    }

    else{

        showNotification(

            `Correct : ${correct} / ${expected}

Wrong : ${wrong}`,

            "warning"

        );

    }

}

/*==================================================
        CHECK CONNECTION VALIDITY
==================================================*/

function isConnectionValid(

    topology,

    connection

){

    return topology.connections.some(

        validConnection=>{

            return(

                (

                    validConnection.from===

                    connection.from

                    &&

                    validConnection.to===

                    connection.to

                )

                ||

                (

                    validConnection.from===

                    connection.to

                    &&

                    validConnection.to===

                    connection.from

                )

            );

        }

    );

}

/*==================================================
            SHOW NOTIFICATION
==================================================*/

function showNotification(message,type="info"){

    let notification=document.getElementById(

        "networkNotification"

    );

    if(!notification){

        notification=document.createElement("div");

        notification.id="networkNotification";

        notification.className="networkNotification";

        document.body.appendChild(notification);

    }

    notification.className="networkNotification "+type;

    notification.textContent=message;

    notification.classList.add("show");

    clearTimeout(notification.timer);

    notification.timer=setTimeout(()=>{

        notification.classList.remove("show");

    },3000);

}
/*==================================================
            SHOW NOTIFICATION
==================================================*/

function showNotification(message,type="info"){

    let notification=document.getElementById(

        "networkNotification"

    );

    if(!notification){

        notification=document.createElement("div");

        notification.id="networkNotification";

        notification.className="networkNotification";

        document.body.appendChild(notification);

    }

    notification.className="networkNotification "+type;

    notification.textContent=message;

    notification.classList.add("show");

    clearTimeout(notification.timer);

    notification.timer=setTimeout(()=>{

        notification.classList.remove("show");

    },3000);

}
/*==================================================
        HIGHLIGHT CONNECTIONS
==================================================*/

function highlightConnections(){

    const lines=document.querySelectorAll(

        ".connectionLayer line"

    );

    const module=NetworkEngine.simulator.modules.find(

        module=>module.id==="topologyBuilder"

    );

    if(!module)return;

    const topology=module.topologies.find(

        topology=>

        topology.id===

        NetworkEngine.state.topology

    );

    if(!topology)return;

    lines.forEach(line=>{

        const connection={

            from:line.dataset.from,

            to:line.dataset.to

        };

        if(

            isConnectionValid(

                topology,

                connection

            )

        ){

            line.setAttribute(

                "stroke",

                "#22C55E"

            );

        }

        else{

            line.setAttribute(

                "stroke",

                "#EF4444"

            );

        }

    });

}
/*==================================================
                RESET TOPOLOGY
==================================================*/

function resetTopology(){

    NetworkEngine.state.selectedNode=null;

    NetworkEngine.state.connections=[];

    document

        .querySelectorAll(".networkDevice")

        .forEach(device=>{

            device.classList.remove(

                "selected"

            );

        });

    const svg=document.querySelector(

        ".connectionLayer"

    );

    if(svg){

        svg.innerHTML="";

    }

    hideNotification();

}
/*==================================================
            HIDE NOTIFICATION
==================================================*/

function hideNotification(){

    const notification=document.getElementById(

        "networkNotification"

    );

    if(!notification)return;

    notification.classList.remove(

        "show"

    );

}
/*==================================================
            ENABLE CONNECTION EVENTS
==================================================*/

function enableConnectionEvents(line,connection){

    line.style.pointerEvents="stroke";

    line.style.cursor="pointer";

    line.addEventListener(

        "click",

        function(event){

            event.stopPropagation();

            removeConnection(connection);

        }

    );

}
/*==================================================
            REMOVE CONNECTION
==================================================*/

function removeConnection(connection){

    NetworkEngine.state.connections=

    NetworkEngine.state.connections.filter(

        item=>!(

            (

                item.from===connection.from &&

                item.to===connection.to

            )

            ||

            (

                item.from===connection.to &&

                item.to===connection.from

            )

        )

    );
NetworkEngine.state.completed=false;
    updateConnections();

}
/*==================================================
            CAN CONNECT DEVICES
==================================================*/

function canConnect(from,to){

    if(from===to){

        showNotification(

            "A device cannot connect to itself.",

            "warning"

        );

        return false;

    }

    const module=NetworkEngine.simulator.modules.find(

        module=>module.id==="topologyBuilder"

    );

    if(!module)return false;

    const topology=module.topologies.find(

        topology=>

        topology.id===

        NetworkEngine.state.topology

    );

    if(!topology)return false;

    const allowed=topology.connections.some(

        connection=>{

            return(

                (

                    connection.from===from &&

                    connection.to===to

                )

                ||

                (

                    connection.from===to &&

                    connection.to===from

                )

            );

        }

    );

    if(!allowed){

        showNotification(

            "These devices cannot be connected in this topology.",

            "warning"

        );

    }

    return allowed;

}
/*==================================================
            CHECK TOPOLOGY COMPLETION
==================================================*/

function checkTopologyCompletion(){

    const module=NetworkEngine.simulator.modules.find(

        module=>module.id==="topologyBuilder"

    );

    if(!module)return;

    const topology=module.topologies.find(

        topology=>

        topology.id===

        NetworkEngine.state.topology

    );

    if(!topology)return;

    const expected=topology.connections.length;

    const current=NetworkEngine.state.connections.length;

    if(current!==expected){

        return;

    }

    const completed=

    NetworkEngine.state.connections.every(

        connection=>

        isConnectionValid(

            topology,

            connection

        )

    );

    if(!completed){

        return;

    }

    NetworkEngine.state.completed=true;

    unlockTopologyReward();

}
/*==================================================
            UNLOCK TOPOLOGY REWARD
==================================================*/

function unlockTopologyReward(){

    showNotification(

        "🏆 Topology Completed Successfully!",

        "success"

    );

    document.getElementById(

        "networkScore"

    ).textContent=

    NetworkEngine.state.score;

    if(typeof showReward==="function"){

        showReward(

            "🌐 Network Architect",

            "You mastered this topology."

        );

    }

}
/*==================================================
            RENDER TRANSMISSION MODULE
==================================================*/

function renderTransmissionModule(module){

    const section=document.createElement("section");

    section.className="networkModule";



    /*------------------------------------------
                Header
    ------------------------------------------*/

    const header=document.createElement("div");

    header.className="moduleHeader";



    const title=document.createElement("h2");

    title.innerHTML=`${module.icon} ${module.title}`;



    const description=document.createElement("p");

    description.textContent=module.description;



    header.appendChild(title);

    header.appendChild(description);



    section.appendChild(header);



    /*------------------------------------------
            Switching Options
    ------------------------------------------*/

    const grid=document.createElement("div");

    grid.className="switchingGrid";



    module.options.forEach(option=>{

        grid.appendChild(

            createSwitchCard(option)

        );

    });



    section.appendChild(grid);



    /*------------------------------------------
            Transmission Canvas
    ------------------------------------------*/

    const canvas=document.createElement("div");

    canvas.id="transmissionCanvas";

    canvas.className="transmissionCanvas";



    section.appendChild(canvas);



    /*------------------------------------------
            Control Buttons
    ------------------------------------------*/

    const controls=document.createElement("div");

    controls.className="controlPanel";



    const send=document.createElement("button");

    send.className="magicBtn";

    send.textContent=

    module.controls.sendButton;

    send.onclick=startTransmission;



    const reset=document.createElement("button");

    reset.className="magicBtn";

    reset.textContent=

    module.controls.resetButton;

    reset.onclick=resetTransmission;



    controls.appendChild(send);

    controls.appendChild(reset);



    section.appendChild(controls);



    /*------------------------------------------
            Result Panel
    ------------------------------------------*/

    const result=document.createElement("div");

    result.id="resultPanel";

    result.className="resultPanel";



    section.appendChild(result);



    NetworkEngine.workspace.appendChild(section);

}
/*==================================================
            CREATE SWITCH CARD
==================================================*/

function createSwitchCard(option){

    const card=document.createElement("div");

    card.className="switchCard";



    card.dataset.id=option.id;



    card.innerHTML=`

        <div class="switchIcon">

            ${option.icon}

        </div>

        <h3>

            ${option.title}

        </h3>

        <p>

            ${option.description}

        </p>

    `;



    card.onclick=function(){

        document

        .querySelectorAll(".switchCard")

        .forEach(item=>{

            item.classList.remove(

                "active"

            );

        });



        card.classList.add(

            "active"

        );



        NetworkEngine.state.transmission=

            option.id;



        initializeTransmission(

            option

        );

    };



    return card;

}
/*==================================================
        INITIALIZE TRANSMISSION
==================================================*/

function initializeTransmission(option){

    NetworkEngine.state.transmission=option.id;

    NetworkEngine.state.packets=[];

    const canvas=document.getElementById(

        "transmissionCanvas"

    );

    if(!canvas)return;

    canvas.innerHTML="";



    /*------------------------------------------
                Sender
    ------------------------------------------*/

    const sender=document.createElement("div");

    sender.className="networkNode sender";

    sender.id="senderNode";

    sender.innerHTML=`

        <div class="nodeIcon">

            💻

        </div>

        <div class="nodeLabel">

            Sender

        </div>

    `;



    /*------------------------------------------
                Receiver
    ------------------------------------------*/

    const receiver=document.createElement("div");

    receiver.className="networkNode receiver";

    receiver.id="receiverNode";

    receiver.innerHTML=`

        <div class="nodeIcon">

            🖥️

        </div>

        <div class="nodeLabel">

            Receiver

        </div>

    `;



    /*------------------------------------------
            Transmission Path
    ------------------------------------------*/

    const path=document.createElement("div");

    path.className="transmissionPath";

    path.id="transmissionPath";



    canvas.appendChild(sender);

    canvas.appendChild(path);

    canvas.appendChild(receiver);



    document.getElementById(

        "resultPanel"

    ).innerHTML=`

        <strong>

            ${option.title}

        </strong>

        <br>

        Ready to transmit packets.

    `;

}

/*==================================================
            START TRANSMISSION
==================================================*/

function startTransmission(){

    if(!NetworkEngine.state.transmission){

        showNotification(

            "Please select a transmission technique.",

            "warning"

        );

        return;

    }

    switch(NetworkEngine.state.transmission){

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
            RESET TRANSMISSION
==================================================*/

function resetTransmission(){

    NetworkEngine.state.packets=[];

    const canvas=document.getElementById(

        "transmissionCanvas"

    );

    if(!canvas)return;

    document

        .querySelectorAll(".dataPacket")

        .forEach(packet=>packet.remove());

    const option=

    NetworkEngine.simulator.modules

    .find(module=>module.id==="dataTransmission")

    .options.find(

        option=>

        option.id===

        NetworkEngine.state.transmission

    );

    if(option){

        initializeTransmission(option);

    }

    document.getElementById(

        "resultPanel"

    ).innerHTML=

    "Transmission reset. Ready to send packets.";

}
/*==================================================
        ANIMATE MULTIPLE PACKETS
==================================================*/

function animateMultiplePackets(

    count,

    delay=250

){

    let current=0;

    function sendNext(){

        if(current>=count){

            return;

        }

        createPacketAnimation(

            current+1,

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
/*==================================================
        PACKET SWITCHING
==================================================*/

function packetSwitching(){

    document.getElementById(

        "resultPanel"

    ).innerHTML=

    "📦 Packet Switching";

    let delivered=0;

    for(let i=0;i<5;i++){

        setTimeout(()=>{

            const packet=createPacket("📦");

            animatePacket(

                packet,

                5,

                ()=>{

                    delivered++;

                    if(delivered===5){

                        transmissionCompleted();

                    }

                }

            );

        },i*250);

    }

}
/*==================================================
        MESSAGE SWITCHING
==================================================*/

function messageSwitching(){

    document.getElementById(

        "resultPanel"

    ).innerHTML=

    "📨 Message Switching";

    const packet=createPacket("📨");

    animatePacket(

        packet,

        3,

        transmissionCompleted

    );

}
/*==================================================
        CIRCUIT SWITCHING
==================================================*/

function circuitSwitching(){

    const path=document.getElementById(

        "transmissionPath"

    );

    path.classList.add(

        "activeCircuit"

    );

    document.getElementById(

        "resultPanel"

    ).innerHTML=

    "🔌 Establishing Circuit...";

    setTimeout(()=>{

        let delivered=0;

        for(let i=0;i<3;i++){

            setTimeout(()=>{

                const packet=createPacket("📦");

                animatePacket(

                    packet,

                    7,

                    ()=>{

                        delivered++;

                        if(delivered===3){

                            path.classList.remove(

                                "activeCircuit"

                            );

                            transmissionCompleted();

                        }

                    }

                );

            },i*120);

        }

    },1000);

}

/*==================================================
            ANIMATE PACKET
==================================================*/

function animatePacket(packet,speed,onComplete){

    const sender=document.getElementById(

        "senderNode"

    );

    const receiver=document.getElementById(

        "receiverNode"

    );

    const start=

    sender.offsetLeft+

    sender.offsetWidth;

    const end=

    receiver.offsetLeft-40;

    let x=start;

    packet.style.left=x+"px";

    packet.style.top=

    sender.offsetTop+20+"px";

    const timer=setInterval(()=>{

        x+=speed;

        packet.style.left=x+"px";

        if(x>=end){

            clearInterval(timer);

            packet.remove();

            if(typeof onComplete==="function"){

                onComplete();

            }

        }

    },16);

}
/*==================================================
            CREATE PACKET
==================================================*/

function createPacket(icon="📦"){

    const packet=document.createElement("div");

    packet.className="dataPacket";

    packet.textContent=icon;

    document.getElementById(

        "transmissionCanvas"

    ).appendChild(packet);

    return packet;

}
/*==================================================
        TRANSMISSION COMPLETED
==================================================*/

function transmissionCompleted(){

    NetworkEngine.state.score+=10;

    document.getElementById(

        "networkScore"

    ).textContent=

    NetworkEngine.state.score;

    document.getElementById(

        "resultPanel"

    ).innerHTML=

    "✅ Transmission Successful";

    showNotification(

        "Transmission Completed!",

        "success"

    );

}

/*==================================================
            RENDER SECURITY MODULE
==================================================*/

function renderSecurityModule(module){

    const section=document.createElement("section");

    section.className="networkModule";

    section.innerHTML=`

        <div class="moduleHeader">

            <h2>

                ${module.icon} ${module.title}

            </h2>

            <p>

                ${module.description}

            </p>

        </div>

        <div id="securityArena"

             class="securityArena">

        </div>

        <div class="controlPanel">

            <button

                class="magicBtn"

                onclick="startSecurityGame()">

                ${module.controls.startButton}

            </button>

            <button

                class="magicBtn"

                onclick="resetSecurityGame()">

                ${module.controls.resetButton}

            </button>

        </div>

        <div

            id="securityResult"

            class="resultPanel">

        </div>

    `;

    NetworkEngine.workspace.appendChild(section);

}

/*==================================================
        START SECURITY GAME
==================================================*/

function startSecurityGame(){

    const arena=document.getElementById(

        "securityArena"

    );

    if(!arena)return;

    arena.innerHTML="";

    const attacks=[

        "🦠 Virus",

        "🎣 Phishing",

        "🐴 Trojan",

        "💣 Malware",

        "👾 Spyware"

    ];

    const defenses=[

        "🛡 Firewall",

        "🔒 Antivirus",

        "🔑 Encryption",

        "🔐 Authentication",

        "📡 Secure Network"

    ];

    attacks.forEach((attack,index)=>{

        const row=document.createElement("div");

        row.className="securityRow";

        row.innerHTML=`

            <span class="attack">

                ${attack}

            </span>

            <select

                class="defenseSelect"

                data-answer="${defenses[index]}">

                <option>

                    Select Protection

                </option>

                ${defenses.map(item=>

                    `<option>${item}</option>`

                ).join("")}

            </select>

        `;

        arena.appendChild(row);

    });

}

/*==================================================
            CHECK SECURITY ANSWERS
==================================================*/

function checkSecurityAnswers(){

    const answers=document.querySelectorAll(

        ".defenseSelect"

    );

    let score=0;

    answers.forEach(answer=>{

        if(

            answer.value===

            answer.dataset.answer

        ){

            score++;

            answer.style.borderColor="#22C55E";

        }

        else{

            answer.style.borderColor="#EF4444";

        }

    });

    NetworkEngine.state.score+=score*5;

    document.getElementById(

        "networkScore"

    ).textContent=

    NetworkEngine.state.score;

    document.getElementById(

        "securityResult"

    ).innerHTML=`

        <h3>

            Score : ${score} / ${answers.length}

        </h3>

    `;

    if(score===answers.length){

        showNotification(

            "🛡 Network Secured!",

            "success"

        );

    }

    else{

        showNotification(

            "Some threats are still active!",

            "warning"

        );

    }

}

/*==================================================
            RESET SECURITY GAME
==================================================*/

function resetSecurityGame(){

    document.getElementById(

        "securityArena"

    ).innerHTML="";

    document.getElementById(

        "securityResult"

    ).innerHTML="";

    const module=

    NetworkEngine.simulator.modules.find(

        module=>module.id==="networkSecurity"

    );

    if(module){

        startSecurityGame();

    }

}
