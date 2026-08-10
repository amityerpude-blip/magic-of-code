/*====================================================

            MAGIC OF CODE
            SQL ENGINE

====================================================*/

let SQL = null;
let db = null;

async function initializeSQLEngine(){
    showSQLOutput("🐉 Loading Dragon SQL...");
    try{
        if(typeof initSqlJs !== "function") throw new Error("SQL.js library did not load.");
        SQL = await initSqlJs({
            locateFile:file=>"https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.13.0/"+file
        });
        db = new SQL.Database();
        createSampleDatabase();
        showSQLOutput("✅ Dragon SQL Ready!");
        window.sqlEngineReady = true;
    }catch(error){
        window.sqlEngineReady = false;
        showSQLOutput("❌ SQL Engine Error: "+error.message);
        console.error("SQL Engine initialization failed:",error);
    }
}

function createSampleDatabase(){
    db.run(`CREATE TABLE Students(Roll INTEGER, Name TEXT, Marks INTEGER);`);
    db.run(`INSERT INTO Students VALUES
        (1,'Dino',85),
        (2,'Lily',92),
        (3,'Max',78),
        (4,'Ruby',88),
        (5,'Alex',95);`);
}

function runSQLCode(){
    if(!db){
        showSQLOutput("⏳ Dragon SQL is still loading. Please try again in a moment.");
        return;
    }
    const editor=document.getElementById("codeEditor");
    if(!editor){
        showSQLOutput("❌ SQL editor not found.");
        return;
    }
    const code=editor.value.trim();
    if(!code){
        showSQLOutput("⚠️ Please enter an SQL query.");
        return;
    }
    try{
        const result=db.exec(code);
        if(result.length===0){
            showSQLOutput("✅ Query Executed Successfully.");
            return;
        }
        displayTable(result[0]);
    }catch(error){
        showSQLOutput("❌ "+error.message);
    }
}

function displayTable(result){
    let html="<table class='sqlTable'><tr>";
    result.columns.forEach(col=>{html+="<th>"+col+"</th>";});
    html+="</tr>";
    result.values.forEach(row=>{
        html+="<tr>";
        row.forEach(cell=>{html+="<td>"+(cell===null?"NULL":cell)+"</td>";});
        html+="</tr>";
    });
    html+="</table>";
    const output=document.getElementById("output");
    if(output) output.innerHTML=html;
}

function showSQLOutput(text){
    const output=document.getElementById("output");
    if(output) output.innerHTML=text;
}

function clearCode(){
    const editor=document.getElementById("codeEditor");
    if(editor) editor.value="";
    showSQLOutput("🧹 Query Editor Cleared.");
}

function loadChallenge(id){
    if(!window.KINGDOM_DATA?.coding?.challenges) return;
    const challenge=KINGDOM_DATA.coding.challenges.find(c=>c.id===id);
    if(!challenge) return;
    const editor=document.getElementById("codeEditor");
    if(editor) editor.value=challenge.code;
    showSQLOutput(challenge.description);
}

/* Keep the dedicated SQL engine API explicitly available to the generated UI. */
window.initializeSQLEngine=initializeSQLEngine;
window.runSQLCode=runSQLCode;
window.clearCode=clearCode;
window.loadChallenge=loadChallenge;
