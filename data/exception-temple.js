/*====================================================

            MAGIC OF CODE
        TEMPLE OF PROTECTION

        exception-temple.js

            PART 1

====================================================*/

const KINGDOM_DATA={

/*====================================================
                BASIC INFORMATION
====================================================*/

id:"exceptions",

title:"🛡️ Temple of Protection",

shortTitle:"Exception Temple",

subtitle:"Master Aegis - Guardian of Safe Code",

description:

"Welcome to the Temple of Protection where Master Aegis teaches Dino that great programmers don't fear errors—they handle them gracefully. Learn Exception Handling and build robust Python programs.",

master:"🛡️ Master Aegis",

/*====================================================
                    HERO
====================================================*/

hero:{

background:"assets/images/hero.jpg",

logo:"assets/images/master-aegis.png"

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
subtitle:"The Broken Shield"
},

{
id:"animationSection",
icon:"🎬",
title:"Magic Vision",
subtitle:"Exception Handling"
},

{
id:"notesSection",
icon:"📚",
title:"Wisdom Grove",
subtitle:"Master Safe Coding"
},

{
id:"codingSection",
icon:"🧪",
title:"Spell Forge",
subtitle:"Practice Exception Handling"
},

{
id:"quizSection",
icon:"👾",
title:"Monster Hunt",
subtitle:"Defeat the Error Spirits"
},

{
id:"challengeSection",
icon:"🏆",
title:"Guardian Battle",
subtitle:"Restore the Sacred Shield"
}

],

/*====================================================
                    COMIC
====================================================*/

comic:{

title:"📖 The Broken Shield",

description:

"After leaving the Wizard's Function Tower, Dino reaches an ancient temple protected by magical shields. Every incorrect spell awakens dangerous traps. Master Aegis teaches Dino that powerful programmers prepare for mistakes before they happen.",

folder:"assets/comic/",

totalPages:16

},

/*====================================================
                ANIMATION
====================================================*/

animation:{

title:"🎬 Python Exception Handling",

description:

"Watch Master Aegis explain how Python handles runtime errors using try, except, else and finally.",

type:"youtube",

source:"https://www.youtube.com/embed/NIWwJbo-9_8"

},

/*====================================================
                    NOTES
====================================================*/

notes:{

title:"📚 Scrolls of Protection",

description:

"Master Aegis reveals the ancient techniques for writing safe and reliable Python programs.",

cards:[

{
icon:"⚠️",
title:"What is an Exception?",
text:"An exception is an error that occurs while a program is running. If it is not handled, the program stops immediately."
},

{
icon:"❌",
title:"Types of Errors",
text:"Python programs may contain Syntax Errors, Runtime Errors (Exceptions) and Logical Errors."
},

{
icon:"📝",
title:"Syntax Error",
text:"A Syntax Error occurs when Python cannot understand the program due to incorrect syntax.\n\nExample:\nif x>5\n    print(x)"
},

{
icon:"💥",
title:"Runtime Error",
text:"A Runtime Error occurs while the program is executing. Examples include division by zero, invalid input and missing files."
},

{
icon:"🧠",
title:"Logical Error",
text:"A Logical Error does not stop the program, but produces incorrect output because the program logic is wrong."
},

{
icon:"🛡️",
title:"The try Block",
text:"Place statements that may generate exceptions inside the try block."
},

{
icon:"🚑",
title:"The except Block",
text:"The except block catches and handles exceptions so that the program does not crash."
},

{
icon:"🎯",
title:"Multiple except Blocks",
text:"Different exceptions can be handled separately using multiple except blocks."
},

{
icon:"✅",
title:"The else Block",
text:"The else block executes only when no exception occurs inside the try block."
},

{
icon:"🔒",
title:"The finally Block",
text:"The finally block always executes whether an exception occurs or not. It is commonly used to close files or release resources."
},

{
icon:"🚨",
title:"Raising Exceptions",
text:"The raise keyword is used to generate exceptions manually whenever required."
},

{
icon:"📦",
title:"Common Exceptions",
text:"Common Python exceptions include ZeroDivisionError, ValueError, IndexError, KeyError, FileNotFoundError and TypeError."
},

{
icon:"⚙️",
title:"User-defined Exceptions",
text:"Python also allows programmers to create their own custom exception classes for specific situations."
},

{
icon:"📋",
title:"Best Practices",
text:"Handle only expected exceptions, keep try blocks small, avoid using bare except, and always provide meaningful error messages."
},

{
icon:"🌍",
title:"Real-world Applications",
text:"Exception handling is used in banking systems, websites, games, AI, mobile apps, file processing and every professional software application."

}

]

},

  /*====================================================
                SPELL FORGE
====================================================*/

