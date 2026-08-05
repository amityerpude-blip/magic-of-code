/*====================================================

            MAGIC OF CODE
            VALLEY OF DECISIONS

            decision-valley.js

            PART 1

====================================================*/

const KINGDOM_DATA={

/*====================================================
                BASIC INFORMATION
====================================================*/

id:"decision",

title:"🏞️ Valley of Decisions",

shortTitle:"Valley of Decisions",

subtitle:"Choose Wisely, Code Brilliantly",

description:

"Welcome to the Valley of Decisions where Master Owl teaches Dino how every program makes intelligent choices using conditions. Learn the magic of if, else and elif before continuing your adventure.",

master:"🦉 Master Owl",

/*====================================================
                HERO
====================================================*/

hero:{

background:"assets/images/hero.jpg",

logo:"assets/images/master-owl.png"

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
subtitle:"The Crossroads Begin"
},

{
id:"animationSection",
icon:"🎬",
title:"Magic Vision",
subtitle:"Learn Decision Making"
},

{
id:"notesSection",
icon:"📚",
title:"Wisdom Grove",
subtitle:"Master If-Else"
},

{
id:"codingSection",
icon:"🧪",
title:"Spell Forge",
subtitle:"Practice Conditions"
},

{
id:"quizSection",
icon:"👾",
title:"Monster Hunt",
subtitle:"Challenge Yourself"
},

{
id:"challengeSection",
icon:"🏆",
title:"Guardian Battle",
subtitle:"The Final Choice"
}

],

/*====================================================
                COMIC
====================================================*/

comic:{

title:"📖 The Crossroads of Destiny",

description:

"Dino reaches a magical valley filled with crossroads. Master Owl explains that every programmer must learn how to make the correct decision using Python conditions.",

folder:"assets/comics/",

totalPages:22

},

/*====================================================
                ANIMATION
====================================================*/

animation:{

title:"🎬 Decision Making in Python",

description:

"Watch Master Owl explain how Python chooses different paths using if, else and elif statements.",

type:"youtube",

source:"https://www.youtube.com/embed/f4KOjWS_KZs"

},

/*====================================================
                NOTES
====================================================*/

notes:{

title:"📚 Wisdom Grove",

description:

"Master Owl reveals the secrets of decision making in Python.",

cards:[

{
icon:"🤔",
title:"Decision Making",
text:"Decision making allows a program to choose different actions based on whether a condition is True or False. Python uses if, else and elif statements to implement decision making."
},

{
icon:"⚖️",
title:"Boolean Expressions",
text:"A Boolean expression evaluates to either True or False. Decision statements execute different blocks depending on the result of these expressions."
},

{
icon:"🔍",
title:"Comparison Operators",
text:"Comparison operators compare two values. They include ==, !=, >, <, >= and <=. The result is always either True or False."
},

{
icon:"🧠",
title:"Logical Operators",
text:"Python provides logical operators and, or and not to combine multiple conditions into a single decision."
},

{
icon:"🌱",
title:"The if Statement",
text:"The if statement executes a block of code only when the specified condition is True.\n\nExample:\nif marks>=40:\n    print('Pass')"
},

{
icon:"🌿",
title:"The if-else Statement",
text:"The if-else statement selects one of two blocks depending on whether the condition is True or False."
},

{
icon:"🌳",
title:"The if-elif-else Ladder",
text:"When multiple conditions must be checked, Python uses the if-elif-else ladder. The first True condition is executed and the remaining conditions are skipped."
},

{
icon:"🏛️",
title:"Nested if",
text:"An if statement placed inside another if statement is called a nested if. It is useful when multiple levels of checking are required."
},

{
icon:"📏",
title:"Indentation",
text:"Indentation is compulsory in Python. All statements belonging to an if, elif or else block must have the same indentation."
},

{
icon:"🎯",
title:"Truth Values",
text:"Conditions evaluate to either True or False. Zero, None and empty collections are treated as False, while most other values are considered True."
},

{
icon:"🛣️",
title:"Multiple Conditions",
text:"Logical operators allow checking several conditions together.\nExample:\nage>=18 and age<=60"
},

{
icon:"⚡",
title:"Short-hand if",
text:"A single statement can be written in one line.\n\nExample:\nif x>0: print('Positive')"
},

{
icon:"🔄",
title:"Short-hand if-else",
text:"Python supports conditional expressions.\n\nExample:\nprint('Pass') if marks>=40 else print('Fail')"
},

{
icon:"🚫",
title:"Common Mistakes",
text:"Common errors include missing colons (:), incorrect indentation, using = instead of == for comparison and forgetting logical operators."
},

{
icon:"🌍",
title:"Real-life Applications",
text:"Decision making is used in ATM systems, online shopping discounts, login authentication, examination results, traffic signals, banking software and games."

}

]

},

