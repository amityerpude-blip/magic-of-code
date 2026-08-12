/*====================================================
                CODING QUEST
            DASHBOARD CONTROLLER
====================================================*/
"use strict";

const DASHBOARD_STORAGE_KEY="magicOfCodePlayer";
const DASHBOARD_AMBIENT="assets/audio/ambience/ambience2.mp3";

function getDashboardPlayer(){
    let player=null;
    try{player=JSON.parse(localStorage.getItem(DASHBOARD_STORAGE_KEY)||"null");}catch(e){player=null;}
    if(!player){
        try{player=JSON.parse(localStorage.getItem("pythonQuestPlayer")||"null");}catch(e){player=null;}
        if(player){
            player.completedKingdoms=Array.isArray(player.completedKingdoms)?player.completedKingdoms:Array.from({length:Number(player.completedWorlds)||0},(_,i)=>i+1);
            player.lastKingdom=player.lastKingdom||"";
            player.lastSection=player.lastSection||"comicSection";
            localStorage.setItem(DASHBOARD_STORAGE_KEY,JSON.stringify(player));
        }
    }
    if(!player){player={name:"Young Wizard",level:1,xp:0,coins:0,badges:0,completedKingdoms:[],lastKingdom:"",lastSection:"comicSection"};localStorage.setItem(DASHBOARD_STORAGE_KEY,JSON.stringify(player));}
    player.xp=Number(player.xp)||0;player.coins=Number(player.coins)||0;player.badges=Number(player.badges)||0;player.level=Number(player.level)||1;player.completedKingdoms=Array.isArray(player.completedKingdoms)?player.completedKingdoms:[];
    return player;
}

function getCompletedCount(player){return Math.min(worlds.length,player.completedKingdoms.length);}

function getContinueFolder(player){
    const last=String(player.lastKingdom||"").trim();
    if(last){
        const exact=worlds.find(w=>w.folder===last||String(w.id)===last||w.name.toLowerCase()===last.toLowerCase());
        if(exact)return exact.folder;
        const routeFallback={python:"python-village",decision:"decision-valley",loops:"looping-forest",loop:"looping-forest",collections:"magical-collections",magicalcollections:"magical-collections",functions:"function-tower",function:"function-tower",exceptions:"exception-temple",exception:"exception-temple",text:"text-file-library",csv:"csv-kingdom",pickle:"pickle-kingdom",pandas:"pandas-paradise",charts:"chart-peaks",chart:"chart-peaks",numpy:"numpy-caverns",stack:"stack-tower",stacktower:"stack-tower",sql:"dragon-sql",network:"spider-web"};
        if(routeFallback[last])return routeFallback[last];
    }
    const completed=getCompletedCount(player);
    return worlds[Math.min(completed,worlds.length-1)].folder;
}

function startDashboardMusic(){
    if(!window.AudioManager)return;
    AudioManager.playAmbient(DASHBOARD_AMBIENT).then(started=>{if(started)updateDashboardAudioUI();});
}

function updateDashboardAudioUI(){
    const bird=document.getElementById("dashboardAudioBird");
    const mute=document.getElementById("dashboardMuteButton");
    const slider=document.getElementById("dashboardVolumeSlider");
    if(bird){bird.textContent=AudioManager.enabled?"🐦":"🐦🔇";bird.classList.toggle("audioPlaying",!!AudioManager.ambientStarted);}
    if(mute)mute.textContent=AudioManager.enabled?"🔊":"🔇";
    if(slider)slider.value=String(AudioManager.volume);
}

function toggleDashboardAudioPanel(event){
    if(event)event.stopPropagation();
    const panel=document.getElementById("dashboardAudioPanel");
    if(panel)panel.classList.toggle("open");
    updateDashboardAudioUI();
    if(!AudioManager.ambientStarted)startDashboardMusic();
}

document.addEventListener("DOMContentLoaded",()=>{
    loadWorlds();
    loadPlayer();
    initializeContinueAdventure();
    initializeDailyMissionButton();
    if(window.AudioManager){
        AudioManager.init();
        startDashboardMusic();
        document.getElementById("dashboardAudioBird")?.addEventListener("click",toggleDashboardAudioPanel);
        document.getElementById("dashboardMuteButton")?.addEventListener("click",event=>{event.stopPropagation();AudioManager.toggle();updateDashboardAudioUI();});
        document.getElementById("dashboardVolumeSlider")?.addEventListener("input",event=>AudioManager.setVolume(event.target.value));
        document.addEventListener("click",event=>{const wrap=document.getElementById("dashboardAudio");if(wrap&&!wrap.contains(event.target))document.getElementById("dashboardAudioPanel")?.classList.remove("open");});
        const resume=()=>{if(!AudioManager.ambientStarted)startDashboardMusic();document.removeEventListener("pointerdown",resume);document.removeEventListener("keydown",resume);};
        document.addEventListener("pointerdown",resume,{once:true});
        document.addEventListener("keydown",resume,{once:true});
        updateDashboardAudioUI();
    }
});

function loadWorlds(){const worldGrid=document.getElementById("worldGrid");if(!worldGrid){console.error("worldGrid not found");return;}worldGrid.innerHTML="";worlds.forEach(world=>{worldGrid.innerHTML+=createWorldCard(world);});}
function createWorldCard(world){return `<div class="worldCard ${world.rarity}"><img src="${world.image}" alt="${world.name}"><div class="worldContent"><h3>${world.name}</h3><p>${world.topic}</p><button class="btn btn-primary" onclick="openWorld('${world.folder}')">Enter World</button></div></div>`;}
function openWorld(folder){window.location.href=folder+"/index.html";}

function loadPlayer(){
    const player=getDashboardPlayer();
    const completed=getCompletedCount(player);
    document.getElementById("playerLevel").textContent=player.level;
    document.getElementById("headerXP").textContent=player.xp;
    document.getElementById("headerCoins").textContent=player.coins;
    document.getElementById("headerBadges").textContent=player.badges;
    document.getElementById("headerKingdoms").textContent=completed+"/"+worlds.length;
    updateHeaderProgress(player);
}

function updateHeaderProgress(player=getDashboardPlayer()){
    const percent=Math.round((getCompletedCount(player)/worlds.length)*100);
    const bar=document.getElementById("headerProgressBar");
    const text=document.getElementById("headerProgressText");
    if(bar)bar.style.width=percent+"%";
    if(text)text.textContent=percent+"%";
}

function initializeDailyMissionButton(){
    const button=document.getElementById("headerDailyMission");
    if(button)button.addEventListener("click",()=>{if(typeof showDailyMissionPopup==="function")showDailyMissionPopup();});
}

function initializeContinueAdventure(){
    const button=document.getElementById("continueAdventure");
    if(!button)return;
    const player=getDashboardPlayer();
    const folder=getContinueFolder(player);
    const world=worlds.find(w=>w.folder===folder);
    button.title=world?"Continue: "+world.name:"Continue Adventure";
    button.onclick=()=>{window.location.href=folder+"/index.html";};
}

console.log("Dashboard Loaded Successfully");
