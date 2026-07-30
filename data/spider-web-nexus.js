/*====================================================

            MAGIC OF CODE
        SPIDER WEB NEXUS

        spider-web-nexus.js

            PART 1

====================================================*/

const KINGDOM_DATA={

/*====================================================
                BASIC INFORMATION
====================================================*/

id:"computerNetworks",

title:"🕸️ Spider Web Nexus",

shortTitle:"Spider Web Nexus",

subtitle:"Master Arachne - Guardian of Networks",

description:

"Deep beneath the Cyber Mountains lies the Spider Web Nexus, a magical web connecting every kingdom of the Magic of Code world. Every glowing strand carries information from one place to another. Master Arachne, the wise Spider Sage, teaches Dino how computers communicate, how the Internet works, and how millions of devices stay connected through magical network webs.",

master:"🕷️ Master Arachne",

/*====================================================
                    HERO
====================================================*/

hero:{

background:"assets/images/hero.jpg",

logo:"assets/images/master-arachne.png"

},

/*====================================================
                KINGDOM SECTIONS
====================================================*/

sections:[

{

id:"comicSection",

icon:"📖",

title:"Story Scroll",

subtitle:"The Web of Connections"

},

{

id:"animationSection",

icon:"🎬",

title:"Magic Vision",

subtitle:"Computer Networks Explained"

},

{

id:"notesSection",

icon:"📚",

title:"Wisdom Scrolls",

subtitle:"Learn Computer Networks"

},

{

id:"networkSection",

type:"networkSimulator",

icon:"🌐",

title:"Network Simulator",

subtitle:"Build • Connect • Transmit"

},

{

id:"quizSection",

icon:"👾",

title:"Monster Hunt",

subtitle:"Defeat the Network Bugs"

},

{

id:"challengeSection",

icon:"🏆",

title:"Guardian Battle",

subtitle:"Restore the Magic Network"

}

],

/*====================================================
                    COMIC
====================================================*/

comic:{

title:"📖 The Web of Connections",

description:

"Dino enters a mysterious cave where glowing spider webs stretch endlessly in every direction. Each silk strand carries sparkling packets of information. Master Arachne reveals that every web represents a computer network, connecting people, schools, businesses and the entire Internet into one magical world.",

folder:"assets/comic/",

totalPages:16

},

/*====================================================
                    ANIMATION
====================================================*/

animation:{

title:"🎬 Introduction to Computer Networks",

description:

"Discover how computers communicate, how the Internet works, and why networking connects the entire digital world.",

type:"youtube",

source:"https://www.youtube.com/embed/qiQR5rTSshw"

},

/*====================================================
                    NOTES
====================================================*/

notes:{

title:"📚 Wisdom Scrolls",

description:

"Master the magical concepts of Computer Networks.",

cards:[
  /*====================================================
                WISDOM SCROLLS
====================================================*/

{

icon:"🕸️",

title:"What is a Computer Network?",

content:

"A Computer Network is a collection of two or more computers and other devices connected together to share data, hardware, software and communication resources."

},

{

icon:"✨",

title:"Advantages of Computer Networks",

content:

"Computer Networks allow resource sharing, fast communication, file sharing, Internet access, centralized data management, online collaboration and cost reduction."

},

{

icon:"🌐",

title:"Types of Networks",

content:

"Networks are classified according to their geographical coverage. The main types are PAN, LAN, MAN and WAN."

},

{

icon:"📱",

title:"PAN (Personal Area Network)",

content:

"A PAN connects personal devices within a short distance such as mobile phones, smart watches, Bluetooth headsets and laptops."

},

{

icon:"🏫",

title:"LAN (Local Area Network)",

content:

"A LAN connects computers within a limited area such as a classroom, school, office or laboratory. It provides high-speed communication."

},

{

icon:"🏙️",

title:"MAN (Metropolitan Area Network)",

content:

"A MAN connects multiple LANs across a city or metropolitan area. Cable TV and city-wide educational networks are examples."

},

{

icon:"🌍",

title:"WAN (Wide Area Network)",

content:

"A WAN connects computers over very large geographical areas such as countries and continents. The Internet is the largest WAN."

},

{

icon:"🖥️",

title:"Network Devices",

content:

"Important networking devices include Hub, Switch, Router, Modem, Repeater, Bridge, Gateway and Network Interface Card (NIC)."

},

{

icon:"🔀",

title:"Network Topologies",

content:

"Topology refers to the physical or logical arrangement of devices in a network. Common topologies are Bus, Star, Ring, Mesh and Tree."

},

{

icon:"📡",

title:"Communication Media",

content:

"Data travels through Wired Media (Twisted Pair Cable, Coaxial Cable, Optical Fibre) or Wireless Media (Wi-Fi, Bluetooth, Infrared, Microwave and Satellite)."

},

{

icon:"🌎",

title:"Internet and WWW",

content:

"The Internet is a global network connecting millions of computers. The World Wide Web (WWW) is a service available on the Internet that provides access to web pages through browsers."

},

{

icon:"🔗",

title:"URL, IP Address and Domain Name",

content:

"A URL identifies a web resource. An IP Address uniquely identifies a device on a network. A Domain Name is the human-readable name of a website such as www.cbse.gov.in."

},

{

icon:"📨",

title:"Network Protocols",

content:

"Protocols are rules that govern communication between devices. Common protocols include HTTP, HTTPS, FTP, SMTP and POP3."

},

{

icon:"🛡️",

title:"Cyber Safety",

content:

"Use strong passwords, enable two-factor authentication, avoid suspicious links, install antivirus software, keep software updated and never share personal information with unknown users."

}

]

},

/*====================================================
            NETWORK SIMULATOR
====================================================*/

networkSimulator:{

title:"🌐 Network Simulator",

description:

"Build computer networks, explore different topologies and understand how data travels using Packet Switching, Message Switching and Circuit Switching.",

modules:[

/*====================================================
            MODULE 1 : BUILD NETWORK
====================================================*/

{

id:"topologyBuilder",

icon:"🛠️",

title:"Build the Network",

description:

"Choose a topology and connect the devices correctly to activate the Magic Web.",

instruction:

"Select a topology, then connect all devices correctly. Every correct connection strengthens the magical network.",

topologies:[

{

id:"star",

name:"⭐ Star Topology",

centerDevice:"Switch"

},

{

id:"bus",

name:"🚌 Bus Topology",

centerDevice:"Backbone Cable"

},

{

id:"ring",

name:"⭕ Ring Topology",

centerDevice:null

},

{

id:"tree",

name:"🌳 Tree Topology",

centerDevice:"Root Switch"

},

{

id:"mesh",

name:"🕸 Mesh Topology",

centerDevice:null

}

],

devices:[

{

id:"pc1",

name:"Computer A",

icon:"💻"

},

{

id:"pc2",

name:"Computer B",

icon:"💻"

},

{

id:"pc3",

name:"Computer C",

icon:"💻"

},

{

id:"pc4",

name:"Computer D",

icon:"💻"

},

{

id:"switch",

name:"Switch",

icon:"🔀"

},

{

id:"router",

name:"Router",

icon:"📡"

}

]

},

/*====================================================
        MODULE 2 : DATA TRANSMISSION
====================================================*/

{

id:"transmission",

icon:"📡",

title:"Data Transmission",

description:

"Observe how data travels through the network using different switching techniques.",

instruction:

"Choose one switching technique and click SEND to watch the data travel through the network.",

message:"HELLO SERVER",

options:[

{

id:"packet",

title:"📦 Packet Switching"

},

{

id:"message",

title:"💬 Message Switching"

},

{

id:"circuit",

title:"⚡ Circuit Switching"

}

],

network:{

nodes:[

{

id:"pc",

label:"💻 PC"

},

{

id:"s1",

label:"🔀 Switch"

},

{

id:"r1",

label:"📡 Router 1"

},

{

id:"r2",

label:"📡 Router 2"

},

{

id:"r3",

label:"📡 Router 3"

},

{

id:"gateway",

label:"🌐 Gateway"

},

{

id:"core",

label:"⚙️ Core Router"

},

{

id:"serverSwitch",

label:"🔀 Server Switch"

},

{

id:"server",

label:"🖥️ Server"

}

]

}

}

],

/*====================================================
        TOPOLOGY VALIDATION DATA
====================================================*/

validation:{

star:[

["pc1","switch"],
["pc2","switch"],
["pc3","switch"],
["pc4","switch"],
["router","switch"]

],

bus:[

["pc1","bus"],
["pc2","bus"],
["pc3","bus"],
["pc4","bus"],
["router","bus"]

],

ring:[

["pc1","pc2"],
["pc2","pc3"],
["pc3","pc4"],
["pc4","router"],
["router","pc1"]

],

tree:[

["router","switch"],
["switch","pc1"],
["switch","pc2"],
["router","pc3"],
["router","pc4"]

],

mesh:[

["pc1","pc2"],
["pc1","pc3"],
["pc1","pc4"],
["pc2","pc3"],
["pc2","pc4"],
["pc3","pc4"]

]

},

/*====================================================
        TRANSMISSION NETWORK GRAPH
====================================================*/

graph:[

["pc","s1"],

["s1","r1"],

["s1","r2"],

["s1","r3"],

["r1","gateway"],

["r2","gateway"],

["r3","gateway"],

["gateway","core"],

["core","serverSwitch"],

["serverSwitch","server"]

],

/*====================================================
            TRANSMISSION PATHS
====================================================*/

paths:{

packet:[

{

packet:"P1",

color:"#4CAF50",

route:[

"pc",
"s1",
"r1",
"gateway",
"core",
"serverSwitch",
"server"

]

},

{

packet:"P2",

color:"#2196F3",

route:[

"pc",
"s1",
"r2",
"gateway",
"core",
"serverSwitch",
"server"

]

},

{

packet:"P3",

color:"#FF9800",

route:[

"pc",
"s1",
"r3",
"gateway",
"core",
"serverSwitch",
"server"

]

},

{

packet:"P4",

color:"#E91E63",

route:[

"pc",
"s1",
"r2",
"gateway",
"core",
"serverSwitch",
"server"

]

}

],

message:[

"pc",
"s1",
"r2",
"gateway",
"core",
"serverSwitch",
"server"

],

circuit:[

"pc",
"s1",
"r1",
"gateway",
"core",
"serverSwitch",
"server"

]

},

/*====================================================
            NETWORK CONDITIONS
====================================================*/

conditions:[

{

id:"normal",

title:"🟢 Normal Network"

},

{

id:"congestion",

title:"🟡 Network Congestion"

}

],

/*====================================================
        RESULT MESSAGES
====================================================*/

messages:{

topologySuccess:

"🎉 Excellent! The topology has been created successfully.",

topologyFail:

"❌ Incorrect connections. Check the selected topology and try again.",

packetSuccess:

"📦 Packets travelled through multiple routes and were successfully reassembled at the destination.",

messageSuccess:

"💬 The complete message was stored and forwarded at every intermediate device before reaching the server.",

circuitSuccess:

"⚡ A dedicated communication path was established before transmitting the complete message.",

congestion:

"🚧 Network congestion detected! Observe how each switching technique behaves under heavy traffic."

}

},

/*====================================================
            MONSTER HUNT
====================================================*/
/*====================================================
                MONSTER HUNT
====================================================*/

quiz:{

title:"👾 Monster Hunt",

description:

"Defeat the Network Bugs by answering questions about Computer Networks.",

questions:[

{

question:"What is a Computer Network?",

options:[

"A collection of connected computers and devices",

"A programming language",

"An operating system",

"A web browser"

],

answer:0

},

{

question:"Which network covers the largest geographical area?",

options:[

"PAN",

"LAN",

"MAN",

"WAN"

],

answer:3

},

{

question:"Which network is commonly used inside a school?",

options:[

"WAN",

"MAN",

"LAN",

"PAN"

],

answer:2

},

{

question:"PAN stands for:",

options:[

"Private Area Network",

"Personal Area Network",

"Public Area Network",

"Primary Area Network"

],

answer:1

},

{

question:"Which device forwards data packets between different networks?",

options:[

"Switch",

"Hub",

"Router",

"NIC"

],

answer:2

},

{

question:"Which device connects multiple computers in a LAN?",

options:[

"Router",

"Switch",

"Gateway",

"Modem"

],

answer:1

},

{

question:"Which topology uses a central switch or hub?",

options:[

"Ring",

"Bus",

"Star",

"Mesh"

],

answer:2

},

{

question:"Which topology forms a closed loop?",

options:[

"Star",

"Bus",

"Ring",

"Tree"

],

answer:2

},

{

question:"The Internet is an example of:",

options:[

"PAN",

"LAN",

"WAN",

"MAN"

],

answer:2

},

{

question:"WWW stands for:",

options:[

"World Wide Web",

"Wide World Web",

"World Web Window",

"Web World Wide"

],

answer:0

},

{

question:"Which protocol is used to open websites?",

options:[

"SMTP",

"HTTP",

"FTP",

"POP3"

],

answer:1

},

{

question:"HTTPS is more secure because it:",

options:[

"Compresses files",

"Encrypts communication",

"Increases Internet speed",

"Blocks advertisements"

],

answer:1

},

{

question:"Which protocol is mainly used for transferring files?",

options:[

"HTTP",

"FTP",

"SMTP",

"POP3"

],

answer:1

},

{

question:"Which protocol is used for sending emails?",

options:[

"POP3",

"SMTP",

"HTTP",

"FTP"

],

answer:1

},

{

question:"Which protocol is commonly used for receiving emails?",

options:[

"SMTP",

"HTTP",

"FTP",

"POP3"

],

answer:3

},

{

question:"An IP Address is used to:",

options:[

"Decorate websites",

"Identify a device on a network",

"Store passwords",

"Create databases"

],

answer:1

},

{

question:"A Domain Name is:",

options:[

"A programming language",

"A human-readable website name",

"A type of router",

"A network cable"

],

answer:1

},

{

question:"Which communication media uses light for data transmission?",

options:[

"Twisted Pair Cable",

"Coaxial Cable",

"Optical Fibre",

"Bluetooth"

],

answer:2

},

{

question:"Which wireless technology is commonly used to connect nearby devices?",

options:[

"Wi-Fi",

"Bluetooth",

"Optical Fibre",

"Ethernet"

],

answer:1

},

{

question:"Which switching technique is used on the Internet?",

options:[

"Circuit Switching",

"Message Switching",

"Packet Switching",

"Manual Switching"

],

answer:2

},

{

question:"In Packet Switching, data is:",

options:[

"Sent as one complete message",

"Divided into small packets",

"Stored permanently",

"Compressed only"

],

answer:1

},

{

question:"Which switching technique establishes a dedicated path before transmission?",

options:[

"Packet Switching",

"Message Switching",

"Circuit Switching",

"Hybrid Switching"

],

answer:2

},

{

question:"Which switching technique follows the Store-and-Forward principle?",

options:[

"Packet Switching",

"Message Switching",

"Circuit Switching",

"Star Switching"

],

answer:1

},

{

question:"Which is a good cyber safety practice?",

options:[

"Share your password",

"Click unknown links",

"Use strong passwords",

"Disable antivirus"

],

answer:2

},

{

question:"What is the primary purpose of a computer network?",

options:[

"Playing games only",

"Sharing data and resources",

"Creating operating systems",

"Designing hardware"

],

answer:1

}

]

},

/*====================================================
                GUARDIAN BATTLE
====================================================*/

/*====================================================
                GUARDIAN BATTLE
====================================================*/

challenge:{

title:"🕸️ Guardian Battle",

description:

"The glowing threads of the Spider Web Nexus have been damaged by the Dark Network Bug. Master Arachne challenges Dino to restore the magical network by rebuilding the correct topology and selecting the best switching technique for each transmission. Every successful connection restores another part of the kingdom.",

icon:"🕷️",

heading:"Restore the Magic Web",

story:

"The Spider Web Nexus once connected every kingdom of the Magic of Code world. One day, the Dark Network Bug tangled the magical web, breaking communication between kingdoms. Data packets were lost, messages stopped reaching their destinations and the ancient servers fell silent. Master Arachne believes only Dino can reconnect the web and bring life back to the network.",

missions:[

"🛠️ Build a correct Star Topology by connecting all devices to the central switch.",

"⭕ Repair a Ring Topology by completing the communication loop.",

"📦 Choose Packet Switching to deliver Internet data successfully.",

"💬 Use Message Switching where Store-and-Forward communication is required.",

"⚡ Select Circuit Switching for a dedicated communication path.",

"📡 Connect the Gateway Router with the Core Router to restore Internet access.",

"🌐 Restore communication between all six computers and the Web Server.",

"🛡️ Identify and remove one Network Bug causing communication failure.",

"📨 Successfully deliver the message 'HELLO SERVER' using the appropriate switching technique.",

"👑 Restore the complete Spider Web Nexus and reconnect every kingdom."

],

reward:{

badge:"🕸️ Network Guardian",

xp:500,

coins:250,

unlock:"python-masters-castle"

}

},

/*====================================================
                    FOOTER
====================================================*/

footer:{

button:"👑 Enter Python Master's Castle",

next:"../python-masters-castle/index.html"

},

/*====================================================
                    AUDIO
====================================================*/

audio:{

magic:"assets/audio/magic.mp3",

button:"assets/audio/button.mp3",

page:"assets/audio/page-flip.mp3",

success:"assets/audio/success.mp3"

}

};
