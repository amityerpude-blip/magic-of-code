/*====================================================

            MAGIC OF CODE
            DRAGON SQL KINGDOM

            sql.js

====================================================*/

const KINGDOM_DATA={

/*====================================================
                BASIC INFO
====================================================*/

id:"sql",

title:"🐉 Dragon SQL Kingdom",

shortTitle:"Dragon SQL",

subtitle:"Where Data Becomes Organized Magic",

description:

"Welcome to the mighty Dragon SQL Kingdom where Dragon SQL teaches Dino how to organize, store, search and manage magical information using Structured Query Language.",

master:"🐉 Dragon SQL",


/*====================================================
                HERO
====================================================*/

hero:{

background:"assets/images/hero.jpg",

logo:"assets/images/master-sql.png"

},


/*====================================================
                REQUIRED PACKAGES
====================================================*/

packages:[

"sql"

],


/*====================================================
                KINGDOM SECTIONS
====================================================*/

sections:[

{
id:"comicSection",
icon:"📖",
title:"Story Scroll",
subtitle:"Read Dino's magical adventure"
},

{
id:"animationSection",
icon:"🎬",
title:"Magic Vision",
subtitle:"Watch the animated lesson"
},

{
id:"notesSection",
icon:"📚",
title:"Wisdom Grove",
subtitle:"Learn important concepts"
},

{
id:"codingSection",
icon:"🧪",
title:"Spell Forge",
subtitle:"Practice SQL queries"
},

{
id:"quizSection",
icon:"🧩",
title:"Monster Hunt",
subtitle:"Solve practice challenges"
},

{
id:"challengeSection",
icon:"🏆",
title:"Guardian Battle",
subtitle:"Complete the final quest"
}

],

/*====================================================
                COMIC
====================================================*/

comic:{

title:"📖 Dragon Chronicles",

description:

"Follow Dino as Dragon SQL teaches him the magical world of databases.",

folder:"assets/comic/",

totalPages:16

},


/*====================================================
                ANIMATION
====================================================*/

animation:{

title:"🎬 Crystal Visions",

description:

"Watch Dragon SQL organize magical information using SQL.",

type:"youtube",

source:"https://www.youtube.com/embed/YOUR_VIDEO_ID"

/*====================================================
                NOTES
====================================================*/

notes:{

title:"🐉 Dragon Wisdom Library",

description:

"Dragon SQL teaches Dino how databases organize and retrieve information efficiently.",

cards:[

{
icon:"🗄",
title:"What is SQL?",
text:"SQL (Structured Query Language) is a language used to create, manage and retrieve data from databases."
},

{
icon:"📦",
title:"Database",
text:"A database is an organized collection of related information stored electronically."
},

{
icon:"📋",
title:"Table",
text:"A table stores data in rows and columns. Each table represents one type of information."
},

{
icon:"📄",
title:"Record (Row)",
text:"A record is one complete row of information in a table."
},

{
icon:"📑",
title:"Field (Column)",
text:"A field represents one attribute such as Roll Number, Name or Marks."
},

{
icon:"🔍",
title:"SELECT",
text:"SELECT is used to retrieve data from one or more tables."
},

{
icon:"🎯",
title:"WHERE",
text:"WHERE filters records according to a specified condition."
},

{
icon:"↕",
title:"ORDER BY",
text:"ORDER BY arranges data in ascending or descending order."

},

{
icon:"📊",
title:"Aggregate Functions",
text:"COUNT(), SUM(), AVG(), MIN() and MAX() perform calculations on groups of records."
},

{
icon:"➕",
title:"INSERT",
text:"INSERT adds new records into a table."
},

{
icon:"✏",
title:"UPDATE",
text:"UPDATE modifies existing records in a table."
},

{
icon:"🗑",
title:"DELETE",
text:"DELETE removes records from a table."
},

{
icon:"🛠",
title:"CREATE TABLE",
text:"CREATE TABLE creates a new table in the database."
},

{
icon:"🔑",
title:"Primary Key",
text:"A Primary Key uniquely identifies every record in a table."
},

{
icon:"🌍",
title:"Real World Applications",
text:"SQL is used in schools, banks, hospitals, railway reservation systems, e-commerce and social media."

}

]

},

},

/*====================================================
                SPELL FORGE
====================================================*/

coding:{

title:"🧪 Dragon Query Forge",

description:

"Write and execute SQL queries to solve magical database challenges.",

defaultCode:

`SELECT *
FROM Students;`,

challenges:[

{

id:"select",

icon:"🔍",

title:"SELECT",

description:"Display all records from the Students table.",

code:

`SELECT *
FROM Students;`

},

{

id:"where",

icon:"🎯",

title:"WHERE",

description:"Display students scoring more than 80 marks.",

code:

`SELECT *
FROM Students
WHERE Marks > 80;`

},

{

id:"orderby",

icon:"📊",

title:"ORDER BY",

description:"Display students in descending order of marks.",

code:

`SELECT *
FROM Students
ORDER BY Marks DESC;`

},

{

id:"count",

icon:"🔢",

title:"COUNT",

description:"Count the total number of students.",

code:

`SELECT COUNT(*)
FROM Students;`

},

{

id:"average",

icon:"📈",

title:"AVG",

description:"Find the average marks of all students.",

code:

`SELECT AVG(Marks)
FROM Students;`

},

{

id:"maximum",

icon:"🏆",

title:"MAX",

description:"Find the highest marks.",

code:

`SELECT MAX(Marks)
FROM Students;`

}

]

},

/*====================================================
                QUIZ
====================================================*/

quiz:{

title:"👾 Monster Hunt",

description:

"Defeat every SQL Monster by answering one question at a time.",

questions:[

{
question:"What does SQL stand for?",
options:[
"Structured Query Language",
"Simple Query Language",
"Standard Question Language",
"System Query Language"
],
answer:0
},

{
question:"Which command displays all records from a table?",
options:[
"SHOW",
"DISPLAY",
"SELECT",
"PRINT"
],
answer:2
},

{
question:"Which clause is used to filter records?",
options:[
"ORDER BY",
"WHERE",
"GROUP BY",
"FROM"
],
answer:1
},

{
question:"Which command adds a new record to a table?",
options:[
"INSERT",
"UPDATE",
"ADD",
"CREATE"
],
answer:0
},

{
question:"Which function counts the number of records?",
options:[
"SUM()",
"AVG()",
"COUNT()",
"TOTAL()"
],
answer:2
},

{
question:"Which function returns the highest value?",
options:[
"TOP()",
"MAX()",
"HIGH()",
"UPPER()"
],
answer:1
},

{
question:"Which clause arranges records in ascending or descending order?",
options:[
"WHERE",
"GROUP BY",
"ORDER BY",
"SORT"
],
answer:2
},

{
question:"Which command modifies existing records?",
options:[
"ALTER",
"UPDATE",
"INSERT",
"DELETE"
],
answer:1
},

{
question:"Which command removes records from a table?",
options:[
"REMOVE",
"DROP",
"DELETE",
"CLEAR"
],
answer:2
},

{
question:"A table stores data in ______.",
options:[
"Rows and Columns",
"Pages",
"Folders",
"Blocks"
],
answer:0
}

]

},

/*====================================================
                FINAL CHALLENGE
====================================================*/

challenge:{

title:"🏆 Dragon's Final Challenge",

description:

"Complete the final mission to restore the Dragon SQL Kingdom.",

icon:"🐉",

heading:"The Lost Royal Database",

story:

"The royal records of the Dragon Kingdom have become disorganized. Use SQL to retrieve, organize and manage the information before the kingdom loses its ancient knowledge forever.",

tasks:[

"🗄 Display all student records using SELECT",

"🎯 Retrieve students scoring more than 80 marks",

"📊 Arrange students by highest marks",

"🔢 Count the total number of students",

"📈 Find the average marks",

"🏆 Find the highest marks",

"➕ Insert a new student record",

"✏ Update an existing record",

"🗑 Delete an incorrect record",

"🐉 Become the Dragon SQL Master"

]

},


/*====================================================
                FOOTER
====================================================*/

footer:{

button:"🕸 Continue to Computer Network Kingdom",

next:"../computer-network/index.html"

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



