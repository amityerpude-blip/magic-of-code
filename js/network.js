/*==================================================
        NETWORK SIMULATOR COMPONENT
==================================================*/

function NetworkSimulatorComponent(){

    return `

    <section
        id="networkSection"
        class="lessonContent">

        <div id="networkWorkspace">

        </div>

    </section>

    `;

}
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
        REAL VISUAL NETWORK TRANSMISSION
==================================================*/

function renderTransmissionModule(module){

    const section=document.createElement("section");
    section.className="networkModule transmissionModuleFixed";

    section.innerHTML=`
        <div class="moduleHeader">
            <h2>${module.icon || "📡"} ${module.title || "Data Transmission"}</h2>
            <p>${module.description || "Watch data travel through a real network."}</p>
        </div>

        <div class="dtTechniqueBar">
            ${(module.options || [
                {id:"packet",icon:"📦",title:"Packet Switching",description:"Packets can take different routes."},
                {id:"message",icon:"💌",title:"Message Switching",description:"The complete message is forwarded node by node."},
                {id:"circuit",icon:"🔗",title:"Circuit Switching",description:"A dedicated route is established first."}
            ]).map(o=>`
                <button class="dtTechnique" data-technique="${o.id}">
                    <span>${o.icon || "📡"}</span>
                    <strong>${o.title}</strong>
                    <small>${o.description || ""}</small>
                </button>
            `).join("")}
        </div>

        <div id="dtCircuitSelector" class="dtCircuitSelector" style="display:none;">
            <div class="dtInstruction">🔗 <strong>Circuit Switching:</strong> select one dedicated path.</div>
            <div class="dtPathButtons">
                <button data-path="0">🛣️ Path 1</button>
                <button data-path="1">🛣️ Path 2</button>
                <button data-path="2">🛣️ Path 3</button>
            </div>
        </div>

        <div class="dtLegend">
            <span>🟢 Sender</span>
            <span>🔵 Router</span>
            <span>🟣 Active route</span>
            <span>📦 Moving data</span>
            <span>🔴 Receiver</span>
        </div>

        <div id="transmissionCanvas" class="dtCanvas">
            <svg class="dtLinks" aria-hidden="true"></svg>
            <div class="dtNode dtSender" data-id="sender"><span>💻</span><b>Sender</b></div>
            <div class="dtNode dtReceiver" data-id="receiver"><span>🖥️</span><b>Receiver</b></div>
        </div>

        <div id="dtStatus" class="dtStatus">
            Choose a switching technique, then press <strong>🚀 Send Data</strong>.
        </div>

        <div class="controlPanel dtControls">
            <button id="dtSendButton" class="magicBtn">🚀 Send Data</button>
            <button id="dtResetButton" class="magicBtn">🔄 Reset</button>
        </div>

        <div id="resultPanel" class="resultPanel">
            <strong>📡 Network ready</strong><br>
            Select a technique to begin.
        </div>
    `;

    NetworkEngine.workspace.appendChild(section);

    installTransmissionStyles();
    buildTransmissionNetwork();

    const techniqueButtons=section.querySelectorAll(".dtTechnique");
    techniqueButtons.forEach(btn=>{
        btn.addEventListener("click",()=>selectTransmissionTechnique(btn.dataset.technique));
    });

    section.querySelectorAll(".dtPathButtons button").forEach(btn=>{
        btn.addEventListener("click",()=>selectCircuitPath(Number(btn.dataset.path)));
    });

    section.querySelector("#dtSendButton").addEventListener("click",startTransmission);
    section.querySelector("#dtResetButton").addEventListener("click",resetTransmission);

    NetworkEngine.state.transmission=null;
    NetworkEngine.state.dtPathIndex=0;
    NetworkEngine.state.dtRunning=false;
    NetworkEngine.state.dtTimers=[];
}

