/*====================================================
        MAGIC OF CODE - SPIDER WEB NEXUS
====================================================*/

const KINGDOM_DATA = {
    id: "network",
    title: "🕸️ Spider Web Nexus",
    shortTitle: "Spider Web Nexus",
    subtitle: "Master the Magic of Computer Networks",
    description: "Welcome to the Spider Web Nexus, the magical kingdom where every device is connected through enchanted threads. Learn how computers communicate, build network topologies, and observe data travelling through the network.",

    sections: [
        { id:"comic", icon:"📖", title:"Comic", subtitle:"Story Adventure" },
        { id:"animation", icon:"🎬", title:"Animation", subtitle:"Watch & Learn" },
        { id:"notes", icon:"📚", title:"Notes", subtitle:"Study Concepts" },
        { id:"coding", icon:"🕸️", title:"Network Simulator", subtitle:"Build & Experiment" },
        { id:"quiz", icon:"👾", title:"Monster Hunt", subtitle:"Defeat Network Bugs" },
        { id:"challenge", icon:"🏆", title:"Final Battle", subtitle:"Restore the Nexus" }
    ],

    comic: {
        title:"The Broken Web",
        description:"Master Spider discovers that the magical web connecting every kingdom has been damaged. Dino must learn Computer Networks to reconnect every magical kingdom.",
        folder:"assets/comic/"
    },

    animation: {
        type:"youtube",
        title:"Introduction to Computer Networks",
        description:"Understand how computers communicate using networks.",
        source:"https://www.youtube.com/embed/qiQR5rTSshw"
    },

    notes: {
        title:"Computer Networks",
        description:"Complete study notes covering the prescribed Computer Networks topics.",
        cards:[
            { icon:"🖥️", title:"Introduction to Computer Networks", text:"A computer network is a collection of interconnected computers and devices that communicate and share data, software and hardware resources." },
            { icon:"🕰️", title:"Evolution of Networking", text:"ARPANET was an early packet-switching network. NSFNET expanded academic networking, and the Internet evolved into a worldwide interconnected network." },
            { icon:"📡", title:"Data Communication", text:"Data communication is the exchange of data between devices through a communication medium using agreed protocols." },
            { icon:"🧩", title:"Components of Data Communication", text:"The five basic components are Sender, Receiver, Message, Communication Media and Protocols." },
            { icon:"📏", title:"Bandwidth & Data Transfer Rate", text:"Bandwidth represents the capacity of a communication channel. Data transfer rate describes how much data is transferred per unit time, commonly measured in bits per second." },
            { icon:"🌐", title:"IP Address", text:"An IP address is a logical address used to identify a device/interface on a network so that data can be delivered to the intended destination." },
            { icon:"🔄", title:"Switching Techniques", text:"Circuit Switching establishes a dedicated path before communication. Packet Switching divides data into packets that may use different routes. Message Switching stores the complete message at intermediate nodes and forwards it node-to-node." },
            { icon:"🔌", title:"Twisted Pair Cable", text:"Twisted pair consists of insulated copper wires twisted together to reduce interference. It is commonly used in local area networks and telephone communication." },
            { icon:"📺", title:"Co-axial Cable", text:"Co-axial cable has a central conductor, insulation, metallic shielding and an outer protective layer. It provides better shielding than ordinary twisted pair." },
            { icon:"💡", title:"Fiber-Optic Cable", text:"Fiber-optic cable carries data as pulses of light through optical fibre. It offers very high bandwidth, low signal loss and strong resistance to electromagnetic interference." },
            { icon:"📻", title:"Radio Waves", text:"Radio waves provide wireless communication and can travel through air over useful distances. They are used in radio, wireless networks and many communication systems." },
            { icon:"📡", title:"Microwaves", text:"Microwave communication uses high-frequency electromagnetic waves and is commonly used for point-to-point links and satellite communication." },
            { icon:"🔴", title:"Infrared Waves", text:"Infrared communication uses infrared radiation over short distances and generally requires a clear path between communicating devices." },
            { icon:"📶", title:"Modem", text:"A modem converts signals so digital devices can communicate over communication links that use suitable analogue/digital signalling. The name comes from modulator-demodulator." },
            { icon:"💳", title:"Ethernet Card / NIC", text:"A Network Interface Card (NIC), such as an Ethernet card, provides the hardware interface that connects a computer to a network." },
            { icon:"🔗", title:"RJ45", text:"RJ45 is the commonly used modular connector for Ethernet twisted-pair network cables." },
            { icon:"📈", title:"Repeater", text:"A repeater receives a weakened signal, regenerates it and retransmits it to extend the communication distance." },
            { icon:"🔀", title:"Hub", text:"A hub is a basic network device that broadcasts incoming data to its connected ports." },
            { icon:"🔁", title:"Switch", text:"A switch connects devices in a LAN and forwards frames toward the appropriate destination port using address information." },
            { icon:"🧭", title:"Router", text:"A router connects different networks and forwards packets between them using network-layer addressing and routing decisions." },
            { icon:"🚪", title:"Gateway", text:"A gateway acts as an entry/exit point between networks and can connect networks using different protocols or architectures." },
            { icon:"📶", title:"Wi-Fi Card", text:"A Wi-Fi card or wireless network adapter enables a computer or device to connect to a wireless network." },
            { icon:"🗺️", title:"Network Types", text:"PAN covers a person's small personal area. LAN covers a limited local area such as a lab or school. MAN covers a metropolitan area. WAN covers large geographical areas and can connect networks across countries or continents." },
            { icon:"⭐", title:"Bus, Star & Tree Topologies", text:"Bus uses a shared backbone. Star connects devices to a central device. Tree uses a hierarchical arrangement of connected network segments/devices." },
            { icon:"📜", title:"Network Protocols", text:"HTTP and HTTPS are used for web communication; FTP for file transfer; PPP for point-to-point communication; SMTP for sending e-mail; TCP/IP for Internet communication; POP3 for retrieving e-mail; TELNET for remote terminal access; VoIP for voice communication over IP networks." },
            { icon:"🌍", title:"WWW", text:"The World Wide Web is a service that provides interlinked web resources accessible over the Internet." },
            { icon:"🏷️", title:"HTML", text:"HyperText Markup Language (HTML) is used to structure content on web pages." },
            { icon:"🧾", title:"XML", text:"Extensible Markup Language (XML) is used to represent and transport structured data using user-defined tags." },
            { icon:"🔤", title:"Domain Name", text:"A domain name is a human-readable name used to identify an Internet resource, such as a website." },
            { icon:"🔗", title:"URL", text:"A Uniform Resource Locator (URL) specifies the address/location of a resource on the Internet and may include the protocol, domain and path." },
            { icon:"🏠", title:"Website", text:"A website is a collection of related web pages and resources available under a common domain or web address." },
            { icon:"🌐", title:"Web Browser", text:"A web browser is software used to access, retrieve, interpret and display web resources such as HTML pages." },
            { icon:"🖥️", title:"Web Server", text:"A web server stores or serves web resources and responds to requests from clients, commonly using HTTP or HTTPS." },
            { icon:"☁️", title:"Web Hosting", text:"Web hosting provides storage and server resources that make website files and services accessible through the Internet." }
        ]
    },

    networkSimulator: {
        title:"🕸️ Spider Web Network Simulator",
        description:"Build different network topologies and observe how data travels using various switching techniques.",
        modules:[
            {
                id:"topologyBuilder", icon:"🛠️", title:"Build the Network",
                description:"Choose a topology and connect the devices correctly.",
                instruction:"Create the correct topology by connecting all devices.",
                controls:{ validateButton:"✅ Validate", resetButton:"🔄 Reset", clearButton:"🧹 Clear" },
                topologies:[
                    {id:"star",name:"⭐ Star",description:"Every computer connects to a central switch."},
                    {id:"bus",name:"🚌 Bus",description:"All computers share one backbone cable."},
                    {id:"ring",name:"⭕ Ring",description:"Each computer connects to exactly two neighbours."},
                    {id:"mesh",name:"🕸️ Mesh",description:"Every computer connects to every other computer."}
                ],
                devices:[
                    {id:"pc1",name:"PC 1",icon:"💻"},{id:"pc2",name:"PC 2",icon:"💻"},
                    {id:"pc3",name:"PC 3",icon:"💻"},{id:"pc4",name:"PC 4",icon:"💻"},
                    {id:"switch",name:"Switch",icon:"🔀"},{id:"router",name:"Router",icon:"📡"}
                ],
                validation:{
                    star:[["pc1","switch"],["pc2","switch"],["pc3","switch"],["pc4","switch"]],
                    bus:[["pc1","pc2"],["pc2","pc3"],["pc3","pc4"]],
                    ring:[["pc1","pc2"],["pc2","pc3"],["pc3","pc4"],["pc4","pc1"]],
                    mesh:[["pc1","pc2"],["pc1","pc3"],["pc1","pc4"],["pc2","pc3"],["pc2","pc4"],["pc3","pc4"]]
                },
                messages:{success:"Excellent! The topology has been created correctly.",failure:"Some connections are incorrect. Try again.",incomplete:"Create all required connections first."}
            },
            {
                id:"dataTransmission", icon:"📦", title:"Data Transmission",
                description:"Observe how data travels using different switching techniques.",
                controls:{sendButton:"🚀 Send Data",resetButton:"🔄 Reset"},
                options:[
                    {id:"packet",title:"📦 Packet Switching",description:"Message is divided into packets. Each packet may travel through a different path."},
                    {id:"message",title:"💌 Message Switching",description:"Entire message is stored and forwarded from one node to another."},
                    {id:"circuit",title:"🔗 Circuit Switching",description:"A dedicated communication path is established before transmission."}
                ],
                nodes:[
                    {id:"pc1",label:"PC1"},{id:"pc2",label:"PC2"},{id:"pc3",label:"PC3"},{id:"pc4",label:"PC4"},{id:"pc5",label:"PC5"},
                    {id:"pc6",label:"PC6"},{id:"pc7",label:"PC7"},{id:"pc8",label:"PC8"},{id:"pc9",label:"PC9"},{id:"pc10",label:"PC10"},
                    {id:"pc11",label:"PC11"},{id:"pc12",label:"PC12"},{id:"pc13",label:"PC13"},{id:"pc14",label:"PC14"},{id:"pc15",label:"PC15"},
                    {id:"server",label:"SERVER"}
                ],
                paths:[
                    {id:"route1",nodes:["pc1","pc2","pc3","pc8","pc13","server"]},
                    {id:"route2",nodes:["pc5","pc10","pc15","server"]},
                    {id:"route3",nodes:["pc6","pc7","pc8","pc9","pc10","server"]}
                ],
                packetTransmission:{packets:[
                    {id:"P1",color:"#ff5252",route:"route1"},{id:"P2",color:"#42a5f5",route:"route2"},
                    {id:"P3",color:"#66bb6a",route:"route3"},{id:"P4",color:"#ffca28",route:"route1"}
                ]},
                messageTransmission:{route:"route1"},
                circuitTransmission:{route:"route3"},
                messages:{
                    packet:"Packet Switching completed successfully. Each packet followed its own route before reaching the destination.",
                    message:"Message Switching completed successfully. The complete message travelled from node to node after being stored at each intermediate node.",
                    circuit:"Circuit Switching completed successfully. A dedicated communication path was established first and then used for transmission."
                }
            }
        ]
    },

    quiz:{
        title:"👾 Monster Hunt",
        description:"Defeat the Network Monsters by answering one question at a time.",
        questions:[
            {question:"What is a Computer Network?",options:["A collection of interconnected computers","A programming language","An operating system","A web browser"],answer:0},
            {question:"Which network covers the largest geographical area?",options:["LAN","PAN","WAN","MAN"],answer:2},
            {question:"Which topology uses a central connecting device?",options:["Bus","Ring","Star","Mesh"],answer:2},
            {question:"Which device forwards packets between different networks?",options:["Switch","Hub","Router","NIC"],answer:2},
            {question:"What does LAN stand for?",options:["Local Area Network","Large Area Network","Logical Area Network","Long Access Network"],answer:0},
            {question:"Which topology connects every device to every other device?",options:["Star","Ring","Mesh","Bus"],answer:2},
            {question:"Which topology uses a single backbone cable?",options:["Bus","Mesh","Tree","Star"],answer:0},
            {question:"Which topology forms a closed loop?",options:["Star","Ring","Bus","Tree"],answer:1},
            {question:"Which device connects computers within a LAN intelligently?",options:["Hub","Switch","Router","Gateway"],answer:1},
            {question:"Which device regenerates weak signals?",options:["Router","Repeater","Bridge","Firewall"],answer:1},
            {question:"Which device converts signals for communication over a suitable transmission link?",options:["Switch","Hub","Modem","Bridge"],answer:2},
            {question:"Which network is normally used inside a school?",options:["WAN","LAN","MAN","PAN"],answer:1},
            {question:"Which protocol is mainly used for web browsing?",options:["HTTP","FTP","SMTP","POP3"],answer:0},
            {question:"Which protocol is used to transfer files?",options:["FTP","HTTP","DNS","SMTP"],answer:0},
            {question:"Which protocol is commonly used to send e-mails?",options:["FTP","SMTP","ARP","ICMP"],answer:1},
            {question:"Which protocol provides secure web communication?",options:["HTTP","HTTPS","FTP","POP3"],answer:1},
            {question:"Which switching technique creates a dedicated communication path?",options:["Packet Switching","Message Switching","Circuit Switching","Broadcast Switching"],answer:2},
            {question:"In Packet Switching, data is divided into ________.",options:["Frames","Packets","Files","Signals"],answer:1},
            {question:"Which switching technique stores the complete message before forwarding?",options:["Packet Switching","Circuit Switching","Message Switching","Hybrid Switching"],answer:2},
            {question:"Which device connects two different networks together?",options:["Hub","Switch","Router","NIC"],answer:2}
        ]
    },

    challenge:{
        title:"🕸️ Guardian Battle", description:"Restore the magical communication network by completing the final mission.", icon:"🕷️",
        heading:"Restore the Magic Web",
        story:"The Spider Web Nexus once connected every kingdom through invisible strands of magical communication. The Dark Bug has broken these links. Build the correct topology and choose the best switching technique to restore the network.",
        tasks:["🕸️ Build the correct Network Topology.","📦 Demonstrate Packet Switching.","🔗 Demonstrate Circuit Switching.","💌 Demonstrate Message Switching.","🏆 Complete the Monster Hunt Quiz."]
    },

    footer:{button:"➡️ Continue to Database Kingdom",next:"../database-castle/index.html"},
    audio:{magic:"assets/audio/magic.mp3",button:"assets/audio/button.mp3",page:"assets/audio/page-flip.mp3"}
};

window.KINGDOM_DATA = KINGDOM_DATA;
