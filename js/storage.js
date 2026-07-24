/*====================================================

            MAGIC OF CODE
            STORAGE ENGINE

            storage.js

====================================================*/


const STORAGE_KEY="magicOfCodePlayer";


/*====================================================
            CREATE PLAYER
====================================================*/

function createPlayer(){

return{

name:"Young Wizard",

level:1,

xp:0,

coins:0,

badges:0,

completedKingdoms:[],

completedLessons:{},

lastKingdom:"",

lastSection:"comicSection",

music:true,

theme:"magic",

created:new Date().toLocaleDateString()

};

}


/*====================================================
            LOAD PLAYER
====================================================*/

function loadPlayer(){

let player=

localStorage.getItem(STORAGE_KEY);

if(!player){

player=createPlayer();

savePlayer(player);

return player;

}

return JSON.parse(player);

}


/*====================================================
            SAVE PLAYER
====================================================*/

function savePlayer(player){

localStorage.setItem(

STORAGE_KEY,

JSON.stringify(player)

);

}


/*====================================================
            ADD XP
====================================================*/

function addXP(amount){

let player=loadPlayer();

player.xp+=amount;

updateLevel(player);

savePlayer(player);

}


/*====================================================
            ADD COINS
====================================================*/

function addCoins(amount){

let player=loadPlayer();

player.coins+=amount;

savePlayer(player);

}


/*====================================================
            ADD BADGE
====================================================*/

function addBadge(){

let player=loadPlayer();

player.badges++;

savePlayer(player);

}


/*====================================================
            LEVEL SYSTEM
====================================================*/

function updateLevel(player){

player.level=

Math.floor(player.xp/100)+1;

}


/*====================================================
            COMPLETE KINGDOM
====================================================*/

function completeKingdom(id){

let player=loadPlayer();

if(

!player.completedKingdoms.includes(id)

){

player.completedKingdoms.push(id);

player.xp+=100;

player.coins+=50;

player.badges++;

}

updateLevel(player);

savePlayer(player);

}


/*====================================================
            SAVE CURRENT KINGDOM
====================================================*/

function saveCurrentKingdom(id){

let player=loadPlayer();

player.lastKingdom=id;

savePlayer(player);

}


/*====================================================
            SAVE CURRENT SECTION
====================================================*/

function saveCurrentSection(section){

let player=loadPlayer();

player.lastSection=section;

savePlayer(player);

}


/*====================================================
            RESTORE SECTION
====================================================*/

function restoreLastSection(){

const player=loadPlayer();

return player.lastSection;

}


/*====================================================
            MUSIC
====================================================*/

function setMusic(status){

let player=loadPlayer();

player.music=status;

savePlayer(player);

}


/*====================================================
            THEME
====================================================*/

function setTheme(theme){

let player=loadPlayer();

player.theme=theme;

savePlayer(player);

}


/*====================================================
            RESET GAME
====================================================*/

function resetProgress(){

localStorage.removeItem(

STORAGE_KEY

);
 /*====================================================
            initializa storage
====================================================*/           
function initializeStorage(data){

console.log("Storage initialized.");

}
location.reload();

}
