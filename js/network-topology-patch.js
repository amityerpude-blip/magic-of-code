/*====================================================
    SPIDER WEB NEXUS
    TOPOLOGY BUILDER — RESTORE PREVIOUS INTERACTION

    ONLY the Build Network interaction is patched.
    Transmission / packet / message / circuit switching is untouched.
====================================================*/
(function () {
    "use strict";
    if (window.__SPIDER_TOPOLOGY_PATCH__) return;
    window.__SPIDER_TOPOLOGY_PATCH__ = true;

    function canvas(){ return document.getElementById("topologyCanvas"); }
    function ready(){ return !!(window.NetworkEngine && NetworkEngine.state && canvas()); }
    function nodeFrom(target){ return target && target.closest ? target.closest("#topologyCanvas .topologyNode") : null; }
    function clearVisual(){ document.querySelectorAll("#topologyCanvas .topologyNode.selected").forEach(n=>n.classList.remove("selected")); }
    function clearSelection(){ if(window.NetworkEngine&&NetworkEngine.state){ clearVisual(); NetworkEngine.state.selectedNode=null; } }

    /* SELECT DEVICE -> SELECT DEVICE */
    document.addEventListener("click", function(event){
        const node=nodeFrom(event.target);
        if(!node || !ready()) return;
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        const id=node.dataset.id;
        const previous=NetworkEngine.state.selectedNode;

        if(!previous){
            clearVisual();
            NetworkEngine.state.selectedNode=id;
            node.classList.add("selected");
            if(typeof window.showTopologyResult==="function") showTopologyResult("🔗 "+id+" selected. Now choose another device.","info");
            return;
        }
        if(previous===id){ clearSelection(); return; }

        /* Use the original network.js renderer/connection logic. */
        if(typeof window.createConnection==="function"){
            window.createConnection(previous,id);
        }else{
            const connections=NetworkEngine.state.connections||(NetworkEngine.state.connections=[]);
            const exists=connections.some(c=>(c.from===previous&&c.to===id)||(c.from===id&&c.to===previous));
            if(!exists){
                const connection={from:previous,to:id};
                connections.push(connection);
                if(typeof window.drawConnection==="function") window.drawConnection(connection);
            }
        }
        clearSelection();
    }, true);

    /* DRAG DEVICES */
    function prepareNode(node){
        if(!node || node.dataset.topologyPatchReady==="true") return;
        node.dataset.topologyPatchReady="true";
        node.style.cursor="grab";
        node.style.userSelect="none";
        node.style.touchAction="none";

        let dragging=false, moved=false, startX=0, startY=0, offsetX=0, offsetY=0, rect=null;

        node.addEventListener("pointerdown",function(event){
            if(event.button!==0 || !ready()) return;
            const c=canvas(), r=node.getBoundingClientRect();
            rect=c.getBoundingClientRect();
            startX=event.clientX; startY=event.clientY;
            offsetX=event.clientX-r.left; offsetY=event.clientY-r.top;
            dragging=true; moved=false;
            if(node.setPointerCapture) node.setPointerCapture(event.pointerId);
        });
        node.addEventListener("pointermove",function(event){
            if(!dragging || !ready()) return;
            const dx=event.clientX-startX, dy=event.clientY-startY;
            if(!moved && Math.hypot(dx,dy)<5) return;
            moved=true;
            const c=canvas();
            let left=event.clientX-rect.left-offsetX;
            let top=event.clientY-rect.top-offsetY;
            left=Math.max(5,Math.min(left,c.clientWidth-node.offsetWidth-5));
            top=Math.max(5,Math.min(top,c.clientHeight-node.offsetHeight-5));
            node.style.left=left+"px";
            node.style.top=top+"px";
            node.classList.add("dragging");
            if(typeof window.updateConnections==="function") window.updateConnections();
        });
        node.addEventListener("pointerup",function(event){
            dragging=false;
            node.classList.remove("dragging");
            try{ if(node.releasePointerCapture) node.releasePointerCapture(event.pointerId); }catch(e){}
        });
        node.addEventListener("pointercancel",function(){ dragging=false; node.classList.remove("dragging"); });
    }

    function prepareNodes(){
        const c=canvas();
        if(!c) return;
        c.querySelectorAll(".topologyNode").forEach(prepareNode);
    }

    /* IMPORTANT: topologyCanvas is created later by network.js.
       The previous patch observed the canvas too early and therefore never attached. */
    const observer=new MutationObserver(function(){ prepareNodes(); });
    function start(){
        if(!document.body) return;
        observer.observe(document.body,{childList:true,subtree:true});
        prepareNodes();
    }
    if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",start,{once:true});
    else start();

    window.__resetTopologyBuilderSelection=clearSelection;
    console.log("🛠️ Spider Web Nexus topology builder patch ACTIVE — drag + select-to-connect restored.");
})();
