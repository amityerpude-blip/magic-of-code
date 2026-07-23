/*=========================================================
                    PYTHON QUEST
              UNIVERSAL CODING ENGINE
                  PART 1
=========================================================*/

"use strict";

/*=========================================================
                    PYODIDE
=========================================================*/

let pyodide = null;

let pyodideReady = false;


/*=========================================================
                HTML ELEMENTS
=========================================================*/

const editor = document.getElementById("pythonCode");

const output = document.getElementById("outputConsole");

const runButton = document.getElementById("runPython");

const clearButton = document.getElementById("clearPython");

const nextButton = document.getElementById("nextChallenge");

const challengeTitle = document.getElementById("challengeTitle");

const challengeText = document.getElementById("challengeText");


/*=========================================================
                CHALLENGES
=========================================================*/

const challenges = [

{

title:"Challenge 1 : Create a Text File",

text:"Create a file named magic.txt and write 'Welcome to Python Quest'.",

starterCode:
`with open("magic.txt","w") as f:
    f.write("Welcome to Python Quest")

print("File Created Successfully")`

},

{

title:"Challenge 2 : Read File",

text:"Read the contents of magic.txt.",

starterCode:
`with open("magic.txt","r") as f:

    print(f.read())`

},

{

title:"Challenge 3 : Append Data",

text:"Append 'Master Pyro' to the file.",

starterCode:
`with open("magic.txt","a") as f:

    f.write("\\nMaster Pyro")

print("Done")`

},

{

title:"Challenge 4 : Count Lines",

text:"Count the total number of lines inside magic.txt.",

starterCode:
`with open("magic.txt","r") as f:

    lines=f.readlines()

print(len(lines))`

},

{

title:"Challenge 5 : Exception Handling",

text:"Safely open a file using try-except.",

starterCode:
`try:

    with open("unknown.txt","r") as f:

        print(f.read())

except FileNotFoundError:

    print("File Not Found")`

}

];

let currentChallenge = 0;


/*=========================================================
                LOAD CHALLENGE
=========================================================*/

function loadChallenge(){

challengeTitle.textContent =
challenges[currentChallenge].title;

challengeText.textContent =
challenges[currentChallenge].text;

editor.value =
challenges[currentChallenge].starterCode;

output.textContent = "";

}


/*=========================================================
                CLEAR EDITOR
=========================================================*/

function clearEditor(){

editor.value="";

output.textContent="";

}


/*=========================================================
                NEXT CHALLENGE
=========================================================*/

function nextChallenge(){

currentChallenge++;

if(currentChallenge>=challenges.length){

currentChallenge=0;

alert("🏆 Congratulations!\nYou completed all coding challenges.");

}

loadChallenge();

}


/*=========================================================
            INITIALIZE PYODIDE
=========================================================*/

async function initializePyodide(){

output.textContent="Loading Python Engine...";

pyodide = await loadPyodide({

indexURL:
"https://cdn.jsdelivr.net/pyodide/v0.28.3/full/"

});

pyodideReady=true;

output.textContent=
"🐍 Python Engine Ready!\n\nClick RUN to execute your code.";

}


/*=========================================================
                BUTTON EVENTS
=========================================================*/

runButton.addEventListener(

"click",

runPython

);

clearButton.addEventListener(

"click",

clearEditor

);

nextButton.addEventListener(

"click",

nextChallenge

);


/*=========================================================
                PAGE LOAD
=========================================================*/

window.addEventListener(

"load",

()=>{

loadChallenge();

initializePyodide();

}

);
/*=========================================================
                PART 2
            PYTHON EXECUTION ENGINE
=========================================================*/

async function runPython(){

    if(!pyodideReady){

        output.textContent =
        "⏳ Python Engine is still loading...";

        return;

    }

    output.textContent = "";

    let code = editor.value;

    try{

        /* Capture print() output */

        pyodide.setStdout({

            batched: function(text){

                output.textContent += text + "\n";

            }

        });

        pyodide.setStderr({

            batched: function(text){

                output.textContent +=
                "❌ " + text + "\n";

            }

        });

        await pyodide.runPythonAsync(code);

    }

    catch(error){

        output.textContent +=

        "\n❌ Python Error\n\n" +

        error;

    }

}
/*=========================================================
                PART 3
          PYTHON FILE SYSTEM SUPPORT
=========================================================*/

/*-----------------------------------------------
        Prepare Virtual File System
-----------------------------------------------*/

async function prepareFileSystem(){

    if(!pyodideReady) return;

    try{

        await pyodide.runPythonAsync(`

import os

# Create default file if it doesn't exist

if not os.path.exists("magic.txt"):

    with open("magic.txt","w") as file:

        file.write("Welcome to Python Quest")

`);

    }

    catch(error){

        console.log(error);

    }

}


/*-----------------------------------------------
        Reset Lesson File
-----------------------------------------------*/

async function resetMagicFile(){

    if(!pyodideReady) return;

    await pyodide.runPythonAsync(`

with open("magic.txt","w") as file:

    file.write("Welcome to Python Quest")

`);

}


/*-----------------------------------------------
        Show File Content (Debug)
-----------------------------------------------*/

async function showMagicFile(){

    if(!pyodideReady) return;

    try{

        const data = await pyodide.runPythonAsync(`

with open("magic.txt","r") as file:

    file.read()

`);

        console.log("magic.txt");

        console.log(data);

    }

    catch(e){

        console.log(e);

    }

}


/*-----------------------------------------------
        Create Demo Files
-----------------------------------------------*/

async function createDemoFiles(){

    if(!pyodideReady) return;

    await pyodide.runPythonAsync(`

with open("student.txt","w") as f:

    f.write("Dino")

with open("spellbook.txt","w") as f:

    f.write("Fire Spell\\nIce Spell\\nWind Spell")

`);

}


/*-----------------------------------------------
        Override Initialization
-----------------------------------------------*/

window.addEventListener("load",async()=>{

    while(!pyodideReady){

        await new Promise(r=>setTimeout(r,100));

    }

    await prepareFileSystem();

    await createDemoFiles();

});
