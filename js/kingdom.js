/*====================================================

            MAGIC OF CODE
            KINGDOM ENGINE

            kingdom.js

====================================================*/

const KINGDOM_ROUTE = [
    { folder:"python-village", name:"Python Village" },
    { folder:"decision-valley", name:"Valley of Decisions" },
    { folder:"looping-forest", name:"Looping Forest" },
    { folder:"magical-collections", name:"Magical Collections Kingdom" },
    { folder:"function-tower", name:"Wizard's Function Tower" },
    { folder:"exception-temple", name:"Temple of Protection" },
    { folder:"text-file-library", name:"Library of Living Scrolls" },
    { folder:"csv-kingdom", name:"CSV Kingdom" },
    { folder:"pickle-kingdom", name:"Pickle Kingdom" },
    { folder:"pandas-paradise", name:"Pandas Paradise" },
    { folder:"chart-peaks", name:"Crystal Chart Peaks" },
    { folder:"numpy-caverns", name:"NumPy Crystal Caverns" },
    { folder:"stack-tower", name:"Stack Tower" },
    { folder:"dragon-sql", name:"Dragon SQL Citadel" },
    { folder:"spider-web", name:"Spider Web Nexus" }
];

const KINGDOM_TILE_ICONS = {
    comicSection:"📖",
    animationSection:"🎬",
    notesSection:"📚",
    codingSection:"🧪",
    quizSection:"👾",
    challengeSection:"🏆"
};

const SPELL_FORGE_TWEMOJI="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.3/assets/svg/1f9ea.svg";

function normalizeKingdomSections(data){
    if(!data || !Array.isArray(data.sections)) return;
    data.sections.forEach(section=>{
        if(!section) return;
        const standardIcon=KINGDOM_TILE_ICONS[section.id];
        if(standardIcon) section.icon=standardIcon;
        if(section.id==="codingSection") section.title="Spell Forge";
    });
}

function normalizeRenderedTileIcons(){
    Object.entries(KINGDOM_TILE_ICONS).forEach(([sectionId,icon])=>{
        document.querySelectorAll(`.magicTile[data-section="${sectionId}"] .tileIcon`).forEach(tile=>{
            if(sectionId==="codingSection"){
                tile.innerHTML=`<img class="spellForgeEmoji" src="${SPELL_FORGE_TWEMOJI}" alt="🧪" aria-label="Spell Forge">`;
                const img=tile.querySelector("img");
                if(img)img.onerror=()=>{tile.textContent="🔮";};
            }else{
                tile.textContent=icon;
            }
        });
    });
}

function getCurrentKingdomFolder(){
    const parts=window.location.pathname.split("/").filter(Boolean);
    const known=KINGDOM_ROUTE.map(item=>item.folder);
    return parts.find(part=>known.includes(part)) || "";
}
function getKingdomNavigation(){
    const current=getCurrentKingdomFolder();
    const index=KINGDOM_ROUTE.findIndex(item=>item.folder===current);
    return {index,current:index>=0?KINGDOM_ROUTE[index]:null,previous:index>0?KINGDOM_ROUTE[index-1]:null,next:index>=0&&index<KINGDOM_ROUTE.length-1?KINGDOM_ROUTE[index+1]:null,isFirst:index===0,isLast:index===KINGDOM_ROUTE.length-1};
}
function goToDashboard(){window.location.href="../dashboard.html";}
function goToNextKingdom(){const nav=getKingdomNavigation();if(nav.next)window.location.href="../"+nav.next.folder+"/index.html";else window.location.href="../dashboard.html";}
function goToPreviousKingdom(){const nav=getKingdomNavigation();if(nav.previous)window.location.href="../"+nav.previous.folder+"/index.html";}

function ensureSpellForgeEmoji(){
    normalizeRenderedTileIcons();

    document.querySelectorAll('#codingSection h2').forEach(heading=>{
        const image=heading.querySelector('.spellForgeEmoji');
        if(image){
            image.src=SPELL_FORGE_TWEMOJI;
            image.alt="🧪";
            image.setAttribute("aria-label","Spell Forge");
            image.onerror=()=>{
                const fallback=document.createElement("span");
                fallback.textContent="🔮 Spell Forge";
                image.replaceWith(fallback);
            };
        }
    });

    document.querySelectorAll('.clearCodeButton').forEach(button=>{
        if(/Reset Spell/i.test(button.textContent||""))button.textContent="↺ Reset Spell";
    });
}

function loadKingdom(data){
    normalizeKingdomSections(data);
    if(typeof renderKingdom==="function"){
        renderKingdom(data);
    }else{
        const root=document.getElementById("kingdomRoot")||document.getElementById("kingdomContainer");
        if(root)root.innerHTML=LoadingComponent()+QuestHeaderComponent()+HeroComponent(data)+NavigationComponent(data)+ComicComponent(data)+AnimationComponent(data)+NotesComponent(data)+CodingComponent(data)+QuizComponent(data)+ChallengeComponent(data)+FooterComponent(data)+RewardPopupComponent()+ParticleComponent();
    }
    ensureSpellForgeEmoji();
    initializeKingdom(data);
}

console.log("initializeKingdom started");

async function initializeKingdom(data){
    normalizeKingdomSections(data);
    normalizeRenderedTileIcons();
    initializeNavigation();
    ensureSpellForgeEmoji();
    initializeComic(data);
    if(data.coding){await initializeCoding(data);}else if(typeof initializeNetworkSimulator==="function"){await initializeNetworkSimulator(data);}
    initializeQuiz(data);
    initializeEffects();
    if(typeof initializeStorage==="function")initializeStorage(data);
    if(typeof saveCurrentKingdom==="function")saveCurrentKingdom(getCurrentKingdomFolder());
    initializeButtons(data);
    startKingdomAmbientMusic();
    hideLoading();
    if(typeof showDailyMissionPopup==="function")setTimeout(showDailyMissionPopup,650);
    if(typeof updateQuestHeader==="function")setTimeout(updateQuestHeader,100);
}

function startKingdomAmbientMusic(){
    if(window.AudioManager)AudioManager.playAmbient("assets/audio/common/ambient.mp3");
    document.addEventListener("click",()=>{if(window.AudioManager&&!AudioManager.ambientStarted)AudioManager.playAmbient("assets/audio/common/ambient.mp3");},{once:true});
}

function initializeButtons(data){
    const startButton=document.getElementById("beginAdventure");if(startButton)startButton.onclick=()=>document.getElementById("kingdomMap").scrollIntoView({behavior:"smooth",block:"start"});
    const dashboardButton=document.getElementById("dashboardKingdom");if(dashboardButton)dashboardButton.onclick=goToDashboard;
    const previousButton=document.getElementById("previousKingdom");if(previousButton)previousButton.onclick=goToPreviousKingdom;
    const nextButton=document.getElementById("nextKingdom");if(nextButton)nextButton.onclick=goToNextKingdom;
    const nav=getKingdomNavigation();
    if(previousButton&&!nav.previous){previousButton.disabled=true;previousButton.classList.add("disabled");}
    if(nextButton&&nav.isLast)nextButton.textContent="🏠 Back to Dashboard";
    const finishButton=document.getElementById("completeKingdom");
    if(finishButton){finishButton.onclick=()=>{showReward("🏆 Kingdom Completed!");if(typeof saveProgress==="function")saveProgress(data.id);else if(typeof completeKingdom==="function")completeKingdom(data.id);};}
}

function hideLoading(){const loader=document.getElementById("loadingScreen");if(!loader)return;setTimeout(()=>{loader.style.opacity="0";setTimeout(()=>loader.remove(),600);},500);}
