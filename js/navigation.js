/*====================================================

            MAGIC OF CODE
            NAVIGATION ENGINE

            navigation.js

====================================================*/


/*====================================================
            INITIALIZE NAVIGATION
====================================================*/

function initializeNavigation(){

const tiles=document.querySelectorAll(".magicTile");

const sections=document.querySelectorAll(".lessonContent");

if(tiles.length===0)return;


/*==========================================
        TILE CLICK
==========================================*/

tiles.forEach(tile=>{

tile.addEventListener("click",()=>{

const target=tile.dataset.section;

/* Remove Active */

tiles.forEach(t=>t.classList.remove("active"));

sections.forEach(s=>s.classList.remove("active"));

/* Activate Selected */

tile.classList.add("active");

const section=document.getElementById(target);

if(section){

section.classList.add("active");

section.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

/* Save Progress */

saveCurrentSection(target);

/* Optional Sound */

playButtonSound();

});

});


/*==========================================
    RESTORE LAST OPENED SECTION
==========================================*/

restoreLastSection();

}


/*====================================================
        SAVE CURRENT SECTION
====================================================*/

function saveCurrentSection(section){

localStorage.setItem(

"magicCurrentSection",

section

);

}


/*====================================================
        RESTORE SECTION
====================================================*/

function restoreLastSection(){

const section=

localStorage.getItem(

"magicCurrentSection"

);

if(!section)return;

const tile=

document.querySelector(

`.magicTile[data-section="${section}"]`

);

if(tile){

tile.click();

}

}


/*====================================================
            NEXT SECTION
====================================================*/

function nextSection(){

const tiles=[

...document.querySelectorAll(".magicTile")

];

let current=

tiles.findIndex(

t=>t.classList.contains("active")

);

if(current<tiles.length-1){

tiles[current+1].click();

}

}


/*====================================================
        PREVIOUS SECTION
====================================================*/

function previousSection(){

const tiles=[

...document.querySelectorAll(".magicTile")

];

let current=

tiles.findIndex(

t=>t.classList.contains("active")

);

if(current>0){

tiles[current-1].click();

}

}


/*====================================================
        OPEN SECTION BY NAME
====================================================*/

function openSection(id){

const tile=

document.querySelector(

`.magicTile[data-section="${id}"]`

);

if(tile){

tile.click();

}

}
