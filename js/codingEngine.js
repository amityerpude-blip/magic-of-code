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

async function initializeCoding(data){

currentKingdom = data;

showOutput("🔮 Loading Python Magic...");

pyodide = await loadPyodide();

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
