/*====================================================

            MAGIC OF CODE
            SQL ENGINE

            sqlEngine.js

====================================================*/

"use strict";

/*====================================================
                VARIABLES
====================================================*/

let sqlDatabase = null;

let sqlReady = false;


/*====================================================
        INITIALIZE SQL ENGINE
====================================================*/

async function initializeSQLEngine(data){

    if(data.coding.engine!=="sql") return;

    showOutput("🐉 Loading SQL Engine...");

    const SQL=await initSqlJs({

        locateFile:file=>

        `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.13.0/${file}`

    });

    sqlDatabase=new SQL.Database();

    sqlDatabase.run(`

    CREATE TABLE Students(

        Roll INTEGER,

        Name TEXT,

        Marks INTEGER

    );

    `);

    sqlDatabase.run(`

    INSERT INTO Students VALUES
    (1,'Dino',85),
    (2,'Lily',92),
    (3,'Max',78),
    (4,'Ruby',88),
    (5,'Leo',95);

    `);

    sqlReady=true;

    showOutput(

`🐉 Dragon Database Ready!

Example:

SELECT * FROM Students;

`

    );

}

/*====================================================
            RUN SQL
====================================================*/

async function runSQLCode(){

    if(!sqlReady){

        showOutput(

        "SQL Engine not ready."

        );

        return;

    }

    const query=

    document

    .getElementById("codeEditor")

    .value;

    try{

        const result=

        sqlDatabase.exec(query);

        if(result.length===0){

            showOutput(

            "✅ Query Executed Successfully."

            );

            return;

        }

        let text="";

        result.forEach(table=>{

            text+=

            table.columns.join("\t");

            text+="\n";

            table.values.forEach(row=>{

                text+=

                row.join("\t");

                text+="\n";

            });

            text+="\n";

        });

        showOutput(text);

    }

    catch(error){

        showOutput(

        "❌ "+error.message

        );

    }

}
/*====================================================
            LOAD SQL CHALLENGE
====================================================*/

function loadSQLChallenge(id){

    const challenge=

    KINGDOM_DATA.coding.challenges.find(

    c=>c.id===id

    );

    if(!challenge) return;

    document.getElementById(

    "codeEditor"

    ).value=

    challenge.code;

}


/*====================================================
            RESET SQL EDITOR
====================================================*/

function clearSQL(){

    document.getElementById(

    "codeEditor"

    ).value="";

    showOutput(

"✨ SQL Editor Cleared"

    );

}