coding:{

title:"🧪 Spell Forge",

description:

"Master the art of Exception Handling by protecting your Python programs from unexpected runtime errors.",

defaultCode:

`try:

    num=int(input("Enter a number: "))

    print("You entered",num)

except ValueError:

    print("Invalid Input")
`,

challenges:[

{

id:"divideZero",

icon:"➗",

title:"Handle Division by Zero",

description:

"Write a program that safely divides two numbers and handles ZeroDivisionError.",

code:

`try:

    a=10

    b=0

    print(a/b)

except ZeroDivisionError:

    print("Cannot divide by zero.")`

},

{

id:"valueError",

icon:"🔢",

title:"Invalid Integer Input",

description:

"Accept an integer from the user and handle ValueError if the input is invalid.",

code:

`try:

    age=int(input("Enter Age : "))

    print(age)

except ValueError:

    print("Please enter a valid integer.")`

},

{

id:"fileNotFound",

icon:"📄",

title:"Missing File",

description:

"Open a file and handle FileNotFoundError if it does not exist.",

code:

`try:

    file=open("student.txt","r")

    print(file.read())

except FileNotFoundError:

    print("File not found.")`

},

{

id:"multiple",

icon:"🛡️",

title:"Multiple Exceptions",

description:

"Handle ZeroDivisionError and ValueError using separate except blocks.",

code:

`try:

    a=int(input("A : "))

    b=int(input("B : "))

    print(a/b)

except ValueError:

    print("Invalid number.")

except ZeroDivisionError:

    print("Division by zero is not allowed.")`

},

{

id:"elseBlock",

icon:"✅",

title:"Using else",

description:

"Display a success message only if no exception occurs.",

code:

`try:

    n=int(input("Enter Number : "))

    print(n)

except ValueError:

    print("Wrong input.")

else:

    print("Program executed successfully.")`

},

{

id:"finallyBlock",

icon:"🔒",

title:"Using finally",

description:

"Use finally to display a message after execution.",

code:

`try:

    print(100/5)

except ZeroDivisionError:

    print("Division Error")

finally:

    print("Program Finished")`

},

{

id:"raiseError",

icon:"🚨",

title:"Raise Exception",

description:

"Raise a ValueError if age is below 18.",

code:

`age=15

if age<18:

    raise ValueError("Age must be at least 18.")

print("Eligible")`

},

{

id:"indexError",

icon:"📚",

title:"Handle IndexError",

description:

"Safely access an element from a list.",

code:

`numbers=[10,20,30]

try:

    print(numbers[5])

except IndexError:

    print("Index out of range.")`

},

{

id:"keyError",

icon:"🗝️",

title:"Handle KeyError",

description:

"Safely access a dictionary key.",

code:

`student={"name":"Dino"}

try:

    print(student["marks"])

except KeyError:

    print("Key not found.")`

},

{

id:"calculator",

icon:"🧮",

title:"Safe Calculator",

description:

"Build a calculator that handles invalid input and division by zero.",

code:

`try:

    a=float(input("First Number : "))

    b=float(input("Second Number : "))

    print(a/b)

except ValueError:

    print("Invalid Input")

except ZeroDivisionError:

    print("Cannot divide by zero.")`

}

]

},

  /*====================================================
                MONSTER HUNT
====================================================*/

