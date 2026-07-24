/*====================================================

            MAGIC OF CODE
            PANDAS PARADISE

            pandas.js

====================================================*/

const KINGDOM_DATA={

/*====================================================
                BASIC INFO
====================================================*/

id:"pandas",

title:"🐼 Pandas Paradise",

shortTitle:"Pandas Paradise",

subtitle:"Where Data Blossoms into Knowledge",

description:

"Welcome to the enchanted Bamboo Kingdom where Master Pandas teaches Dino how to organize, analyze and understand magical data using the power of Pandas.",

master:"🐼 Master Pandas",


/*====================================================
                HERO
====================================================*/

hero:{

background:"assets/images/hero.jpg",

logo:"assets/images/master-pandas.png"

},
/*====================================================
                REQUIRED PACKAGES
====================================================*/

packages:[

"pandas",

"matplotlib"

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
subtitle:"Practice Pandas coding"
},

{
id:"quizSection",
            icon:"🧩",
title:"Monster Hunt"
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

title:"📖 Bamboo Chronicles",

description:

"Follow Dino as he discovers how scattered magical records become beautiful DataFrames.",

folder:"assets/comic/",

totalPages:16

},


/*====================================================
                ANIMATION
====================================================*/

animation:{

title:"🎬 Crystal Visions",

description:

"Watch Master Pandas transform magical data into organized tables.",

type:"youtube",

source:"https://www.youtube.com/embed/YOUR_VIDEO_ID"

},


/*====================================================
                NOTES
====================================================*/

notes:{

title:"🎍 Panda Wisdom Grove",

description:

"Master Pandas reveals the magical secrets of data analysis and visualization.",

cards:[

{
icon:"🐼",
title:"What is Pandas?",
text:"Pandas is a powerful Python library used for data analysis, manipulation and handling structured data efficiently."
},

{
icon:"📦",
title:"Series",
text:"A Series is a one-dimensional labelled array capable of storing any data type."
},

{
icon:"🗂",
title:"DataFrame",
text:"A DataFrame is a two-dimensional table consisting of rows and columns."
},

{
icon:"📄",
title:"Import Pandas",
text:"Import the library using: import pandas as pd"
},

{
icon:"📥",
title:"Reading CSV Files",
text:"Use pd.read_csv('students.csv') to load data from CSV files into a DataFrame."
},

{
icon:"🔍",
title:"Exploring Data",
text:"Use head(), tail(), info(), shape and describe() to understand the dataset."
},

{
icon:"🧹",
title:"Selecting & Filtering",
text:"Select columns, filter rows using conditions, and locate data using loc[] and iloc[]."
},

{
icon:"➕",
title:"Data Operations",
text:"Perform sorting, adding columns, deleting columns, handling missing values and calculations."
},

{
icon:"📊",
title:"Statistics",
text:"Use sum(), mean(), median(), min(), max(), count() and value_counts() for analysis."
},

{
icon:"📈",
title:"Data Visualization",
text:"Matplotlib is used with Pandas to create charts and graphs for better understanding."
},

{
icon:"📉",
title:"Matplotlib Basics",
text:"Import using: import matplotlib.pyplot as plt"
},

{
icon:"📊",
title:"Types of Charts",
text:"Common charts include Line, Bar, Pie, Histogram and Scatter plots."
},

{
icon:"🎨",
title:"Customizing Graphs",
text:"Use title(), xlabel(), ylabel(), legend(), grid() and color options to improve charts."
},

{
icon:"💾",
title:"Saving Data",
text:"Use to_csv() to save a DataFrame into a CSV file after making changes."
},

{
icon:"✨",
title:"Real World Applications",
text:"Pandas is widely used in data science, business analytics, AI, finance, healthcare and scientific research."
}

]

},

/*====================================================
                SPELL FORGE
====================================================*/

coding:{

title:"🧪 Data Alchemy Lab",

description:

"Experiment with magical datasets using Python.",

defaultCode:

`import pandas as pd

students={

"Name":["Dino","Lily","Max"],

"Marks":[85,92,78]

}

df=pd.DataFrame(students)

print(df)
`,

challenges:[

{

id:"series",

icon:"🌱",

title:"Series",

description:"Create a Pandas Series.",

code:

`import pandas as pd

`

},

{

id:"dataframe",

icon:"📦",

title:"DataFrame",

description:"Create a DataFrame.",

code:

`import pandas as pd

`

},

{

id:"csv",

icon:"📄",

title:"Read CSV",

description:"Load a CSV file.",

code:

`import pandas as pd

`

}

]

},


/*====================================================
                PRACTICE
====================================================*/

quiz:{

title:"👾 Monster Hunt",

description:"Defeat every monster by answering one question at a time.",

questions:[

{
question:"Which library is imported as pd?",
options:["NumPy","Pandas","Matplotlib","CSV"],
answer:1
},

{
question:"Which function reads a CSV file?",
options:[
"readfile()",
"open()",
"read_csv()",
"csv.read()"
],
answer:2
},

{
question:"Which structure stores tabular data?",
options:[
"Series",
"Tuple",
"DataFrame",
"Dictionary"
],
answer:2
},

{
question:"Which command shows the first 5 rows?",
options:[
"head()",
"tail()",
"top()",
"show()"
],
answer:0
},

{
question:"Which function gives average values?",
options:[
"sum()",
"count()",
"mean()",
"shape()"
],
answer:2
}

]

},
/*====================================================
                FINAL CHALLENGE
====================================================*/

challenge:{

title:"🏆 Guardian's Challenge",

description:

"Complete the final mission to restore the Bamboo Kingdom.",

icon:"🐼",

heading:"The Lost Bamboo Records",

story:

"The magical records of the Bamboo Village have become disorganized. Restore them using Pandas.",

tasks:[

"🌱 Import Pandas",

"📄 Read CSV",

"📊 Display first five rows",

"📈 Find highest marks",

"✨ Filter toppers",

"💾 Save cleaned data"

]

},


/*====================================================
                FOOTER
====================================================*/

footer:{

button:"🐉 Continue to SQL Dragon Kingdom",

next:"../sql-dragon/index.html"

},


/*====================================================
                AUDIO
====================================================*/

audio:{

magic:"assets/sounds/magic.mp3",

button:"assets/sounds/button.mp3",

page:"assets/sounds/page-flip.mp3"

}

};
