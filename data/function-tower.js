/*====================================================

            MAGIC OF CODE
        WIZARD'S FUNCTION TOWER

            function-tower.js

            PART 1

====================================================*/

const KINGDOM_DATA={

/*====================================================
                BASIC INFORMATION
====================================================*/

id:"functions",

title:"🧙 Wizard's Function Tower",

shortTitle:"Function Tower",

subtitle:"Master Merlin - Keeper of Ancient Spells",

description:

"High above the clouds stands the Wizard's Function Tower. Here Master Merlin teaches Dino the secret of writing magical spells only once and using them forever. Learn Functions, Parameters, Arguments, Return Values and the art of modular programming.",

master:"🧙 Master Merlin",

/*====================================================
                    HERO
====================================================*/

hero:{

background:"assets/images/hero.jpg",

logo:"assets/images/master-merlin.png"

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
subtitle:"The Tower of Endless Spells"
},

{
id:"animationSection",
icon:"🎬",
title:"Magic Vision",
subtitle:"Functions Explained"
},

{
id:"notesSection",
icon:"📚",
title:"Wisdom Grove",
subtitle:"Ancient Spell Notes"
},

{
id:"codingSection",
icon:"🧪",
title:"Spell Forge",
subtitle:"Practice Functions"
},

{
id:"quizSection",
icon:"👾",
title:"Monster Hunt",
subtitle:"Defeat the Spell Monsters"
},

{
id:"challengeSection",
icon:"🏆",
title:"Guardian Battle",
subtitle:"Restore the Crystal Spell Book"
}

],

/*====================================================
                    COMIC
====================================================*/

comic:{

title:"📖 The Tower of Endless Spells",

description:

"After escaping the Looping Forest, Dino discovers a mysterious floating tower filled with magical books. Master Merlin teaches that powerful programmers never repeat code—they create Functions that can be used whenever needed.",

folder:"assets/comic/",

totalPages:16

},

/*====================================================
                ANIMATION
====================================================*/

animation:{

title:"🎬 Learn Python Functions",

description:

"Watch Master Merlin explain Functions with magical examples.",

type:"youtube",

source:"https://www.youtube.com/embed/9Os0o3wzS_I"

},

/*====================================================
                    NOTES
====================================================*/

notes:{

title:"📚 Wizard's Spell Book",

description:

"Master Merlin reveals the ancient secrets of reusable programming.",

cards:[

{
icon:"🧙",
title:"What is a Function?",
text:"A Function is a named block of reusable code that performs a specific task. Instead of writing the same statements again and again, a function lets us write them once and reuse them whenever required."
},

{
icon:"✨",
title:"Why Use Functions?",
text:"Functions reduce code repetition, improve readability, simplify debugging, make programs modular and encourage code reuse."
},

{
icon:"📜",
title:"Creating a Function",
text:"A function is created using the def keyword.\n\nExample:\ndef greet():\n    print('Welcome')"
},

{
icon:"▶️",
title:"Calling a Function",
text:"A function executes only when it is called.\n\nExample:\ngreet()"
},

{
icon:"📐",
title:"Function Syntax",
text:"Syntax:\n\ndef function_name(parameters):\n    statements\n\nA function may accept parameters and may return a value."
},

{
icon:"📥",
title:"Parameters",
text:"Parameters are variables written inside the function definition. They receive values from the caller."
},

{
icon:"📤",
title:"Arguments",
text:"Arguments are the actual values supplied while calling a function.\n\nExample:\nadd(10,20)"
},

{
icon:"⚙️",
title:"Default Arguments",
text:"A default argument provides a value automatically if no argument is passed.\n\nExample:\ndef greet(name='Student'):"
},

{
icon:"🏷️",
title:"Keyword Arguments",
text:"Arguments can be passed using parameter names.\n\nExample:\nstudent(name='Dino', age=15)"
},

{
icon:"↩️",
title:"Return Statement",
text:"The return statement sends a result back to the calling program.\n\nExample:\ndef square(n):\n    return n*n"
},

{
icon:"📍",
title:"Local Variables",
text:"Variables created inside a function are local variables and can only be accessed inside that function."
},

{
icon:"🌍",
title:"Global Variables",
text:"Variables declared outside all functions are global variables and can be accessed throughout the program."
},

{
icon:"🛡️",
title:"Variable Scope",
text:"Scope determines where a variable can be used. Local variables exist only inside their function, while global variables are available everywhere."
},

{
icon:"🔁",
title:"Recursive Functions",
text:"A recursive function calls itself to solve a smaller version of the same problem. Every recursive function must have a stopping condition."
},

{
icon:"🚀",
title:"Real-world Applications",
text:"Functions are used in games, banking systems, websites, mobile apps, AI, automation, scientific computing and every large software project."

}

]

},

