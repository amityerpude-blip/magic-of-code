/*====================================================

            MAGIC OF CODE
            SQL MONSTER QUIZ

====================================================*/

"use strict";

/*====================================================
                VARIABLES
====================================================*/

let sqlQuestionNumber=0;

let sqlScore=0;


/*====================================================
            SQL MONSTER QUESTIONS
====================================================*/

const sqlQuestions=[

{

monster:"🐉 Dragon I",

question:"Which SQL command displays all records?",

options:[

"SHOW",

"SELECT",

"DISPLAY",

"PRINT"

],

answer:1

},

{

monster:"🐉 Dragon II",

question:"Which symbol means 'all columns'?",

options:[

"%",

"*",

"#",

"&"

],

answer:1

},

{

monster:"🐉 Dragon III",

question:"Which clause filters rows?",

options:[

"ORDER BY",

"GROUP BY",

"WHERE",

"HAVING"

],

answer:2

},

{

monster:"🐉 Dragon IV",

question:"Arrange records in ascending order using:",

options:[

"ORDER BY",

"SORT",

"ASCEND",

"GROUP"

],

answer:0

},

{

monster:"🐉 Dragon V",

question:"Which function counts rows?",

options:[

"SUM",

"AVG",

"COUNT",

"TOTAL"

],

answer:2

}

];


/*====================================================
            INITIALIZE QUIZ
====================================================*/

function initializeSQLQuiz(){

sqlQuestionNumber=0;

sqlScore=0;

loadSQLQuestion();

}


/*====================================================
            LOAD QUESTION
====================================================*/

function loadSQLQuestion(){

const q=

sqlQuestions[sqlQuestionNumber];

document.getElementById(

"quizQuestion"

).innerHTML=

`

<h3>${q.monster}</h3>

<p>${q.question}</p>

`;

let html="";

q.options.forEach((option,index)=>{

html+=`

<button

class="quizOption"

onclick="checkSQLAnswer(${index})">

${option}

</button>

`;

});

document.getElementById(

"quizOptions"

).innerHTML=

html;

document.getElementById(

"quizProgress"

).textContent=

`Question ${sqlQuestionNumber+1}

of ${sqlQuestions.length}`;

}


/*====================================================
            CHECK ANSWER
====================================================*/

function checkSQLAnswer(choice){

const q=

sqlQuestions[sqlQuestionNumber];

if(choice===q.answer){

sqlScore++;

showSQLOutput(

"✅ Correct!"

);

}

else{

showSQLOutput(

"❌ Wrong Answer"

);

}

document

.getElementById(

"nextQuizButton"

).disabled=false;

}


/*====================================================
            NEXT QUESTION
====================================================*/

function nextSQLQuestion(){

document

.getElementById(

"nextQuizButton"

).disabled=true;

sqlQuestionNumber++;

if(sqlQuestionNumber>=

sqlQuestions.length){

finishSQLQuiz();

return;

}

loadSQLQuestion();

}


/*====================================================
            FINISH QUIZ
====================================================*/

function finishSQLQuiz(){

document.getElementById(

"quizQuestion"

).innerHTML=

`

<h2>

🏆 Dragon Defeated!

</h2>

<p>

Score

${sqlScore}

/

${sqlQuestions.length}

</p>

`;

document.getElementById(

"quizOptions"

).innerHTML="";

document.getElementById(

"nextQuizButton"

).style.display="none";

}
