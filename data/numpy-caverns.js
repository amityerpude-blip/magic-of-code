/*====================================================

            MAGIC OF CODE
        NUMPY CRYSTAL CAVERNS

        numpy-caverns.js

            PART 1

====================================================*/

const KINGDOM_DATA={

/*====================================================
                BASIC INFORMATION
====================================================*/

id:"numpy",

title:"💎 NumPy Crystal Caverns",

shortTitle:"NumPy Caverns",

subtitle:"Master Crystalon - Guardian of Numerical Magic",

description:

"Deep beneath the Crystal Mountains lies the NumPy Crystal Caverns. Here, Master Crystalon teaches Dino how magical arrays can process thousands of numbers with incredible speed and power.",

master:"💎 Master Crystalon",

/*====================================================
                    HERO
====================================================*/

hero:{

background:"assets/images/hero.jpg",

logo:"assets/images/master-crystalon.png"

},

/*====================================================
                REQUIRED PACKAGES
====================================================*/

packages:["numpy"],

/*====================================================
                KINGDOM SECTIONS
====================================================*/

sections:[

{
id:"comicSection",
icon:"📖",
title:"Story Scroll",
subtitle:"The Crystal Arrays"
},

{
id:"animationSection",
icon:"🎬",
title:"Magic Vision",
subtitle:"NumPy Fundamentals"
},

{
id:"notesSection",
icon:"📚",
title:"Crystal Scrolls",
subtitle:"Master Numerical Computing"
},

{
id:"codingSection",
icon:"🧪",
title:"Spell Forge",
subtitle:"Practice NumPy"
},

{
id:"quizSection",
icon:"👾",
title:"Monster Hunt",
subtitle:"Defeat the Crystal Golems"
},

{
id:"challengeSection",
icon:"🏆",
title:"Guardian Battle",
subtitle:"Restore the Crystal Matrix"
}

],

/*====================================================
                    COMIC
====================================================*/

comic:{

title:"📖 The Crystal Arrays",

description:

"Deep inside the glowing caverns, Dino discovers magical crystals capable of storing thousands of numbers. Master Crystalon explains that ordinary Python lists are powerful, but NumPy arrays possess ancient magic that makes numerical calculations incredibly fast.",

folder:"assets/comic/",

totalPages:16

},

/*====================================================
                ANIMATION
====================================================*/

animation:{

title:"🎬 Introduction to NumPy",

description:

"Watch Master Crystalon explain why NumPy is the foundation of scientific computing and artificial intelligence.",

type:"youtube",

source:"https://www.youtube.com/embed/QUT1VHiLmmI"

},

/*====================================================
                    NOTES
====================================================*/

notes:{

title:"📚 Crystal Scrolls",

description:

"Learn the magical powers of NumPy arrays and numerical computing.",

cards:[

{

icon:"💎",

title:"What is NumPy?",

text:"NumPy (Numerical Python) is a Python library used for fast numerical computations. It provides powerful multidimensional arrays and mathematical functions."

},

{

icon:"📦",

title:"Importing NumPy",

text:"Import NumPy using:\n\nimport numpy as np\n\nThe alias 'np' is the standard convention."

},

{

icon:"🔢",

title:"Creating Arrays",

text:"Arrays are created using np.array().\n\nExample:\narr=np.array([10,20,30])"

},

{

icon:"📏",

title:"Array Dimensions",

text:"Arrays can be one-dimensional, two-dimensional or multidimensional depending on how data is organized."

},

{

icon:"📐",

title:"Array Shape",

text:"The shape attribute returns the number of rows and columns in an array.\n\nExample:\narr.shape"

},

{

icon:"📊",

title:"Array Size",

text:"The size attribute returns the total number of elements present in an array."

},

{

icon:"🏷️",

title:"Data Type",

text:"The dtype attribute displays the data type of array elements such as int32, float64 or bool."

},

{

icon:"📚",

title:"Indexing",

text:"Individual elements of an array are accessed using indexes beginning from zero."

},

{

icon:"✂️",

title:"Slicing",

text:"Slicing extracts a portion of an array using the colon (:) operator."

},

{

icon:"🔄",

title:"Reshaping Arrays",

text:"reshape() changes the dimensions of an array without changing its data."

},

{

icon:"➕",

title:"Array Operations",

text:"NumPy performs element-wise addition, subtraction, multiplication and division efficiently."

},

{

icon:"📈",

title:"Aggregate Functions",

text:"Functions like sum(), mean(), min(), max() and std() perform statistical calculations."

},

{

icon:"🎲",

title:"Random Module",

text:"np.random generates random numbers, random arrays and random selections."

},

{

icon:"⚡",

title:"Advantages of NumPy",

text:"NumPy is faster, memory efficient and widely used in Data Science, AI, Machine Learning and Scientific Computing."

},

{

icon:"🌍",

title:"Real-world Applications",

text:"NumPy powers weather forecasting, robotics, image processing, artificial intelligence, finance, medical research and space exploration."

}

]

},

  /*====================================================
                SPELL FORGE
====================================================*/

coding:{

title:"🧪 Spell Forge",

description:

"Master the magical power of NumPy by creating arrays and performing fast numerical computations.",

defaultCode:

`import numpy as np

arr=np.array([10,20,30,40,50])

print(arr)
`,

challenges:[

{

id:"createArray",

icon:"💎",

title:"Create an Array",

description:

"Create a one-dimensional NumPy array containing five numbers.",

code:

`import numpy as np

arr=np.array([10,20,30,40,50])

print(arr)`

},

{

id:"arrayAttributes",

icon:"📊",

title:"Array Attributes",

description:

"Display the shape, size and data type of an array.",

code:

`import numpy as np

arr=np.array([[10,20,30],
              [40,50,60]])

print("Shape :",arr.shape)

print("Size :",arr.size)

print("Datatype :",arr.dtype)`

},

{

id:"indexing",

icon:"📚",

title:"Array Indexing",

description:

"Access individual elements from a NumPy array.",

code:

`import numpy as np

arr=np.array([5,10,15,20,25])

print(arr[0])

print(arr[3])`

},

{

id:"slicing",

icon:"✂️",

title:"Array Slicing",

description:

"Extract a portion of an array using slicing.",

code:

`import numpy as np

arr=np.array([10,20,30,40,50,60])

print(arr[1:5])

print(arr[:3])`

},

{

id:"reshape",

icon:"🔄",

title:"Reshape Array",

description:

"Convert a one-dimensional array into a 2×3 array.",

code:

`import numpy as np

arr=np.array([1,2,3,4,5,6])

newArr=arr.reshape(2,3)

print(newArr)`

},

{

id:"mathOperations",

icon:"➕",

title:"Array Operations",

description:

"Perform addition, subtraction and multiplication on arrays.",

code:

`import numpy as np

a=np.array([10,20,30])

b=np.array([1,2,3])

print(a+b)

print(a-b)

print(a*b)`

},

{

id:"aggregate",

icon:"📈",

title:"Aggregate Functions",

description:

"Find sum, mean, maximum and minimum values.",

code:

`import numpy as np

arr=np.array([15,25,35,45,55])

print("Sum :",np.sum(arr))

print("Mean :",np.mean(arr))

print("Maximum :",np.max(arr))

print("Minimum :",np.min(arr))`

},

{

id:"standardDeviation",

icon:"📉",

title:"Standard Deviation",

description:

"Calculate the standard deviation of an array.",

code:

`import numpy as np

arr=np.array([12,15,18,20,25])

print(np.std(arr))`

},

{

id:"randomNumbers",

icon:"🎲",

title:"Random Numbers",

description:

"Generate random integers using NumPy.",

code:

`import numpy as np

arr=np.random.randint(1,101,10)

print(arr)`

},

{

id:"studentAnalysis",

icon:"🏆",

title:"Student Marks Analysis",

description:

"Analyze student marks using NumPy functions.",

code:

`import numpy as np

marks=np.array([72,84,91,68,88])

print("Marks :",marks)

print("Average :",np.mean(marks))

print("Highest :",np.max(marks))

print("Lowest :",np.min(marks))

print("Total :",np.sum(marks))`

}

]

},

  /*====================================================
                MONSTER HUNT
====================================================*/

quiz:{

title:"👾 Monster Hunt",

description:

"Defeat the Crystal Golems by answering questions about NumPy arrays and numerical computing.",

questions:[

{
question:"What does NumPy stand for?",
options:[
"Numerical Python",
"Number Program",
"New Python",
"Numeric Program"
],
answer:0
},

{
question:"Which statement correctly imports NumPy?",
options:[
"import numpy",
"import numpy as np",
"import np",
"from numpy import all"
],
answer:1
},

{
question:"Which function creates a NumPy array?",
options:[
"array()",
"np.array()",
"create()",
"list()"
],
answer:1
},

{
question:"Which attribute returns the shape of an array?",
options:[
"shape",
"size",
"dtype",
"length"
],
answer:0
},

{
question:"Which attribute returns the total number of elements?",
options:[
"shape",
"count",
"size",
"length"
],
answer:2
},

{
question:"Which attribute returns the data type of array elements?",
options:[
"type",
"dtype",
"datatype",
"kind"
],
answer:1
},

{
question:"Array indexing starts from:",
options:[
"0",
"1",
"-1",
"2"
],
answer:0
},

{
question:"Which operator is used for slicing?",
options:[
";",
":",
",",
"."
],
answer:1
},

{
question:"Which function changes the dimensions of an array?",
options:[
"resize()",
"reshape()",
"change()",
"modify()"
],
answer:1
},

{
question:"Which function returns the sum of all elements?",
options:[
"sum()",
"add()",
"total()",
"count()"
],
answer:0
},

{
question:"Which function returns the average of elements?",
options:[
"average()",
"mean()",
"avg()",
"middle()"
],
answer:1
},

{
question:"Which function returns the largest element?",
options:[
"large()",
"maximum()",
"max()",
"highest()"
],
answer:2
},

{
question:"Which function returns the smallest element?",
options:[
"minimum()",
"min()",
"small()",
"lowest()"
],
answer:1
},

{
question:"Which function calculates standard deviation?",
options:[
"variance()",
"std()",
"deviation()",
"spread()"
],
answer:1
},

{
question:"Which NumPy module generates random numbers?",
options:[
"np.math",
"np.random",
"np.stats",
"np.number"
],
answer:1
},

{
question:"Which function generates random integers?",
options:[
"np.randint()",
"np.random.randint()",
"np.random()",
"randomint()"
],
answer:1
},

{
question:"NumPy arrays are generally _____ than Python lists for numerical computations.",
options:[
"Slower",
"Faster",
"Equal",
"Heavier"
],
answer:1
},

{
question:"NumPy mainly supports:",
options:[
"Text Editing",
"Numerical Computing",
"Networking",
"Web Development"
],
answer:1
},

{
question:"Which of the following can be stored in a NumPy array?",
options:[
"Integers",
"Floating-point numbers",
"Boolean values",
"All of these"
],
answer:3
},

{
question:"Which attribute returns the number of dimensions of an array?",
options:[
"shape",
"size",
"ndim",
"length"
],
answer:2
},

{
question:"Which statement creates a 2-D array?",
options:[
"np.array([1,2,3])",
"np.array([[1,2],[3,4]])",
"np.list([1,2])",
"array([1,2])"
],
answer:1
},

{
question:"Which operation is performed element-wise on NumPy arrays?",
options:[
"Addition",
"Subtraction",
"Multiplication",
"All of these"
],
answer:3
},

{
question:"NumPy is widely used in:",
options:[
"Machine Learning",
"Artificial Intelligence",
"Data Science",
"All of these"
],
answer:3
},

{
question:"Which of the following is NOT a NumPy attribute?",
options:[
"shape",
"size",
"dtype",
"append"
],
answer:3
},

{
question:"Why is NumPy preferred for large datasets?",
options:[
"It uses less memory",
"It performs calculations faster",
"It provides efficient array operations",
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

"Deep inside the Crystal Caverns lies the legendary Crystal Matrix. Master Crystalon challenges Dino to restore its magical power by mastering NumPy arrays and numerical computations. Every completed task lights up another crystal until the entire cavern glows with mathematical energy.",

icon:"💎",

heading:"The Crystal Matrix",

story:

"Long ago, the Crystal Matrix controlled the flow of knowledge throughout the Coding Kingdom. During the Great Data Storm, its crystals shattered into ten magical fragments. Each fragment can only be restored using the power of NumPy. Master Crystalon believes Dino is the chosen Data Wizard who can rebuild the Matrix and unlock the path to the Dragon SQL Citadel.",

tasks:[

"💎 Create a one-dimensional NumPy array containing ten numbers.",

"📊 Display the shape, size, dtype and ndim of an array.",

"📚 Access specific elements using array indexing.",

"✂️ Extract elements using array slicing.",

"🔄 Reshape a 1-D array into a 2 × 3 array.",

"➕ Perform element-wise addition and multiplication on two arrays.",

"📈 Find the sum, mean, maximum and minimum of an array.",

"📉 Calculate the standard deviation of an array.",

"🎲 Generate ten random integers between 1 and 100.",

"🏆 Analyze students' marks using NumPy and display Total, Average, Highest and Lowest marks."

],

reward:{

badge:"💎 Crystal Matrix Master",

xp:500,

coins:250,

unlock:"dragon-sql-citadel"

}

},

/*====================================================
                    FOOTER
====================================================*/

footer:{

button:"🐉 Continue to Dragon SQL Citadel",

next:"../dragon-sql-citadel/index.html"

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