/*--------------------------------------------------
        TRANSMISSION VISUAL STYLES
        Injected once so old CSS cannot hide the network.
--------------------------------------------------*/
function installTransmissionStyles(){
    if(document.getElementById("dtTransmissionStyles")) return;

    const style=document.createElement("style");
    style.id="dtTransmissionStyles";
    style.textContent=`
        .transmissionModuleFixed{width:100%;box-sizing:border-box;}
        .dtTechniqueBar{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:18px 0;}
        .dtTechnique{border:2px solid rgba(120,180,255,.35);background:rgba(10,20,45,.88);color:#fff;border-radius:14px;padding:14px;cursor:pointer;text-align:left;transition:.2s;min-height:88px;}
        .dtTechnique:hover,.dtTechnique.active{transform:translateY(-2px);border-color:#64b5ff;box-shadow:0 0 18px rgba(80,170,255,.3);}
        .dtTechnique span{font-size:25px;display:block;margin-bottom:5px;}
        .dtTechnique strong{display:block;font-size:16px;}
        .dtTechnique small{display:block;margin-top:5px;opacity:.78;line-height:1.3;}
        .dtCircuitSelector{padding:14px;border-radius:14px;background:rgba(40,20,75,.72);border:1px solid rgba(180,120,255,.45);margin:12px 0;}
        .dtInstruction{margin-bottom:10px;color:#fff;}
        .dtPathButtons{display:flex;gap:10px;flex-wrap:wrap;}
        .dtPathButtons button{border:1px solid #777;background:#202744;color:#fff;border-radius:10px;padding:10px 16px;cursor:pointer;}
        .dtPathButtons button.active{background:#6539a8;border-color:#c59cff;box-shadow:0 0 14px rgba(180,120,255,.45);}
        .dtLegend{display:flex;flex-wrap:wrap;gap:12px;margin:12px 0;font-size:13px;opacity:.9;}
        .transmissionModuleFixed #transmissionCanvas.dtCanvas{position:relative;width:100%;height:560px;min-height:560px;border-radius:18px;overflow:hidden;background:radial-gradient(circle at 50% 50%,rgba(35,65,115,.65),rgba(5,10,28,.98));border:2px solid rgba(90,170,255,.35);box-shadow:inset 0 0 50px rgba(0,0,0,.5);}
        .transmissionModuleFixed #transmissionCanvas .dtLinks{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:1;}
        .dtLink{stroke:#4b6387;stroke-width:3;opacity:.62;fill:none;transition:.3s;}
        .dtLink.active{stroke:#c27cff;stroke-width:6;opacity:1;filter:drop-shadow(0 0 5px #b15cff);}
        .dtNode{position:absolute;z-index:3;width:74px;height:60px;transform:translate(-50%,-50%);border-radius:14px;border:2px solid #3e7fc4;background:linear-gradient(145deg,#162b50,#09152d);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;box-sizing:border-box;box-shadow:0 5px 16px rgba(0,0,0,.45);font-size:11px;transition:.25s;}
        .dtNode span{font-size:22px;line-height:23px;}
        .dtNode b{font-size:10px;margin-top:2px;}
        .dtNode.routerActive{border-color:#e4a7ff;box-shadow:0 0 22px #b65cff,0 0 5px #fff;transform:translate(-50%,-50%) scale(1.13);}
        .dtSender{border-color:#35d98b;background:linear-gradient(145deg,#124d3b,#08281f);}
        .dtReceiver{border-color:#ff536b;background:linear-gradient(145deg,#5a1e2d,#2a0c16);}
        .dtPacket{position:absolute;z-index:10;width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:21px;background:#fff;box-shadow:0 0 14px currentColor;pointer-events:none;transform:translate(-50%,-50%);}
        .dtPacketLabel{position:absolute;top:30px;left:50%;transform:translateX(-50%);font-size:9px;white-space:nowrap;color:#fff;font-weight:bold;text-shadow:0 1px 4px #000;}
        .dtStatus{margin:12px 0;padding:13px 16px;border-radius:12px;background:rgba(12,20,42,.9);border-left:4px solid #65b7ff;color:#fff;min-height:22px;}
        .dtControls{display:flex;gap:10px;flex-wrap:wrap;}
        @media(max-width:800px){.dtTechniqueBar{grid-template-columns:1fr}.transmissionModuleFixed #transmissionCanvas.dtCanvas{height:500px;min-height:500px}.dtNode{width:62px;height:54px}.dtNode span{font-size:18px}}
    `;
    document.head.appendChild(style);
}

