/*====================================================
        MAGIC OF CODE
        COMPONENT ENGINE
        components.js
====================================================*/

function HeroComponent(data){
return `<header class="heroSection"><div class="heroOverlay"><h1>${data.title}</h1><h2>${data.subtitle}</h2><p>${data.description}</p><button id="beginAdventure">✨ Begin Adventure</button></div></header>`;
}

function NavigationComponent(data){
return `<section id="kingdomMap" class="kingdomNavigation"><h2>🗺 Journey Through ${data.shortTitle}</h2><div class="magicGrid">${data.sections.map(section=>`<div class="magicTile" data-section="${section.id}"><div class="tileIcon">${section.icon}</div><h3>${section.title}</h3><p>${section.subtitle}</p></div>`).join("")}</div></section>`;
}

function ComicComponent(data){
return `<section id="comicSection" class="lessonContent active"><h2>📖 ${data.comic.title}</h2><p>${data.comic.description}</p><div class="comicContainer"><img id="comicImage" src="${data.comic.folder}1.png" alt="Comic"></div><div class="comicControls"><button onclick="previousComic()">⬅ Previous</button><span id="pageNumber">Page 1</span><button onclick="nextComic()">Next ➡</button></div></section>`;
}

function AnimationComponent(data){
let videoHTML="";
if(data.animation.type==="youtube"){
videoHTML=`<iframe width="100%" height="500" src="${data.animation.source}" title="${data.animation.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}else{
videoHTML=`<video controls playsinline preload="metadata"><source src="${data.animation.source}" type="video/mp4"></video>`;
}
return `<section id="animationSection" class="lessonContent"><h2>🎬 ${data.animation.title}</h2><p>${data.animation.description}</p><div class="videoContainer">${videoHTML}</div></section>`;
}

function NotesComponent(data){
return `<section id="notesSection" class="lessonContent"><h2>📚 ${data.notes.title}</h2><p>${data.notes.description}</p><div class="notesContainer">${data.notes.cards.map(card=>`<div class="noteCard"><h3>${card.icon} ${card.title}</h3><p>${card.text}</p></div>`).join("")}</div></section>`;
}

function CodingComponent(data){
return `<section id="codingSection" class="lessonContent"><h2>🧪 ${data.coding.title}</h2><p>${data.coding.description}</p><div class="codingContainer"><textarea id="codeEditor" spellcheck="false">${data.coding.defaultCode}</textarea><div class="codingButtons">${data.coding.challenges.map(challenge=>`<button onclick="loadChallenge('${challenge.id}')">${challenge.icon} ${challenge.title}</button>`).join("")}</div><pre id="output">✨ Awaiting your spell...</pre></div></section>`;
}

function QuizComponent(data){
return `<section id="quizSection" class="lessonContent"><h2>👾 ${data.quiz.title}</h2><p>${data.quiz.description}</p><div class="quizContainer"><div class="quizCard"><div id="quizQuestion">Loading Question...</div><div id="quizOptions"></div><div class="quizFooter"><span id="quizProgress">Question 1</span><button id="nextQuizButton" onclick="nextQuestion()">Next ▶</button></div></div></div></section>`;
}

function ChallengeComponent(data){
return `<section id="challengeSection" class="lessonContent"><h2>🏆 ${data.challenge.title}</h2><p>${data.challenge.description}</p><div class="challengeCard"><h3>${data.challenge.icon} ${data.challenge.heading}</h3><p>${data.challenge.story}</p><ul>${data.challenge.tasks.map(task=>`<li>${task}</li>`).join("")}</ul><button id="completeKingdom">👑 Complete Kingdom</button></div></section>`;
}

function FooterComponent(data){
return `<footer class="kingdomFooter"><h3>🗺️ Continue Your Adventure</h3><p>You have reached the end of <b>${data.title}</b>.</p><div class="kingdomFooterActions"><button id="dashboardKingdom" class="kingdomNavButton dashboardNavButton">🏠 Dashboard</button><button id="previousKingdom" class="kingdomNavButton previousNavButton">⬅ Previous Kingdom</button><button id="nextKingdom" class="kingdomNavButton nextNavButton">Next Kingdom ➡</button></div></footer>`;
}

/* Shared AudioManager owns all common sounds now.
   No kingdom page creates legacy <audio> elements. */
function AudioComponent(){
return "";
}

function RewardPopupComponent(){
return `<div id="rewardPopup" class="rewardPopup"><div class="rewardBox"><h2>🎁 Reward Unlocked</h2><p id="rewardText">+10 XP</p><button onclick="closeReward()">Continue</button></div></div>`;
}

function LoadingComponent(){
return `<div id="loadingScreen" class="loadingScreen"><div class="loader">✨</div><h2>Loading Kingdom...</h2></div>`;
}

function ParticleComponent(){
return `<div id="particleContainer"></div>`;
}

function renderKingdom(data){
const root=document.getElementById("kingdomContainer");
if(!root) return;
root.innerHTML="";

try{root.innerHTML+=HeroComponent(data);}catch(e){console.error("Hero",e);}
try{root.innerHTML+=NavigationComponent(data);}catch(e){console.error("Navigation",e);}
try{root.innerHTML+=ComicComponent(data);}catch(e){console.error("Comic",e);}
try{root.innerHTML+=AnimationComponent(data);}catch(e){console.error("Animation",e);}
try{root.innerHTML+=NotesComponent(data);}catch(e){console.error("Notes",e);}

try{
    if(data.id === "network"){
        if(typeof mountSpiderWebNetworkComponent === "function"){
            mountSpiderWebNetworkComponent();
        }
    }else if(data.coding){
        root.innerHTML+=CodingComponent(data);
    }else if(typeof NetworkSimulatorComponent === "function"){
        root.innerHTML+=NetworkSimulatorComponent();
    }
}catch(e){console.error("Coding/Network",e);}

try{root.innerHTML+=QuizComponent(data);}catch(e){console.error("Quiz",e);}
try{if(data.challenge) root.innerHTML+=ChallengeComponent(data);}catch(e){console.error("Challenge",e);}
try{root.innerHTML+=FooterComponent(data);}catch(e){console.error("Footer",e);}
try{root.innerHTML+=AudioComponent(data);}catch(e){console.error("Audio",e);}
try{root.innerHTML+=RewardPopupComponent();}catch(e){console.error("Reward",e);}
}

console.log("components.js loaded");
