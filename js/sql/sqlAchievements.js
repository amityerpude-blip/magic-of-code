/*====================================================

            MAGIC OF CODE
            SQL ACHIEVEMENTS

====================================================*/

"use strict";

/*====================================================
            DEFAULT ACHIEVEMENTS
====================================================*/

const sqlAchievements=[

{

id:"firstQuery",

title:"🐣 First Query",

description:"Execute your first SQL query.",

earned:false

},

{

id:"fiveQueries",

title:"⚔ SQL Apprentice",

description:"Execute 5 SQL queries.",

earned:false

},

{

id:"tableExplorer",

title:"📋 Table Explorer",

description:"View the database schema.",

earned:false

},

{

id:"monsterHunter",

title:"🐉 Dragon Hunter",

description:"Complete the SQL Monster Quiz.",

earned:false

},

{

id:"dbReset",

title:"🔄 Database Restorer",

description:"Reset the Dragon Database.",

earned:false

}

];


/*====================================================
            LOAD ACHIEVEMENTS
====================================================*/

function loadSQLAchievements(){

const saved=

localStorage.getItem(

"sqlAchievements"

);

if(saved){

const data=

JSON.parse(saved);

data.forEach(item=>{

const achievement=

sqlAchievements.find(

a=>a.id===item.id

);

if(achievement){

achievement.earned=item.earned;

}

});

}

renderSQLAchievements();

}


/*====================================================
            SAVE
====================================================*/

function saveSQLAchievements(){

localStorage.setItem(

"sqlAchievements",

JSON.stringify(sqlAchievements)

);

}


/*====================================================
            UNLOCK
====================================================*/

function unlockAchievement(id){

const achievement=

sqlAchievements.find(

a=>a.id===id

);

if(

!achievement ||

achievement.earned

) return;

achievement.earned=true;

saveSQLAchievements();

renderSQLAchievements();

showSQLOutput(

`🏆 Achievement Unlocked!

${achievement.title}`

);

}


/*====================================================
            RENDER
====================================================*/

function renderSQLAchievements(){

const container=

document.getElementById(

"achievementPanel"

);

if(!container) return;

let html="";

sqlAchievements.forEach(item=>{

html+=`

<div class="achievementCard ${item.earned?"earned":""}">

<h3>

${item.title}

</h3>

<p>

${item.description}

</p>

</div>

`;

});

container.innerHTML=html;

}