/*--------------------------------------------------
        NETWORK GEOMETRY
--------------------------------------------------*/
const DT_NETWORK_PATHS=[
    ["r1","r2","r3","r4","r5"],
    ["r6","r7","r8","r9","r10"],
    ["r11","r12","r13","r14","r15"]
];

const DT_NODE_POSITIONS={
    sender:[6,50], r1:[18,18], r2:[30,18], r3:[42,18], r4:[54,18], r5:[66,18],
    r6:[18,50], r7:[30,50], r8:[42,50], r9:[54,50], r10:[66,50],
    r11:[18,82], r12:[30,82], r13:[42,82], r14:[54,82], r15:[66,82], receiver:[91,50]
};

function buildTransmissionNetwork(){
    const canvas=document.getElementById("transmissionCanvas");
    if(!canvas)return;

    canvas.querySelectorAll(".dtNode:not(.dtSender):not(.dtReceiver)").forEach(n=>n.remove());

    for(let i=1;i<=15;i++){
        const id="r"+i;
        const node=document.createElement("div");
        node.className="dtNode";
        node.dataset.id=id;
        node.innerHTML=`<span>🔵</span><b>Router ${i}</b>`;
        canvas.appendChild(node);
    }

    Object.entries(DT_NODE_POSITIONS).forEach(([id,pos])=>{
        const node=canvas.querySelector(`[data-id="${id}"]`) || (id==="sender"?canvas.querySelector(".dtSender"):canvas.querySelector(".dtReceiver"));
        if(node){node.style.left=pos[0]+"%";node.style.top=pos[1]+"%";}
    });

    drawTransmissionLinks();
}

function drawTransmissionLinks(activeRoute=null){
    const canvas=document.getElementById("transmissionCanvas");
    const svg=canvas?.querySelector(".dtLinks");
    if(!canvas||!svg)return;
    svg.innerHTML="";

    const routes=DT_NETWORK_PATHS.map((route,i)=>[
        "sender",...route,"receiver"
    ]);

    routes.forEach((route,routeIndex)=>{
        for(let i=0;i<route.length-1;i++){
            const a=getDTNodeCenter(route[i]);
            const b=getDTNodeCenter(route[i+1]);
            if(!a||!b)continue;
            const line=document.createElementNS("http://www.w3.org/2000/svg","line");
            line.setAttribute("x1",a.x);line.setAttribute("y1",a.y);
            line.setAttribute("x2",b.x);line.setAttribute("y2",b.y);
            line.classList.add("dtLink");
            if(activeRoute===routeIndex)line.classList.add("active");
            svg.appendChild(line);
        }
    });
}

function getDTNodeCenter(id){
    const canvas=document.getElementById("transmissionCanvas");
    const node=canvas?.querySelector(`[data-id="${id}"]`) || (id==="sender"?canvas?.querySelector(".dtSender"):canvas?.querySelector(".dtReceiver"));
    if(!node)return null;
    const cr=canvas.getBoundingClientRect();
    const nr=node.getBoundingClientRect();
    return {x:nr.left-cr.left+nr.width/2,y:nr.top-cr.top+nr.height/2};
}

function selectTransmissionTechnique(type){
    if(NetworkEngine.state.dtRunning) return;
    NetworkEngine.state.transmission=type;
    document.querySelectorAll(".dtTechnique").forEach(b=>b.classList.toggle("active",b.dataset.technique===type));

    const selector=document.getElementById("dtCircuitSelector");
    if(selector)selector.style.display=type==="circuit"?"block":"none";

    clearTransmissionVisuals();
    drawTransmissionLinks(type==="circuit"?NetworkEngine.state.dtPathIndex:null);

    const title=type==="packet"?"📦 Packet Switching":type==="message"?"💌 Message Switching":"🔗 Circuit Switching";
    setDTStatus(`${title} selected. ${type==="circuit"?"Choose a dedicated path, then send data.":"The system will automatically choose a route for transmission."}`);
}

