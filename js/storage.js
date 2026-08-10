/*====================================================
            MAGIC OF CODE
            STORAGE ENGINE
====================================================*/

const STORAGE_KEY="magicOfCodePlayer";
const DAILY_MISSION_KEY="magicOfCodeDailyMission";

function createPlayer(){return{name:"Young Wizard",level:1,xp:0,coins:0,badges:0,completedKingdoms:[],completedLessons:{},lastKingdom:"",lastSection:"comicSection",music:true,theme:"magic",created:new Date().toLocaleDateString()};}
function loadPlayer(){let player;try{player=JSON.parse(localStorage.getItem(STORAGE_KEY)||"null");}catch(e){player=null;}if(!player){player=createPlayer();savePlayer(player);}player.completedKingdoms=Array.isArray(player.completedKingdoms)?player.completedKingdoms:[];player.completedLessons=player.completedLessons||{};player.xp=Number(player.xp)||0;player.coins=Number(player.coins)||0;player.badges=Number(player.badges)||0;player.level=Number(player.level)||1;return player;}
function savePlayer(player){localStorage.setItem(STORAGE_KEY,JSON.stringify(player));}
function addXP(amount){let player=loadPlayer();player.xp+=Number(amount)||0;updateLevel(player);savePlayer(player);}
function addCoins(amount){let player=loadPlayer();player.coins+=Number(amount)||0;savePlayer(player);}
function addBadge(){let player=loadPlayer();player.badges++;savePlayer(player);}
function updateLevel(player){player.level=Math.floor(player.xp/100)+1;}
function completeKingdom(id){let player=loadPlayer();if(!player.completedKingdoms.includes(id)){player.completedKingdoms.push(id);player.xp+=100;player.coins+=50;player.badges++;}updateLevel(player);savePlayer(player);}
function saveProgress(id){completeKingdom(id);}
function saveCurrentKingdom(id){let player=loadPlayer();player.lastKingdom=id||"";savePlayer(player);}
function saveCurrentSection(section){let player=loadPlayer();player.lastSection=section;savePlayer(player);}
function restoreLastSection(){return loadPlayer().lastSection;}
function setMusic(status){let player=loadPlayer();player.music=status;savePlayer(player);}
function setTheme(theme){let player=loadPlayer();player.theme=theme;savePlayer(player);}
function resetProgress(){localStorage.removeItem(STORAGE_KEY);localStorage.removeItem(DAILY_MISSION_KEY);location.reload();}
function initializeStorage(data){loadPlayer();console.log("Storage initialized.");}

