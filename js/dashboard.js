/*====================================================
                PYTHON QUEST
            DASHBOARD CONTROLLER
====================================================*/

"use strict";

/*====================================================
                PAGE LOAD
====================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    loadWorlds();

    loadPlayer();

    updateOverallProgress();

});


/*====================================================
            CREATE WORLD CARDS
====================================================*/

function loadWorlds(){

    const worldGrid=document.getElementById("worldGrid");

    if(!worldGrid){

        console.error("worldGrid not found");

        return;

    }

    worldGrid.innerHTML="";

    worlds.forEach(world=>{

        worldGrid.innerHTML+=createWorldCard(world);

    });

}


/*====================================================
            CREATE SINGLE CARD
====================================================*/

function createWorldCard(world){

    return `

    <div class="worldCard ${world.rarity}">

        <img
        src="${world.image}"
        alt="${world.name}">

        <div class="worldContent">

            <h3>

            ${world.name}

            </h3>

            <p>

            ${world.topic}

            </p>

            <button
            class="btn btn-primary"
            onclick="openWorld('${world.folder}')">

            Enter World

            </button>

        </div>

    </div>

    `;

}


/*====================================================
                OPEN WORLD
====================================================*/

function openWorld(folder){

    window.location.href = folder + "/index.html";

}


/*====================================================
                LOAD PLAYER
====================================================*/

function loadPlayer(){

    let player=

    JSON.parse(

    localStorage.getItem("pythonQuestPlayer")

    );

    if(!player){

        player={

            xp:0,

            coins:0,

            badges:0,

            completedWorlds:0,

            level:1

        };

        localStorage.setItem(

        "pythonQuestPlayer",

        JSON.stringify(player)

        );

    }

    document.getElementById("xp").textContent=

    player.xp;

    document.getElementById("coins").textContent=

    player.coins;

    document.getElementById("badges").textContent=

    player.badges;

    document.getElementById("completedWorlds").textContent=

    player.completedWorlds+" / "+worlds.length;

    document.getElementById("playerLevel").textContent=

    player.level;

}


/*====================================================
        UPDATE OVERALL PROGRESS
====================================================*/

function updateOverallProgress(){

    let player=

    JSON.parse(

    localStorage.getItem("pythonQuestPlayer")

    );

    if(!player) return;

    const percent=

    Math.round(

    (player.completedWorlds/worlds.length)

    *100

    );

    document.getElementById("overallProgress")

    .style.width=

    percent+"%";

    document.getElementById("progressText")

    .textContent=

    percent+

    "% Completed";

}


/*====================================================
                DEBUG
====================================================*/

console.log(

"Dashboard Loaded Successfully"

);
