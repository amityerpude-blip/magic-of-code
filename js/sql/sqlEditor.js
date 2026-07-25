/*====================================================

            MAGIC OF CODE
            SQL EDITOR

====================================================*/

"use strict";

let sqlEditor;


/*====================================================
        INITIALIZE SQL EDITOR
====================================================*/

function initializeSQLEditor(){

const textarea=document.getElementById("codeEditor");

if(!textarea) return;

sqlEditor=CodeMirror.fromTextArea(

textarea,

{

mode:"text/x-sql",

theme:"material",

lineNumbers:true,

lineWrapping:true,

indentUnit:4,

smartIndent:true,

matchBrackets:true,

autoCloseBrackets:true,

styleActiveLine:true,

viewportMargin:Infinity

}

);

sqlEditor.setSize(

"100%",

420

);

}


/*====================================================
            GET QUERY
====================================================*/

function getSQLQuery(){

return sqlEditor.getValue();

}


/*====================================================
            SET QUERY
====================================================*/

function setSQLQuery(query){

sqlEditor.setValue(query);

}


/*====================================================
            CLEAR
====================================================*/

function clearSQL(){

sqlEditor.setValue("");

showSQLOutput(

"✨ SQL Editor Cleared"

);

}
