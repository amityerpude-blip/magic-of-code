/*====================================================
        PYTHON QUEST
        BATTLE ENGINE

        MONSTERS.JS

        TEXT FILE KINGDOM
====================================================*/


const monsters=[

/*====================================================
                MONSTER 1
====================================================*/

{

id:1,

name:"Tiny Bug",

emoji:"🐛",

hp:100,

rewardXP:20,

rewardCoins:10,

message:

"A tiny bug has appeared inside the magical scroll!",

question:

"Which function is used to open a text file?",

spells:[

"read()",

"open()",

"write()",

"close()"

],

answer:1,

success:

"✨ Excellent spell! The Bug was weakened.",

failure:

"💀 Wrong spell! The Bug laughed at your mistake."

},


/*====================================================
                MONSTER 2
====================================================*/

{

id:2,

name:"Ink Goblin",

emoji:"👹",

hp:120,

rewardXP:25,

rewardCoins:12,

message:

"The Ink Goblin is destroying magical books!",

question:

"Which mode creates a file for writing?",

spells:[

"r",

"w",

"a",

"x"

],

answer:1,

success:

"✨ Perfect! The Ink Goblin lost its ink power.",

failure:

"💀 Wrong spell! The goblin splashed magical ink."

},


/*====================================================
                MONSTER 3
====================================================*/

{

id:3,

name:"Scroll Eater",

emoji:"👾",

hp:150,

rewardXP:30,

rewardCoins:15,

message:

"The Scroll Eater has swallowed important files!",

question:

"Which method reads the entire file?",

spells:[

"file.read()",

"file.write()",

"file.close()",

"file.append()"

],

answer:0,

success:

"✨ The scrolls have been recovered!",

failure:

"💀 The Scroll Eater became stronger."

},


/*====================================================
                MONSTER 4
====================================================*/

{

id:4,

name:"Dark Wizard",

emoji:"🧙",

hp:180,

rewardXP:40,

rewardCoins:20,

message:

"The Dark Wizard has cursed the Library!",

question:

"Which function closes a file?",

spells:[

"end()",

"stop()",

"close()",

"finish()"

],

answer:2,

success:

"✨ The magical curse has weakened.",

failure:

"💀 The wizard cast a dark spell."

},


/*====================================================
                FINAL BOSS
====================================================*/

{

id:5,

name:"Bug King",

emoji:"👑",

hp:250,

rewardXP:100,

rewardCoins:50,

boss:true,

message:

"The Bug King guards the Treasure Vault!",

question:

"Which is the safest way to open a file?",

spells:[

"with open()",

"open() only",

"file()",

"read()"

],

answer:0,

success:

"🏆 Legendary Spell! The Bug King has fallen!",

failure:

"☠ The Bug King unleashed Bug Storm!"

}

];
