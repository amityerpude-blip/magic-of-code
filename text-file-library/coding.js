/*=========================================================
                MAGIC OF CODE
              CODING LAB ENGINE
                PART 1
=========================================================*/

"use strict";

/*=========================================================
                GLOBAL VARIABLES
=========================================================*/

let editor = null;

let pyodide = null;

let currentChallenge = 0;

let pythonReady = false;


/*=========================================================
                CODING CHALLENGES
=========================================================*/

const challenges = [

{

title:"Challenge 1",

description:"Create a file named magic.txt and write Welcome to Python Quest.",

starterCode:
`with open("magic.txt","w") as file:
    file.write("Welcome to Python Quest")

print("File Created")`

},

{

title:"Challenge 2",

description:"Read the contents of magic.txt.",

starterCode:
`with open("magic.txt","r") as file:
    print(file.read())`

},

{

title:"Challenge 3",

description:"Append Master Pyro to the file.",

starterCode:
`with open("magic.txt","a") as file:
    file.write("\\nMaster Pyro")

print("Updated")`

},

{

title:"Challenge 4",

description:"Read the file line by line.",

starterCode:
`with open("magic.txt","r") as file:

    for line in file:

        print(line)`

},

{

title:"Challenge 5",

description:"Handle FileNotFoundError.",

starterCode:
`try:

    with open("demo.txt") as file:

        print(file.read())

except FileNotFoundError:

    print("File Not Found")`

}

];


/*=========================================================
                LOAD MONACO
=========================================================*/

require.config({

paths:{

vs:"https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.2/min/vs"

}

});


require(["vs/editor/editor.main"],function(){

editor = monaco.editor.create(

document.getElementById("editor"),

{

value:challenges[0].starterCode,

language:"python",

theme:"vs-dark",

fontSize:16,

automaticLayout:true,

minimap:{enabled:false}

});

});


/*=========================================================
                LOAD PYODIDE
=========================================================*/

async function loadPython(){

printOutput("Loading Python Engine...");

pyodide = await loadPyodide();

pythonReady = true;

printOutput("Python Ready!");

}

loadPython();


/*=========================================================
                OUTPUT
=========================================================*/

function printOutput(text){

document.getElementById("outputConsole").textContent = text;

}


/*=========================================================
                LOAD CHALLENGE
=========================================================*/

function loadChallenge(index){

currentChallenge = index;

document.getElementById("challengeTitle").innerHTML =
challenges[index].title;

document.getElementById("challengeText").innerHTML =
challenges[index].description;

editor.setValue(

challenges[index].starterCode

);

printOutput("");

}


/*=========================================================
                INITIALIZE
=========================================================*/

window.addEventListener("load",()=>{

setTimeout(()=>{

loadChallenge(0);

},500);

});
/*=========================================================
                RUN PYTHON
=========================================================*/

async function runPythonCode(){

if(!pythonReady){

printOutput("Python Engine is still loading...");

return;

}

const code = editor.getValue();

try{

printOutput("Running...");

pyodide.setStdout({

batched:(text)=>{

document.getElementById("outputConsole").textContent +=

text + "\n";

}

});

pyodide.setStderr({

batched:(text)=>{

document.getElementById("outputConsole").textContent +=

text + "\n";

}

});

document.getElementById("outputConsole").textContent="";

await pyodide.runPythonAsync(code);

}

catch(error){

printOutput(error);

}

}


/*=========================================================
                CLEAR EDITOR
=========================================================*/

function clearEditor(){

editor.setValue("");

printOutput("");

}


/*=========================================================
                NEXT CHALLENGE
=========================================================*/

function nextChallenge(){

if(currentChallenge < challenges.length-1){

currentChallenge++;

loadChallenge(currentChallenge);

}

else{

alert("🏆 Congratulations!\nAll Challenges Completed.");

showSection("rewardSection");

}

}


/*=========================================================
                BUTTON EVENTS
=========================================================*/

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("runPython")

.addEventListener(

"click",

runPythonCode

);

document.getElementById("clearPython")

.addEventListener(

"click",

clearEditor

);

document.getElementById("nextChallenge")

.addEventListener(

"click",

nextChallenge

);

},1000);

});
/*=========================================================
            PART 3 : VIRTUAL FILE SYSTEM
=========================================================*/

/*
    Pyodide uses a virtual Linux file system.

    We create the lesson files here so students
    can use open(), read(), write(), append()
    exactly like normal Python.
*/


