/*=========================================================
            PYTHON QUEST - CODING LAB
            Library of Living Scrolls
=========================================================*/

"use strict";

/*=========================================================
                CHALLENGES
=========================================================*/

const challenges = [

{
title: "Challenge 1 : Create a Text File",

text: "Create a file named magic.txt and write 'Welcome to Python Quest' into it.",

code:
`with open("magic.txt","w") as file:
    file.write("Welcome to Python Quest")

print("File Created Successfully")`
},

{
title: "Challenge 2 : Read File",

text: "Read and display the contents of magic.txt.",

code:
`with open("magic.txt","r") as file:
    print(file.read())`
},

{
title: "Challenge 3 : Append Data",

text: "Append 'Master Pyro' to the existing file.",

code:
`with open("magic.txt","a") as file:
    file.write("\\nMaster Pyro")

print("Data Appended Successfully")`
},

{
title: "Challenge 4 : Read Line by Line",

text: "Read the file line by line using a loop.",

code:
`with open("magic.txt","r") as file:

    for line in file:

        print(line.strip())`
},

{
title: "Challenge 5 : Handle FileNotFoundError",

text: "Open a file safely using try-except.",

code:
`try:

    with open("unknown.txt","r") as file:

        print(file.read())

except FileNotFoundError:

    print("File Not Found")`
}

];


/*=========================================================
                VARIABLES
=========================================================*/

let currentChallenge = 0;

const editor = document.getElementById("pythonCode");

const output = document.getElementById("outputConsole");


/*=========================================================
                LOAD CHALLENGE
=========================================================*/

function loadChallenge(){

document.getElementById("challengeTitle").innerHTML =
challenges[currentChallenge].title;

document.getElementById("challengeText").innerHTML =
challenges[currentChallenge].text;

editor.value = challenges[currentChallenge].code;

output.textContent = "";

}


/*=========================================================
                RUN BUTTON
=========================================================*/

function runCode(){

output.textContent =
"🐍 Python execution will be enabled in Version 2.\n\n" +

"====================================\n" +

"Your Program\n" +

"====================================\n\n" +

editor.value +

"\n\n====================================\n" +

"Program Finished Successfully";

}


/*=========================================================
                CLEAR BUTTON
=========================================================*/

function clearEditor(){

editor.value = "";

output.textContent = "";

}


/*=========================================================
                NEXT CHALLENGE
=========================================================*/

function nextChallenge(){

currentChallenge++;

if(currentChallenge >= challenges.length){

alert("🏆 Congratulations!\n\nYou have completed all Text File Handling Challenges!");

currentChallenge = 0;

}

loadChallenge();

}


/*=========================================================
                PREVIOUS CHALLENGE
=========================================================*/

function previousChallenge(){

currentChallenge--;

if(currentChallenge < 0){

currentChallenge = challenges.length - 1;

}

loadChallenge();

}


/*=========================================================
                EVENTS
=========================================================*/

document.getElementById("runPython")
.addEventListener("click", runCode);

document.getElementById("clearPython")
.addEventListener("click", clearEditor);

document.getElementById("nextChallenge")
.addEventListener("click", nextChallenge);


/*=========================================================
                START
=========================================================*/

window.addEventListener("load", loadChallenge);

console.log("🐍 Coding Lab Loaded Successfully");