/*====================================================
            DAILY MISSION
====================================================*/
function todayKey(){const d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");}
function createDailyMission(){return{date:todayKey(),comicPages:[],quizQuestions:0,codingComplete:false,completed:false,rewardClaimed:false};}
function getDailyMission(){
    let mission=null;
    try{mission=JSON.parse(localStorage.getItem(DAILY_MISSION_KEY)||"null");}catch(e){mission=null;}
    if(!mission||mission.date!==todayKey()){mission=createDailyMission();localStorage.setItem(DAILY_MISSION_KEY,JSON.stringify(mission));}
    mission.comicPages=Array.isArray(mission.comicPages)?mission.comicPages:[];
    mission.quizQuestions=Math.min(3,Number(mission.quizQuestions)||0);
    mission.codingComplete=!!mission.codingComplete;
    mission.completed=!!mission.completed;
    mission.rewardClaimed=!!mission.rewardClaimed;
    return mission;
}
function saveDailyMission(mission){localStorage.setItem(DAILY_MISSION_KEY,JSON.stringify(mission));}
function dailyMissionStatus(){
    const mission=getDailyMission();
    return{comics:Math.min(5,mission.comicPages.length),quizzes:Math.min(3,mission.quizQuestions),coding:mission.codingComplete?1:0,complete:mission.comicPages.length>=5&&mission.quizQuestions>=3&&mission.codingComplete,rewarded:mission.rewardClaimed};
}
function checkDailyMission(){
    const mission=getDailyMission();
    if(mission.completed)return;
    if(mission.comicPages.length>=5&&mission.quizQuestions>=3&&mission.codingComplete){
        mission.completed=true;
        if(!mission.rewardClaimed){const player=loadPlayer();player.xp+=150;player.coins+=50;updateLevel(player);savePlayer(player);mission.rewardClaimed=true;}
        saveDailyMission(mission);
        setTimeout(()=>showDailyMissionCompletePopup(),120);
    }else saveDailyMission(mission);
}
function recordComicPage(page){const mission=getDailyMission();const n=Number(page);if(Number.isFinite(n)&&n>0&&!mission.comicPages.includes(n)){mission.comicPages.push(n);mission.comicPages.sort((a,b)=>a-b);saveDailyMission(mission);checkDailyMission();}}
function recordQuizQuestion(){const mission=getDailyMission();if(mission.quizQuestions<3){mission.quizQuestions++;saveDailyMission(mission);checkDailyMission();}}
function recordCodingChallenge(){const mission=getDailyMission();if(!mission.codingComplete){mission.codingComplete=true;saveDailyMission(mission);checkDailyMission();}}
function missionPopupStyles(){
    if(document.getElementById("dailyMissionStyles"))return;
    const style=document.createElement("style");style.id="dailyMissionStyles";
    style.textContent=`.dailyMissionOverlay{position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(2,8,23,.72);backdrop-filter:blur(8px);z-index:100000;padding:20px}.dailyMissionOverlay.show{display:flex;animation:dailyMissionFade .2s ease-out}.dailyMissionBox{width:min(460px,94vw);background:linear-gradient(145deg,#17243a,#0d1729);border:1px solid rgba(255,213,79,.4);border-radius:28px;padding:28px;color:#fff;box-shadow:0 25px 70px rgba(0,0,0,.55);text-align:center}.dailyMissionBox h2{color:#ffd54f;margin:0 0 8px;font-size:28px}.dailyMissionBox p{opacity:.9;margin:0 0 20px}.dailyMissionTasks{text-align:left;display:grid;gap:10px}.dailyMissionTask{padding:12px 14px;border-radius:14px;background:rgba(255,255,255,.07);display:flex;justify-content:space-between;gap:12px}.dailyMissionTask.done{background:rgba(46,204,113,.14)}.dailyMissionTask b{color:#ffd54f}.dailyMissionReward{margin-top:18px;padding:13px;border-radius:14px;background:rgba(255,213,79,.1);color:#ffe58a;font-weight:700}.dailyMissionClose{margin-top:20px;border:0;border-radius:999px;padding:12px 28px;background:linear-gradient(135deg,#2ecc71,#ffd54f);font-weight:700;cursor:pointer}.dailyMissionComplete .dailyMissionBox{border-color:rgba(46,204,113,.65);box-shadow:0 0 55px rgba(46,204,113,.22),0 25px 70px rgba(0,0,0,.55)}@keyframes dailyMissionFade{from{opacity:0;transform:scale(.96)}to{opacity:1;transform:scale(1)}}`;
    document.head.appendChild(style);
}
function ensureDailyMissionOverlay(){missionPopupStyles();let overlay=document.getElementById("dailyMissionOverlay");if(overlay)return overlay;overlay=document.createElement("div");overlay.id="dailyMissionOverlay";overlay.className="dailyMissionOverlay";document.body.appendChild(overlay);return overlay;}
function showDailyMissionPopup(){
    const overlay=ensureDailyMissionOverlay(),s=dailyMissionStatus();
    overlay.className="dailyMissionOverlay show";
    overlay.innerHTML=`<div class="dailyMissionBox"><div style="font-size:42px">🎯</div><h2>Daily Mission</h2><p>Complete today's three magical tasks.</p><div class="dailyMissionTasks"><div class="dailyMissionTask ${s.comics>=5?'done':''}"><span>${s.comics>=5?'✅':'📖'} Read 5 Comic Pages</span><b>${s.comics}/5</b></div><div class="dailyMissionTask ${s.quizzes>=3?'done':''}"><span>${s.quizzes>=3?'✅':'🧠'} Solve 3 Quiz Questions</span><b>${s.quizzes}/3</b></div><div class="dailyMissionTask ${s.coding?'done':''}"><span>${s.coding?'✅':'⚡'} Complete One Coding Challenge</span><b>${s.coding?'Done':'0/1'}</b></div></div><div class="dailyMissionReward">Reward ⭐150 XP &nbsp; 🪙50 Coins</div><button class="dailyMissionClose" onclick="closeDailyMissionPopup()">Continue Adventure</button></div>`;
}
function showDailyMissionCompletePopup(){
    const overlay=ensureDailyMissionOverlay();
    overlay.className="dailyMissionOverlay show dailyMissionComplete";
    overlay.innerHTML=`<div class="dailyMissionBox"><div style="font-size:58px">🎉</div><h2>Daily Mission Complete!</h2><p>You completed all three tasks for today.</p><div class="dailyMissionReward">⭐ +150 XP &nbsp;&nbsp; 🪙 +50 Coins</div><button class="dailyMissionClose" onclick="closeDailyMissionPopup()">✨ Claim & Continue</button></div>`;
}
function closeDailyMissionPopup(){document.getElementById("dailyMissionOverlay")?.classList.remove("show");}