function selectCircuitPath(index){
    if(NetworkEngine.state.dtRunning)return;
    NetworkEngine.state.dtPathIndex=Math.max(0,Math.min(2,index));
    document.querySelectorAll(".dtPathButtons button").forEach((b,i)=>b.classList.toggle("active",i===NetworkEngine.state.dtPathIndex));
    drawTransmissionLinks(NetworkEngine.state.dtPathIndex);
    setDTStatus(`🔗 Dedicated Path ${index+1} selected. All circuit data will use this route.`);
}

function startTransmission(){
    const type=NetworkEngine.state.transmission;
    if(!type){
        setDTStatus("⚠️ Select Packet Switching, Message Switching or Circuit Switching first.");
        return;
    }
    if(NetworkEngine.state.dtRunning)return;

    clearTransmissionTimers();
    clearTransmissionVisuals();
    NetworkEngine.state.dtRunning=true;

    if(type==="packet") runPacketSwitching();
    else if(type==="message") runMessageSwitching();
    else runCircuitSwitching();
}

/*--------------------------------------------------
        PACKET SWITCHING
        Each packet automatically chooses a route.
--------------------------------------------------*/
function runPacketSwitching(){
    const routes=[0,1,2,0,2,1];
    let delivered=0;
    setDTStatus("📦 Message divided into packets. Watch the packets choose different routes.");

    routes.forEach((routeIndex,i)=>{
        const timer=setTimeout(()=>{
            animateDTPacket("📦",routeIndex,i+1,()=>{
                delivered++;
                if(delivered===routes.length)finishTransmission("📦 Packet Switching: all packets reached the receiver.");
            });
        },i*650);
        NetworkEngine.state.dtTimers.push(timer);
    });
}

/*--------------------------------------------------
        MESSAGE SWITCHING
        Whole message chooses one random route and moves
        hop by hop with visible store-and-forward pauses.
--------------------------------------------------*/
function runMessageSwitching(){
    const routeIndex=Math.floor(Math.random()*3);
    setDTStatus(`💌 Complete message selected Route ${routeIndex+1}. It will be stored and forwarded at every router.`);
    animateDTPacket("💌",routeIndex,1,()=>finishTransmission("💌 Message Switching: the complete message reached the receiver."),true);
}

/*--------------------------------------------------
        CIRCUIT SWITCHING
        Student-selected dedicated path.
--------------------------------------------------*/
function runCircuitSwitching(){
    const routeIndex=NetworkEngine.state.dtPathIndex||0;
    drawTransmissionLinks(routeIndex);
    setDTStatus(`🔗 Establishing dedicated Path ${routeIndex+1}...`);

    const timer=setTimeout(()=>{
        setDTStatus(`🔗 Circuit established on Path ${routeIndex+1}. Data is now flowing through the dedicated circuit.`);
        let count=0;
        const sendOne=()=>{
            if(count>=4){
                finishTransmission("🔗 Circuit Switching: dedicated circuit transmission completed.");
                return;
            }
            count++;
            animateDTPacket("📦",routeIndex,count,sendOne,false,4);
        };
        sendOne();
    },900);
    NetworkEngine.state.dtTimers.push(timer);
}

