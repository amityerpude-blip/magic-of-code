/*====================================================

            MAGIC OF CODE
            CSV SAVANNAH

====================================================*/

const KINGDOM_DATA={

id:"csv",

shortTitle:"CSV Savannah",

title:"🦁 CSV Savannah",

subtitle:"Master CSV - Guardian of Structured Data",

description:
"Journey across the golden Savannah where Master CSV teaches the art of storing, reading and analysing tabular data.",

packages:[],

/*====================================================
                NAVIGATION
====================================================*/

sections:[

{
id:"comicSection",
icon:"📖",
title:"Comic",
subtitle:"Adventure Begins"
},

{
id:"animationSection",
icon:"🎬",
title:"Animation",
subtitle:"Watch & Learn"
},

{
id:"notesSection",
icon:"📚",
title:"Notes",
subtitle:"Study Scrolls"
},

{
id:"codingSection",
icon:"💻",
title:"Coding",
subtitle:"Practice Magic"
},

{
id:"quizSection",
icon:"👾",
title:"Quiz",
subtitle:"Monster Hunt"
},

{
id:"challengeSection",
icon:"🏆",
title:"Challenge",
subtitle:"Final Mission"
}

],

/*====================================================
                COMIC
====================================================*/

comic:{

title:"The Mystery of the Missing Records",

description:
"Join Dino and Master CSV as they discover the power of Comma Separated Values.",

folder:"assets/comics/",

totalPages:11

},

/*====================================================
                ANIMATION
====================================================*/

animation:{

title:"CSV Adventure",

description:
"Watch Master CSV explain how CSV files store structured data.",

type:"youtube",

source:"https://www.youtube.com/embed/VIDEO_ID"

},

/*====================================================
                NOTES
====================================================*/

notes:{

title:"CSV Learning Scrolls",

description:
"Master CSV teaches Dino how information is stored and exchanged using CSV files.",

cards:[

{
icon:"📄",
title:"What is CSV?",
text:"CSV (Comma Separated Values) is a plain text file used to store tabular data. Each line represents one record and values are separated by commas."
},

{
icon:"📋",
title:"Why Use CSV?",
text:"CSV files are simple, lightweight and supported by almost every programming language, spreadsheet application and database."
},

{
icon:"📝",
title:"Structure of a CSV File",
text:"The first row usually contains column headings. Every subsequent row contains one complete record."
},

{
icon:"📂",
title:"Importing CSV Module",
text:"Python provides a built-in csv module. Import it using: import csv"
},

{
icon:"📖",
title:"Reading a CSV File",
text:"Use csv.reader() to read records from a CSV file one row at a time."
},

{
icon:"✍️",
title:"Writing CSV Files",
text:"Use csv.writer() to create CSV files and write rows using writer.writerow() or writer.writerows()."
},

{
icon:"📑",
title:"DictReader",
text:"csv.DictReader() reads each row as a dictionary where column names become keys."
},

{
icon:"🗃️",
title:"DictWriter",
text:"csv.DictWriter() writes dictionaries into a CSV file using field names as column headers."
},

{
icon:"➕",
title:"Appending Data",
text:"Open the file in append mode ('a') to add new records without deleting existing data."
},

{
icon:"⚠️",
title:"newline=''",
text:"While writing CSV files, always use newline='' inside open() to avoid blank lines on some operating systems."
},

{
icon:"🔍",
title:"Delimiter",
text:"By default CSV files use commas, but other delimiters like semicolons or tabs can also be specified."
},

{
icon:"📊",
title:"Real Life Uses",
text:"CSV files are widely used in schools, banks, hospitals, online stores, surveys and business reports to exchange data."
}

]

},

/*====================================================
                CODING
====================================================*/

coding:{

title:"CSV Coding Lab",

description:
"Practice reading and writing CSV files using Python.",

defaultCode:
`import csv

print("Welcome to CSV Savannah!")`,

challenges:[

{
id:"readcsv",
icon:"📖",
title:"Read CSV",
description:"Read all records from a CSV file.",
code:`import csv

`
},

{
id:"writecsv",
icon:"✍️",
title:"Write CSV",
description:"Create a CSV file and write student records.",
code:`import csv

`
},

{
id:"dictreader",
icon:"📑",
title:"Dictionary Reader",
description:"Read CSV records using DictReader.",
code:`import csv

`
}

]

},

/*====================================================
                QUIZ
====================================================*/

quiz:{

title:"CSV Monster Hunt",

description:
"Defeat every CSV Monster by answering one question at a time.",

questions:[

{
question:"What does CSV stand for?",
options:[
"Comma Separated Values",
"Computer Stored Values",
"Common Spreadsheet Values",
"Column Saved Variables"
],
answer:0
},

{
question:"Which Python module is used to work with CSV files?",
options:[
"os",
"csv",
"file",
"pandas"
],
answer:1
},

{
question:"Which function is used to read a CSV file?",
options:[
"csv.reader()",
"csv.write()",
"csv.open()",
"csv.load()"
],
answer:0
},

{
question:"Which function writes a single row into a CSV file?",
options:[
"writer.writerow()",
"writer.write()",
"writer.print()",
"writer.append()"
],
answer:0
},

{
question:"Which mode is used to append data to a CSV file?",
options:[
"'r'",
"'w'",
"'a'",
"'x'"
],
answer:2
},

{
question:"Which class reads each row as a dictionary?",
options:[
"DictReader",
"DictWriter",
"Reader",
"Writer"
],
answer:0
},

{
question:"Why is newline='' used while writing CSV files?",
options:[
"To avoid blank lines",
"To increase speed",
"To encrypt data",
"To sort records"
],
answer:0
},

{
question:"Which method writes multiple rows at once?",
options:[
"writer.writerow()",
"writer.writerows()",
"writer.writeall()",
"writer.multiple()"
],
answer:1
},

{
question:"CSV files are mainly used for:",
options:[
"Image editing",
"Video editing",
"Storing tabular data",
"Creating web pages"
],
answer:2
},

{
question:"CSV files can be opened directly in:",
options:[
"MS Excel",
"Notepad",
"Google Sheets",
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

title:"🏆 Guardian's Challenge",

description:
"Complete the final mission to restore the Savannah records.",

icon:"🦁",

heading:"The Lost Animal Census",

story:
"The records of every animal living in the Savannah have been scattered. Master CSV needs your help to rebuild the Kingdom's data archive before sunset.",

tasks:[

"📂 Import the csv module",

"📄 Open the animals.csv file",

"📖 Read and display all records",

"➕ Add a new animal record",

"💾 Save the updated CSV file",

"🏆 Verify that every record has been stored successfully"

]

},
/*====================================================
                FOOTER
====================================================*/

footer:{

button:"➡ Next Kingdom",

next:"../pandas-kingdom/index.html"

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
