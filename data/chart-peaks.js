/*====================================================

            MAGIC OF CODE
        CRYSTAL CHART PEAKS

            chart-peaks.js

            PART 1

====================================================*/

const KINGDOM_DATA={

/*====================================================
                BASIC INFORMATION
====================================================*/

id:"matplotlib",

title:"📊 Crystal Chart Peaks",

shortTitle:"Chart Peaks",

subtitle:"Master Graphos - Guardian of Data Visualization",

description:

"Welcome to Crystal Chart Peaks where glowing crystals transform raw numbers into beautiful visual stories. Master Graphos teaches Dino the magical art of Data Visualization using Matplotlib.",

master:"📊 Master Graphos",

/*====================================================
                    HERO
====================================================*/

hero:{

background:"assets/images/hero.jpg",

logo:"assets/images/master-graphos.png"

},

/*====================================================
                REQUIRED PACKAGES
====================================================*/

packages:["matplotlib"],

/*====================================================
                KINGDOM SECTIONS
====================================================*/

sections:[

{
id:"comicSection",
icon:"📖",
title:"Story Scroll",
subtitle:"The Mountain of Crystal Charts"
},

{
id:"animationSection",
icon:"🎬",
title:"Magic Vision",
subtitle:"Matplotlib Visualization"
},

{
id:"notesSection",
icon:"📚",
title:"Wisdom Grove",
subtitle:"Learn Data Visualization"
},

{
id:"codingSection",
icon:"🧪",
title:"Spell Forge",
subtitle:"Create Amazing Charts"
},

{
id:"quizSection",
icon:"👾",
title:"Monster Hunt",
subtitle:"Defeat the Chart Guardians"
},

{
id:"challengeSection",
icon:"🏆",
title:"Guardian Battle",
subtitle:"Restore the Crystal Graph"
}

],

/*====================================================
                    COMIC
====================================================*/

comic:{

title:"📖 The Mountain of Crystal Charts",

description:

"After mastering data storage, Dino reaches a mountain filled with glowing crystals. Each crystal reveals hidden patterns inside data. Master Graphos teaches Dino that data becomes meaningful only when it is visualized.",

folder:"assets/comic/",

totalPages:16

},

/*====================================================
                ANIMATION
====================================================*/

animation:{

title:"🎬 Introduction to Matplotlib",

description:

"Watch Master Graphos explain how graphs help us understand data easily.",

type:"youtube",

source:"https://www.youtube.com/embed/UO98lJQ3QGI"

},

/*====================================================
                    NOTES
====================================================*/

notes:{

title:"📚 Crystal Scrolls",

description:

"Master Graphos teaches the magical secrets of Data Visualization.",

cards:[

{

icon:"📊",

title:"What is Matplotlib?",

text:"Matplotlib is a popular Python library used to create graphs and charts. It helps convert numerical data into meaningful visual representations."

},

{

icon:"🐍",

title:"Importing Matplotlib",

text:"The pyplot module is imported using:\n\nimport matplotlib.pyplot as plt"

},

{

icon:"📈",

title:"Line Plot",

text:"A Line Plot is used to show trends or changes over time.\n\nExample:\nplt.plot(x,y)"

},

{

icon:"📉",

title:"Plot Function",

text:"The plot() function creates a basic line graph using X-axis and Y-axis values."

},

{

icon:"🏷️",

title:"Labels",

text:"Use xlabel() and ylabel() to display meaningful names on the X-axis and Y-axis."

},

{

icon:"📝",

title:"Chart Title",

text:"The title() function displays a heading for the graph.\n\nExample:\nplt.title('Sales Report')"

},

{

icon:"🎨",

title:"Colors",

text:"Graphs can use different colors such as red, blue, green, yellow, black and many others using the color parameter."

},

{

icon:"📍",

title:"Markers",

text:"Markers highlight individual data points.\nExamples include 'o', '*', '^', 's' and '+'."

},

{

icon:"〰️",

title:"Line Styles",

text:"Different line styles include solid (-), dashed (--), dotted (:) and dash-dot (-.)."

},

{

icon:"📊",

title:"Bar Graph",

text:"A Bar Graph compares values across different categories using vertical or horizontal bars."

},

{

icon:"🥧",

title:"Pie Chart",

text:"A Pie Chart represents data as parts of a whole using slices."

},

{

icon:"🎯",

title:"Scatter Plot",

text:"Scatter plots show relationships between two variables using individual points."

},

{

icon:"📦",

title:"Histogram",

text:"Histograms display the frequency distribution of continuous numerical data."

},

{

icon:"🔲",

title:"Grid and Legend",

text:"grid() adds grid lines while legend() explains multiple plots on the same graph."

},

{

icon:"💾",

title:"Saving Charts",

text:"Use savefig('chart.png') to save a graph as an image before or after displaying it."

}

]

},

  /*====================================================
                SPELL FORGE
====================================================*/

coding:{

title:"🧪 Spell Forge",

description:

"Practice creating beautiful graphs using Matplotlib and unlock the power of data visualization.",

defaultCode:

`import matplotlib.pyplot as plt

x=[1,2,3,4,5]
y=[2,4,6,8,10]

plt.plot(x,y)

plt.show()
`,

challenges:[

{

id:"lineChart",

icon:"📈",

title:"Simple Line Graph",

description:

"Create a line graph showing marks scored in five tests.",

code:

`import matplotlib.pyplot as plt

tests=[1,2,3,4,5]

marks=[68,72,80,76,90]

plt.plot(tests,marks)

plt.xlabel("Test Number")

plt.ylabel("Marks")

plt.title("Student Performance")

plt.show()`

},

{

id:"coloredLine",

icon:"🎨",

title:"Colored Line",

description:

"Create a red line graph with circle markers.",

code:

`import matplotlib.pyplot as plt

x=[1,2,3,4,5]

y=[3,5,2,8,6]

plt.plot(x,y,
         color="red",
         marker="o")

plt.show()`

},

{

id:"barChart",

icon:"📊",

title:"Bar Graph",

description:

"Display the sales of four products using a bar graph.",

code:

`import matplotlib.pyplot as plt

products=["Pen","Book","Bag","Bottle"]

sales=[50,80,35,60]

plt.bar(products,sales)

plt.title("Product Sales")

plt.show()`

},

{

id:"pieChart",

icon:"🥧",

title:"Pie Chart",

description:

"Display monthly expenses using a pie chart.",

code:

`import matplotlib.pyplot as plt

labels=["Food","Rent","Travel","Others"]

expense=[30,40,15,15]

plt.pie(expense,
        labels=labels,
        autopct="%1.1f%%")

plt.show()`

},

{

id:"scatterPlot",

icon:"🎯",

title:"Scatter Plot",

description:

"Show the relationship between study hours and marks.",

code:

`import matplotlib.pyplot as plt

hours=[1,2,3,4,5,6]

marks=[30,40,55,70,82,95]

plt.scatter(hours,marks)

plt.xlabel("Study Hours")

plt.ylabel("Marks")

plt.show()`

},

{

id:"histogram",

icon:"📦",

title:"Histogram",

description:

"Display the distribution of students' marks.",

code:

`import matplotlib.pyplot as plt

marks=[45,52,60,67,70,72,75,80,81,84,85,90,91]

plt.hist(marks)

plt.title("Marks Distribution")

plt.show()`

},

{

id:"gridLegend",

icon:"🔲",

title:"Grid and Legend",

description:

"Draw two lines with legend and grid.",

code:

`import matplotlib.pyplot as plt

x=[1,2,3,4]

boys=[50,60,70,80]

girls=[55,65,72,90]

plt.plot(x,boys,label="Boys")

plt.plot(x,girls,label="Girls")

plt.grid()

plt.legend()

plt.show()`

},

{

id:"multipleLines",

icon:"📉",

title:"Multiple Line Graph",

description:

"Display two subjects on the same graph.",

code:

`import matplotlib.pyplot as plt

tests=[1,2,3,4]

math=[70,75,80,90]

science=[68,74,79,88]

plt.plot(tests,math,label="Math")

plt.plot(tests,science,label="Science")

plt.legend()

plt.show()`

},

{

id:"saveFigure",

icon:"💾",

title:"Save Chart",

description:

"Save a graph as an image file.",

code:

`import matplotlib.pyplot as plt

x=[1,2,3]

y=[5,8,6]

plt.plot(x,y)

plt.savefig("graph.png")

plt.show()`

},

{

id:"studentDashboard",

icon:"🏆",

title:"Student Performance Dashboard",

description:

"Create a colorful chart showing student marks with title, labels, grid and markers.",

code:

`import matplotlib.pyplot as plt

subjects=["Eng","Math","Sci","CS","IP"]

marks=[82,91,88,95,90]

plt.plot(subjects,
         marks,
         marker="o",
         color="green")

plt.title("Student Report")

plt.xlabel("Subjects")

plt.ylabel("Marks")

plt.grid()

plt.show()`

}

]

},
/*====================================================
                MONSTER HUNT
====================================================*/

quiz:{

title:"👾 Monster Hunt",

description:

"Defeat the Crystal Guardians by answering Matplotlib questions.",

questions:[

{
question:"Which Python library is used for data visualization?",
options:[
"NumPy",
"Pandas",
"Matplotlib",
"Pickle"
],
answer:2
},

{
question:"Which module of Matplotlib is commonly imported?",
options:[
"math",
"pyplot",
"charts",
"graphs"
],
answer:1
},

{
question:"Which statement correctly imports pyplot?",
options:[
"import pyplot",
"import matplotlib",
"import matplotlib.pyplot as plt",
"from pyplot import *"
],
answer:2
},

{
question:"Which function is used to draw a line graph?",
options:[
"line()",
"draw()",
"plot()",
"graph()"
],
answer:2
},

{
question:"Which function displays the graph?",
options:[
"display()",
"show()",
"graph()",
"plot()"
],
answer:1
},

{
question:"Which function adds a title to the graph?",
options:[
"heading()",
"title()",
"name()",
"caption()"
],
answer:1
},

{
question:"Which function labels the X-axis?",
options:[
"xaxis()",
"xlabel()",
"xname()",
"labelx()"
],
answer:1
},

{
question:"Which function labels the Y-axis?",
options:[
"ylabel()",
"yaxis()",
"labely()",
"yname()"
],
answer:0
},

{
question:"Which chart is best for showing trends over time?",
options:[
"Pie Chart",
"Bar Chart",
"Line Chart",
"Histogram"
],
answer:2
},

{
question:"Which chart compares different categories?",
options:[
"Scatter Plot",
"Bar Chart",
"Histogram",
"Pie Chart"
],
answer:1
},

{
question:"Which chart shows parts of a whole?",
options:[
"Pie Chart",
"Line Chart",
"Scatter Plot",
"Histogram"
],
answer:0
},

{
question:"Which chart shows the relationship between two variables?",
options:[
"Bar Chart",
"Pie Chart",
"Scatter Plot",
"Histogram"
],
answer:2
},

{
question:"Which chart displays frequency distribution?",
options:[
"Histogram",
"Pie Chart",
"Scatter Plot",
"Bar Chart"
],
answer:0
},

{
question:"Which parameter changes the line color?",
options:[
"style",
"shade",
"color",
"paint"
],
answer:2
},

{
question:"Which parameter adds symbols at data points?",
options:[
"symbol",
"point",
"marker",
"dot"
],
answer:2
},

{
question:"Which parameter changes the line style?",
options:[
"linestyle",
"border",
"pattern",
"design"
],
answer:0
},

{
question:"Which function displays the legend?",
options:[
"label()",
"legend()",
"guide()",
"info()"
],
answer:1
},

{
question:"Which function displays grid lines?",
options:[
"table()",
"grid()",
"line()",
"background()"
],
answer:1
},

{
question:"Which function saves a graph as an image?",
options:[
"save()",
"savefig()",
"export()",
"write()"
],
answer:1
},

{
question:"Which parameter shows percentage values in a pie chart?",
options:[
"labels",
"autopct",
"legend",
"title"
],
answer:1
},

{
question:"Which marker represents a circle?",
options:[
"*",
"o",
"s",
"^"
],
answer:1
},

{
question:"Which marker represents a square?",
options:[
"o",
"s",
"x",
"+"
],
answer:1
},

{
question:"Which function creates a bar graph?",
options:[
"plot()",
"bar()",
"pie()",
"hist()"
],
answer:1
},

{
question:"Which function creates a histogram?",
options:[
"hist()",
"bar()",
"plot()",
"scatter()"
],
answer:0
},

{
question:"Matplotlib is mainly used for:",
options:[
"File Handling",
"Database Management",
"Data Visualization",
"Networking"
],
answer:2
}

]

},
  
  
