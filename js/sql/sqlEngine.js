/*====================================================

            MAGIC OF CODE
            SQL ENGINE

====================================================*/

"use strict";

/*====================================================
                VARIABLES
====================================================*/

let SQL = null;

let db = null;

let sqlReady = false;


/*====================================================
            INITIALIZE SQL ENGINE
====================================================*/

async function initializeSQLEngine(){

    if(sqlReady) return;

    console.log("Loading SQL Engine...");

    SQL = await initSqlJs({

        locateFile:file=>

        `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.13.0/${file}`

    });

    db = new SQL.Database();

    createSampleDatabase();

initializeSQLEditor();

sqlReady = true;
    showSQLOutput(

`🐉 Dragon SQL Engine Ready

Type a SQL query and press
Execute Query.`

    );

}


/*====================================================
        CREATE SAMPLE DATABASE
====================================================*/

function createSampleDatabase(){

db.run(`

CREATE TABLE Students(

Roll INTEGER PRIMARY KEY,

Name TEXT,

Class TEXT,

Marks INTEGER

);

`);

db.run(`

INSERT INTO Students VALUES

(1,'Dino','XII-A',95),

(2,'Ruby','XII-A',88),

(3,'Max','XII-B',91),

(4,'Lily','XII-C',82),

(5,'Leo','XII-A',76);

`);

}


/*====================================================
            RUN QUERY
====================================================*/

function runSQLCode(){

if(!sqlReady){

showSQLOutput(

"SQL Engine not initialized."

);

return;

}

const query = getSQLQuery().trim();

if(query===""){

showSQLOutput(

"Please enter a SQL query."

);

return;

}

try{
visualizeQuery(query);
const result=

db.exec(query);

renderResult(result);

}

catch(error){

showSQLOutput(

"❌ "+error.message

);

}

}


/*====================================================
            SHOW OUTPUT
====================================================*/

function showSQLOutput(text){

document

.getElementById("output")

.innerHTML=

`<pre>${text}</pre>`;

}


/*====================================================
        RENDER RESULT TABLE
====================================================*/

function renderResult(result){

if(result.length===0){

showSQLOutput(

"✅ Query executed successfully."

);

return;

}

let html=

"<table class='sqlTable'>";

html+="<tr>";

result[0].columns.forEach(col=>{

html+=`<th>${col}</th>`;

});

html+="</tr>";

result[0].values.forEach(row=>{

html+="<tr>";

row.forEach(value=>{

html+=`<td>${value}</td>`;

});

html+="</tr>";

});

html+="</table>";

document

.getElementById("output")

.innerHTML=html;

}
