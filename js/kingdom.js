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

/*====================================================

            INITIALIZE KINGDOM

====================================================*/

async function initializeKingdom(data){

    // Create Complete Kingdom UI
    renderKingdom(data);

    // Navigation
    initializeNavigation();

    // Comic Engine
    initializeComic(data);

    // Coding Engine
    await initializeCoding(data);

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
