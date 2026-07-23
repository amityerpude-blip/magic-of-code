/*====================================================
            PYTHON QUEST
            BATTLE ENGINE
            battle.js
            PART 1
====================================================*/


/*====================================================
                GAME VARIABLES
====================================================*/

let currentMonster = 0;

let monsterHP = 100;

let playerLives = 3;

let playerXP = 0;

let playerCoins = 0;


/*====================================================
                PAGE LOAD
====================================================*/

document.addEventListener("DOMContentLoaded",()=>{

loadMonster();

updateHUD();

});


/*====================================================
                LOAD MONSTER
====================================================*/

function loadMonster(){

const monster = monsters[currentMonster];

monsterHP = monster.hp;

document.getElementById("monsterEmoji").innerHTML = monster.emoji;

document.getElementById("monsterName").innerHTML = monster.name;

document.getElementById("monsterMessage").innerHTML = monster.message;

document.getElementById("questionText").innerHTML = monster.question;

document.getElementById("monsterHealth").style.width="100%";

loadSpells();

showMessage("🪄 Cast the correct spell!");

}


/*====================================================
                LOAD SPELLS
====================================================*/

function loadSpells(){

const monster = monsters[currentMonster];

const area = document.getElementById("spellArea");

area.innerHTML="";

monster.spells.forEach((spell,index)=>{

const button=document.createElement("button");

button.className="spellButton";

button.innerHTML=

`<span>🪄</span>${spell}`;

button.onclick=()=>castSpell(index);

area.appendChild(button);

});

}


/*====================================================
                MESSAGE
====================================================*/

function showMessage(text){

document.getElementById("battleMessage").innerHTML=text;

}
/*====================================================
            SPELL CASTING
====================================================*/

function castSpell(choice){

const monster = monsters[currentMonster];

// Disable all buttons
document.querySelectorAll(".spellButton").forEach(btn=>{
btn.disabled=true;
});

if(choice===monster.answer){

correctSpell();

}else{

wrongSpell();

}

}


/*====================================================
            CORRECT SPELL
====================================================*/

function correctSpell(){

const monster = monsters[currentMonster];

showMessage("✨ "+monster.success);

// Highlight correct spell
document.querySelectorAll(".spellButton")[monster.answer]
.classList.add("correctSpell");

// Damage Monster
monsterHP-=50;

if(monsterHP<0){

monsterHP=0;

}

updateMonsterHealth();

// Wait before next action
setTimeout(()=>{

if(monsterHP<=0){

defeatMonster();

}else{

showMessage("🪄 Great spell! Cast another spell.");

enableButtons();

}

},1200);

}


/*====================================================
            WRONG SPELL
====================================================*/

function wrongSpell(){

const monster = monsters[currentMonster];

showMessage("💀 "+monster.failure);

// Lose one life
playerLives--;

updateLives();

// Shake screen
document.body.classList.add("shake");

setTimeout(()=>{

document.body.classList.remove("shake");

},500);

// Highlight selected button
document.querySelectorAll(".spellButton").forEach(btn=>{

if(btn.disabled){

btn.classList.add("wrongSpell");

}

});

// Check Game Over
if(playerLives<=0){

setTimeout(gameOver,1200);

return;

}

setTimeout(()=>{

showMessage("🩹 One life lost! Try another spell.");

enableButtons();

},1200);

}


/*====================================================
            ENABLE SPELL BUTTONS
====================================================*/

function enableButtons(){

document.querySelectorAll(".spellButton").forEach(btn=>{

btn.disabled=false;

btn.classList.remove("wrongSpell");

btn.classList.remove("correctSpell");

});

}


/*====================================================
            UPDATE MONSTER HP
====================================================*/

function updateMonsterHealth(){

const monster=monsters[currentMonster];

let percent=(monsterHP/monster.hp)*100;

document.getElementById("monsterHealth").style.width=

percent+"%";

}


/*====================================================
            UPDATE LIVES
====================================================*/

function updateLives(){

const hearts=document.querySelectorAll(".life");

hearts.forEach((heart,index)=>{

if(index>=playerLives){

heart.classList.add("lost");

}

});

}
/*====================================================
            MONSTER DEFEATED
====================================================*/

function defeatMonster(){

const monster = monsters[currentMonster];

// Monster animation
const monsterEmoji = document.getElementById("monsterEmoji");

monsterEmoji.classList.add("monsterDead");

showMessage("🎉 "+monster.name+" has been defeated!");

rewardPlayer(monster);

// Wait before next monster
setTimeout(()=>{

monsterEmoji.classList.remove("monsterDead");

currentMonster++;

if(currentMonster>=monsters.length){

victory();

}
else{

loadMonster();

}

},2500);

}


