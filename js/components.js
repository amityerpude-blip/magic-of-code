/*====================================================

        MAGIC OF CODE
        COMPONENT ENGINE

        components.js

====================================================*/


/*====================================================
                HERO SECTION
====================================================*/

function HeroComponent(data){

return `

<header class="heroSection">

<div class="heroOverlay">

<h1>

${data.title}

</h1>

<h2>

${data.subtitle}

</h2>

<p>

${data.description}

</p>

<button
id="beginAdventure">

✨ Begin Adventure

</button>

</div>

</header>

`;

}



/*====================================================
            KINGDOM NAVIGATION
====================================================*/

function NavigationComponent(data){

return `

<section

id="kingdomMap"

class="kingdomNavigation">

<h2>

🗺 Journey Through ${data.shortTitle}

</h2>

<div class="magicGrid">

${data.sections.map(section=>`

<div

class="magicTile"

data-section="${section.id}">

<div class="tileIcon">

${section.icon}

</div>

<h3>

${section.title}

</h3>

<p>

${section.subtitle}

</p>

</div>

`).join("")}

</div>

</section>

`;

}



/*====================================================
            COMIC SECTION
====================================================*/

function ComicComponent(data){

return `

<section

id="comicSection"

class="lessonContent active">

<h2>

📖 ${data.comic.title}

</h2>

<p>

${data.comic.description}

</p>

<div class="comicContainer">

<img

id="comicImage"

src="${data.comic.folder}1.png"

alt="Comic">

</div>

<div class="comicControls">

<button onclick="previousComic()">

⬅ Previous

</button>

<span id="pageNumber">

Page 1

</span>

<button onclick="nextComic()">

Next ➡

</button>

</div>

</section>

`;

}



/*====================================================

            ANIMATION SECTION

====================================================*/

function AnimationComponent(data){

let videoHTML="";

if(data.animation.type==="youtube"){

videoHTML=`

<iframe

width="100%"

height="500"

src="${data.animation.source}"

title="${data.animation.title}"

frameborder="0"

allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

allowfullscreen>

</iframe>

`;

}
else{

videoHTML=`

<video

controls

playsinline

preload="metadata">

<source

src="${data.animation.source}"

type="video/mp4">

</video>

`;

}

return `

<section

id="animationSection"

class="lessonContent">

<h2>

🎬 ${data.animation.title}

</h2>

<p>

${data.animation.description}

</p>

<div class="videoContainer">

${videoHTML}

</div>

</section>

`;

}
/*====================================================

            NOTES SECTION

====================================================*/

function NotesComponent(data){

return `

<section

id="notesSection"

class="lessonContent">

<h2>

📚 ${data.notes.title}

</h2>

<p>

${data.notes.description}

</p>

<div class="notesContainer">

${data.notes.cards.map(card=>`

<div class="noteCard">

<h3>

${card.icon} ${card.title}

</h3>

<p>

${card.text}

</p>

</div>

`).join("")}

</div>

</section>

`;

}



/*====================================================

            SPELL FORGE

====================================================*/

function CodingComponent(data){

return `

<section

id="codingSection"

class="lessonContent">

<h2>

🧪 ${data.coding.title}

</h2>

<p>

${data.coding.description}

</p>

<div class="codingContainer">

<textarea

id="codeEditor"

spellcheck="false">

${data.coding.defaultCode}

</textarea>

<div class="codingButtons">

<button onclick="runPythonCode()">

▶ Run Magic

</button>

<button onclick="clearCode()">

🧹 Clear

</button>

${data.coding.challenges.map(challenge=>`

<button

onclick="loadChallenge('${challenge.id}')">

${challenge.icon}

${challenge.title}

</button>

`).join("")}

</div>

<pre id="output">

✨ Awaiting your spell...

</pre>

</div>

</section>

`;

}



/*====================================================

                MONSTER HUNT QUIZ

====================================================*/

function QuizComponent(data){

return `

<section
id="quizSection"
class="lessonContent">

<h2>

👾 ${data.quiz.title}

</h2>

<p>

${data.quiz.description}

</p>

<div class="quizContainer">

<div class="quizCard">

<div id="quizQuestion">

Loading Question...

</div>

<div id="quizOptions">

</div>

<div class="quizFooter">

<span id="quizProgress">

Question 1

</span>

<button
id="nextQuizButton"
onclick="nextQuestion()">

Next ▶

</button>

</div>

</div>

</div>

</section>

`;

}
/*====================================================

            FINAL CHALLENGE

====================================================*/

