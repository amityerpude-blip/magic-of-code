/*====================================================

            MAGIC OF CODE
            SQL QUERY HISTORY

====================================================*/

"use strict";

/*====================================================
            HISTORY
====================================================*/

let sqlHistory=[];


/*====================================================
            LOAD HISTORY
====================================================*/

function loadSQLHistory(){

const saved=

localStorage.getItem(

"sqlHistory"

);

if(saved){

sqlHistory=

JSON.parse(saved);

}

renderSQLHistory();

}


/*====================================================
            SAVE HISTORY
====================================================*/

function saveSQLHistory(){

localStorage.setItem(

"sqlHistory",

JSON.stringify(sqlHistory)

);

}


/*====================================================
            ADD QUERY
====================================================*/

function addSQLHistory(query){

if(query.trim()==="") return;

sqlHistory.unshift(query);

if(sqlHistory.length>20){

sqlHistory.pop();

}

saveSQLHistory();

renderSQLHistory();

}


/*====================================================
            CLEAR HISTORY
====================================================*/

function clearSQLHistory(){

sqlHistory=[];

saveSQLHistory();

renderSQLHistory();

}


/*====================================================
            LOAD QUERY
====================================================*/

function loadHistoryQuery(index){

if(!sqlHistory[index]) return;

setSQLQuery(

sqlHistory[index]

);

}


/*====================================================
            RENDER HISTORY
====================================================*/

function renderSQLHistory(){

const panel=

document.getElementById(

"historyPanel"

);

if(!panel) return;

let html=`

<div class="historyHeader">

<h3>

📜 Query History

</h3>

<button
onclick="clearSQLHistory()">

Clear

</button>

</div>

`;

sqlHistory.forEach((query,index)=>{

html+=`

<div
class="historyItem"
onclick="loadHistoryQuery(${index})">

<pre>${query}</pre>

</div>

`;

});

panel.innerHTML=html;

}
