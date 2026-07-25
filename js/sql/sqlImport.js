/*====================================================

            MAGIC OF CODE
            SQL IMPORT

====================================================*/

"use strict";

/*====================================================
            IMPORT SQL FILE
====================================================*/

function importSQLFile(event){

const file=event.target.files[0];

if(!file) return;

const reader=new FileReader();

reader.onload=function(e){

const query=e.target.result;

setSQLQuery(query);

showSQLOutput(

"📂 SQL file loaded successfully."

);

};

reader.readAsText(file);

}


/*====================================================
        OPEN FILE PICKER
====================================================*/

function openSQLFile(){

const input=document.createElement("input");

input.type="file";

input.accept=".sql,.txt";

input.onchange=importSQLFile;

input.click();

}


/*====================================================
        IMPORT SAMPLE QUERY
====================================================*/

function importSampleQuery(query){

setSQLQuery(query);

showSQLOutput(

"📜 Sample query imported."

);

}
