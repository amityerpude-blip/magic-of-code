/* =========================================================
   SPIDER WEB NEXUS — ENHANCEMENTS v2
   Loaded AFTER network.js.
   Does not replace the working NetworkEngine.
   ========================================================= */

(function () {
  "use strict";

  const syllabusNotes = [
    {
      icon: "🌐",
      title: "1. Introduction to Computer Networks",
      text: "A computer network is a collection of interconnected computing devices that communicate and share data, software, hardware and services. A network enables resource sharing, communication and access to common services."
    },
    {
      icon: "🕰️",
      title: "2. Evolution of Networking",
      text: "ARPANET was an early packet-switched network developed in the United States. NSFNET expanded academic networking and became an important backbone for Internet growth. The Internet evolved into a worldwide network of interconnected networks."
    },
    {
      icon: "📨",
      title: "3. Data Communication & Its Components",
      text: "Data communication is the exchange of data between devices. The five basic components are Sender, Receiver, Message, Communication Media and Protocol. A protocol is a set of rules that governs communication."
    },
    {
      icon: "📏",
      title: "4. Bandwidth, Data Transfer Rate & IP Address",
      text: "Bandwidth describes the capacity of a communication channel, while data transfer rate describes how much data is transferred per unit time. An IP address identifies a device/interface on a network so data can be delivered to the correct destination."
    },
    {
      icon: "🔀",
      title: "5. Switching Techniques",
      text: "Circuit Switching establishes a dedicated path before communication. Message Switching sends a complete message using store-and-forward at intermediate nodes. Packet Switching divides a message into packets; packets may follow different routes and are reassembled at the destination."
    },
    {
      icon: "🧵",
      title: "6. Wired Transmission Media",
      text: "Twisted Pair Cable uses pairs of twisted copper wires. Co-axial Cable has a central conductor, insulation and shielding. Fiber-optic Cable carries data as light and provides high bandwidth with low signal loss."
    },
    {
      icon: "📡",
      title: "7. Wireless Transmission Media",
      text: "Radio waves can travel through space and are used for wireless communication. Microwaves are commonly used for directional and long-distance links. Infrared waves are useful for short-range communication and generally require a suitable line of sight."
    },
    {
      icon: "🧰",
      title: "8. Network Devices",
      text: "Modem converts signals for communication over suitable media. Ethernet Card/NIC provides network connectivity. RJ45 is a common connector for Ethernet twisted-pair cables. Repeater regenerates signals. Hub broadcasts data to connected ports. Switch forwards frames intelligently. Router connects networks. Gateway connects networks using different protocols. Wi-Fi Card provides wireless connectivity."
    },
    {
      icon: "🗺️",
      title: "9. Network Types",
      text: "PAN covers a very small personal area. LAN covers a limited area such as a room, building or school. MAN covers a city or metropolitan area. WAN covers large geographical regions and can connect networks across countries or continents."
    },
    {
      icon: "🕸️",
      title: "10. Network Topologies",
      text: "Bus topology uses a shared backbone. Star topology connects devices to a central device. Tree topology arranges interconnected devices in a hierarchical structure. The arrangement of nodes and links affects cost, reliability and performance."
    },
    {
      icon: "📜",
      title: "11. Network Protocols",
      text: "HTTP is used for web communication. HTTPS is HTTP over a secure connection. FTP transfers files. PPP provides point-to-point communication. SMTP is used for sending email. POP3 is used for retrieving email. TCP/IP is the protocol suite underlying Internet communication. TELNET provides remote terminal access. VoIP carries voice communication over IP networks."
    },
    {
      icon: "🕷️",
      title: "12. Web Services & the World Wide Web",
      text: "WWW is a system of interlinked web resources accessed through the Internet. HTML structures web pages. XML stores and transports structured data. A domain name is a human-readable Internet name. A URL identifies the location of a resource. A web browser requests and displays web resources. A web server serves web content. Web hosting provides server space and services for publishing websites."
    }
  ];

  function enhanceNotes() {
    const section = document.getElementById("notesSection");
    if (!section) return false;

    const container = section.querySelector(".notesContainer");
    if (!container) return false;

    if (container.dataset.syllabusEnhanced === "true") return true;

    container.innerHTML = syllabusNotes.map(note => `
      <article class="noteCard syllabusNoteCard">
        <h3>${note.icon} ${note.title}</h3>
        <p>${note.text}</p>
      </article>
    `).join("");

    container.dataset.syllabusEnhanced = "true";
    return true;
  }

  function classifyTransmissionCards() {
    const root = document.getElementById("networkWorkspace");
    if (!root) return;

    const elements = root.querySelectorAll(
      "button, .switchingCard, .modeCard, .transmissionCard, .optionCard, .switching-option, [data-mode]"
    );

    elements.forEach(el => {
      const text = (el.textContent || "").toLowerCase();

      if (text.includes("message switching")) {
        el.setAttribute("data-switching-mode", "message");
        el.classList.add("messageSwitching");
      } else if (text.includes("circuit switching")) {
        el.setAttribute("data-switching-mode", "circuit");
        el.classList.add("circuitSwitching");
      } else if (text.includes("packet switching")) {
        el.setAttribute("data-switching-mode", "packet");
        el.classList.add("packetSwitching");
      }
    });
  }

  function addTransmissionLearningHints() {
    const root = document.getElementById("networkWorkspace");
    if (!root) return;

    const heading = [...root.querySelectorAll("h2,h3,h4")]
      .find(h => (h.textContent || "").toLowerCase().includes("message switching"));

    if (heading) {
      const card = heading.closest(
        ".switchingCard,.modeCard,.transmissionCard,.optionCard,article,div"
      );

      if (card && !card.querySelector(".storeForwardHint")) {
        const hint = document.createElement("div");
        hint.className = "storeForwardHint";
        hint.innerHTML =
          "📥 <strong>Store → Forward:</strong> the complete message waits at an intermediate node before moving to the next node.";
        card.appendChild(hint);
      }
    }

    const circuitHeading = [...root.querySelectorAll("h2,h3,h4")]
      .find(h => (h.textContent || "").toLowerCase().includes("circuit switching"));

    if (circuitHeading) {
      const card = circuitHeading.closest(
        ".switchingCard,.modeCard,.transmissionCard,.optionCard,article,div"
      );

      if (card && !card.querySelector(".dedicatedPathHint")) {
        const hint = document.createElement("div");
        hint.className = "dedicatedPathHint";
        hint.innerHTML =
          "🔒 <strong>Dedicated path:</strong> the route is reserved first, then data travels along that same path.";
        card.appendChild(hint);
      }
    }
  }

  function markNetworkReady() {
    document.body.classList.add("spider-web-enhanced");
  }

  function runEnhancements() {
    markNetworkReady();
    enhanceNotes();
    classifyTransmissionCards();
    addTransmissionLearningHints();
  }

  function start() {
    runEnhancements();

    const observer = new MutationObserver(() => {
      runEnhancements();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Keep observer lightweight; the page is a learning simulator.
    setTimeout(() => observer.disconnect(), 15000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