/*--------------------------------------------------
        REAL HOP-BY-HOP PACKET ANIMATION
--------------------------------------------------*/
function animateDTPacket(icon,routeIndex,label,onComplete,storeForward=false,count=1){
    const canvas=document.getElementById("transmissionCanvas");
    if(!canvas){onComplete?.();return;}

    const route=["sender",...DT_NETWORK_PATHS[routeIndex],"receiver"];
    const packet=document.createElement("div");
    packet.className="dtPacket";
    packet.innerHTML=`${icon}<span class="dtPacketLabel">${label}</span>`;
    canvas.appendChild(packet);

    let hop=0;

    const moveNext=()=>{
        if(!NetworkEngine.state.dtRunning){packet.remove();return;}
        if(hop>=route.length){packet.remove();onComplete?.();return;}

        const id=route[hop];
        const center=getDTNodeCenter(id);
        if(!center){hop++;moveNext();return;}

        packet.style.left=center.x+"px";
        packet.style.top=center.y+"px";
        highlightDTRouter(id);
        setDTStatus(`${icon} Data ${label} is at ${id==="sender"?"Sender":id==="receiver"?"Receiver":"Router "+id.substring(1)} — hop ${Math.min(hop+1,route.length-1)} of ${route.length-1}`);

        hop++;
        if(hop>=route.length){
            setTimeout(()=>{packet.remove();onComplete?.();},450);
            return;
        }

        const nextCenter=getDTNodeCenter(route[hop]);
        if(!nextCenter){moveNext();return;}

        const duration=storeForward?850:500;
        packet.style.transition=`left ${duration}ms linear, top ${duration}ms linear`;
        requestAnimationFrame(()=>{
            packet.style.left=nextCenter.x+"px";
            packet.style.top=nextCenter.y+"px";
        });

        const timer=setTimeout(()=>{
            if(storeForward)setDTStatus(`💌 Stored at ${route[hop]} — forwarding to next router...`);
            moveNext();
        },duration+80);
        NetworkEngine.state.dtTimers.push(timer);
    };

    const first=getDTNodeCenter(route[0]);
    packet.style.left=first.x+"px";
    packet.style.top=first.y+"px";
    setTimeout(moveNext,120);
}

function highlightDTRouter(id){
    document.querySelectorAll(".dtNode").forEach(n=>n.classList.remove("routerActive"));
    const canvas=document.getElementById("transmissionCanvas");
    const node=canvas?.querySelector(`[data-id="${id}"]`) || (id==="sender"?canvas?.querySelector(".dtSender"):canvas?.querySelector(".dtReceiver"));
    if(node)node.classList.add("routerActive");
}

function finishTransmission(message){
    NetworkEngine.state.dtRunning=false;
    NetworkEngine.state.score=(NetworkEngine.state.score||0)+10;
    const score=document.getElementById("networkScore");
    if(score)score.textContent=NetworkEngine.state.score;
    setDTStatus("✅ "+message);
    const result=document.getElementById("resultPanel");
    if(result)result.innerHTML=`<strong>✅ Transmission Complete</strong><br>${message}`;
    showNotification("📡 Data successfully delivered!","success");
    clearTransmissionTimers();
}

function setDTStatus(message){
    const el=document.getElementById("dtStatus");
    if(el)el.innerHTML=message;
}

function clearTransmissionTimers(){
    (NetworkEngine.state.dtTimers||[]).forEach(t=>clearTimeout(t));
    NetworkEngine.state.dtTimers=[];
}

function clearTransmissionVisuals(){
    clearTransmissionTimers();
    document.querySelectorAll(".dtPacket").forEach(p=>p.remove());
    document.querySelectorAll(".dtNode").forEach(n=>n.classList.remove("routerActive"));
    NetworkEngine.state.dtRunning=false;
}

function resetTransmission(){
    clearTransmissionVisuals();
    NetworkEngine.state.transmission=null;
    NetworkEngine.state.dtPathIndex=0;
    document.querySelectorAll(".dtTechnique").forEach(b=>b.classList.remove("active"));
    document.querySelectorAll(".dtPathButtons button").forEach(b=>b.classList.remove("active"));
    const selector=document.getElementById("dtCircuitSelector");
    if(selector)selector.style.display="none";
    drawTransmissionLinks();
    setDTStatus("Choose a switching technique, then press 🚀 Send Data.");
    const result=document.getElementById("resultPanel");
    if(result)result.innerHTML="<strong>📡 Network reset</strong><br>Ready for the next transmission.";
}

/*==================================================
        END REAL VISUAL TRANSMISSION
==================================================*/

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
        onclick="checkSecurityAnswers()">

        ✔ Check Answers

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

    const threats=

    generateRandomThreats();

    const options=[

        "🔒 Antivirus",

        "🛡 Firewall",

        "🔐 Encryption",

        "🔑 Authentication",

        "📡 Secure Network"

    ];

    threats.forEach(threat=>{

        const row=document.createElement("div");

        row.className="securityRow";

        row.innerHTML=`

            <span class="attack">

                ${threat.attack}

            </span>

            <select

                class="defenseSelect"

                data-answer="${threat.defense}">

                <option>

                    Select Protection

                </option>

                ${options.map(option=>

                    `<option>${option}</option>`

                ).join("")}

            </select>

        `;

        arena.appendChild(row);

    });

    document.getElementById(

        "securityResult"

    ).innerHTML="";

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

