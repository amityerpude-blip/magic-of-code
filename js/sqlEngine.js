/*====================================================

            MAGIC OF CODE
            SQL ENGINE

====================================================*/


/*====================================================
            GLOBAL VARIABLES
====================================================*/

let SQL = null;
let db = null;


/*====================================================
            INITIALIZE SQL ENGINE
====================================================*/

async function initializeSQLEngine(){

    showSQLOutput("🐉 Loading Dragon SQL...");

    SQL = await initSqlJs({
        locateFile:file=>
        "https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.13.0/"+file
    });

    db = new SQL.Database();

    createSampleDatabase();

    showSQLOutput("✅ Dragon SQL Ready!");

}


/*====================================================
            SAMPLE DATABASE
====================================================*/

function createSampleDatabase(){

db.run(`

CREATE TABLE Students(

Roll INTEGER,

Name TEXT,

Marks INTEGER

);

`);

db.run(`

INSERT INTO Students VALUES
(1,'Dino',85),
(2,'Lily',92),
(3,'Max',78),
(4,'Ruby',88),
(5,'Alex',95);

`);

}


/*====================================================
            RUN SQL
====================================================*/

function runSQLCode(){

    const code =
    document.getElementById("codeEditor").value;

    try{

        const result=db.exec(code);

        if(result.length===0){

            showSQLOutput("✅ Query Executed Successfully.");

            return;

        }

        displayTable(result[0]);

    }
    catch(error){

        showSQLOutput("❌ "+error.message);

    }

}


/*====================================================
            DISPLAY RESULT
====================================================*/

function displayTable(result){

    let html="<table class='sqlTable'>";

    html+="<tr>";

    result.columns.forEach(col=>{

        html+="<th>"+col+"</th>";

    });

    html+="</tr>";

    result.values.forEach(row=>{

        html+="<tr>";

        row.forEach(cell=>{

            html+="<td>"+cell+"</td>";

        });

        html+="</tr>";

    });

    html+="</table>";

    document.getElementById("output").innerHTML=html;

}


/*====================================================
            OUTPUT
====================================================*/

function showSQLOutput(text){

    document.getElementById("output").innerHTML=text;

}


/*====================================================
            CLEAR
====================================================*/

function clearCode(){

    document.getElementById("codeEditor").value="";

    showSQLOutput("🧹 Query Editor Cleared.");

}


/*====================================================
            LOAD CHALLENGE
====================================================*/

function loadChallenge(id){

    const challenge =
    KINGDOM_DATA.coding.challenges.find(c=>c.id===id);

    if(!challenge) return;

    document.getElementById("codeEditor").value=
    challenge.code;

    showSQLOutput(challenge.description);

}
