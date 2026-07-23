/*=========================================================
                PYTHON QUEST
                QUIZ ENGINE
=========================================================*/

"use strict";

/*=========================================================
                    QUESTIONS
=========================================================*/

const quizData = [

{

question:"Which function is used to open a file in Python?",

options:[

"read()",

"open()",

"write()",

"close()"

],

answer:1

},

{

question:"Which mode is used to write into a file?",

options:[

"r",

"w",

"a",

"x"

],

answer:1

},

{

question:"Which mode appends data to an existing file?",

options:[

"r",

"w",

"a",

"rb"

],

answer:2

},

{

question:"Which function reads the complete file?",

options:[

"read()",

"readline()",

"write()",

"input()"

],

answer:0

},

{

question:"Which function closes a file?",

options:[

"stop()",

"close()",

"end()",

"exit()"

],

answer:1

},

{

question:"Which method reads one line at a time?",

options:[

"readline()",

"read()",

"write()",

"seek()"

],

answer:0

},

{

question:"Which mode creates a new file if it does not exist?",

options:[

"w",

"a",

"x",

"All of these"

],

answer:3

},

{

question:"Which keyword is recommended while opening files?",

options:[

"try",

"while",

"with",

"for"

],

answer:2

},

{

question:"Which statement automatically closes a file?",

options:[

"close()",

"with open()",

"read()",

"return"

],

answer:1

},

{

question:"Which exception occurs when a file is missing?",

options:[

"IndexError",

"NameError",

"FileNotFoundError",

"TypeError"

],

answer:2

}

];


/*=========================================================
                LOAD QUIZ
=========================================================*/

function loadQuiz(){

    const container = document.getElementById("quizContainer");

    if(!container) return;

    let html="";

    quizData.forEach((q,index)=>{

        html += `

        <div class="questionCard">

            <h3>

            ${index+1}. ${q.question}

            </h3>

        `;

        q.options.forEach((option,i)=>{

            html += `

            <label>

            <input

            type="radio"

            name="q${index}"

            value="${i}">

            ${option}

            </label>

            `;

        });

        html += "</div>";

    });

    container.innerHTML = html;

}


/*=========================================================
                SUBMIT QUIZ
=========================================================*/

function submitQuiz(){

    let score = 0;

    quizData.forEach((q,index)=>{

        const selected = document.querySelector(

        `input[name="q${index}"]:checked`

        );

        if(selected){

            if(Number(selected.value)===q.answer){

                score++;

            }

        }

    });

    const percent =

    Math.round(

    (score/quizData.length)*100

    );

    document.getElementById("quizScore").innerHTML =

`

<h2>

🏆 Score : ${score} / ${quizData.length}

</h2>

<h3>

${percent} %

</h3>

`;

    if(percent>=70){

        alert(

"🎉 Excellent!\nYou passed this challenge."

        );

    }

    else{

        alert(

"📚 Keep Practicing!\nTry again to improve your score."

        );

    }

}


/*=========================================================
                INITIALIZE
=========================================================*/

document.addEventListener("DOMContentLoaded",function(){

    loadQuiz();

    const button =

    document.getElementById("submitQuiz");

    if(button){

        button.addEventListener("click",submitQuiz);

    }

});


/*=========================================================
                    DEBUG
=========================================================*/

console.log("📝 Quiz Ready");
