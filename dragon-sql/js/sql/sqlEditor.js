/*====================================================

            MAGIC OF CODE
            SQL EDITOR

====================================================*/

"use strict";

/*====================================================
            GET QUERY
====================================================*/

function getSQLQuery(){

const editor=

document.getElementById(

"codeEditor"

);

return editor ?

editor.value : "";

}


/*====================================================
            SET QUERY
====================================================*/

function setSQLQuery(query){

const editor=

document.getElementById(

"codeEditor"

);

if(editor){

editor.value=query;

}

}


/*====================================================
            CLEAR EDITOR
====================================================*/

function clearSQL(){

setSQLQuery("");

showSQLOutput(

"Editor cleared."

);

}


/*====================================================
            RESET SAMPLE QUERY
====================================================*/

function resetSQLQuery(){

setSQLQuery(

KINGDOM_DATA.coding.defaultCode

);

showSQLOutput(

"Default query restored."

);

}


/*====================================================
            INITIALIZE EDITOR
====================================================*/

function initializeSQLEditor(){

resetSQLQuery();

}
