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

PracticeComponent(data) +

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

async function initializeKingdom(data){

// Step 1: Create all HTML
renderKingdom(data);

// Step 2: Initialize Navigation
initializeNavigation();

// Step 3: Initialize Comic Engine
initializeComic(data);

// Step 4: Initialize Python Engine
// Wait until Pyodide and all required packages
// (Pandas, Matplotlib, etc.) are fully loaded.
await initializeCoding(data);

// Step 5: Initialize Visual Effects
initializeEffects();

// Step 6: Initialize Storage
if(typeof initializeStorage==="function"){

    initializeStorage(data);

}

// Step 7: Initialize Buttons
initializeButtons(data);

// Step 8: Hide Loading Screen
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