function ChallengeComponent(data){

return `

<section

id="challengeSection"

class="lessonContent">

<h2>

🏆 ${data.challenge.title}

</h2>

<p>

${data.challenge.description}

</p>

<div class="challengeCard">

<h3>

${data.challenge.icon}

${data.challenge.heading}

</h3>

<p>

${data.challenge.story}

</p>

<ul>

${data.challenge.tasks.map(task=>`

<li>

${task}

</li>

`).join("")}

</ul>

<button
id="completeKingdom">

👑 Complete Kingdom

</button>

</div>

</section>

`;

}



/*====================================================

                FOOTER

====================================================*/

function FooterComponent(data){

return `

<footer class="kingdomFooter">

<h3>

🎉 Congratulations!

</h3>

<p>

You have completed

<b>${data.title}</b>

Continue your magical journey.

</p>

<button

id="nextKingdom">

${data.footer.button}

</button>

</footer>

`;

}



/*====================================================

                AUDIO

====================================================*/

function AudioComponent(data){

return `

<audio
id="magicSound">

<source
src="${data.audio.magic}"
type="audio/mpeg">

</audio>

<audio
id="buttonSound">

<source
src="${data.audio.button}"
type="audio/mpeg">

</audio>

<audio
id="pageFlip">

<source
src="${data.audio.page}"
type="audio/mpeg">

</audio>

`;

}



/*====================================================

            REWARD POPUP

====================================================*/

function RewardPopupComponent(){

return `

<div

id="rewardPopup"

class="rewardPopup">

<div class="rewardBox">

<h2>

🎁 Reward Unlocked

</h2>

<p id="rewardText">

+10 XP

</p>

<button
onclick="closeReward()">

Continue

</button>

</div>

</div>

`;

}



/*====================================================

            LOADING SCREEN

====================================================*/

function LoadingComponent(){

return `

<div

id="loadingScreen"

class="loadingScreen">

<div class="loader">

✨

</div>

<h2>

Loading Kingdom...

</h2>

</div>

`;

}



/*====================================================

        PARTICLE CONTAINER

====================================================*/

function ParticleComponent(){

return `

<div

id="particleContainer">

</div>

`;

}
/*====================================================

            RENDER KINGDOM

====================================================*/

/*function renderKingdom(data){

const root = document.getElementById("kingdomContainer");

root.innerHTML =

HeroComponent(data)+

NavigationComponent(data)+

ComicComponent(data)+

AnimationComponent(data)+

NotesComponent(data)+

CodingComponent(data)+

QuizComponent(data)+

ChallengeComponent(data)+

FooterComponent(data)+

AudioComponent(data)+

RewardPopupComponent();

}*/
function renderKingdom(data){

const root=document.getElementById("kingdomContainer");

root.innerHTML="";

try{
root.innerHTML+=HeroComponent(data);
console.log("Hero ✓");
}catch(e){console.error("Hero",e);}

try{
root.innerHTML+=NavigationComponent(data);
console.log("Navigation ✓");
}catch(e){console.error("Navigation",e);}

try{
root.innerHTML+=ComicComponent(data);
console.log("Comic ✓");
}catch(e){console.error("Comic",e);}

try{
root.innerHTML+=AnimationComponent(data);
console.log("Animation ✓");
}catch(e){console.error("Animation",e);}

try{
root.innerHTML+=NotesComponent(data);
console.log("Notes ✓");
}catch(e){console.error("Notes",e);}

try{
root.innerHTML+=CodingComponent(data);
console.log("Coding ✓");
}catch(e){console.error("Coding",e);}

try{
root.innerHTML+=QuizComponent(data);
console.log("Quiz ✓");
}catch(e){console.error("Quiz",e);}

try{
root.innerHTML+=ChallengeComponent(data);
console.log("Challenge ✓");
}catch(e){console.error("Challenge",e);}

try{
root.innerHTML+=FooterComponent(data);
console.log("Footer ✓");
}catch(e){console.error("Footer",e);}

try{
root.innerHTML+=AudioComponent(data);
console.log("Audio ✓");
}catch(e){console.error("Audio",e);}

try{
root.innerHTML+=RewardPopupComponent();
console.log("Reward ✓");
}catch(e){console.error("Reward",e);}
}
console.log("components.js loaded");
