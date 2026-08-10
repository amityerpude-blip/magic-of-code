/*====================================================

            MAGIC OF CODE
            KINGDOM ENGINE

            kingdom.js

====================================================*/

const KINGDOM_ROUTE = [
    { folder:"python-village", name:"Python Village" },
    { folder:"decision-valley", name:"Valley of Decisions" },
    { folder:"looping-forest", name:"Looping Forest" },
    { folder:"function-tower", name:"Wizard's Function Tower" },
    { folder:"exception-temple", name:"Temple of Protection" },
    { folder:"text-file-library", name:"Library of Living Scrolls" },
    { folder:"csv-kingdom", name:"CSV Kingdom" },
    { folder:"pickle-kingdom", name:"Pickle Kingdom" },
    { folder:"pandas-paradise", name:"Pandas Paradise" },
    { folder:"chart-peaks", name:"Crystal Chart Peaks" },
    { folder:"numpy-caverns", name:"NumPy Crystal Caverns" },
    { folder:"dragon-sql", name:"Dragon SQL Citadel" },
    { folder:"spider-web", name:"Spider Web Nexus" }
];

function getCurrentKingdomFolder(){
    const parts=window.location.pathname.split("/").filter(Boolean);
    const known=KINGDOM_ROUTE.map(item=>item.folder);
    return parts.find(part=>known.includes(part)) || "";
}

function getKingdomNavigation(){
    const current=getCurrentKingdomFolder();
    const index=KINGDOM_ROUTE.findIndex(item=>item.folder===current);
    return {
        index,
        current:index>=0 ? KINGDOM_ROUTE[index] : null,
        previous:index>0 ? KINGDOM_ROUTE[index-1] : null,
        next:index>=0 && index<KINGDOM_ROUTE.length-1 ? KINGDOM_ROUTE[index+1] : null,
        isFirst:index===0,
        isLast:index===KINGDOM_ROUTE.length-1
    };
}

function goToDashboard(){window.location.href="../dashboard.html";}

function goToNextKingdom(){
    const nav=getKingdomNavigation();
    if(nav.next){window.location.href="../"+nav.next.folder+"/index.html";}
    else{window.location.href="../dashboard.html";}
}

function goToPreviousKingdom(){
    const nav=getKingdomNavigation();
    if(nav.previous){window.location.href="../"+nav.previous.folder+"/index.html";}
}

function loadKingdom(data){
const root=document.getElementById("kingdomRoot");
root.innerHTML=LoadingComponent()+HeroComponent(data)+NavigationComponent(data)+ComicComponent(data)+AnimationComponent(data)+NotesComponent(data)+CodingComponent(data)+QuizComponent(data)+ChallengeComponent(data)+FooterComponent(data)+RewardPopupComponent()+ParticleComponent()+AudioComponent(data);
initializeKingdom(data);
}

console.log("initializeKingdom started");

async function initializeKingdom(data){
    initializeNavigation();
    initializeComic(data);

    if(data.coding){
        await initializeCoding(data);
    }else if(typeof initializeNetworkSimulator==="function"){
        await initializeNetworkSimulator(data);
    }

    initializeQuiz(data);
    initializeEffects();

    if(typeof initializeStorage==="function"){
        initializeStorage(data);
    }

    initializeButtons(data);

    // Start shared background music for every kingdom
    startKingdomAmbientMusic();

    hideLoading();
}

function startKingdomAmbientMusic(){
    if(window.AudioManager){
        AudioManager.playAmbient("assets/audio/common/ambient.mp3");
    }

    // Browser autoplay unlock after first interaction
    document.addEventListener("click",()=>{
        if(window.AudioManager && !AudioManager.ambient){
            AudioManager.playAmbient("assets/audio/common/ambient.mp3");
        }
    },{once:true});
}

function initializeButtons(data){
const startButton=document.getElementById("beginAdventure");
if(startButton){startButton.onclick=()=>{document.getElementById("kingdomMap").scrollIntoView({behavior:"smooth",block:"start"});};}

const dashboardButton=document.getElementById("dashboardKingdom");
if(dashboardButton) dashboardButton.onclick=goToDashboard;

const previousButton=document.getElementById("previousKingdom");
if(previousButton) previousButton.onclick=goToPreviousKingdom;

const nextButton=document.getElementById("nextKingdom");
if(nextButton) nextButton.onclick=goToNextKingdom;

const nav=getKingdomNavigation();
if(previousButton && !nav.previous){previousButton.disabled=true;previousButton.classList.add("disabled");}
if(nextButton && nav.isLast){nextButton.textContent="🏠 Back to Dashboard";}

const finishButton=document.getElementById("completeKingdom");
if(finishButton){finishButton.onclick=()=>{showReward("🏆 Kingdom Completed!");saveProgress(data.id);};}
}

function hideLoading(){
const loader=document.getElementById("loadingScreen");
if(!loader)return;
setTimeout(()=>{loader.style.opacity="0";setTimeout(()=>{loader.remove();},600);},500);
}
