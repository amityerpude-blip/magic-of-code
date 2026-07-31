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
            "Computer Networks",

        description:
            "Study the important networking concepts before entering the simulator.",

        cards: [

            {

                icon:"🖥️",

                title:"Computer Network",

                text:
                "A computer network is a collection of interconnected computers that share data, software and hardware resources."

            },

            {

                icon:"🌍",

                title:"Advantages",

                text:
                "Resource sharing, communication, collaboration, centralized storage, faster data exchange and Internet access."

            },

            {

                icon:"📡",

                title:"Types of Networks",

                text:
                "PAN, LAN, MAN and WAN are classified according to their geographical coverage."

            },

            {

                icon:"🕸️",

                title:"Network Topology",

                text:
                "Topology defines the physical or logical arrangement of devices in a network."

            },

            {

                icon:"📦",

                title:"Data Switching",

                text:
                "Circuit Switching, Message Switching and Packet Switching are methods used to transmit data."

            },

            {

                icon:"💻",

                title:"Networking Devices",

                text:
                "Hub, Switch, Router, Repeater, Bridge, Gateway and Modem help establish communication between computers."

            },

            {

                icon:"🔐",

                title:"Network Security",

                text:
                "Firewalls, passwords, antivirus software and encryption help protect networks from attacks."

            },

            {

                icon:"🌐",

                title:"Internet",

                text:
                "The Internet is the world's largest WAN connecting billions of devices together."

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

            }

        ]

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