/*====================================================
            REWARD PLAYER
====================================================*/

function rewardPlayer(monster){

playerXP += monster.rewardXP;

playerCoins += monster.rewardCoins;

updateHUD();

showReward(

`✨ +${monster.rewardXP} XP<br>
🪙 +${monster.rewardCoins} Coins`

);

}


/*====================================================
            UPDATE HUD
====================================================*/

function updateHUD(){

document.getElementById("xpValue").innerHTML=playerXP;

document.getElementById("coinValue").innerHTML=playerCoins;

document.getElementById("lifeValue").innerHTML=playerLives;

document.getElementById("monsterCount").innerHTML=

(currentMonster+1)+

"/"+

monsters.length;

}


/*====================================================
            REWARD POPUP
====================================================*/

function showReward(message){

const popup=document.getElementById("rewardPopup");

popup.innerHTML=

`
<h2>🎁 Reward</h2>

<p>${message}</p>

`;

popup.classList.add("show");

setTimeout(()=>{

popup.classList.remove("show");

},2000);

}


/*====================================================
            GAME OVER
====================================================*/

function gameOver(){

document.querySelector(".battleContainer").style.display="none";

document.querySelector(".gameOver").style.display="block";

}


/*====================================================
            RESTART
====================================================*/

function restartBattle(){

currentMonster=0;

playerLives=3;

playerXP=0;

playerCoins=0;

document.querySelector(".gameOver").style.display="none";

document.querySelector(".battleContainer").style.display="block";

document.querySelectorAll(".life").forEach(heart=>{

heart.classList.remove("lost");

});

updateHUD();

loadMonster();

}
/*====================================================
            FINAL VICTORY
====================================================*/

function victory(){

saveProgress();

document.querySelector(".battleContainer").style.display="none";

document.querySelector(".victoryScreen").style.display="block";

document.getElementById("finalXP").innerHTML=playerXP;

document.getElementById("finalCoins").innerHTML=playerCoins;

showTreasure();

}


/*====================================================
            TREASURE CHEST
====================================================*/

function showTreasure(){

const chest=document.getElementById("treasurePanel");

if(chest){

chest.style.display="block";

}

}


/*====================================================
            CLAIM TREASURE
====================================================*/

function claimTreasure(){

rewardPlayer({

rewardXP:100,

rewardCoins:50

});

showReward(

"🏆 Legendary Treasure Collected!"

);

document.getElementById("claimReward").disabled=true;

document.getElementById("claimReward").innerHTML=

"✅ Treasure Claimed";

}


/*====================================================
            SAVE PROGRESS
====================================================*/

function saveProgress(){

const progress={

completed:true,

xp:playerXP,

coins:playerCoins,

lives:playerLives,

completedDate:new Date().toLocaleString()

};

localStorage.setItem(

"textFileBattle",

JSON.stringify(progress)

);

}


/*====================================================
            LOAD PROGRESS
====================================================*/

function loadProgress(){

const data=

localStorage.getItem("textFileBattle");

if(!data)return;

const progress=JSON.parse(data);

console.log("Previous Progress",progress);

}


/*====================================================
        RETURN TO DASHBOARD
====================================================*/

function returnToWorld(){

window.location.href=

"../dashboard.html";

}


/*====================================================
            NEXT KINGDOM
====================================================*/

function nextKingdom(){

window.location.href=

"../csv-kingdom/index.html";

}


/*====================================================
            BUTTON EVENTS
====================================================*/

document.addEventListener(

"DOMContentLoaded",

()=>{

loadProgress();

const restart=

document.getElementById("restartBattle");

if(restart){

restart.onclick=restartBattle;

}

const claim=

document.getElementById("claimReward");

if(claim){

claim.onclick=claimTreasure;

}

const back=

document.getElementById("returnButton");

if(back){

back.onclick=returnToWorld;

}

const next=

document.getElementById("nextKingdom");

if(next){

next.onclick=nextKingdom;

}

});


/*====================================================
        MAGIC CONFETTI
====================================================*/

function celebrate(){

for(let i=0;i<60;i++){

const star=document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top="-30px";

star.style.fontSize="30px";

star.style.zIndex="9999";

star.style.transition="3s linear";

document.body.appendChild(star);

setTimeout(()=>{

star.style.top="110vh";

star.style.transform=

"rotate(720deg)";

},100);

setTimeout(()=>{

star.remove();

},3500);

}

}

document.addEventListener(

"DOMContentLoaded",

()=>{

const victoryScreen=

document.querySelector(".victoryScreen");

if(victoryScreen){

const observer=new MutationObserver(()=>{

if(victoryScreen.style.display==="block"){

celebrate();

}

});

observer.observe(victoryScreen,{

attributes:true,

attributeFilter:["style"]

});

}

});
