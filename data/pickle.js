/*====================================================

            MAGIC OF CODE
            PICKLE KINGDOM

            pickle.js

====================================================*/

const KINGDOM_DATA={

/*====================================================
                BASIC INFO
====================================================*/

id:"pickle",

title:"🥒 Pickle Kingdom",

shortTitle:"Pickle Kingdom",

subtitle:"Where Python Objects Never Forget",

description:

"Welcome to the enchanted Pickle Kingdom where Master Pickle teaches Dino the magical art of preserving Python objects forever. Learn how to save, restore and protect data using Python's Pickle module.",

master:"🥒 Master Pickle",

/*====================================================
                HERO
====================================================*/

hero:{

background:"assets/images/hero.jpg",

logo:"assets/images/master-pickle.png"

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
subtitle:"Read Dino's magical adventure"
},

{
id:"animationSection",
icon:"🎬",
title:"Magic Vision",
subtitle:"Watch Master Pickle in action"
},

{
id:"notesSection",
icon:"📚",
title:"Memory Vault",
subtitle:"Learn Pickle concepts"
},

{
id:"codingSection",
icon:"🧪",
title:"Spell Forge",
subtitle:"Practice Pickle programming"
},

{
id:"quizSection",
icon:"🧩",
title:"Monster Hunt",
subtitle:"Test your knowledge"
},

{
id:"challengeSection",
icon:"🏆",
title:"Guardian Battle",
subtitle:"Complete the final mission"
}

],

/*====================================================
                COMIC
====================================================*/

comic:{

title:"📖 The Forgotten Memory Vault",

description:

"Dino discovers an ancient vault where magical objects vanish every night. Master Pickle teaches him the secret spell of serialization to preserve every precious object before it disappears forever.",

folder:"assets/comic/",

totalPages:16

},

/*====================================================
                ANIMATION
====================================================*/

animation:{

title:"🎬 The Magic of Serialization",

description:

"Watch Master Pickle explain how Python objects are converted into binary form, safely stored inside enchanted memory crystals, and restored whenever they are needed.",

type:"youtube",

source:"https://www.youtube.com/embed/YOUR_VIDEO_ID"

},
  /*====================================================
                    NOTES
====================================================*/

notes:{

title:"📚 Memory Vault",

description:

"Master Pickle reveals the magical secrets of preserving Python objects forever using serialization.",

cards:[

{
icon:"🥒",
title:"What is Pickle?",
text:"Pickle is a built-in Python module used to save and restore Python objects. It converts Python objects into binary data and recreates them whenever required."
},

{
icon:"✨",
title:"Serialization",
text:"Serialization is the process of converting a Python object into a binary stream so it can be stored in a file or transmitted over a network."
},

{
icon:"🔄",
title:"Deserialization",
text:"Deserialization is the reverse process of serialization. It converts binary data back into the original Python object."
},

{
icon:"📦",
title:"Why Use Pickle?",
text:"Pickle allows us to store complex Python objects like lists, dictionaries, tuples and custom objects without manually writing each value into a file."
},

{
icon:"📥",
title:"Import Pickle",
text:"Import the Pickle module using: import pickle"
},

{
icon:"💾",
title:"pickle.dump()",
text:"The dump() function serializes a Python object and stores it into a binary file."
},

{
icon:"📂",
title:"pickle.load()",
text:"The load() function reads binary data from a file and recreates the original Python object."
},

{
icon:"🗄️",
title:"Binary Files",
text:"Pickle always stores data in binary files. Binary files are opened using 'wb' for writing and 'rb' for reading."
},

{
icon:"📋",
title:"Objects Supported",
text:"Pickle can store integers, strings, lists, tuples, dictionaries, sets and even user-defined Python objects."
},

{
icon:"⚠️",
title:"Security Note",
text:"Never unpickle data received from unknown or untrusted sources because malicious files may execute harmful code."
},

{
icon:"🚀",
title:"Advantages",
text:"Pickle preserves the complete Python object structure, making it much easier than storing each value separately."
},

{
icon:"🌍",
title:"Real World Applications",
text:"Pickle is used in machine learning, AI, game development, scientific computing, caching, configuration storage and saving trained models."
}

]

},

