/*====================================================

            MAGIC OF CODE
            PYTHON VILLAGE

            python-village.js

            PART 1

====================================================*/

const KINGDOM_DATA={

/*====================================================
                BASIC INFORMATION
====================================================*/

id:"python",

title:"🐍 Python Village",

shortTitle:"Python Village",

subtitle:"The Beginning of Every Python Adventure",

description:

"Welcome to the peaceful Python Village where every great programmer begins their magical journey. Master Pyro will teach Dino the fundamentals of Python and prepare him for the adventures that lie ahead.",

master:"🐍 Master Pyro",

/*====================================================
                HERO
====================================================*/

hero:{

background:"assets/images/hero.jpg",

logo:"assets/images/master-pyro.png"

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

subtitle:"Meet Dino & Master Pyro"

},

{

id:"animationSection",

icon:"🎬",

title:"Magic Vision",

subtitle:"Watch Python in Action"

},

{

id:"notesSection",

icon:"📚",

title:"Wisdom Grove",

subtitle:"Learn Python Basics"

},

{

id:"codingSection",

icon:"⚗️",

title:"Spell Forge",

subtitle:"Write Your First Programs"

},

{

id:"quizSection",

icon:"👾",

title:"Monster Hunt",

subtitle:"Test Your Knowledge"

},

{

id:"challengeSection",

icon:"🏆",

title:"Guardian Battle",

subtitle:"Complete the Final Mission"

}

],

/*====================================================
                COMIC
====================================================*/

comic:{

title:"📖 The Beginning of Magic",

description:

"Follow Dino as he enters Python Village and meets the legendary Master Pyro for the very first time.",

folder:"assets/comic/",

totalPages:16

},

/*====================================================
                ANIMATION
====================================================*/

animation:{

title:"🎬 Python Village Journey",

description:

"Watch Master Pyro introduce the magical world of Python programming.",

type:"youtube",

source:"https://www.youtube.com/embed/kqtD5dpn9C8"

},

/*====================================================
                NOTES
====================================================*/

notes:{

title:"📚 Wisdom Grove",

description:

"Master Pyro explains the fundamental concepts every Python wizard must know before beginning their adventure.",

cards:[

{
icon:"🐍",
title:"What is Python?",
text:"Python is a high-level, interpreted, general-purpose programming language created by Guido van Rossum. It is simple, readable and widely used for web development, automation, artificial intelligence, data science and software development."
},

{
icon:"✨",
title:"Features of Python",
text:"Python is easy to learn, has simple syntax, supports object-oriented programming, is platform independent, open source, interpreted and comes with a rich standard library."
},

{
icon:"🌍",
title:"Applications of Python",
text:"Python is used in web development, game development, data science, machine learning, artificial intelligence, cybersecurity, automation, scientific computing and Internet of Things (IoT)."
},

{
icon:"💻",
title:"Interactive & Script Mode",
text:"Python programs can be executed in Interactive Mode for quick testing or Script Mode by saving the code in a .py file and running it whenever required."
},

{
icon:"📝",
title:"First Python Program",
text:"The print() function displays output on the screen.\nExample:\nprint('Hello World')"
},

{
icon:"💬",
title:"Comments",
text:"Comments make programs easier to understand. Single-line comments begin with #. Multi-line comments can be written using triple quotes."
},

{
icon:"🔤",
title:"Identifiers",
text:"Identifiers are names given to variables, functions and classes. They can contain letters, digits and underscores but cannot begin with a digit or be Python keywords."
},

{
icon:"🔑",
title:"Keywords",
text:"Keywords are reserved words that have predefined meanings in Python. Examples include if, else, for, while, def, class, import, return and True."
},

{
icon:"📦",
title:"Variables",
text:"Variables store data in memory. Python creates variables automatically when a value is assigned.\nExample:\nage = 17"
},

{
icon:"🔢",
title:"Data Types",
text:"Common built-in data types include int, float, bool, str, list, tuple, set, dictionary and NoneType."
},

{
icon:"⌨️",
title:"Input & Output",
text:"The input() function accepts data from the user, while print() displays information on the screen.\nExample:\nname=input('Enter Name: ')"
},

{
icon:"➕",
title:"Operators",
text:"Python supports Arithmetic, Relational, Logical, Assignment, Bitwise, Membership and Identity operators for performing various operations."
},

{
icon:"🔄",
title:"Type Conversion",
text:"Python allows conversion between data types using functions such as int(), float(), str(), bool() and list()."
},

{
icon:"📏",
title:"Indentation",
text:"Python uses indentation instead of braces to define blocks of code. Proper indentation is mandatory and improves readability."
},

{
icon:"🏆",
title:"Good Programming Practices",
text:"Use meaningful variable names, write comments where necessary, maintain proper indentation, avoid unnecessary code duplication and test programs thoroughly."

}

]

},

