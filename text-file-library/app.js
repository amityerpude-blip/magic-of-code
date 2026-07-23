/*=========================================================
                PYTHON QUEST
            WORLD LESSON ENGINE
=========================================================*/

"use strict";

/*=========================================================
                GLOBAL SETTINGS
=========================================================*/

const sections=[

    "comicSection",

    "animationSection",

    "notesSection",

    "codingSection",

    "quizSection",

    "rewardSection"

];

let currentSection=0;


/*=========================================================
                PAGE LOAD
=========================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    loadSavedSection();

    initializeNavigation();

    initializeButtons();

    initializeVideo();

    initializeCoding();

    initializeReward();

    updateProgress();

    showSection(currentSection);

});


/*=========================================================
            DASHBOARD BUTTON
=========================================================*/

function goDashboard(){

    window.location.href="../dashboard.html";

}


/*=========================================================
            NAVIGATION BUTTONS
=========================================================*/

function initializeNavigation(){

    const buttons=document.querySelectorAll(".navButton");

    buttons.forEach((button,index)=>{

        button.addEventListener("click",()=>{

            currentSection=index;

            showSection(currentSection);

        });

    });

}


/*=========================================================
            SHOW SECTION
=========================================================*/

function showSection(index){

    document

    .querySelectorAll(".lessonContent")

    .forEach(section=>{

        section.classList.remove("active");

    });

    document

    .querySelectorAll(".navButton")

    .forEach(button=>{

        button.classList.remove("active");

    });

    document

    .getElementById(sections[index])

    .classList.add("active");

    document

    .querySelectorAll(".navButton")[index]

    .classList.add("active");

    currentSection=index;

    updateProgress();

    saveCurrentSection();

}


/*=========================================================
            PREVIOUS / NEXT
=========================================================*/

function previousSection(){

    if(currentSection>0){

        currentSection--;

        showSection(currentSection);

    }

}


function nextSection(){

    if(currentSection<sections.length-1){

        currentSection++;

        showSection(currentSection);

    }

}


/*=========================================================
                BUTTONS
=========================================================*/

function initializeButtons(){

    const previous=document.getElementById("previousBtn");

    const next=document.getElementById("nextBtn");

    if(previous){

        previous.onclick=previousSection;

    }

    if(next){

        next.onclick=nextSection;

    }

}


/*=========================================================
                PROGRESS BAR
=========================================================*/

function updateProgress(){

    const bar=document.getElementById("lessonProgressBar");

    if(!bar) return;

    const percent=

    ((currentSection+1)/sections.length)*100;

    bar.style.width=percent+"%";

}


/*=========================================================
            SAVE LAST TAB
=========================================================*/

function saveCurrentSection(){

    localStorage.setItem(

        "TextFileLibrarySection",

        currentSection

    );

}


/*=========================================================
            LOAD LAST TAB
=========================================================*/

function loadSavedSection(){

    const saved=

    localStorage.getItem(

        "TextFileLibrarySection"

    );

    if(saved!==null){

        currentSection=parseInt(saved);

    }

}


/*=========================================================
                VIDEO
=========================================================*/

function initializeVideo(){

    const video=document.getElementById("lessonVideo");

    if(!video) return;

    video.onended=function(){

        alert(

        "🎬 Lesson completed!\nYou can continue to the next section."

        );

    };

}


/*=========================================================
                CODING LAB
=========================================================*/

function initializeCoding(){

    const run=document.getElementById("runCode");

    if(!run) return;

    run.onclick=function(){

        const code=

        document.getElementById("pythonCode").value;

        document.getElementById("output").textContent=

`Python Execution

--------------------------------

Pyodide integration will be added later.

--------------------------------

${code}`;

    };

}


/*=========================================================
                REWARD
=========================================================*/

function initializeReward(){

    const reward=

    document.getElementById("claimReward");

    if(!reward) return;

    reward.onclick=function(){

        let player=

        JSON.parse(

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

        player.xp+=300;

        player.coins+=150;

        player.badges++;

        if(player.completedWorlds<1){

            player.completedWorlds=1;

        }

        player.level=

        Math.floor(player.xp/1000)+1;

        localStorage.setItem(

        "pythonQuestPlayer",

        JSON.stringify(player)

        );

        alert(

`🏆 Congratulations!

You earned

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

"📜 Library of Living Scrolls Loaded"

);