/*====================================================
                SPELL FORGE
====================================================*/

coding:{

title:"🧪 Spell Forge",

description:

"Practice writing programs using conditions.",

defaultCode:

`age=int(input("Enter your age : "))

if age>=18:
    print("You are eligible to vote.")
else:
    print("You are not eligible.")`,

challenges:[

{
id:"positive",

icon:"➕",

title:"Positive or Negative",

description:

"Accept a number and determine whether it is Positive or Negative.",

code:

`num=int(input("Enter a number : "))

if num>=0:
    print("Positive Number")
else:
    print("Negative Number")`

},

{
id:"evenodd",

icon:"⚖️",

title:"Even or Odd",

description:

"Accept an integer and determine whether it is Even or Odd.",

code:

`num=int(input("Enter a number : "))

if num%2==0:
    print("Even Number")
else:
    print("Odd Number")`

},

{
id:"largest2",

icon:"🏆",

title:"Largest of Two Numbers",

description:

"Accept two numbers and display the larger number.",

code:

`a=int(input("First Number : "))
b=int(input("Second Number : "))

if a>b:
    print(a,"is greater")
else:
    print(b,"is greater")`

},

{
id:"largest3",

icon:"👑",

title:"Largest of Three Numbers",

description:

"Accept three numbers and display the largest number.",

code:

`a=int(input("First Number : "))
b=int(input("Second Number : "))
c=int(input("Third Number : "))

if a>b and a>c:
    print(a,"is greatest")
elif b>c:
    print(b,"is greatest")
else:
    print(c,"is greatest")`

},

{
id:"vote",

icon:"🗳️",

title:"Voting Eligibility",

description:

"Determine whether a person is eligible to vote.",

code:

`age=int(input("Enter your age : "))

if age>=18:
    print("Eligible to Vote")
else:
    print("Not Eligible")`

},

{
id:"grade",

icon:"📜",

title:"Grade Calculator",

description:

"Display grade according to marks entered by the user.",

code:

`marks=int(input("Enter Marks : "))

if marks>=90:
    print("Grade A")
elif marks>=75:
    print("Grade B")
elif marks>=60:
    print("Grade C")
elif marks>=40:
    print("Grade D")
else:
    print("Fail")`

},

{
id:"leap",

icon:"📅",

title:"Leap Year",

description:

"Determine whether a given year is a leap year.",

code:

`year=int(input("Enter Year : "))

if(year%400==0) or (year%4==0 and year%100!=0):
    print("Leap Year")
else:
    print("Not a Leap Year")`

},

{
id:"calculator",

icon:"🧮",

title:"Simple Calculator",

description:

"Perform addition, subtraction, multiplication or division using user's choice.",

code:

`a=float(input("First Number : "))
b=float(input("Second Number : "))

choice=input("Choose (+,-,*,/) : ")

if choice=="+":
    print(a+b)
elif choice=="-":
    print(a-b)
elif choice=="*":
    print(a*b)
elif choice=="/":
    print(a/b)
else:
    print("Invalid Choice")`

},

{
id:"discount",

icon:"🛒",

title:"Shopping Discount",

description:

"Apply a 10% discount if the purchase amount is ₹5000 or more.",

code:

`amount=float(input("Purchase Amount : "))

if amount>=5000:
    discount=amount*0.10
else:
    discount=0

print("Discount =",discount)
print("Final Amount =",amount-discount)`

},

{
id:"bmi",

icon:"❤️",

title:"BMI Checker",

description:

"Calculate BMI and determine the health category.",

code:

`weight=float(input("Weight (kg) : "))
height=float(input("Height (m) : "))

bmi=weight/(height*height)

print("BMI =",round(bmi,2))

if bmi<18.5:
    print("Underweight")
elif bmi<25:
    print("Normal")
elif bmi<30:
    print("Overweight")
else:
    print("Obese")`

}

]

},

/*====================================================
                MONSTER HUNT
====================================================*/