async function prepareVirtualFileSystem(){

    if(!pythonReady) return;

    try{

        await pyodide.runPythonAsync(`

import os

# create default file only once

if not os.path.exists("magic.txt"):

    with open("magic.txt","w") as file:

        file.write("Welcome to Python Quest")

`);

    }

    catch(e){

        console.log(e);

    }

}



/*=========================================================
            RESET FILE SYSTEM
=========================================================*/

async function resetVirtualFile(){

    if(!pythonReady) return;

    await pyodide.runPythonAsync(`

with open("magic.txt","w") as file:

    file.write("Welcome to Python Quest")

`);

}



/*=========================================================
            SHOW FILE CONTENTS
=========================================================*/

async function showMagicFile(){

    if(!pythonReady) return;

    try{

        const text = await pyodide.runPythonAsync(`

with open("magic.txt","r") as file:

    file.read()

`);

        console.log(text);

    }

    catch(e){

        console.log(e);

    }

}



/*=========================================================
            CREATE EXTRA FILES
=========================================================*/

async function createSampleFiles(){

    if(!pythonReady) return;

    await pyodide.runPythonAsync(`

with open("student.txt","w") as file:

    file.write("Dino")

with open("spellbook.txt","w") as file:

    file.write("Fire Spell\\nIce Spell\\nWind Spell")

`);

}



/*=========================================================
            PREPARE LAB
=========================================================*/

window.addEventListener("load",()=>{

setTimeout(async()=>{

    await prepareVirtualFileSystem();

    await createSampleFiles();

},1500);

});
/*=========================================================
            PART 4 : RPG CHALLENGE ENGINE
=========================================================*/

let completedChallenges = [];

/*=========================================================
                CHECK CHALLENGE
=========================================================*/

function checkChallenge(){

    const code = editor.getValue();

    let success = false;

    switch(currentChallenge){

        case 0:
            success = code.includes("open") &&
                      code.includes("magic.txt") &&
                      code.includes("write");
            break;

        case 1:
            success = code.includes("read");
            break;

        case 2:
            success = code.includes('"a"') ||
                      code.includes("'a'");
            break;

        case 3:
            success = code.includes("for") &&
                      code.includes("readline");
            break;

        case 4:
            success = code.includes("try") &&
                      code.includes("except");
            break;
    }

    if(success){

        completeChallenge();

    }

}


/*=========================================================
            COMPLETE CHALLENGE
=========================================================*/

function completeChallenge(){

    if(completedChallenges.includes(currentChallenge))
        return;

    completedChallenges.push(currentChallenge);

    addXP(50);

    alert("🎉 Challenge Completed!");

    updateProgress();

    saveProgress();

}


/*=========================================================
                XP SYSTEM
=========================================================*/

function addXP(points){

    let xp = Number(localStorage.getItem("xp")) || 0;

    xp += points;

    localStorage.setItem("xp",xp);

}


/*=========================================================
            UPDATE PROGRESS BAR
=========================================================*/

function updateProgress(){

    const progress =

    (completedChallenges.length /
     challenges.length) * 100;

    const bar =
    document.getElementById("lessonProgressBar");

    if(bar){

        bar.style.width = progress + "%";

    }

}


/*=========================================================
                SAVE PROGRESS
=========================================================*/

function saveProgress(){

    localStorage.setItem(

        "textFileProgress",

        JSON.stringify(completedChallenges)

    );

}


/*=========================================================
                LOAD PROGRESS
=========================================================*/

function loadProgress(){

    const data =

    localStorage.getItem(

        "textFileProgress"

    );

    if(data){

        completedChallenges =

        JSON.parse(data);

        updateProgress();

    }

}


/*=========================================================
                RETURN DASHBOARD
=========================================================*/

function goDashboard(){

    window.location.href="../dashboard.html";

}


/*=========================================================
                RUN + CHECK
=========================================================*/

async function runAndCheck(){

    await runPythonCode();

    checkChallenge();

}


/*=========================================================
                BUTTON EVENTS
=========================================================*/

window.addEventListener("load",()=>{

    setTimeout(()=>{

        loadProgress();

        document
        .getElementById("runPython")
        .removeEventListener("click",runPythonCode);

        document
        .getElementById("runPython")
        .addEventListener("click",runAndCheck);

    },1500);

});


/*=========================================================
                DEBUG
=========================================================*/

console.log("🐍 Coding Lab Ready");
