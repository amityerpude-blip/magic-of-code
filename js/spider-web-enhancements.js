/*====================================================
   SPIDER WEB NEXUS - VISUAL ENHANCEMENTS
   Non-destructive layer: does NOT replace network.js
====================================================*/
(function(){
    "use strict";

    const style = document.createElement("style");
    style.textContent = `
      body{background:linear-gradient(135deg,#081a2b,#102d46 45%,#172f5a)!important;color:#f7fbff!important}
      .heroSection{min-height:390px;justify-content:center!important;text-align:center!important}
      .heroOverlay{margin:auto!important;max-width:920px!important;text-align:center!important;background:rgba(13,31,51,.92)!important;border:1px solid rgba(0,229,255,.25)!important}
      .kingdomNavigation{max-width:1200px!important;margin:35px auto!important}
      .magicGrid{grid-template-columns:repeat(6,minmax(130px,1fr))!important}
      .magicTile{min-height:125px!important;background:rgba(35,54,79,.96)!important;border:1px solid rgba(0,229,255,.16)!important}
      .lessonContent{max-width:1200px!important}
      .lessonContent h2{color:#ffe066!important;text-shadow:0 0 12px rgba(255,224,102,.25)}
      .lessonContent>p{color:#e9f4ff!important}
      .noteCard{background:rgba(22,45,68,.95)!important;border:1px solid rgba(0,229,255,.16)!important}
      .noteCard p{color:#eef7ff!important}
      .noteCard h3{color:#ffe066!important}
      .codingContainer,.comicContainer,.videoContainer,.challengeCard{background:rgba(15,35,55,.94)!important}
      .network-simulation-guide{margin:20px 0;padding:18px 20px;border-radius:18px;background:linear-gradient(135deg,rgba(0,229,255,.12),rgba(123,97,255,.12));border:1px solid rgba(0,229,255,.3);color:#eef8ff}
      .network-simulation-guide strong{color:#ffe066}
      @media(max-width:900px){.magicGrid{grid-template-columns:repeat(3,1fr)!important}}
      @media(max-width:560px){.magicGrid{grid-template-columns:repeat(2,1fr)!important}.heroOverlay{padding:35px 22px!important}.heroOverlay h1{font-size:2.3rem!important}}
    `;
    document.head.appendChild(style);

    function addGuide(){
        const section=document.getElementById("codingSection");
        if(!section || section.querySelector(".network-simulation-guide")) return;
        const guide=document.createElement("div");
        guide.className="network-simulation-guide";
        guide.innerHTML=`
          <strong>🕸️ How the switching simulation works</strong><br>
          📦 <b>Packet Switching:</b> the message is divided into packets; packets can take different routes.<br>
          💌 <b>Message Switching:</b> the complete message is <b>stored → then forwarded</b> at each intermediate node.<br>
          🔗 <b>Circuit Switching:</b> a <b>dedicated route is established first</b>, then data travels along that reserved path.
        `;
        const intro=section.querySelector("p");
        if(intro) intro.insertAdjacentElement("afterend",guide);
        else section.prepend(guide);
    }

    function init(){
        addGuide();
        // Components/network.js render dynamically, so retry once after rendering.
        setTimeout(addGuide,500);
        setTimeout(addGuide,1500);
    }

    if(document.readyState === "loading") document.addEventListener("DOMContentLoaded",init);
    else init();
})();
