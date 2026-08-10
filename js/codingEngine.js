/*====================================================
 MAGIC OF CODE
 CODING ENGINE
====================================================*/

let pyodide = null;
let currentKingdom = null;

async function initializeCoding(data){
    currentKingdom = data;
    showOutput("🔮 Loading Python Magic...");
    pyodide = await loadPyodide();
    if(Array.isArray(data.packages) && data.packages.length){
        for(const pkg of data.packages){
            try{await pyodide.loadPackage(pkg);}catch(error){console.warn("Package loading failed", pkg, error);}
        }
    }
    showOutput("✅ Python Magic Ready!");
}

async function runPythonCode(){
    if(!pyodide){showOutput("❌ Python engine not loaded.");return;}
    const code = document.getElementById("codeEditor").value;
    try{
        let output = "";
        pyodide.setStdout({batched:(text)=>{output += text + "\n";}});
        pyodide.setStderr({batched:(text)=>{output += text + "\n";}});
        pyodide.globals.set("input", function(promptText=""){return window.prompt(promptText) || "";});
        await pyodide.runPythonAsync(code);
        showOutput(output || "✨ Spell Executed Successfully!");
        if(typeof recordCodingChallenge==="function")recordCodingChallenge();
    }catch(error){showOutput(error);}
}

function showOutput(text){const output=document.getElementById("output");if(output)output.textContent = text;}
function clearCode(){document.getElementById("codeEditor").value="";showOutput("🧹 Spell Book Cleared.");}
function loadChallenge(id){const challenge=currentKingdom.coding.challenges.find(c=>c.id===id);if(!challenge)return;document.getElementById("codeEditor").value=challenge.code;showOutput("📜 "+challenge.description);}
function resetChallenge(){if(currentKingdom.coding.defaultCode)document.getElementById("codeEditor").value=currentKingdom.coding.defaultCode;showOutput("✨ Challenge Reset.");}
function copyCode(){navigator.clipboard.writeText(document.getElementById("codeEditor").value);showOutput("📋 Code copied.");}