quiz:{

title:"👾 Monster Hunt",

description:

"Defeat the Valley Monsters by making the correct decisions.",

questions:[

{
question:"Which statement is used to make decisions in Python?",
options:[
"for",
"while",
"if",
"print"
],
answer:2
},

{
question:"Which keyword executes when the if condition is False?",
options:[
"elif",
"then",
"else",
"otherwise"
],
answer:2
},

{
question:"Which keyword checks multiple conditions?",
options:[
"repeat",
"elif",
"switch",
"case"
],
answer:1
},

{
question:"Which operator checks equality?",
options:[
"=",
"==",
"!=",
">="
],
answer:1
},

{
question:"Which operator means 'Not Equal To'?",
options:[
"<>",
"!=",
"==",
"="
],
answer:1
},

{
question:"What is the output of 10 > 5?",
options:[
"10",
"5",
"True",
"False"
],
answer:2
},

{
question:"Which logical operator returns True only if both conditions are True?",
options:[
"or",
"and",
"not",
"xor"
],
answer:1
},

{
question:"Which logical operator returns True if at least one condition is True?",
options:[
"and",
"or",
"not",
"is"
],
answer:1
},

{
question:"Which logical operator reverses the result of a condition?",
options:[
"and",
"or",
"not",
"nor"
],
answer:2
},

{
question:"Python uses ______ to define the blocks of an if statement.",
options:[
"Braces {}",
"Parentheses ()",
"Indentation",
"Semicolon"
],
answer:2
},

{
question:"Which of the following is a valid if statement?",
options:[
"if x>10",
"if(x>10)",
"if x>10:",
"if:x>10"
],
answer:2
},

{
question:"Which statement is executed first in an if-elif-else ladder?",
options:[
"else",
"elif",
"The first True condition",
"All conditions"
],
answer:2
},

{
question:"Which block executes when no condition is True?",
options:[
"if",
"elif",
"else",
"None"
],
answer:2
},

{
question:"Nested if means:",
options:[
"Many elif statements",
"An if statement inside another if statement",
"Using two variables",
"Two programs together"
],
answer:1
},

{
question:"Which data type is returned by a comparison operator?",
options:[
"String",
"Integer",
"Boolean",
"Float"
],
answer:2
},

{
question:"What will be the result of 15<=20?",
options:[
"True",
"False",
"15",
"20"
],
answer:0
},

{
question:"Which keyword is NOT related to decision making?",
options:[
"if",
"else",
"elif",
"for"
],
answer:3
},

{
question:"Which condition checks whether age is 18 or above?",
options:[
"age>18",
"age>=18",
"age==18",
"age<=18"
],
answer:1
},

{
question:"Which operator checks whether a number is divisible by 2?",
options:[
"/",
"*",
"%",
"//"
],
answer:2
},

{
question:"What is the output of not(True)?",
options:[
"True",
"False",
"None",
"1"
],
answer:1
},

{
question:"Which symbol ends an if statement in Python?",
options:[
";",
":",
".",
","
],
answer:1
},

{
question:"How many else blocks can an if statement have?",
options:[
"Unlimited",
"Two",
"One",
"Three"
],
answer:2
},

{
question:"How many elif blocks can an if statement have?",
options:[
"Only One",
"Two",
"Unlimited",
"None"
],
answer:2
},

{
question:"Which real-life application commonly uses decision making?",
options:[
"ATM Machine",
"Result Processing",
"Online Shopping",
"All of these"
],
answer:3
},

{
question:"Which statement is TRUE about if-else?",
options:[
"Both blocks execute.",
"Only one block executes.",
"Neither block executes.",
"It creates a loop."
],
answer:1
}

]

},

/*====================================================
                GUARDIAN BATTLE
====================================================*/

challenge:{

title:"🏆 Guardian Battle",

description:

"Face the final challenge and prove your decision-making skills.",

icon:"🦉",

heading:"The Crossroads of Destiny",

story:

"Three magical roads stand before Dino. Only correct logical decisions will reveal the safe path through the valley.",

tasks:[

"🟢 Accept a number and determine whether it is Positive or Negative.",

"⚖️ Accept an integer and determine whether it is Even or Odd.",

"👑 Accept three numbers and display the Largest Number.",

"🗳️ Accept age and check Voting Eligibility.",

"📜 Accept marks and display the Grade using if-elif-else.",

"📅 Determine whether a given year is a Leap Year.",

"🏧 Simulate an ATM withdrawal by checking if the balance is sufficient before allowing the transaction.",

"🛒 Calculate a shopping discount of 10% if the purchase amount is ₹5000 or more."

]


},

/*====================================================
                FOOTER
====================================================*/

footer:{

button:"🌲 Continue to Looping Forest",

next:"../looping-forest/index.html"

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
