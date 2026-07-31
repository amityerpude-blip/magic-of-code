/*====================================================

            MAGIC OF CODE
            LOOPING FOREST

            looping-forest.js

            PART 1

====================================================*/

const KINGDOM_DATA={

/*====================================================
                BASIC INFORMATION
====================================================*/

id:"loops",

title:"🌲 Looping Forest",

shortTitle:"Looping Forest",

subtitle:"The Forest of Endless Repetition",

description:

"Welcome to the enchanted Looping Forest where Master Stag teaches Dino the magic of repetition. Learn how loops can repeat tasks efficiently and make programs powerful.",

master:"🦌 Master Stag",

/*====================================================
                HERO
====================================================*/

hero:{

background:"assets/images/hero.jpg",

logo:"assets/images/master-stag.png"

},

/*====================================================
                REQUIRED PACKAGES
====================================================*/

packages:[],

/*====================================================
                KINGDOM SECTIONS
====================================================*/

sections:[

{

id:"comicSection",

icon:"📖",

title:"Story Scroll",

subtitle:"The Endless Forest"

},

{

id:"animationSection",

icon:"🎬",

title:"Magic Vision",

subtitle:"Master the Power of Loops"

},

{

id:"notesSection",

icon:"📚",

title:"Wisdom Grove",

subtitle:"Understand Looping"

},

{

id:"codingSection",

icon:"🧪",

title:"Spell Forge",

subtitle:"Practice Loop Magic"

},

{

id:"quizSection",

icon:"👾",

title:"Monster Hunt",

subtitle:"Defeat Forest Monsters"

},

{

id:"challengeSection",

icon:"🏆",

title:"Guardian Battle",

subtitle:"Escape the Endless Maze"

}

],

/*====================================================
                COMIC
====================================================*/

comic:{

title:"📖 The Endless Forest",

description:

"After leaving the Valley of Decisions, Dino enters a mysterious forest where every path repeats forever. Master Stag teaches him the secret of Python loops.",

folder:"assets/comic/",

totalPages:16

},

/*====================================================
                ANIMATION
====================================================*/

animation:{

title:"🎬 Python Loops Explained",

description:

"Watch Master Stag demonstrate how loops repeat tasks automatically using for and while statements.",

type:"youtube",

source:"https://www.youtube.com/embed/rfscVS0vtbw"

},

/*====================================================
                NOTES
====================================================*/

notes:{

title:"📚 Wisdom Grove",

description:

"Master Stag explains how repetition makes programming faster, cleaner and more efficient.",

cards:[

{
icon:"🔁",
title:"What is a Loop?",
text:"A loop is a control structure that repeats a block of code multiple times until a condition becomes False or a sequence is exhausted. It helps avoid writing repetitive code."
},

{
icon:"✨",
title:"Advantages of Loops",
text:"Loops reduce code repetition, make programs shorter, improve readability, simplify maintenance and automate repetitive tasks efficiently."
},

{
icon:"🔄",
title:"The while Loop",
text:"A while loop executes repeatedly as long as the given condition remains True.\n\nExample:\nwhile count<=5:\n    print(count)"
},

{
icon:"➡️",
title:"The for Loop",
text:"A for loop is used to iterate over a sequence such as a range, string, list, tuple or dictionary."
},

{
icon:"📏",
title:"The range() Function",
text:"The range() function generates a sequence of numbers. It is commonly used with for loops.\n\nExample:\nrange(5)"
},

{
icon:"🔢",
title:"range(start, stop)",
text:"The sequence begins from the start value and ends before the stop value.\n\nExample:\nrange(1,6)\nOutput: 1 2 3 4 5"
},

{
icon:"⏩",
title:"range(start, stop, step)",
text:"The third argument specifies the increment or decrement.\n\nExample:\nrange(2,11,2)\nOutput: 2 4 6 8 10"
},

{
icon:"🌳",
title:"Nested Loops",
text:"A loop inside another loop is called a nested loop. Nested loops are commonly used for pattern printing, matrices and tables."
},

{
icon:"🛑",
title:"break Statement",
text:"The break statement immediately terminates the loop whenever a specified condition becomes True."
},

{
icon:"⏭️",
title:"continue Statement",
text:"The continue statement skips the remaining statements of the current iteration and moves to the next iteration."
},

{
icon:"🕊️",
title:"pass Statement",
text:"The pass statement is a placeholder. It performs no action and is used where Python syntax requires a statement."
},

{
icon:"♾️",
title:"Infinite Loop",
text:"A loop that never ends is called an infinite loop. It usually happens when the loop condition never becomes False."
},

{
icon:"🎯",
title:"Loop with else",
text:"Python allows an optional else block with loops. The else block executes when the loop finishes normally without encountering a break statement."
},

{
icon:"⚠️",
title:"Common Errors",
text:"Common mistakes include forgetting to update loop variables, incorrect indentation, wrong range values and creating accidental infinite loops."
},

{
icon:"🌍",
title:"Real-life Applications",
text:"Loops are used in games, ATM software, attendance systems, report generation, billing software, simulations, data processing and automation."

}
]

},

/*====================================================
                SPELL FORGE
====================================================*/

coding:{

title:"🧪 Spell Forge",

description:

"Practice writing Python programs using loops.",

defaultCode:

`for i in range(1,6):

    print("Welcome to Looping Forest",i)
`,

challenges:[

{
id:"print1to10",

icon:"🔢",

title:"Print Numbers",

description:

"Print numbers from 1 to 10 using a for loop.",

code:

`for i in range(1,11):
    print(i)`

},

{
id:"evennumbers",

icon:"⚡",

title:"Even Numbers",

description:

"Print all even numbers between 1 and 50.",

code:

`for i in range(2,51,2):
    print(i)`

},

{
id:"table",

icon:"📋",

title:"Multiplication Table",

description:

"Generate the multiplication table of a given number.",

code:

`num=int(input("Enter a number : "))

for i in range(1,11):
    print(num,"x",i,"=",num*i)`

},

{
id:"sumn",

icon:"➕",

title:"Sum of First N Numbers",

description:

"Find the sum of the first N natural numbers.",

code:

`n=int(input("Enter N : "))

total=0

for i in range(1,n+1):
    total+=i

print("Sum =",total)`

},

{
id:"factorial",

icon:"🏆",

title:"Factorial",

description:

"Calculate the factorial of a given number.",

code:

`n=int(input("Enter a number : "))

fact=1

for i in range(1,n+1):
    fact*=i

print("Factorial =",fact)`

},

{
id:"fibonacci",

icon:"🌱",

title:"Fibonacci Series",

description:

"Display the Fibonacci series up to N terms.",

code:

`n=int(input("Number of terms : "))

a,b=0,1

for i in range(n):
    print(a)
    a,b=b,a+b`

},

{
id:"prime",

icon:"💎",

title:"Prime Number",

description:

"Check whether a given number is Prime or Not.",

code:

`n=int(input("Enter a number : "))

count=0

for i in range(1,n+1):
    if n%i==0:
        count+=1

if count==2:
    print("Prime Number")
else:
    print("Not Prime")`

},

{
id:"reverse",

icon:"🔄",

title:"Reverse Digits",

description:

"Reverse the digits of a number using a while loop.",

code:

`num=int(input("Enter a number : "))

rev=0

while num>0:
    digit=num%10
    rev=rev*10+digit
    num//=10

print("Reverse =",rev)`

},

{
id:"starpattern",

icon:"⭐",

title:"Star Pattern",

description:

"Print a right-angled triangle using stars.",

code:

`for i in range(1,6):
    print("*"*i)`

},

{
id:"guess",

icon:"🎯",

title:"Guessing Game",

description:

"Keep asking the user to guess the secret number until the correct answer is entered.",

code:

`secret=7

guess=0

while guess!=secret:

    guess=int(input("Guess the number : "))

print("Congratulations! You guessed correctly.")`

}

]

},

/*====================================================
                MONSTER HUNT
====================================================*/

quiz:{

title:"👾 Monster Hunt",

description:

"Answer questions correctly to defeat the creatures of the Looping Forest.",

questions:[

{
question:"Which loop is used when the number of iterations is known?",
options:["while","for","if","elif"],
answer:1
},

{
question:"Which loop is generally used when the number of iterations is unknown?",
options:["for","while","if","range"],
answer:1
},

{
question:"Which function generates a sequence of numbers?",
options:["list()","range()","loop()","series()"],
answer:1
},

{
question:"What is the output of range(5)?",
options:[
"1 2 3 4 5",
"0 1 2 3 4",
"0 1 2 3 4 5",
"1 2 3 4"
],
answer:1
},

{
question:"How many times will this loop execute?\nfor i in range(5):",
options:["4","5","6","Infinite"],
answer:1
},

{
question:"What is the first value generated by range(3,8)?",
options:["0","1","3","8"],
answer:2
},

{
question:"What is the last value generated by range(3,8)?",
options:["6","7","8","9"],
answer:1
},

{
question:"Which statement immediately terminates a loop?",
options:["continue","pass","break","exit"],
answer:2
},

{
question:"Which statement skips the current iteration?",
options:["break","continue","pass","stop"],
answer:1
},

{
question:"Which statement performs no action?",
options:["continue","break","pass","return"],
answer:2
},

{
question:"Which loop can become an infinite loop?",
options:["for","while","Both","Neither"],
answer:2
},

{
question:"Which keyword is used to create nested loops?",
options:["nested","inner","No special keyword","repeat"],
answer:2
},

{
question:"What does range(2,11,2) produce?",
options:[
"2 3 4 5",
"2 4 6 8 10",
"1 3 5 7 9",
"2 4 6 8 10 12"
],
answer:1
},

{
question:"Which loop is best for traversing a list?",
options:["if","for","while","switch"],
answer:1
},

{
question:"Which operator is commonly used to update a counter?",
options:["=","+","+=","%"],
answer:2
},

{
question:"Which of the following is a valid while loop?",
options:[
"while(i<5)",
"while i<5:",
"while i<5 then",
"while:i<5"
],
answer:1
},

{
question:"What is printed?\nfor i in range(1,4):",
options:[
"1 2 3",
"1 2 3 4",
"0 1 2 3",
"0 1 2"
],
answer:0
},

{
question:"Which loop is ideal for repeating until a condition becomes False?",
options:["for","while","if","elif"],
answer:1
},

{
question:"Which keyword can be used with loops in Python?",
options:["else","catch","finally","default"],
answer:0
},

{
question:"When does the else block of a loop execute?",
options:[
"When break occurs",
"When loop finishes normally",
"Before the loop",
"Every iteration"
],
answer:1
},

{
question:"Which loop is commonly used for pattern printing?",
options:["if","while","Nested for loops","switch"],
answer:2
},

{
question:"Which statement is TRUE about break?",
options:[
"It skips one iteration.",
"It ends the loop immediately.",
"It creates a loop.",
"It repeats the loop."
],
answer:1
},

{
question:"Which statement is TRUE about continue?",
options:[
"It ends the loop.",
"It skips the remaining statements of the current iteration.",
"It exits the program.",
"It prints the next value."
],
answer:1
},

{
question:"Which loop is commonly used to generate multiplication tables?",
options:["if","for","elif","try"],
answer:1
},

{
question:"Which real-life application commonly uses loops?",
options:[
"ATM transactions",
"Game animation",
"Attendance processing",
"All of these"
],
answer:3
}

]

},

/*====================================================
                GUARDIAN BATTLE
====================================================*/

challenge:{

title:"🏆 Guardian Battle",

description:

"Master Stag challenges Dino to escape the enchanted maze using the power of loops.",

icon:"🦌",

heading:"The Endless Maze",

story:

"The magical forest constantly rearranges itself. Only repeated spells can reveal the hidden exit. Use loops wisely to complete every challenge.",

tasks:[

"🔢 Print numbers from 1 to 100 using a for loop.",

"⚡ Print all even numbers between 1 and 50.",

"📋 Display the multiplication table of a given number.",

"➕ Calculate the sum of the first N natural numbers.",

"🏆 Find the factorial of a given number.",

"🌱 Generate the Fibonacci series for N terms.",

"💎 Check whether a given number is Prime or Not.",

"🔄 Reverse the digits of a number using a while loop.",

"⭐ Print a right-angled triangle star pattern using nested loops.",

"🎯 Create a guessing game that repeatedly asks the user to guess a secret number until the correct answer is entered."

],

reward:{

badge:"Forest Explorer",

xp:200,

coins:100,

unlock:"function-tower"

}

},

/*====================================================
                FOOTER
====================================================*/

footer:{

button:"🧙 Continue to Wizard's Function Tower",

next:"../function-tower/index.html"

},

/*====================================================
                AUDIO
====================================================*/

audio:{

magic:"assets/audio/magic.mp3",

button:"assets/audio/button.mp3",

page:"assets/audio/page-flip.mp3"

}

};