/*====================================================
                SPELL FORGE
====================================================*/

coding:{

title:"🧪 Spell Forge",

description:

"Practice your Python spells and become a true coding apprentice.",

defaultCode:

`print("Welcome to Python Village!")`,

challenges:[

{
id:"hello",

icon:"👋",

title:"Hello World",

description:

"Write a program to print 'Hello World!'",

code:

`# Write your code below

print("Hello World!")`

},

{
id:"name",

icon:"🙋",

title:"Print Your Name",

description:

"Store your name in a variable and display it.",

code:

`# Store your name

name="Amit"

# Display it

print(name)`

},

{
id:"input",

icon:"⌨️",

title:"User Input",

description:

"Accept your name from the keyboard and greet the user.",

code:

`# Accept input

name=input("Enter your name : ")

print("Welcome",name)`

},

{
id:"addition",

icon:"➕",

title:"Addition",

description:

"Read two numbers from the user and display their sum.",

code:

`a=int(input("Enter first number : "))

b=int(input("Enter second number : "))

print("Sum =",a+b)`

},

{
id:"swap",

icon:"🔄",

title:"Swap Two Variables",

description:

"Swap the values of two variables without using a third variable.",

code:

`a=10

b=20

print("Before :",a,b)

a,b=b,a

print("After :",a,b)`

},

{
id:"rectangle",

icon:"📐",

title:"Area of Rectangle",

description:

"Calculate the area of a rectangle using length and breadth entered by the user.",

code:

`length=float(input("Length : "))

breadth=float(input("Breadth : "))

area=length*breadth

print("Area =",area)`

},

{
id:"circle",

icon:"⭕",

title:"Area of Circle",

description:

"Calculate the area of a circle using the formula πr².",

code:

`radius=float(input("Radius : "))

area=3.14*radius*radius

print("Area =",area)`

},

{
id:"temperature",

icon:"🌡️",

title:"Temperature Converter",

description:

"Convert temperature from Celsius to Fahrenheit.",

code:

`c=float(input("Temperature in Celsius : "))

f=(c*9/5)+32

print("Temperature in Fahrenheit =",f)`

},

{
id:"average",

icon:"📊",

title:"Average Marks",

description:

"Accept marks of five subjects and calculate the average.",

code:

`m1=float(input("Marks 1 : "))

m2=float(input("Marks 2 : "))

m3=float(input("Marks 3 : "))

m4=float(input("Marks 4 : "))

m5=float(input("Marks 5 : "))

average=(m1+m2+m3+m4+m5)/5

print("Average =",average)`

},

{
id:"salary",

icon:"💰",

title:"Salary Calculator",

description:

"Calculate the annual salary from the monthly salary entered by the user.",

code:

`salary=float(input("Monthly Salary : "))

annual=salary*12

print("Annual Salary =",annual)`

}

]

},

/*====================================================
                MONSTER HUNT
====================================================*/