/*==================================================
        GENERATE RANDOM THREATS
==================================================*/

function generateRandomThreats(){

    const attacks=[

        {
            attack:"🦠 Virus",
            defense:"🔒 Antivirus"
        },

        {
            attack:"🎣 Phishing",
            defense:"🔑 Authentication"
        },

        {
            attack:"🐴 Trojan",
            defense:"🛡 Firewall"
        },

        {
            attack:"💣 Malware",
            defense:"🔒 Antivirus"
        },

        {
            attack:"👾 Spyware",
            defense:"🛡 Firewall"
        },

        {
            attack:"🌐 Hacker",
            defense:"🔐 Encryption"
        }

    ];

    attacks.sort(

        ()=>Math.random()-0.5

    );

    return attacks.slice(0,5);

}
/*==================================================
            RENDER FINAL BATTLE
==================================================*/

function renderFinalBattle(module){

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

        <div class="battleArena">

            <div class="battleCharacter hero">

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

            <div class="battleCharacter enemy">

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

        </div>

        <div

            id="battleOptions"

            class="battleOptions">

        </div>

        <div class="controlPanel">

            <button

                class="magicBtn"

                onclick="startFinalBattle()">

                ⚔ Start Battle

            </button>

        </div>

    `;

    NetworkEngine.workspace.appendChild(

        section

    );

}

/*==================================================
            START FINAL BATTLE
==================================================*/

function startFinalBattle(){

    const module=

    NetworkEngine.simulator.modules.find(

        module=>module.id==="finalBattle"

    );

    if(!module)return;

    NetworkEngine.state.playerHealth=100;

    NetworkEngine.state.enemyHealth=100;

    NetworkEngine.state.currentQuestion=0;

    updateBattleHealth();

    nextBattleQuestion();

}

/*==================================================
            NEXT BATTLE QUESTION
==================================================*/

function nextBattleQuestion(){

    const module=

    NetworkEngine.simulator.modules.find(

        module=>module.id==="finalBattle"

    );

    if(!module)return;

    if(

        NetworkEngine.state.currentQuestion>=

        module.questions.length

    ){

        battleWon();

        return;

    }

    const question=

    module.questions[

        NetworkEngine.state.currentQuestion

    ];

    renderBattleQuestion(question);

}

/*==================================================
        RENDER BATTLE QUESTION
==================================================*/

function renderBattleQuestion(question){

    document.getElementById(

        "battleQuestion"

    ).innerHTML=`

        <h3>

            ${question.question}

        </h3>

    `;

    const options=document.getElementById(

        "battleOptions"

    );

    options.innerHTML="";

    question.options.forEach(

        (option,index)=>{

            const button=

            document.createElement("button");

            button.className="battleOption";

            button.textContent=option;

            button.onclick=function(){

                checkBattleAnswer(

                    index,

                    question.answer

                );

            };

            options.appendChild(button);

        }

    );

}

/*==================================================
            CHECK BATTLE ANSWER
==================================================*/

function checkBattleAnswer(

    selected,

    correct

){

    disableBattleOptions();

    if(selected===correct){

        NetworkEngine.state.enemyHealth-=20;

        if(

            NetworkEngine.state.enemyHealth<0

        ){

            NetworkEngine.state.enemyHealth=0;

        }

        showNotification(

            "⚔ Critical Hit!",

            "success"

        );

    }

    else{

        NetworkEngine.state.playerHealth-=20;

        if(

            NetworkEngine.state.playerHealth<0

        ){

            NetworkEngine.state.playerHealth=0;

        }

        showNotification(

            "🕷 Spider King attacks!",

            "warning"

        );

    }

    updateBattleHealth();

    if(

        NetworkEngine.state.enemyHealth===0

    ){

        battleWon();

        return;

    }

    if(

        NetworkEngine.state.playerHealth===0

    ){

        battleLost();

        return;

    }

    NetworkEngine.state.currentQuestion++;

    setTimeout(()=>{

    nextBattleQuestion();

    enableBattleOptions();

},1000);

}

/*==================================================
            UPDATE BATTLE HEALTH
==================================================*/

function updateBattleHealth(){

    const player=document.getElementById(

        "playerHealth"

    );

    const enemy=document.getElementById(

        "enemyHealth"

    );

    if(player){

        player.style.width=

        NetworkEngine.state.playerHealth+"%";

    }

    if(enemy){

        enemy.style.width=

        NetworkEngine.state.enemyHealth+"%";

    }

}

/*==================================================
                BATTLE WON
==================================================*/

function battleWon(){

    document.getElementById(

        "battleQuestion"

    ).innerHTML=`

        <h2>

            🏆 Victory!

        </h2>

        <p>

            You defeated the Spider King!

        </p>

    `;

    document.getElementById(

        "battleOptions"

    ).innerHTML="";

    NetworkEngine.state.score+=50;

    document.getElementById(

        "networkScore"

    ).textContent=

    NetworkEngine.state.score;

    showNotification(

        "🎉 Kingdom Cleared!",

        "success"

    );

    finishKingdom();

}

/*==================================================
                BATTLE LOST
==================================================*/

function battleLost(){

    document.getElementById(

        "battleQuestion"

    ).innerHTML=`

        <h2>

            ☠ Defeat

        </h2>

        <p>

            The Spider King has defeated you.

        </p>

    `;

    document.getElementById(

        "battleOptions"

    ).innerHTML=`

        <button

            class="magicBtn"

            onclick="resetBattle()">

            🔄 Try Again

        </button>

    `;

    showNotification(

        "Better luck next time!",

        "warning"

    );

}

/*==================================================
                RESET BATTLE
==================================================*/

function resetBattle(){

    NetworkEngine.state.playerHealth=100;

    NetworkEngine.state.enemyHealth=100;

    NetworkEngine.state.currentQuestion=0;

    updateBattleHealth();

    nextBattleQuestion();

}

/*==================================================
            FINISH KINGDOM
==================================================*/

function finishKingdom(){

    NetworkEngine.state.completed=true;

    if(typeof saveProgress==="function"){

        saveProgress(

            NetworkEngine.simulator.id

        );

    }

    if(typeof showReward==="function"){

        showReward(

            "🕸 Spider Web Nexus Complete!",

            "You have mastered Computer Networks."

        );

    }

}

/*==================================================
            SAVE NETWORK PROGRESS
==================================================*/

function saveNetworkProgress(){

    const progress={

        score:NetworkEngine.state.score,

        topology:NetworkEngine.state.topology,

        completed:NetworkEngine.state.completed,

        transmission:NetworkEngine.state.transmission,

        playerHealth:NetworkEngine.state.playerHealth,

        enemyHealth:NetworkEngine.state.enemyHealth,

        currentQuestion:NetworkEngine.state.currentQuestion

    };

    localStorage.setItem(

        "SpiderWebNexus",

        JSON.stringify(progress)

    );

}
/*==================================================
            LOAD NETWORK PROGRESS
==================================================*/

function loadNetworkProgress(){

    const data=localStorage.getItem(

        "SpiderWebNexus"

    );

    if(!data)return;

    const progress=JSON.parse(data);

    Object.assign(

        NetworkEngine.state,

        progress

    );

    updateScore();

}

/*==================================================
            DISABLE BATTLE OPTIONS
==================================================*/

function disableBattleOptions(){

    document

        .querySelectorAll(".battleOption")

        .forEach(button=>{

            button.disabled=true;

        });

}
/*==================================================
            ENABLE BATTLE OPTIONS
==================================================*/

function enableBattleOptions(){

    document

        .querySelectorAll(".battleOption")

        .forEach(button=>{

            button.disabled=false;

        });

}

