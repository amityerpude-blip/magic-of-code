/*====================================================

        MAGIC OF CODE
        SPIDER WEB NEXUS

        spider-web-nexus.js

====================================================*/

const KINGDOM_DATA = {

    /*==================================================
                        BASIC INFO
    ==================================================*/

    id: "network",

    title: "🕸️ Spider Web Nexus",

    shortTitle: "Spider Web Nexus",

    subtitle:
        "Master the Magic of Computer Networks",

    description:
        "Welcome to the Spider Web Nexus, the magical kingdom where every device is connected through enchanted threads. Learn how computers communicate, build different network topologies, and send magical packets across the world.",


    /*==================================================
                    KINGDOM MAP
    ==================================================*/

    sections: [

        {
            id: "comic",
            icon: "📖",
            title: "Comic",
            subtitle: "Story Adventure"
        },

        {
            id: "animation",
            icon: "🎬",
            title: "Animation",
            subtitle: "Watch & Learn"
        },

        {
            id: "notes",
            icon: "📚",
            title: "Notes",
            subtitle: "Study Concepts"
        },

        {
            id: "coding",
            icon: "🕸️",
            title: "Network Simulator",
            subtitle: "Build & Experiment"
        },

        {
            id: "quiz",
            icon: "👾",
            title: "Monster Hunt",
            subtitle: "Defeat Network Bugs"
        },

        {
            id: "challenge",
            icon: "🏆",
            title: "Final Battle",
            subtitle: "Restore the Nexus"
        }

    ],


    /*==================================================
                        COMIC
    ==================================================*/

    comic: {

        title:
            "The Broken Web",

        description:
            "Master Spider discovers that the magical web connecting every kingdom has been damaged. Dino must learn Computer Networks to reconnect every magical kingdom.",

        folder:
            "assets/comic/"

    },


    /*==================================================
                        ANIMATION
    ==================================================*/

    animation: {

        type: "youtube",

        title:
            "Introduction to Computer Networks",

        description:
            "Understand how computers communicate using networks.",

        source:
            "https://www.youtube.com/embed/qiQR5rTSshw"

    },


    /*==================================================
                        NOTES
    ==================================================*/

    notes: {

        title:
            "Computer Networks — Complete Notes",

        description:
            "Master the complete Computer Networks syllabus: evolution, data communication, transmission media, devices, networks, topologies, protocols and web services.",

        cards: [

            {
                icon:"🕰️",
                title:"1. Evolution of Networking",
                text:
                "Computer networking developed from early point-to-point communication systems to today's global Internet. ARPANET was an early packet-switching network developed in the late 1960s. NSFNET later connected academic and research networks and helped expand large-scale networking. The Internet evolved by interconnecting many independent networks using common protocols such as TCP/IP."
            },

            {
                icon:"📡",
                title:"2. Data Communication",
                text:
                "Data communication is the exchange of data between devices through a communication medium. The five basic components are: Sender (source of data), Receiver (destination), Message (data being sent), Communication Media (path used to carry data), and Protocols (rules that govern communication)."
            },

            {
                icon:"📊",
                title:"3. Bandwidth, Data Transfer Rate & IP Address",
                text:
                "Bandwidth is the capacity of a communication channel, commonly expressed in bits per second (bps) or related units. Data transfer rate is the amount of data transmitted per unit time. An IP address is a logical numerical address used to identify a device/interface on a network so data can be delivered to the correct destination."
            },

            {
                icon:"🔀",
                title:"4. Switching Techniques",
                text:
                "Circuit Switching establishes a dedicated communication path before data transmission. Packet Switching divides data into packets and allows packets to travel through available routes. Message Switching sends the complete message using store-and-forward: each intermediate node stores the entire message before forwarding it to the next node."
            },

            {
                icon:"🧵",
                title:"5. Wired Transmission Media",
                text:
                "Twisted Pair Cable uses pairs of twisted copper wires and is widely used in LANs. Co-axial Cable has a central conductor surrounded by insulation and shielding. Fiber-optic Cable carries data as pulses of light through optical fibers; it provides very high bandwidth, long-distance communication and strong resistance to electromagnetic interference."
            },

            {
                icon:"📶",
                title:"6. Wireless Transmission Media",
                text:
                "Radio Waves can travel over large areas and are used in wireless communication. Microwaves provide directional, high-frequency communication and are used in terrestrial and satellite links. Infrared is useful for short-range, line-of-sight communication and generally does not pass through walls."
            },

            {
                icon:"🧰",
                title:"7. Network Devices",
                text:
                "Modem: converts signals for communication over suitable links. Ethernet Card/NIC: provides network connectivity to a computer. RJ45: common connector used with Ethernet twisted-pair cables. Repeater: regenerates weak signals. Hub: broadcasts incoming data to connected ports. Switch: forwards frames to the appropriate device/port. Router: connects different networks and forwards packets. Gateway: connects networks using different communication systems/protocols. Wi-Fi Card: provides wireless network connectivity."
            },

            {
                icon:"🌍",
                title:"8. Network Types",
                text:
                "PAN (Personal Area Network) covers a very small area around an individual. LAN (Local Area Network) covers a home, office, school or building. MAN (Metropolitan Area Network) covers a city or large campus area. WAN (Wide Area Network) covers very large geographical areas; the Internet is the best-known example."
            },

            {
                icon:"🕸️",
                title:"9. Network Topologies",
                text:
                "Bus Topology uses a common backbone cable. Star Topology connects devices to a central switch or hub. Tree Topology arranges networks in a hierarchical structure with parent-child branches. Topology describes how devices and communication links are physically or logically arranged."
            },

            {
                icon:"📜",
                title:"10. Network Protocols",
                text:
                "HTTP is used for web communication. HTTPS is the secure version of HTTP. FTP is used for file transfer. PPP provides point-to-point communication. SMTP is used to send email. POP3 is used to retrieve email from a mail server. TCP/IP is the fundamental protocol suite of the Internet. TELNET provides remote terminal access. VoIP carries voice communication over IP networks."
            },

            {
                icon:"🌐",
                title:"11. Web Services & WWW",
                text:
                "The World Wide Web (WWW) is a service that provides interlinked resources over the Internet. HTML (HyperText Markup Language) is used to structure web pages. XML (Extensible Markup Language) is used to represent and transport structured data. A domain name is a human-readable name for an Internet resource. A URL (Uniform Resource Locator) specifies the location/address of a resource. A website is a collection of related web pages. A web browser retrieves and displays web resources. A web server stores, processes and delivers web content to clients. Web hosting provides the infrastructure and service needed to make a website available on the Internet."
            }

        ]

    },


    /*==================================================
                NETWORK SIMULATOR
    ==================================================*/

    networkSimulator: {

        title:
            "🕸️ Spider Web Network Simulator",

        description:
            "Build different network topologies and observe how data travels using various switching techniques.",

        modules: [

            /*==========================================
                    MODULE 1
            ==========================================*/

            {

                id:"topologyBuilder",

                icon:"🛠️",

                title:"Build the Network",

                description:
                "Choose a topology and connect the devices correctly.",

                instruction:
                "Create the correct topology by connecting all devices.",

                controls:{

                    validateButton:"✅ Validate",

                    resetButton:"🔄 Reset",

                    clearButton:"🧹 Clear"

                },

                topologies:[

                    {

                        id:"star",

                        name:"⭐ Star",

                        description:
                        "Every computer connects to a central switch."

                    },

                    {

                        id:"bus",

                        name:"🚌 Bus",

                        description:
                        "All computers share one backbone cable."

                    },

                    {

                        id:"ring",

                        name:"⭕ Ring",

                        description:
                        "Each computer connects to exactly two neighbours."

                    },

                    {

                        id:"mesh",

                        name:"🕸️ Mesh",

                        description:
                        "Every computer connects to every other computer."

                    }

                ],

                devices:[                    {

                        id:"pc1",

                        name:"PC 1",

                        icon:"💻"

                    },

                    {

                        id:"pc2",

                        name:"PC 2",

                        icon:"💻"

                    },

                    {

                        id:"pc3",

                        name:"PC 3",

                        icon:"💻"

                    },

                    {

                        id:"pc4",

                        name:"PC 4",

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

                ],

                validation:{

                    star:[

                        ["pc1","switch"],
                        ["pc2","switch"],
                        ["pc3","switch"],
                        ["pc4","switch"]

                    ],

                    bus:[

                        ["pc1","pc2"],
                        ["pc2","pc3"],
                        ["pc3","pc4"]

                    ],

                    ring:[

                        ["pc1","pc2"],
                        ["pc2","pc3"],
                        ["pc3","pc4"],
                        ["pc4","pc1"]

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

                messages:{

                    success:
                    "Excellent! The topology has been created correctly.",

                    failure:
                    "Some connections are incorrect. Try again.",

                    incomplete:
                    "Create all required connections first."

                }

            },

            /*==========================================
                    MODULE 2
            ==========================================*/

            {

                id:"dataTransmission",

                icon:"📦",

                title:"Data Transmission",

                description:
                "Observe how data travels using different switching techniques.",

                controls:{

                    sendButton:"🚀 Send Data",

                    resetButton:"🔄 Reset"

                },

                options:[

                    {

                        id:"packet",

                        title:"📦 Packet Switching",

                        description:
                        "Message is divided into packets. Each packet may travel through a different path."

                    },

                    {

                        id:"message",

                        title:"💌 Message Switching",

                        description:
                        "Entire message is stored and forwarded from one node to another."

                    },

                    {

                        id:"circuit",

                        title:"🔗 Circuit Switching",

                        description:
                        "A dedicated communication path is established before transmission."

                    }

                ],

                nodes:[

                    {id:"pc1",label:"PC1"},
                    {id:"pc2",label:"PC2"},
                    {id:"pc3",label:"PC3"},
                    {id:"pc4",label:"PC4"},
                    {id:"pc5",label:"PC5"},

                    {id:"pc6",label:"PC6"},
                    {id:"pc7",label:"PC7"},
                    {id:"pc8",label:"PC8"},
                    {id:"pc9",label:"PC9"},
                    {id:"pc10",label:"PC10"},

                    {id:"pc11",label:"PC11"},
                    {id:"pc12",label:"PC12"},
                    {id:"pc13",label:"PC13"},
                    {id:"pc14",label:"PC14"},
                    {id:"pc15",label:"PC15"},

                    {id:"server",label:"SERVER"}

                ],

                paths:[

                    {

                        id:"route1",

                        nodes:[
                            "pc1",
                            "pc2",
                            "pc3",
                            "pc8",
                            "pc13",
                            "server"
                        ]

                    },

                    {

                        id:"route2",

                        nodes:[
                            "pc5",
                            "pc10",
                            "pc15",
                            "server"
                        ]

                    },

                    {

                        id:"route3",

                        nodes:[
                            "pc6",
                            "pc7",
                            "pc8",
                            "pc9",
                            "pc10",
                            "server"
                        ]

                    }

                ],
                            packetTransmission:{

                    packets:[

                        {
                            id:"P1",
                            color:"#ff5252",
                            route:"route1"
                        },

                        {
                            id:"P2",
                            color:"#42a5f5",
                            route:"route2"
                        },

                        {
                            id:"P3",
                            color:"#66bb6a",
                            route:"route3"
                        },

                        {
                            id:"P4",
                            color:"#ffca28",
                            route:"route1"
                        }

                    ]

                },

                messageTransmission:{

                    route:"route1"

                },

                circuitTransmission:{

                    route:"route3"

                },

                messages:{

                    packet:
                    "Packet Switching completed successfully. Each packet followed its own route before reaching the destination.",

                    message:
                    "Message Switching completed successfully. The complete message travelled from node to node before delivery.",

                    circuit:
                    "Circuit Switching completed successfully. A dedicated communication path was established first."

                }

            }

        ]

    },



    /*==================================================
                        QUIZ
    ==================================================*/

    quiz:{

        title:
        "👾 Monster Hunt",

        description:
        "Defeat the Network Monsters by answering one question at a time.",

        questions:[

            {

                question:
                "What is a Computer Network?",

                options:[

                    "A collection of interconnected computers",

                    "A programming language",

                    "An operating system",

                    "A web browser"

                ],

                answer:0

            },

            {

                question:
                "Which network covers the largest geographical area?",

                options:[

                    "LAN",

                    "PAN",

                    "WAN",

                    "MAN"

                ],

                answer:2

            },

            {

                question:
                "Which topology uses a central connecting device?",

                options:[

                    "Bus",

                    "Ring",

                    "Star",

                    "Mesh"

                ],

                answer:2

            },

            {

                question:
                "Which device forwards packets between different networks?",

                options:[

                    "Switch",

                    "Hub",

                    "Router",

                    "NIC"

                ],

                answer:2

            },

            {

                question:
                "What does LAN stand for?",

                options:[

                    "Local Area Network",

                    "Large Area Network",

                    "Logical Area Network",

                    "Long Access Network"

                ],

                answer:0

            },
            {

                question:
                "Which topology connects every device to every other device?",

                options:[

                    "Star",

                    "Ring",

                    "Mesh",

                    "Bus"

                ],

                answer:2

            },

            {

                question:
                "Which topology uses a single backbone cable?",

                options:[

                    "Bus",

                    "Mesh",

                    "Tree",

                    "Star"

                ],

                answer:0

            },

            {

                question:
                "Which topology forms a closed loop?",

                options:[

                    "Star",

                    "Ring",

                    "Bus",

                    "Tree"

                ],

                answer:1

            },

            {

                question:
                "Which device connects computers within a LAN intelligently?",

                options:[

                    "Hub",

                    "Switch",

                    "Router",

                    "Gateway"

                ],

                answer:1

            },

            {

                question:
                "Which device regenerates weak signals?",

                options:[

                    "Router",

                    "Repeater",

                    "Bridge",

                    "Firewall"

                ],

                answer:1

            },

            {

                question:
                "Which device converts digital signals into analog signals?",

                options:[

                    "Switch",

                    "Hub",

                    "Modem",

                    "Bridge"

                ],

                answer:2

            },

            {

                question:
                "Which network is normally used inside a school?",

                options:[

                    "WAN",

                    "LAN",

                    "MAN",

                    "PAN"

                ],

                answer:1

            },

            {

                question:
                "Which protocol is mainly used for web browsing?",

                options:[

                    "HTTP",

                    "FTP",

                    "SMTP",

                    "POP3"

                ],

                answer:0

            },

            {

                question:
                "Which protocol is used to transfer files?",

                options:[

                    "FTP",

                    "HTTP",

                    "DNS",

                    "SMTP"

                ],

                answer:0

            },

            {

                question:
                "Which protocol is commonly used to send e-mails?",

                options:[

                    "FTP",

                    "SMTP",

                    "ARP",

                    "ICMP"

                ],

                answer:1

            },

            {

                question:
                "Which protocol translates domain names into IP addresses?",

                options:[

                    "DNS",

                    "FTP",

                    "SMTP",

                    "HTTP"

                ],

                answer:0

            },

            {

                question:
                "An IP Address uniquely identifies a ________.",

                options:[

                    "Program",

                    "Device",

                    "Cable",

                    "Browser"

                ],

                answer:1

            },

            {

                question:
                "Which switching technique creates a dedicated communication path?",

                options:[

                    "Packet Switching",

                    "Message Switching",

                    "Circuit Switching",

                    "Broadcast Switching"

                ],

                answer:2

            },

            {

                question:
                "In Packet Switching, data is divided into ________.",

                options:[

                    "Frames",

                    "Packets",

                    "Files",

                    "Signals"

                ],

                answer:1

            },

            {

                question:
                "Which switching technique stores the complete message before forwarding?",

                options:[

                    "Packet Switching",

                    "Circuit Switching",

                    "Message Switching",

                    "Hybrid Switching"

                ],

                answer:2

            },

            {

                question:
                "Which topology is easiest to expand?",

                options:[

                    "Ring",

                    "Star",

                    "Bus",

                    "Point-to-Point"

                ],

                answer:1

            },

            {

                question:
                "Which topology is most reliable because multiple paths exist?",

                options:[

                    "Bus",

                    "Ring",

                    "Mesh",

                    "Star"

                ],

                answer:2

            },

            {

                question:
                "Which device connects two different networks together?",

                options:[

                    "Hub",

                    "Switch",

                    "Router",

                    "NIC"

                ],

                answer:2

            },

            {

                question:
                "Which of these is an example of a WAN?",

                options:[

                    "School Computer Lab",

                    "Home Wi-Fi",

                    "The Internet",

                    "Bluetooth"

                ],

                answer:2

            },

            {

                question:
                "Which device filters traffic to improve network security?",

                options:[

                    "Firewall",

                    "Switch",

                    "Hub",

                    "Repeater"

                ],

                answer:0

            }

        ]

    },
    /*==================================================
                    FINAL CHALLENGE
    ==================================================*/

    challenge:{

        title:
        "🕸️ Guardian Battle",

        description:
        "Restore the magical communication network by completing the final mission.",

        icon:"🕷️",

        heading:
        "Restore the Magic Web",

        story:
        "The Spider Web Nexus once connected every kingdom through invisible strands of magical communication. The Dark Bug has broken these links. Build the correct topology and choose the best switching technique to restore the network.",

        tasks:[

            "🕸️ Build the correct Network Topology.",

            "📦 Demonstrate Packet Switching.",

            "🔗 Demonstrate Circuit Switching.",

            "💌 Demonstrate Message Switching.",

            "🏆 Complete the Monster Hunt Quiz."

        ]

    },



    /*==================================================
                        FOOTER
    ==================================================*/

    footer:{

        button:"➡️ Continue to Database Kingdom",

        next:"../database-castle/index.html"

    },



    /*==================================================
                        AUDIO
    ==================================================*/

    audio:{

        magic:"assets/audio/magic.mp3",

        button:"assets/audio/button.mp3",

        page:"assets/audio/page-flip.mp3"

    }

};



/*==================================================
            EXPORT FOR DEBUGGING
==================================================*/

window.KINGDOM_DATA = KINGDOM_DATA;
