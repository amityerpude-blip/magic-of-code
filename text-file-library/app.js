/*=========================================================
                PYTHON QUEST
            WORLD LESSON ENGINE
=========================================================*/

"use strict";

/*=========================================================
                CURRENT WORLD
=========================================================*/

const WORLD_ID = window.location.pathname
    .split("/")
    .filter(Boolean)
    .slice(-2, -1)[0] || "python-world";


/*=========================================================
                LESSON SECTIONS
=========================================================*/

const sections = [

    "comicSection",

    "animationSection",

    "notesSection",

    "codingSection",

    "quizSection",

    "rewardSection"

];

let currentSection = 0;


/*=========================================================
                PAGE LOAD
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    loadSavedSection();

    initializeNavigation();

    initializeButtons();

    initializeVideo();

    loadNotes();

    initializeReward();

    updateProgress();

    showSection(currentSection);

});


/*=========================================================
                GO TO DASHBOARD
=========================================================*/

function goDashboard(){

    window.location.href = "../dashboard.html";

}


/*=========================================================
            INITIALIZE TAB NAVIGATION
=========================================================*/

function initializeNavigation(){

    const buttons = document.querySelectorAll(".navButton");

    buttons.forEach((button,index)=>{

        button.addEventListener("click",()=>{

            showSection(index);

        });

    });

}


/*=========================================================
                SHOW SECTION
=========================================================*/

function showSection(section){

    // If an index is passed
    if(typeof section === "number"){

        currentSection = section;

        section = sections[currentSection];

    }

    document.querySelectorAll(".lessonContent")
    .forEach(sec=>sec.classList.remove("active"));

    document.getElementById(section)
    .classList.add("active");

    document.querySelectorAll(".navButton")
    .forEach(btn=>btn.classList.remove("active"));

    document.querySelectorAll(".navButton")[currentSection]
    .classList.add("active");

    updateProgress();

    saveCurrentSection();

}
/*=========================================================
                PREVIOUS SECTION
=========================================================*/

function previousSection(){

    if(currentSection > 0){

        currentSection--;

        showSection(currentSection);

    }

}


/*=========================================================
                NEXT SECTION
=========================================================*/

function nextSection(){

    if(currentSection < sections.length-1){

        currentSection++;

        showSection(currentSection);

    }

}


/*=========================================================
            PREVIOUS / NEXT BUTTONS
=========================================================*/

function initializeButtons(){

    const previous = document.getElementById("previousBtn");

    const next = document.getElementById("nextBtn");

    if(previous){

        previous.onclick = previousSection;

    }

    if(next){

        next.onclick = nextSection;

    }

}


/*=========================================================
                LESSON PROGRESS
=========================================================*/

function updateProgress(){

    const bar = document.getElementById("lessonProgressBar");

    if(!bar) return;

    const percent = ((currentSection+1)/sections.length)*100;

    bar.style.width = percent + "%";

}


/*=========================================================
            SAVE CURRENT SECTION
=========================================================*/

function saveCurrentSection(){

    localStorage.setItem(

        WORLD_ID + "-section",

        currentSection

    );

}


/*=========================================================
            LOAD SAVED SECTION
=========================================================*/

function loadSavedSection(){

    const saved = localStorage.getItem(

        WORLD_ID + "-section"

    );

    if(saved !== null){

        currentSection = parseInt(saved);

    }

}


/*=========================================================
                VIDEO
=========================================================*/

function initializeVideo(){

    const video = document.getElementById("lessonVideo");

    if(!video) return;

    video.onended = function(){

        alert(

            "🎬 Animation completed!\nContinue your adventure."

        );

    };

}


/*=========================================================
                CODING LAB
=========================================================*/




/*=========================================================
                REWARD SYSTEM
=========================================================*/

function initializeReward(){

    const reward = document.getElementById("claimReward");

    if(!reward) return;

    reward.onclick = function(){

        let player = JSON.parse(

            localStorage.getItem(

                "pythonQuestPlayer"

            )

        );

        if(!player){

            player={

                xp:0,

                coins:0,

                badges:0,

                completedWorlds:0,

                level:1

            };

        }

        player.xp += 300;

        player.coins += 150;

        player.badges += 1;

        if(player.completedWorlds < 1){

            player.completedWorlds = 1;

        }

        player.level = Math.floor(player.xp/1000)+1;

        localStorage.setItem(

            "pythonQuestPlayer",

            JSON.stringify(player)

        );

        alert(

`🏆 Congratulations!

You completed

${WORLD_ID.replace(/-/g," ").toUpperCase()}

Rewards Earned

⭐ +300 XP

🪙 +150 Coins

🏅 +1 Badge`

        );

    };

}


/*=========================================================
                    DEBUG
=========================================================*/

console.log(

    "📜 " + WORLD_ID + " Loaded Successfully"

);
// ==========================================
// LOAD NOTES FROM NOTES.HTML
// ==========================================

/*=========================================================
                LOAD NOTES FROM NOTES.HTML
=========================================================*/

async function loadNotes(){

    const notesContainer = document.getElementById("notesContainer");


    // Container check
    if(!notesContainer){

        console.error("notesContainer not found");

        return;

    }


    try{


        const response = await fetch("notes.html");


        if(!response.ok){

            throw new Error("notes.html not found");

        }


        const notesData = await response.text();


        notesContainer.innerHTML = notesData;


        console.log("📚 Living Scrolls Loaded Successfully");


    }


    catch(error){


        console.error(
            "Notes loading failed:",
            error
        );


        notesContainer.innerHTML = `

        <div class="noteCard">

            <h3>⚠ Magical Scroll Missing</h3>

            <p>
            Master Pyro's notes could not be opened.
            Please check notes.html path.
            </p>

        </div>

        `;


    }

}


