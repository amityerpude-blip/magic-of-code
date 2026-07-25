/*====================================================

            MAGIC OF CODE
            SQL DRAGON KINGDOM

            sql-dragon.js

====================================================*/

const KINGDOM_DATA={

/*====================================================
                BASIC INFO
====================================================*/

id:"sql",

title:"🐉 SQL Dragon Kingdom",

shortTitle:"SQL Dragon Kingdom",

subtitle:"The Ancient Kingdom of Magical Databases",

description:
"Deep inside the Dragon Citadel lies the world's greatest collection of magical databases. Master SQL Dragon teaches Dino how to search, organize and command data using the powerful language of SQL.",

master:"🐉 Master SQL Dragon",

/*====================================================
                HERO
====================================================*/

hero:{

background:"../assets/backgrounds/sql-dragon-bg.jpg",

logo:"../assets/masters/master-sql.png"

},

/*====================================================
            REQUIRED PACKAGES
====================================================*/

packages:[]
,
/*====================================================
                KINGDOM SECTIONS
====================================================*/

sections:[

{
id:"comicSection",
icon:"📖",
title:"Dragon Scroll",
subtitle:"Read Dino's SQL adventure"
},

{
id:"animationSection",
icon:"🎬",
title:"Magic Vision",
subtitle:"Watch SQL come alive"
},

{
id:"notesSection",
icon:"📚",
title:"Knowledge Vault",
subtitle:"Learn SQL concepts"
},

{
id:"codingSection",
icon:"🗄️",
title:"Dragon SQL Laboratory",
subtitle:"Write and execute SQL queries"
},

{
id:"quizSection",
icon:"👾",
title:"Monster Hunt",
subtitle:"Answer SQL challenges"
},

{
id:"challengeSection",
icon:"🐉",
title:"Dragon's Final Trial",
subtitle:"Complete the kingdom mission"
}

]
,
/*====================================================
                COMIC
====================================================*/

comic:{

title:"📖 Dragon Scroll Chronicles",

description:
"Follow Dino as he enters the Dragon Kingdom and discovers the ancient language used to command magical databases.",

folder:"assets/comic/",

totalPages:16

},
,
/*====================================================
                ANIMATION
====================================================*/

animation:{

title:"🎬 Dragon's SQL Lessons",

description:
"Watch Master SQL Dragon demonstrate how databases store, search and retrieve magical records using SQL.",

type:"youtube",

source:"https://www.youtube.com/embed/YOUR_VIDEO_ID"

},
,
/*====================================================
                NOTES
====================================================*/

notes:{

title:"🐉 Dragon Knowledge Vault",

description:
"Master SQL Dragon reveals the ancient secrets of relational databases and SQL magic.",

cards:[

{
icon:"🗄️",
title:"What is SQL?",
text:"SQL (Structured Query Language) is the standard language used to create, manage and retrieve data from relational databases."
},

{
icon:"💾",
title:"Database",
text:"A database is an organized collection of related data stored electronically for easy access and management."
},

{
icon:"📋",
title:"Table",
text:"A table stores data in rows and columns. Each table represents one type of information."
},

{
icon:"📄",
title:"Record",
text:"Each row in a table is called a record and represents one complete entry."
},

{
icon:"🏷️",
title:"Field",
text:"Each column in a table is called a field and stores one type of information such as Name or Marks."
},

{
icon:"🔑",
title:"Primary Key",
text:"A Primary Key uniquely identifies every record in a table. No two records can have the same primary key."
},

{
icon:"🔗",
title:"Foreign Key",
text:"A Foreign Key creates a relationship between two tables by referring to the Primary Key of another table."
},

{
icon:"📥",
title:"SELECT",
text:"SELECT retrieves data from one or more tables."

},

{
icon:"➕",
title:"INSERT",
text:"INSERT adds new records into a table."
},

{
icon:"✏️",
title:"UPDATE",
text:"UPDATE modifies existing records in a table."
},

{
icon:"🗑️",
title:"DELETE",
text:"DELETE removes records from a table."
},

{
icon:"🔎",
title:"WHERE Clause",
text:"WHERE filters records that satisfy a given condition."
},

{
icon:"📊",
title:"ORDER BY",
text:"ORDER BY sorts records in ascending or descending order."
},

{
icon:"📈",
title:"Aggregate Functions",
text:"COUNT(), SUM(), AVG(), MIN() and MAX() are used to perform calculations on groups of records."
},

{
icon:"🐉",
title:"Real World Use",
text:"SQL powers banking systems, schools, hospitals, shopping websites, railway reservations and nearly every modern application."

}

]

},
,
/*====================================================
                SQL LABORATORY
====================================================*/

coding:{

title:"🐉 Dragon SQL Laboratory",

description:
"Write SQL queries and command the magical database just like a real Database Administrator.",

engine:"sql",

defaultCode:

`SELECT * FROM Students;`,

database:"assets/database/school.db",

challenges:[

{

id:"select",

icon:"📋",

title:"SELECT",

description:"Display all records from Students table.",

code:

`SELECT * FROM Students;`

},

{

id:"where",

icon:"🔎",

title:"WHERE",

description:"Display students scoring more than 80 marks.",

code:

`SELECT * FROM Students
WHERE Marks>80;`

},

{

id:"orderby",

icon:"📊",

title:"ORDER BY",

description:"Arrange students according to marks.",

code:

`SELECT * FROM Students
ORDER BY Marks DESC;`

},

{

id:"count",

icon:"🔢",

title:"COUNT",

description:"Count total students.",

code:

`SELECT COUNT(*) FROM Students;`

},

{

id:"average",

icon:"📈",

title:"AVG",

description:"Find average marks.",

code:

`SELECT AVG(Marks)
FROM Students;`

}

]

},
,
/*====================================================
                MONSTER HUNT QUIZ
====================================================*/

quiz:{

title:"👾 Monster Hunt",

description:
"Defeat the SQL Monsters by answering one question at a time.",

passingScore:60,

questions:[

{
question:"What does SQL stand for?",
options:[
"Structured Query Language",
"Simple Question Language",
"Standard Query Logic",
"System Query Language"
],
answer:0
},

{
question:"Which SQL command retrieves data from a table?",
options:[
"GET",
"SELECT",
"FETCH",
"OPEN"
],
answer:1
},

{
question:"Which clause is used to filter records?",
options:[
"ORDER BY",
"GROUP BY",
"WHERE",
"HAVING"
],
answer:2
},

{
question:"Which SQL command inserts a new record?",
options:[
"INSERT",
"UPDATE",
"ADD",
"CREATE"
],
answer:0
},

{
question:"Which SQL command modifies existing records?",
options:[
"ALTER",
"UPDATE",
"CHANGE",
"EDIT"
],
answer:1
},

{
question:"Which SQL command removes records from a table?",
options:[
"DELETE",
"REMOVE",
"DROP",
"CLEAR"
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
question:"Which clause arranges records in ascending or descending order?",
options:[
"SORT BY",
"GROUP BY",
"ORDER BY",
"FILTER BY"
],
answer:2
},

{
question:"Which key uniquely identifies every record in a table?",
options:[
"Foreign Key",
"Unique Key",
"Primary Key",
"Master Key"
],
answer:2
},

{
question:"Which SQL statement creates a new table?",
options:[
"NEW TABLE",
"MAKE TABLE",
"CREATE TABLE",
"BUILD TABLE"
],
answer:2
}

]

},
,
/*====================================================
                DRAGON'S FINAL CHALLENGE
====================================================*/

challenge:{

title:"🐉 Dragon's Final Trial",

description:
"Face the mighty SQL Dragon and prove your mastery over relational databases.",

icon:"🐉",

heading:"The Lost Royal Database",

story:

"The Royal Library has lost its magical database. Master SQL Dragon challenges Dino to restore the kingdom by writing powerful SQL queries.",

tasks:[

"🗄️ Create a table named Students",

"➕ Insert five student records",

"📋 Display all student records using SELECT",

"🔎 Find students scoring more than 80 marks",

"📊 Arrange records in descending order of Marks",

"📈 Find the average marks using AVG()",

"🔢 Count the total number of students",

"🏆 Identify the highest scoring student",

"🗑️ Delete one record safely",

"👑 Save the Dragon Kingdom Database"

],

reward:{

xp:500,

coins:250,

badge:"🐉 SQL Dragon Slayer"

}

},
            ,
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

magic:"../assets/audio/magic.mp3",

button:"../assets/audio/button.mp3",

hover:"../assets/audio/hover.mp3",

page:"../assets/audio/page-flip.mp3",

success:"../assets/audio/success.mp3",

wrong:"../assets/audio/wrong.mp3",

reward:"../assets/audio/reward.mp3"

}

};
