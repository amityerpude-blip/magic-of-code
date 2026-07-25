/*====================================================

            MAGIC OF CODE
            SQL SHORTCUTS

====================================================*/

"use strict";

/*====================================================
        KEYBOARD SHORTCUTS
====================================================*/

function initializeSQLShortcuts(){

document.addEventListener(

"keydown",

function(event){

/*-----------------------------------
        CTRL + ENTER
-----------------------------------*/

if(

event.ctrlKey &&

event.key==="Enter"

){

event.preventDefault();

runSQLCode();

}

/*-----------------------------------
        CTRL + L
-----------------------------------*/

if(

event.ctrlKey &&

event.key.toLowerCase()==="l"

){

event.preventDefault();

clearSQL();

}

/*-----------------------------------
        CTRL + R
-----------------------------------*/

if(

event.ctrlKey &&

event.key.toLowerCase()==="r"

){

event.preventDefault();

resetDatabase();

}

/*-----------------------------------
        CTRL + T
-----------------------------------*/

if(

event.ctrlKey &&

event.key.toLowerCase()==="t"

){

event.preventDefault();

showTables();

}

}

);

}


/*====================================================
        SHORTCUT HELP
====================================================*/

function showShortcutHelp(){

showSQLOutput(

`⌨ SQL Keyboard Shortcuts

Ctrl + Enter  → Execute Query

Ctrl + L      → Clear Editor

Ctrl + R      → Reset Database

Ctrl + T      → Show Tables`

);

}
