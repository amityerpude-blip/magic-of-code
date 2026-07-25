/*====================================================

            MAGIC OF CODE
            SQL STATISTICS

====================================================*/

"use strict";

/*====================================================
            DEFAULT STATS
====================================================*/

const sqlStats={

queries:0,

correctQueries:0,

wrongQueries:0,

tablesViewed:0,

databaseReset:0,

quizScore:0

};


/*====================================================
            LOAD STATS
====================================================*/

function loadSQLStats(){

const saved=

localStorage.getItem(

"sqlStats"

);

if(saved){

Object.assign(

sqlStats,

JSON.parse(saved)

);

}

renderSQLStats();

}


/*====================================================
            SAVE
====================================================*/

function saveSQLStats(){

localStorage.setItem(

"sqlStats",

JSON.stringify(sqlStats)

);

}


/*====================================================
        UPDATE QUERY COUNT
====================================================*/

function recordQuery(success){

sqlStats.queries++;

if(success)

sqlStats.correctQueries++;

else

sqlStats.wrongQueries++;

saveSQLStats();

renderSQLStats();

}


/*====================================================
        TABLE VIEW COUNT
====================================================*/

function recordTableView(){

sqlStats.tablesViewed++;

saveSQLStats();

renderSQLStats();

}


/*====================================================
        DATABASE RESET
====================================================*/

function recordDatabaseReset(){

sqlStats.databaseReset++;

saveSQLStats();

renderSQLStats();

}


/*====================================================
            QUIZ SCORE
====================================================*/

function updateQuizScore(score){

sqlStats.quizScore=score;

saveSQLStats();

renderSQLStats();

}


/*====================================================
            RENDER
====================================================*/

function renderSQLStats(){

const panel=

document.getElementById(

"statisticsPanel"

);

if(!panel) return;

panel.innerHTML=`

<div class="statsCard">

<h3>📊 SQL Statistics</h3>

<p>Queries : ${sqlStats.queries}</p>

<p>Correct : ${sqlStats.correctQueries}</p>

<p>Wrong : ${sqlStats.wrongQueries}</p>

<p>Tables Viewed : ${sqlStats.tablesViewed}</p>

<p>Database Reset : ${sqlStats.databaseReset}</p>

<p>Quiz Score : ${sqlStats.quizScore}</p>

</div>

`;

}
