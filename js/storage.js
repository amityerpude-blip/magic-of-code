/*====================================================
            MAGIC OF CODE
            STORAGE ENGINE
====================================================*/

const STORAGE_KEY="magicOfCodePlayer";
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
function resetProgress(){localStorage.removeItem(STORAGE_KEY);location.reload();}
function initializeStorage(data){loadPlayer();console.log("Storage initialized.");}
