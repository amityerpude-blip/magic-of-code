/*====================================================

            MAGIC OF CODE
            QUIZ ENGINE

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

    document.getElementById("quizProgress").innerHTML =
    `Question ${currentQuestion+1} / ${quizData.questions.length}`;

    document.getElementById("quizQuestion").innerHTML =
    `<h3>${q.question}</h3>`;

    const options =
    document.getElementById("quizOptions");

    options.innerHTML = "";

    q.options.forEach((option,index)=>{

        options.innerHTML += `

        <button
        class="quizOption"
        onclick="selectAnswer(${index},this)">

        ${option}

        </button>

        `;

    });

    document.getElementById("nextQuizButton").innerHTML =
    "✨ Cast Spell";

    document.getElementById("nextQuizButton").onclick =
    submitAnswer;

}


/*====================================================
                SELECT ANSWER
====================================================*/

function selectAnswer(index,button){

    selectedAnswer = index;

    document.querySelectorAll(".quizOption").forEach(btn=>{

        btn.classList.remove("selected");

    });

    button.classList.add("selected");

}


/*====================================================
                SUBMIT ANSWER
====================================================*/

function submitAnswer(){

    if(selectedAnswer==-1){

        alert("Select an answer first.");

        return;

    }

    const q = quizData.questions[currentQuestion];

    const buttons =
    document.querySelectorAll(".quizOption");

    buttons.forEach(btn=>btn.disabled=true);

    if(selectedAnswer===q.answer){

        score++;

        buttons[selectedAnswer]
        .classList.add("correct");

    }
    else{

        buttons[selectedAnswer]
        .classList.add("wrong");

        buttons[q.answer]
        .classList.add("correct");

    }

    document.getElementById("nextQuizButton").innerHTML =
    "Next ▶";

    document.getElementById("nextQuizButton").onclick =
    nextQuestion;

}


/*====================================================
                NEXT QUESTION
====================================================*/

function nextQuestion(){

    currentQuestion++;

    selectedAnswer=-1;

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

    const percent = Math.round(

        score*100/quizData.questions.length

    );

    document.getElementById("quizContainer").innerHTML = `

    <div class="quizComplete">

        <h2>🏆 Quiz Completed</h2>

        <h3>

        Score : ${score} / ${quizData.questions.length}

        </h3>

        <h3>

        ${percent}%

        </h3>

        <p>

        ${percent>=70 ?

        "🎉 Master Pandas is proud of you!"

        :

        "📚 Practice again and become stronger."

        }

        </p>

        <button onclick="restartQuiz()">

        🔄 Retry Quiz

        </button>

    </div>

    `;

}


/*====================================================
                RESTART
====================================================*/

function restartQuiz(){

    currentQuestion=0;

    score=0;

    selectedAnswer=-1;

    document.getElementById("quizSection").outerHTML =
    QuizComponent(currentKingdom);

    initializeQuiz(currentKingdom);

}
