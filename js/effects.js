/*====================================================

            MAGIC OF CODE
            EFFECTS ENGINE

            effects.js

====================================================*/


/*====================================================
            INITIALIZE EFFECTS
====================================================*/

function initializeEffects(){

initializeParticles();

initializeAudio();

initializeHoverEffects();

initializeButtons();

}


/*====================================================
            PARTICLE ENGINE
====================================================*/

function initializeParticles(){

const container=document.getElementById("particleContainer");

if(!container)return;

setInterval(createParticle,800);

}


/*====================================================
            CREATE PARTICLE
====================================================*/

function createParticle(){

const container=document.getElementById("particleContainer");

if(!container)return;

const particle=document.createElement("div");

particle.className="magicParticle";

particle.innerHTML=randomParticle();

particle.style.left=Math.random()*100+"vw";

particle.style.fontSize=(18+Math.random()*20)+"px";

particle.style.animationDuration=(6+Math.random()*5)+"s";

container.appendChild(particle);

particle.addEventListener("animationend",()=>{

particle.remove();

});

}


/*====================================================
            RANDOM PARTICLE
====================================================*/

function randomParticle(){

const particles=[

"✨",

"⭐",

"💫",

"🌟",

"🍃",

"🌸",

"🍀",

"🫧"

];

return particles[

Math.floor(

Math.random()*particles.length

)

];

}


/*====================================================
            BUTTON SOUND
====================================================*/

function initializeAudio(){

document.querySelectorAll("button")

.forEach(button=>{

button.addEventListener("click",playButtonSound);

button.addEventListener("mouseenter",playHoverSound);

});

}


/*====================================================
            CLICK SOUND
====================================================*/

function playButtonSound(){

const audio=document.getElementById("buttonSound");

if(!audio)return;

audio.currentTime=0;

audio.play().catch(()=>{});

}


/*====================================================
            HOVER SOUND
====================================================*/

function playHoverSound(){

const audio=document.getElementById("hoverSound");

if(!audio)return;

audio.currentTime=0;

audio.play().catch(()=>{});

}


/*====================================================
            BUTTON MAGIC
====================================================*/

function initializeHoverEffects(){

document.querySelectorAll("button")

.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.classList.add("magicGlow");

});

button.addEventListener("mouseleave",()=>{

button.classList.remove("magicGlow");

});

});

}


/*====================================================
            REWARD POPUP
====================================================*/

function showReward(text){

const popup=document.getElementById("rewardPopup");

const reward=document.getElementById("rewardText");

if(!popup)return;

reward.innerHTML=text;

popup.classList.add("show");

setTimeout(()=>{

popup.classList.remove("show");

},2500);

}


/*====================================================
            CLOSE REWARD
====================================================*/

function closeReward(){

document

.getElementById("rewardPopup")

.classList.remove("show");

}


/*====================================================
            SCREEN FLASH
====================================================*/

function screenFlash(){

document.body.classList.add("screenFlash");

setTimeout(()=>{

document.body.classList.remove("screenFlash");

},500);

}


/*====================================================
            MAGIC CONFETTI
====================================================*/

function celebrate(){

for(let i=0;i<50;i++){

const star=document.createElement("div");

star.className="confetti";

star.innerHTML=randomParticle();

star.style.left=Math.random()*100+"vw";

star.style.animationDelay=(Math.random()*2)+"s";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},5000);

}

}
