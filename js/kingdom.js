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
async function initializeKingdom(data){

    alert("1 Navigation");
    initializeNavigation();

    alert("2 Comic");
    initializeComic(data);

    alert("3 Coding");
    await initializeCoding(data);

    alert("4 Quiz");
    initializeQuiz(data);

    alert("5 Effects");
    initializeEffects();

    alert("6 Storage");
    if(typeof initializeStorage==="function"){
        initializeStorage(data);
    }

    alert("7 Buttons");
    initializeButtons(data);

    alert("8 Hide Loading");
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
