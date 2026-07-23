/*====================================================
            PYTHON QUEST v2.0
              GLOBAL GAME ENGINE
====================================================*/

"use strict";

/*====================================================
                GAME SETTINGS
====================================================*/

const GAME = {

    name: "Python Quest",

    version: "2.0",

    saveKey: "pythonQuestPlayer",

    musicVolume: 0.35,

    soundEnabled: true

};

/*====================================================
                DEFAULT PLAYER
====================================================*/

const defaultPlayer = {

    name: "Explorer",

    level: 1,

    xp: 0,

    coins: 0,

    badges: [],

    worldsCompleted: [],

    currentWorld: "python-village",

    achievements: [],

    inventory: [],

    music: true

};

/*====================================================
                START
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeGame();

});

/*====================================================
            INITIALIZE GAME
====================================================*/

function initializeGame(){

    loadPlayer();

    updateButtons();

    createFireflies();

    welcomeMessage();

}

/*====================================================
            LOAD PLAYER
====================================================*/

function loadPlayer(){

    let player = localStorage.getItem(GAME.saveKey);

    if(player == null){

        localStorage.setItem(

            GAME.saveKey,

            JSON.stringify(defaultPlayer)

        );

    }

}

/*====================================================
            GET PLAYER
====================================================*/

function getPlayer(){

    return JSON.parse(

        localStorage.getItem(GAME.saveKey)

    );

}

/*====================================================
            SAVE PLAYER
====================================================*/

function savePlayer(player){

    localStorage.setItem(

        GAME.saveKey,

        JSON.stringify(player)

    );

}

/*====================================================
            RESET GAME
====================================================*/

function resetGame(){

    if(confirm("Start a new adventure?")){

        localStorage.removeItem(GAME.saveKey);

        location.reload();

    }

}

/*====================================================
            ADD XP
====================================================*/

function addXP(amount){

    let player = getPlayer();

    player.xp += amount;

    checkLevel(player);

    savePlayer(player);

}

/*====================================================
            ADD COINS
====================================================*/

function addCoins(amount){

    let player = getPlayer();

    player.coins += amount;

    savePlayer(player);

}

/*====================================================
            ADD BADGE
====================================================*/

function addBadge(badge){

    let player = getPlayer();

    if(!player.badges.includes(badge)){

        player.badges.push(badge);

    }

    savePlayer(player);

}

/*====================================================
            COMPLETE WORLD
====================================================*/

function completeWorld(world){

    let player = getPlayer();

    if(!player.worldsCompleted.includes(world)){

        player.worldsCompleted.push(world);

    }

    savePlayer(player);

}

/*====================================================
            LEVEL SYSTEM
====================================================*/

function checkLevel(player){

    let required = player.level * 500;

    while(player.xp >= required){

        player.level++;

        required = player.level * 500;

        alert(

            "🎉 LEVEL UP!\n\nLevel " +

            player.level

        );

    }

}

/*====================================================
        START / CONTINUE BUTTON
====================================================*/

function updateButtons(){

    const buttons = document.querySelectorAll(".continueOnly");

    if(buttons.length == 0) return;

    const player = getPlayer();

    if(player.worldsCompleted.length == 0){

        buttons.forEach(btn=>{

            btn.style.display="none";

        });

    }

}

/*====================================================
        WELCOME MESSAGE
====================================================*/

function welcomeMessage(){

    const box = document.getElementById("welcomeMessage");

    if(!box) return;

    const player = getPlayer();

    box.innerHTML =

    "🧙 Welcome back <b>" +

    player.name +

    "</b>!";

}

/*====================================================
        PARTICLES
====================================================*/

function createFireflies(){

    const container = document.body;

    for(let i=0;i<25;i++){

        const star = document.createElement("div");

        star.className = "firefly";

        star.style.left =

        Math.random()*100+"vw";

        star.style.top =

        Math.random()*100+"vh";

        star.style.animationDuration =

        (5+Math.random()*6)+"s";

        container.appendChild(star);

    }

}

/*====================================================
        BACKGROUND MUSIC
====================================================*/

let music = null;

function initializeMusic(){

    music = document.getElementById("bgMusic");

    if(!music) return;

    music.volume = GAME.musicVolume;

}

function toggleMusic(){

    if(!music) return;

    if(music.paused){

        music.play();

    }

    else{

        music.pause();

    }

}

/*====================================================
            NAVIGATION
====================================================*/

function goToDashboard(){

    location.href = "dashboard.html";

}

function openWorld(folder){

    location.href =

    "worlds/"+folder+"/index.html";

}

/*====================================================
            INVENTORY
====================================================*/

function addItem(item){

    let player = getPlayer();

    if(!player.inventory.includes(item)){

        player.inventory.push(item);

    }

    savePlayer(player);

}

/*====================================================
            ACHIEVEMENTS
====================================================*/

function unlockAchievement(title){

    let player = getPlayer();

    if(!player.achievements.includes(title)){

        player.achievements.push(title);

    }

    savePlayer(player);

}

/*====================================================
                DEBUG
====================================================*/

console.log(

"🧙 Python Quest v2.0 Loaded"

);
