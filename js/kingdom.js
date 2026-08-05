/*====================================================

            MAGIC OF CODE
            KINGDOM ENGINE

            kingdom.js

====================================================*/


/*====================================================
                LOAD KINGDOM
====================================================*/

function loadKingdom(data){

const root = document.getElementById("kingdomRoot");

root.innerHTML =

LoadingComponent() +

HeroComponent(data) +

NavigationComponent(data) +

ComicComponent(data) +

AnimationComponent(data) +

NotesComponent(data) +

CodingComponent(data) +

QuizComponent(data) +

ChallengeComponent(data) +

FooterComponent(data) +

RewardPopupComponent() +

ParticleComponent() +

AudioComponent(data);

initializeKingdom(data);

}


/*====================================================

            INITIALIZE KINGDOM

====================================================*/


console.log("initializeKingdom started");
/*====================================================

            INITIALIZE KINGDOM

====================================================*/

async function initializeKingdom(data){

    // Navigation
    initializeNavigation();

    // Comic Engine
    initializeComic(data);

    // Coding Engine
   // Coding / Network Simulator

if(data.coding){

    // Only initialize if the function exists
    if(typeof initializeCoding==="function"){

        await initializeCoding(data);

    }

}
else if(typeof initializeNetworkSimulator==="function"){

    /*
       Load the topology-only interaction patch after network.js has
       defined NetworkEngine, but before the simulator is initialized.
       Transmission / switching code is not modified by this patch.
    */
    if(!window.__SPIDER_TOPOLOGY_BUILDER_PATCH__){
        await new Promise((resolve)=>{
            const script=document.createElement("script");
            script.src="js/topology-builder-patch.js?v=20260805";
            script.onload=()=>resolve();
            script.onerror=()=>{
                console.warn("Topology builder patch could not be loaded.");
                resolve();
            };
            document.head.appendChild(script);
        });
    }

    await initializeNetworkSimulator(data);

}

    // Quiz Engine
    initializeQuiz(data);

    // Effects
    initializeEffects();

    // Storage (Optional)
    if(typeof initializeStorage==="function"){
        initializeStorage(data);
    }

    // Buttons
    initializeButtons(data);

    // Hide Loading Screen
    hideLoading();

}
/*====================================================
            BUTTON EVENTS
====================================================*/

function initializeButtons(data){

const startButton=document.getElementById("beginAdventure");

if(startButton){

startButton.onclick=()=>{

document.getElementById("kingdomMap")

.scrollIntoView({

behavior:"smooth"

});

};

}


const nextButton=document.getElementById("nextKingdom");

if(nextButton){

nextButton.onclick=()=>{

window.location.href=data.footer.next;

};

}


const finishButton=document.getElementById("completeKingdom");

if(finishButton){

finishButton.onclick=()=>{

showReward(

"🏆 Kingdom Completed!"

);

saveProgress(data.id);

};

}

}


/*====================================================
            LOADING SCREEN
====================================================*/

function hideLoading(){

const loader=

document.getElementById("loadingScreen");

if(!loader)return;

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.remove();

},600);

},500);

}