quiz:{

title:"👾 Monster Hunt",

description:

"Defeat Python Monsters by answering one question at a time.",

questions:[

{
question:"Who developed Python?",
options:[
"James Gosling",
"Guido van Rossum",
"Dennis Ritchie",
"Bjarne Stroustrup"
],
answer:1
},

{
question:"Python is a ______ language.",
options:[
"Low-level",
"Machine",
"High-level",
"Assembly"
],
answer:2
},

{
question:"Python programs are executed by a ______.",
options:[
"Compiler",
"Interpreter",
"Assembler",
"Linker"
],
answer:1
},

{
question:"Which function is used to display output?",
options:[
"show()",
"display()",
"print()",
"echo()"
],
answer:2
},

{
question:"Which function accepts user input?",
options:[
"read()",
"scan()",
"accept()",
"input()"
],
answer:3
},

{
question:"Which symbol is used for comments in Python?",
options:[
"//",
"/*",
"#",
"--"
],
answer:2
},

{
question:"Which of the following is a valid variable name?",
options:[
"2marks",
"student_name",
"class",
"roll-no"
],
answer:1
},

{
question:"Which data type stores whole numbers?",
options:[
"float",
"str",
"bool",
"int"
],
answer:3
},

{
question:"Which data type stores decimal numbers?",
options:[
"float",
"int",
"str",
"bool"
],
answer:0
},

{
question:"Which data type stores True or False?",
options:[
"int",
"bool",
"str",
"list"
],
answer:1
},

{
question:"What is the output type of input()?",
options:[
"int",
"float",
"string",
"boolean"
],
answer:2
},

{
question:"Which operator is used for exponentiation?",
options:[
"*",
"^",
"**",
"//"
],
answer:2
},

{
question:"Which operator gives quotient without decimal?",
options:[
"/",
"//",
"%",
"**"
],
answer:1
},

{
question:"Which operator gives the remainder?",
options:[
"/",
"//",
"%",
"*"
],
answer:2
},

{
question:"Which keyword is reserved in Python?",
options:[
"hello",
"python",
"while",
"variable"
],
answer:2
},

{
question:"Python is ______ source.",
options:[
"Closed",
"Open",
"Commercial",
"Licensed"
],
answer:1
},

{
question:"Which of the following is NOT a Python data type?",
options:[
"list",
"tuple",
"array",
"dictionary"
],
answer:2
},

{
question:"Python files have extension ______.",
options:[
".java",
".cpp",
".py",
".txt"
],
answer:2
},

{
question:"Which function converts a value into an integer?",
options:[
"str()",
"float()",
"int()",
"bool()"
],
answer:2
},

{
question:"Which function converts a value into a floating-point number?",
options:[
"float()",
"str()",
"int()",
"list()"
],
answer:0
},

{
question:"Python is famous because its syntax is ______.",
options:[
"Complex",
"Readable",
"Difficult",
"Lengthy"
],
answer:1
},

{
question:"Which mode executes one statement at a time?",
options:[
"Script Mode",
"Interactive Mode",
"Batch Mode",
"Debug Mode"
],
answer:1
},

{
question:"Indentation in Python is used to ______.",
options:[
"Decorate code",
"Create comments",
"Define blocks of code",
"Print output"
],
answer:2
},

{
question:"Which operator is used for assignment?",
options:[
"==",
":=",
"=",
"+="
],
answer:2
},

{
question:"Which of the following is one application of Python?",
options:[
"Artificial Intelligence",
"Data Science",
"Web Development",
"All of these"
],
answer:3
}

]

},

/*====================================================
                FINAL CHALLENGE
====================================================*/

challenge:{

title:"🏆 Guardian Battle",

description:

"Complete the final mission to earn Master Pyro's blessing.",

icon:"🐍",

heading:"The First Python Spell",

story:

"Master Pyro asks Dino to prove that he has learned the language of Python by creating his very first magical program.",

tasks:[

"🐍 Print 'Welcome to Python Village'",

"🙋 Accept the student's name using input()",

"🎂 Accept the student's age",

"👋 Display a personalized welcome message",

"➕ Accept two numbers and display their sum",

"📐 Calculate the area of a rectangle",

"🌡️ Convert Celsius to Fahrenheit",

"🎉 Display 'Congratulations! You have completed Python Village.'"

]


},

/*====================================================
                FOOTER
====================================================*/

footer:{

button:"🏞 Continue to Valley of Decisions",

next:"../decision-valley/index.html"

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