/*====================================================
                SPELL FORGE
====================================================*/

coding:{

title:"🧪 Spell Forge",

description:

"Practice writing reusable Python functions and master the magic of modular programming.",

defaultCode:

`def welcome():

    print("✨ Welcome to Wizard's Function Tower!")

welcome()
`,

challenges:[

{
id:"welcome",

icon:"👋",

title:"Welcome Function",

description:

"Create a function named welcome() that prints 'Welcome to Python Quest!'.",

code:

`def welcome():

    print("Welcome to Python Quest!")

welcome()`

},

{
id:"add",

icon:"➕",

title:"Addition Function",

description:

"Create a function that accepts two numbers and prints their sum.",

code:

`def add(a,b):

    print("Sum =",a+b)

add(15,20)`

},

{
id:"square",

icon:"🟦",

title:"Square Function",

description:

"Create a function that returns the square of a number.",

code:

`def square(n):

    return n*n

print(square(8))`

},

{
id:"largest",

icon:"👑",

title:"Largest Number",

description:

"Create a function that returns the larger of two numbers.",

code:

`def largest(a,b):

    if a>b:
        return a

    return b

print(largest(25,18))`

},

{
id:"evenodd",

icon:"⚖️",

title:"Even or Odd",

description:

"Create a function to check whether a number is Even or Odd.",

code:

`def evenOdd(n):

    if n%2==0:
        print("Even")

    else:
        print("Odd")

evenOdd(17)`

},

{
id:"factorial",

icon:"🏆",

title:"Factorial Function",

description:

"Create a function that returns the factorial of a number.",

code:

`def factorial(n):

    fact=1

    for i in range(1,n+1):
        fact*=i

    return fact

print(factorial(5))`

},

{
id:"prime",

icon:"💎",

title:"Prime Number",

description:

"Create a function to check whether a number is Prime.",

code:

`def isPrime(n):

    count=0

    for i in range(1,n+1):

        if n%i==0:
            count+=1

    if count==2:
        return True

    return False

print(isPrime(17))`

},

{
id:"circle",

icon:"⚪",

title:"Area of Circle",

description:

"Create a function that returns the area of a circle.",

code:

`def area(radius):

    return 3.14*radius*radius

print(area(5))`

},

{
id:"recursion",

icon:"🔁",

title:"Recursive Factorial",

description:

"Write a recursive function to calculate factorial.",

code:

`def factorial(n):

    if n==1:
        return 1

    return n*factorial(n-1)

print(factorial(5))`

},

{
id:"student",

icon:"🎓",

title:"Student Result",

description:

"Create a function that returns Pass if marks are 33 or above, otherwise Fail.",

code:

`def result(marks):

    if marks>=33:
        return "Pass"

    return "Fail"

print(result(75))
print(result(20))`

}

]

},

/*====================================================
                MONSTER HUNT
====================================================*/

