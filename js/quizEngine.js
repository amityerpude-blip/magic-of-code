/*====================================================

            MAGIC OF CODE
            QUIZ ENGINE

            quizEngine.js

====================================================*/


/*====================================================
                VARIABLES
====================================================*/

let quizData = null;

let currentQuestion = 0;

let score = 0;

let selectedAnswer = -1;


/*====================================================
            INITIALIZE QUIZ
====================================================*/

function initializeQuiz(data){

    if(!data.quiz) return;

    quizData = data.quiz;

    currentQuestion = 0;

    score = 0;

    selectedAnswer = -1;

    loadQuestion();

}


/*====================================================
                LOAD QUESTION
====================================================*/

function loadQuestion(){

    const q = quizData.questions[currentQuestion];

    document.getElementById("quizCounter").innerHTML =
    `Question ${currentQuestion+1} / ${quizData.questions.length}`;

    document.getElementById("quizQuestion").innerHTML =
    q.question;

    const area =
    document.getElementById("quizOptions");

    area.innerHTML = "";

    q.options.forEach((option,index)=>{

        const button =
        document.createElement("button");

        button.className = "quizOption";

        button.innerHTML = option;

        button.onclick = ()=>selectOption(index);

        area.appendChild(button);

    });

    document.getElementById("quizResult").innerHTML = "";

    document.getElementById("nextQuestion").style.display =
    "none";

}


/*====================================================
            SELECT OPTION
====================================================*/

function selectOption(index){

    selectedAnswer = index;

    document
    .querySelectorAll(".quizOption")
    .forEach(btn=>{

        btn.classList.remove("selected");

    });

    document
    .querySelectorAll(".quizOption")[index]
    .classList.add("selected");

}


/*====================================================
            SUBMIT ANSWER
====================================================*/

function submitAnswer(){

    if(selectedAnswer==-1){

        alert("Choose an answer first!");

        return;

    }

    const q =
    quizData.questions[currentQuestion];

    const buttons =
    document.querySelectorAll(".quizOption");

    buttons.forEach(btn=>btn.disabled=true);

    if(selectedAnswer===q.answer){

        score++;

        buttons[selectedAnswer]
        .classList.add("correct");

        document.getElementById("quizResult")
        .innerHTML =
        "✅ Correct! +10 XP";

    }
    else{

        buttons[selectedAnswer]
        .classList.add("wrong");

        buttons[q.answer]
        .classList.add("correct");

        document.getElementById("quizResult")
        .innerHTML =
        "❌ Wrong Answer";

    }

    document.getElementById("nextQuestion")
    .style.display="inline-block";

}


/*====================================================
            NEXT QUESTION
====================================================*/

function nextQuestion(){

    currentQuestion++;

    selectedAnswer = -1;

    if(currentQuestion>=quizData.questions.length){

        finishQuiz();

        return;

    }

    loadQuestion();

}


/*====================================================
            FINISH QUIZ
====================================================*/

function finishQuiz(){

    const percent =
    Math.round(
    score*100/
    quizData.questions.length
    );

    document.getElementById("quizContainer").innerHTML=

    `

    <div class="quizComplete">

        <h2>
        🏆 Quiz Completed
        </h2>

        <h3>

        Score : ${score} /
        ${quizData.questions.length}

        </h3>

        <h3>

        Percentage :
        ${percent}%

        </h3>

        <p>

        ${percent>=quizData.passingScore ?

        "🎉 Master Pandas is proud of you!"

        :

        "📚 Practice again to improve your magic."

        }

        </p>

        <button
        onclick="restartQuiz()">

        🔄 Retry Quiz

        </button>

    </div>

    `;

}


/*====================================================
            RESTART
====================================================*/

function restartQuiz(){

    currentQuestion = 0;

    score = 0;

    selectedAnswer = -1;

    document.getElementById("quizSection").innerHTML =

    QuizComponent(currentKingdom);

    initializeQuiz(currentKingdom);

}
