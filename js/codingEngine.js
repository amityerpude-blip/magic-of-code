/*====================================================

            MAGIC OF CODE
            CODING ENGINE

            codingEngine.js

====================================================*/


/*====================================================
            GLOBAL VARIABLES
====================================================*/

let pyodide = null;

let currentKingdom = null;


/*====================================================
            INITIALIZE
====================================================*/

/*====================================================
            INITIALIZE
====================================================*/

/*async function initializeCoding(data){

currentKingdom = data;

showOutput("🔮 Loading Python Magic...");

pyodide = await loadPyodide();

/*--------------------------------------------
        Load Required Packages
--------------------------------------------*/

/*if(data.packages && data.packages.length){

for(const pkg of data.packages){

showOutput("📦 Loading " + pkg + "...");

await pyodide.loadPackage(pkg);

}

}

showOutput("✅ Python Magic Ready!");

}*/
async function initializeCoding(data){

    console.log("initializeCoding started");

    currentKingdom = data;

    pyodide = await loadPyodide();

    console.log("Pyodide loaded");

    console.log("Packages:", data.packages);

    if(data.packages){

        for(const pkg of data.packages){

            console.log("Loading package:", pkg);

            await pyodide.loadPackage(pkg);

            console.log(pkg + " loaded");

        }

    }

    console.log("Initialization complete");

    showOutput("✅ Python Magic Ready!");

}
/*====================================================
            RUN CODE
====================================================*/

async function runPythonCode(){

if(!pyodide){

showOutput("❌ Python engine not loaded.");

return;

}

const code = document
.getElementById("codeEditor")
.value;

try{

let output = "";

pyodide.setStdout({

batched:(text)=>{

output += text + "\n";

}

});

await pyodide.runPythonAsync(code);

showOutput(output || "✨ Spell Executed Successfully!");

}
catch(error){

showOutput(error);

}

}


/*====================================================
            OUTPUT
====================================================*/

function showOutput(text){

document
.getElementById("output")
.textContent = text;

}


/*====================================================
            CLEAR EDITOR
====================================================*/

function clearCode(){

document
.getElementById("codeEditor")
.value = "";

showOutput("🧹 Spell Book Cleared.");

}


/*====================================================
            LOAD CHALLENGE
====================================================*/

function loadChallenge(id){

const challenge =

currentKingdom.coding.challenges.find(

c=>c.id===id

);

if(!challenge)return;

document

.getElementById("codeEditor")

.value = challenge.code;

showOutput(

"📜 " + challenge.description

);

}


/*====================================================
            RESET CHALLENGE
====================================================*/

function resetChallenge(){

if(

currentKingdom.coding.defaultCode

){

document

.getElementById("codeEditor")

.value =

currentKingdom.coding.defaultCode;

}

showOutput(

"✨ Challenge Reset."

);

}


/*====================================================
            COPY CODE
====================================================*/

function copyCode(){

navigator.clipboard.writeText(

document

.getElementById("codeEditor")

.value

);

showOutput(

"📋 Code copied."

);

}