/*====================================================
                SPELL FORGE
====================================================*/

coding:{

title:"🧪 Memory Spell Forge",

description:

"Practice preserving magical Python objects using the Pickle module.",

defaultCode:

`import pickle

students = {

    "Amit":92,

    "Riya":95,

    "Dino":88

}

with open("students.dat","wb") as file:

    pickle.dump(students,file)

print("Student data saved successfully!")`,

challenges:[

{

id:"saveList",

icon:"📋",

title:"Save a List",

description:"Store a Python list into a binary file using pickle.dump().",

code:

`import pickle

`

},

{

id:"loadList",

icon:"📂",

title:"Load a List",

description:"Read a list from a binary file using pickle.load().",

code:

`import pickle

`

},

{

id:"saveDictionary",

icon:"📖",

title:"Save Dictionary",

description:"Store a dictionary containing student details.",

code:

`import pickle

`

},

{

id:"restoreDictionary",

icon:"🔄",

title:"Restore Dictionary",

description:"Retrieve the saved dictionary and display its contents.",

code:

`import pickle

`

},

{

id:"studentRecord",

icon:"🏆",

title:"Student Record System",

description:"Create a complete Pickle-based student record manager.",

code:

`import pickle

`

}

]

},
  /*====================================================
                    QUIZ
====================================================*/

quiz:{

title:"👾 Memory Monster Hunt",

description:

"Defeat every Memory Monster by answering one question at a time.",

questions:[

{
question:"Which Python module is used for object serialization?",
options:[
"os",
"pickle",
"csv",
"json"
],
answer:1
},

{
question:"What is serialization?",
options:[
"Deleting a Python object",
"Converting a Python object into a binary stream",
"Sorting data",
"Encrypting a file"
],
answer:1
},

{
question:"Which function saves a Python object into a binary file?",
options:[
"pickle.save()",
"pickle.dump()",
"pickle.write()",
"pickle.store()"
],
answer:1
},

{
question:"Which function restores a Python object from a binary file?",
options:[
"pickle.open()",
"pickle.read()",
"pickle.load()",
"pickle.restore()"
],
answer:2
},

{
question:"Which file mode should be used while writing a Pickle file?",
options:[
"'w'",
"'wb'",
"'a'",
"'rb'"
],
answer:1
},

{
question:"Which file mode should be used while reading a Pickle file?",
options:[
"'r'",
"'rb'",
"'wb'",
"'ab'"
],
answer:1
},

{
question:"Which of the following objects can be stored using Pickle?",
options:[
"List only",
"Dictionary only",
"Tuple only",
"Almost any Python object"
],
answer:3
},

{
question:"Why should Pickle files from unknown sources be avoided?",
options:[
"They are too large",
"They may contain malicious code",
"They cannot be opened",
"They become read-only"
],
answer:1
},

{
question:"Which statement imports the Pickle module?",
options:[
"include pickle",
"using pickle",
"import pickle",
"pickle import"
],
answer:2
},

{
question:"Pickle stores data in which format?",
options:[
"CSV",
"Text",
"Binary",
"XML"
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

"Complete the final mission to restore the Memory Vault.",

icon:"🥒",

heading:"The Lost Memory Crystals",

story:

"The ancient Memory Vault of Pickle Kingdom has been attacked by the Bug Goblins. Thousands of magical Python objects have lost their memories and disappeared from the crystal archives. Master Pickle asks Dino to preserve every valuable object before they vanish forever. Only a true Python wizard can restore the Memory Vault using the magic of serialization.",

tasks:[

"🥒 Import the pickle module",

"📦 Create a dictionary containing student records",

"💾 Store the dictionary into students.dat using pickle.dump()",

"📂 Open the binary file in read mode",

"🔄 Restore the original dictionary using pickle.load()",

"📋 Display all recovered student records",

"🏆 Prove that the restored object is identical to the original"

]

},

/*====================================================
                FOOTER
====================================================*/

footer:{

button:"🐼 Continue to Pandas Paradise",

next:"../pandas-paradise/index.html"

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
