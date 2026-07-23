/*====================================================
            PYTHON QUEST v2.0
            DASHBOARD CONTROLLER
====================================================*/

"use strict";

/*====================================================
                PAGE LOAD
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    loadWorlds();

});


/*====================================================
            LOAD ALL WORLD CARDS
====================================================*/

function loadWorlds(){

    const grid = document.getElementById("worldGrid");

    if(!grid){

        console.error("worldGrid not found!");

        return;

    }

    grid.innerHTML = "";

    worlds.forEach(world => {

        grid.innerHTML += createWorldCard(world);

    });

}


/*====================================================
            CREATE WORLD CARD
====================================================*/

function createWorldCard(world){

    return `

    <div class="worldCard ${world.rarity}">

        <div class="rarity">

            <span>${world.difficulty}</span>

            <span>${world.rarity.toUpperCase()}</span>

        </div>

        <img
            src="${world.image}"
            alt="${world.name}"
        >

        <div class="worldContent">

            <h3>${world.name}</h3>

            <p>${world.topic}</p>

            <p>

                <strong>Guardian:</strong>

                ${world.guardian}

            </p>

            <div class="cardProgress">

                <div
                    class="cardProgressFill"
                    style="width:${world.progress}%">
                </div>

            </div>

            <div class="rewardBox">

                <span>⭐ ${world.xp}</span>

                <span>🪙 ${world.coins}</span>

                <span>🏆</span>

            </div>

            <button
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

    window.location.href =
    "worlds/" + folder + "/index.html";

}