quiz:{

title:"👾 Monster Hunt",

description:

"Defeat the Error Spirits by answering questions about Python Exception Handling.",

questions:[

{
question:"What is an exception in Python?",
options:[
"A loop",
"A runtime error",
"A variable",
"A function"
],
answer:1
},

{
question:"Which keyword is used to handle exceptions?",
options:[
"catch",
"try",
"error",
"handle"
],
answer:1
},

{
question:"Which block catches an exception?",
options:[
"catch",
"except",
"finally",
"else"
],
answer:1
},

{
question:"Which block contains code that may generate an exception?",
options:[
"try",
"except",
"else",
"finally"
],
answer:0
},

{
question:"Which exception occurs when dividing a number by zero?",
options:[
"ValueError",
"TypeError",
"ZeroDivisionError",
"IndexError"
],
answer:2
},

{
question:"Which exception occurs when converting 'abc' to int?",
options:[
"IndexError",
"ValueError",
"KeyError",
"SyntaxError"
],
answer:1
},

{
question:"Which block always executes whether an exception occurs or not?",
options:[
"try",
"except",
"finally",
"else"
],
answer:2
},

{
question:"When does the else block execute?",
options:[
"When an exception occurs",
"When no exception occurs",
"Always",
"Never"
],
answer:1
},

{
question:"Which keyword is used to generate an exception manually?",
options:[
"throw",
"raise",
"except",
"error"
],
answer:1
},

{
question:"Which exception occurs when a file does not exist?",
options:[
"ImportError",
"NameError",
"FileNotFoundError",
"MemoryError"
],
answer:2
},

{
question:"Which exception occurs when accessing an invalid list index?",
options:[
"KeyError",
"IndexError",
"TypeError",
"ValueError"
],
answer:1
},

{
question:"Which exception occurs when a dictionary key is missing?",
options:[
"IndexError",
"KeyError",
"TypeError",
"ValueError"
],
answer:1
},

{
question:"Which exception occurs when an undefined variable is used?",
options:[
"ValueError",
"NameError",
"TypeError",
"KeyError"
],
answer:1
},

{
question:"Which exception occurs when incompatible data types are used?",
options:[
"TypeError",
"KeyError",
"IndexError",
"SyntaxError"
],
answer:0
},

{
question:"Which error occurs before the program starts executing?",
options:[
"Runtime Error",
"Syntax Error",
"Logical Error",
"File Error"
],
answer:1
},

{
question:"Which error produces incorrect output without stopping the program?",
options:[
"Syntax Error",
"Logical Error",
"Runtime Error",
"Import Error"
],
answer:1
},

{
question:"Which statement is true about multiple except blocks?",
options:[
"Only one except block is allowed.",
"Different exceptions can be handled separately.",
"except must come before try.",
"Multiple except blocks are not supported."
],
answer:1
},

{
question:"What is the main purpose of exception handling?",
options:[
"Increase program speed",
"Prevent program crashes",
"Create variables",
"Reduce memory usage"
],
answer:1
},

{
question:"Which is the correct order?",
options:[
"except → try",
"try → except",
"finally → try",
"else → try"
],
answer:1
},

{
question:"Which block is optional in exception handling?",
options:[
"try",
"except",
"else",
"All of these"
],
answer:2
},

{
question:"What happens if an exception is not handled?",
options:[
"The program continues normally.",
"The program terminates.",
"The exception disappears.",
"Python ignores it."
],
answer:1
},

{
question:"Which keyword should not be used unnecessarily because it hides all errors?",
options:[
"try",
"except:",
"finally",
"raise"
],
answer:1
},

{
question:"Which block is commonly used to close files or database connections?",
options:[
"try",
"except",
"finally",
"raise"
],
answer:2
},

{
question:"Exception handling is commonly used in:",
options:[
"Banking Software",
"Web Applications",
"Games",
"All of these"
],
answer:3
},

{
question:"Which of the following is NOT a Python exception?",
options:[
"ValueError",
"IndexError",
"CircleError",
"KeyError"
],
answer:2
}

]

},
/*====================================================
                GUARDIAN BATTLE
====================================================*/

challenge:{

title:"🏆 Guardian Battle",

description:

"The Sacred Shield protecting the Temple has been shattered by the Error Spirits. Master Aegis challenges Dino to restore every shield crystal by writing error-free Python programs using Exception Handling.",

icon:"🛡️",

heading:"The Sacred Shield of Protection",

story:

"The Temple has protected programmers for centuries. Recently, careless coding awakened powerful Error Spirits that cracked the Sacred Shield into ten glowing fragments. Each fragment can only be repaired by solving an Exception Handling challenge. Every successful solution strengthens the shield until the Temple is protected once again.",

tasks:[

"⚔️ Create a try-except block to safely divide two numbers.",

"➗ Handle ZeroDivisionError while performing division.",

"🔢 Accept an integer from the user and handle ValueError.",

"📄 Open a file safely using FileNotFoundError handling.",

"🛡️ Write a program with multiple except blocks.",

"✅ Use an else block to display a success message.",

"🔒 Use a finally block to close resources and display a completion message.",

"🚨 Raise a ValueError if a student's marks are outside the range 0–100.",

"📚 Handle IndexError while accessing list elements.",

"🧮 Build a Safe Calculator that handles invalid input and division by zero."

],

reward:{

badge:"🛡️ Guardian of Safe Code",

xp:300,

coins:150,

unlock:"text-file-library"

}

},

/*====================================================
                    FOOTER
====================================================*/

footer:{

button:"📜 Continue to Library of Living Scrolls",

next:"../text-file-library/index.html"

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