quiz:{

title:"👾 Monster Hunt",

description:

"Defeat the magical creatures by answering Function-based questions.",

questions:[

{
question:"Which keyword is used to define a function in Python?",
options:["function","define","def","fun"],
answer:2
},

{
question:"Which statement is used to call a function?",
options:[
"run()",
"function()",
"function_name()",
"call function"
],
answer:2
},

{
question:"What is the purpose of a function?",
options:[
"To repeat code",
"To organize reusable code",
"To create variables",
"To store files"
],
answer:1
},

{
question:"Which symbol must appear after a function header?",
options:[";","{",":","="],
answer:2
},

{
question:"Which keyword sends a value back from a function?",
options:[
"print",
"return",
"yield",
"output"
],
answer:1
},

{
question:"What are values passed to a function called?",
options:[
"Parameters",
"Arguments",
"Variables",
"Objects"
],
answer:1
},

{
question:"What are variables written in the function definition called?",
options:[
"Arguments",
"Parameters",
"Inputs",
"Objects"
],
answer:1
},

{
question:"Which statement correctly defines a function?",
options:[
"function greet()",
"def greet():",
"define greet()",
"greet def()"
],
answer:1
},

{
question:"How many times can a function be called after it is created?",
options:[
"Only once",
"Twice",
"Unlimited times",
"Five times"
],
answer:2
},

{
question:"Which function call is correct?",
options:[
"greet;",
"call greet();",
"greet()",
"def greet()"
],
answer:2
},

{
question:"Which statement is TRUE about local variables?",
options:[
"They are available everywhere.",
"They exist only inside the function.",
"They are permanent.",
"They are global."
],
answer:1
},

{
question:"Where is a global variable declared?",
options:[
"Inside a loop",
"Inside a function",
"Outside all functions",
"Inside an if statement"
],
answer:2
},

{
question:"What does return do?",
options:[
"Ends the program",
"Repeats the function",
"Sends a value back",
"Prints output"
],
answer:2
},

{
question:"Which function returns the square of a number?",
options:[
"print(n*n)",
"return n*n",
"n*n",
"return square"
],
answer:1
},

{
question:"What happens if a function has no return statement?",
options:[
"Syntax Error",
"It returns None",
"It stops Python",
"It returns 0"
],
answer:1
},

{
question:"Which type of argument is identified by its parameter name?",
options:[
"Positional",
"Keyword",
"Default",
"Local"
],
answer:1
},

{
question:"Which type of argument already has a predefined value?",
options:[
"Default Argument",
"Keyword Argument",
"Positional Argument",
"Required Argument"
],
answer:0
},

{
question:"What is recursion?",
options:[
"A loop",
"A function calling itself",
"A nested function",
"A Python library"
],
answer:1
},

{
question:"Every recursive function must have:",
options:[
"Another function",
"A loop",
"A base condition",
"A list"
],
answer:2
},

{
question:"Which keyword creates a function?",
options:[
"func",
"method",
"def",
"create"
],
answer:2
},

{
question:"Functions help improve:",
options:[
"Readability",
"Reusability",
"Maintainability",
"All of these"
],
answer:3
},

{
question:"Which of the following is NOT an advantage of functions?",
options:[
"Reduce code repetition",
"Increase code duplication",
"Improve readability",
"Modular programming"
],
answer:1
},

{
question:"Which function correctly adds two numbers?",
options:[
"def add(a,b): return a+b",
"add(a,b)",
"function add()",
"def add = a+b"
],
answer:0
},

{
question:"Which statement is used inside a function to display output?",
options:[
"show()",
"print()",
"display()",
"echo()"
],
answer:1
},

{
question:"Which real-world software heavily uses functions?",
options:[
"Games",
"Banking Software",
"Web Applications",
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

"The final magical examination awaits. Master Merlin challenges Dino to restore the shattered Crystal Spell Book using the power of Python Functions.",

icon:"🧙",

heading:"The Crystal Spell Book",

story:

"Centuries ago, the legendary Crystal Spell Book contained every magical spell ever created. During a great battle, the book shattered into glowing pages and each page lost its magic. Master Merlin believes only someone who truly understands Functions can restore it. Every completed function unlocks another page until the entire Spell Book shines once again.",

tasks:[

"👋 Create a function named welcome() that prints 'Welcome to Python Quest!'.",

"➕ Create a function add(a, b) that returns the sum of two numbers.",

"🟦 Create a function square(n) that returns the square of a number.",

"⚪ Create a function area(radius) to calculate the area of a circle.",

"👑 Create a function largest(a, b) that returns the greater number.",

"⚖️ Create a function evenOdd(n) that displays whether a number is Even or Odd.",

"🏆 Create a function factorial(n) that returns the factorial of a number.",

"💎 Create a function isPrime(n) that returns True if the number is Prime, otherwise False.",

"🔁 Create a recursive function to calculate factorial.",

"🎓 Create a function result(marks) that returns 'Pass' for marks ≥ 33, otherwise 'Fail'."

],

reward:{

badge:"🧙 Spell Caster",

xp:250,

coins:125,

unlock:"exception-temple"

}

},

/*====================================================
                    FOOTER
====================================================*/

footer:{

button:"🛡️ Continue to Temple of Protection",

next:"../exception-temple/index.html"

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


