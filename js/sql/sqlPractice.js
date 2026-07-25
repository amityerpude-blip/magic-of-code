/*====================================================

            MAGIC OF CODE
            SQL PRACTICE ENGINE

====================================================*/

"use strict";

/*====================================================
                SQL CHALLENGES
====================================================*/

const sqlChallenges=[

{
id:"select1",

title:"SELECT *",

icon:"📜",

description:

"Display all student records.",

query:

`SELECT * FROM Students;`

},

{
id:"select2",

title:"Specific Columns",

icon:"📋",

description:

"Display Name and Marks only.",

query:

`SELECT Name,Marks
FROM Students;`

},

{
id:"where1",

title:"WHERE",

icon:"🎯",

description:

"Students scoring above 80.",

query:

`SELECT *
FROM Students
WHERE Marks>80;`

},

{
id:"order1",

title:"ORDER BY",

icon:"📈",

description:

"Arrange students by Marks.",

query:

`SELECT *
FROM Students
ORDER BY Marks DESC;`

},

{
id:"count1",

title:"COUNT",

icon:"🔢",

description:

"Count total students.",

query:

`SELECT COUNT(*)
FROM Students;`

},

{
id:"avg1",

title:"AVG",

icon:"📊",

description:

"Average Marks.",

query:

`SELECT AVG(Marks)
FROM Students;`

}

];


/*====================================================
        CREATE PRACTICE BUTTONS
====================================================*/

function loadSQLPractice(){

const area=

document.getElementById(

"sqlPractice"

);

if(!area) return;

area.innerHTML="";

sqlChallenges.forEach(ch=>{

area.innerHTML+=`

<button

class="challengeButton"

onclick="loadSQLChallenge('${ch.id}')">

${ch.icon}

${ch.title}

</button>

`;

});

}


/*====================================================
            LOAD CHALLENGE
====================================================*/

function loadSQLChallenge(id){

const challenge=

sqlChallenges.find(

c=>c.id===id

);

if(!challenge) return;

document

.getElementById("codeEditor")

.value=

challenge.query;

showSQLOutput(

`📖 ${challenge.description}`

);

}
