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
const dangerous = [

"DROP",
"DELETE",
"UPDATE",
"ALTER"

];

const upper = query.toUpperCase();

if(

dangerous.some(cmd => upper.startsWith(cmd))

){

const ok = confirm(

"⚠ This query modifies the database.\n\nContinue?"

);

if(!ok) return;

}
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


