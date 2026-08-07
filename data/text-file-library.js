/*====================================================

            MAGIC OF CODE
            LIBRARY OF LIVING SCROLLS

            text-file-library.js

====================================================*/

const KINGDOM_DATA = {

id:"text-file-library",

title:"📜 Library of Living Scrolls",

shortTitle:"Library of Living Scrolls",

subtitle:"Master the Magic of Text File Handling",

description:"Enter Master Pyro's enchanted library and learn how Python creates, opens, reads, writes, appends and manages text files. Every scroll contains a new file-handling spell.",

master:"🐍 Master Pyro",

hero:{
background:"assets/images/background.jpg",
logo:"assets/images/master-pyro.png"
},

packages:[],

sections:[
{id:"comicSection",icon:"📖",title:"Story Scroll",subtitle:"Dino enters the Living Library"},
{id:"animationSection",icon:"🎬",title:"Magic Vision",subtitle:"Watch file handling in action"},
{id:"notesSection",icon:"📚",title:"Wisdom Scrolls",subtitle:"Learn every file-handling spell"},
{id:"codingSection",icon:"⚗️",title:"Spell Forge",subtitle:"Write and test Python code"},
{id:"quizSection",icon:"👾",title:"Monster Hunt",subtitle:"Defeat file-handling monsters"},
{id:"challengeSection",icon:"🏆",title:"Guardian Battle",subtitle:"Complete the final file mission"}
],

comic:{
title:"The Library of Living Scrolls",
description:"Dino discovers that every text file is a magical scroll. Master Pyro teaches him how Python opens, reads, writes and updates these scrolls.",
folder:"assets/comic/",
totalPages:16
},

animation:{
title:"Text File Handling — Read & Write Magic",
description:"Watch a Class 12 text-file-handling lesson covering file modes, open(), read(), readline(), readlines(), write() and writelines().",
type:"youtube",
source:"https://www.youtube.com/embed/GryfSXDtuqw"
},

notes:{
title:"📚 Wisdom Scrolls",
description:"Master Pyro's scrolls cover the core Python text-file concepts required for school-level file handling.",
cards:[
{icon:"📜",title:"What is a Text File?",text:"A text file stores data as readable characters. Examples include .txt, .csv and many configuration or log files. Python can create, read, modify and close text files using file objects."},
{icon:"🔓",title:"Opening a File",text:"The open() function is used to open a file. Example:\nfile = open('magic.txt','r')\nThe first argument is the file name or path and the second is the mode."},
{icon:"🗝️",title:"File Modes",text:"Common text modes are r for reading, w for writing, a for appending, r+ for reading and writing, w+ for writing and reading, and a+ for appending and reading. The w mode can replace existing content."},
{icon:"📖",title:"Reading the Complete File",text:"read() returns file content as a single string. Example:\nfile = open('magic.txt','r')\ndata = file.read()\nprint(data)"},
{icon:"📄",title:"readline()",text:"readline() reads one line at a time. Repeated calls move the file pointer forward. It is useful when a file should be processed line by line."},
{icon:"📚",title:"readlines()",text:"readlines() reads the remaining lines and returns them as a list. Each list element represents a line, normally including its newline character."},
{icon:"✍️",title:"write()",text:"write() writes a string to a text file and returns the number of characters written. Example:\nfile.write('Welcome to Python')"},
{icon:"📝",title:"writelines()",text:"writelines() writes a sequence of strings to a file. It does not automatically add newline characters, so '\\n' should be included when separate lines are required."},
{icon:"➕",title:"Append Mode",text:"Mode a adds new content at the end of an existing file without deleting its old content. If the file does not exist, Python can create it."},
{icon:"⚠️",title:"Write Mode",text:"Mode w opens a file for writing. Existing content is replaced when the file is opened in write mode. If the file does not exist, it is created."},
{icon:"📍",title:"File Pointer",text:"A file object maintains a current position called the file pointer. Reading and writing operations occur relative to this position."},
{icon:"🔎",title:"tell()",text:"tell() returns the current position of the file pointer. Example:\nposition = file.tell()\nprint(position)"},
{icon:"🎯",title:"seek()",text:"seek() changes the file pointer position. Example:\nfile.seek(0)\nThis moves the pointer to the beginning of the file."},
{icon:"🔒",title:"close()",text:"close() closes an opened file and releases the associated resource. Example:\nfile.close()\nA closed file should not be used for further reading or writing."},
{icon:"🪄",title:"with Statement",text:"The with statement is a safer and cleaner way to work with files because Python automatically closes the file after the block finishes. Example:\nwith open('magic.txt','r') as file:\n    print(file.read())"},
{icon:"🛡️",title:"Good File-Handling Practices",text:"Use meaningful file names, choose the correct mode, close files properly, prefer the with statement, avoid accidental overwrite with w mode, and handle paths carefully."},
{icon:"🧩",title:"File Path",text:"A file can be opened using a relative or absolute path. A relative path is interpreted from the program's current working location, while an absolute path specifies the complete location."},
{icon:"⚔️",title:"Common File Errors",text:"FileNotFoundError can occur when a file expected for reading does not exist. Permission-related errors can occur when the program lacks access to a file or folder."}
]
},

coding:{
title:"⚗️ Spell Forge",
description:"Practice text-file spells directly in the Python laboratory. Load a challenge, edit the code and run it.",
defaultCode:`with open("magic.txt","w") as file:\n    file.write("Welcome to the Library of Living Scrolls")\n\nprint("File Created Successfully")`,
challenges:[
{id:"create",icon:"📜",title:"Create a Text File",description:"Create magic.txt and write a welcome message.",code:`with open("magic.txt","w") as file:\n    file.write("Welcome to Python Quest")\n\nprint("File Created Successfully")`},
{id:"write-lines",icon:"📝",title:"Write Multiple Lines",description:"Use write() to store three separate lines in a text file.",code:`with open("spells.txt","w") as file:\n    file.write("Spell 1\\n")\n    file.write("Spell 2\\n")\n    file.write("Spell 3\\n")\n\nprint("Three lines written")`},
{id:"read",icon:"📖",title:"Read a Complete File",description:"Create a file and read its complete contents using read().",code:`with open("notes.txt","w") as file:\n    file.write("Python File Handling")\n\nwith open("notes.txt","r") as file:\n    data = file.read()\n\nprint(data)`},
{id:"readline",icon:"📄",title:"Read One Line",description:"Use readline() to read the first line of a file.",code:`with open("lines.txt","w") as file:\n    file.write("First Line\\nSecond Line\\n")\n\nwith open("lines.txt","r") as file:\n    print(file.readline())`},
{id:"readlines",icon:"📚",title:"Read All Lines as a List",description:"Use readlines() and display the resulting list.",code:`with open("lines.txt","w") as file:\n    file.write("Red\\nGreen\\nBlue\\n")\n\nwith open("lines.txt","r") as file:\n    lines = file.readlines()\n\nprint(lines)`},
{id:"append",icon:"➕",title:"Append New Data",description:"Add a new line without deleting the existing content.",code:`with open("log.txt","w") as file:\n    file.write("First entry\\n")\n\nwith open("log.txt","a") as file:\n    file.write("Second entry\\n")\n\nwith open("log.txt","r") as file:\n    print(file.read())`},
{id:"writelines",icon:"✍️",title:"Use writelines()",description:"Write a list of lines to a file using writelines().",code:`lines = ["Python\\n", "Pandas\\n", "SQL\\n"]\n\nwith open("subjects.txt","w") as file:\n    file.writelines(lines)\n\nprint("Lines written using writelines()")`},
{id:"tell",icon:"📍",title:"Find the File Pointer",description:"Use tell() to display the current file pointer position.",code:`with open("magic.txt","w") as file:\n    file.write("Python")\n\nwith open("magic.txt","r") as file:\n    print(file.tell())\n    print(file.read(2))\n    print(file.tell())`},
{id:"seek",icon:"🎯",title:"Move the File Pointer",description:"Use seek() to return to the beginning before reading again.",code:`with open("magic.txt","w") as file:\n    file.write("PYTHON")\n\nwith open("magic.txt","r") as file:\n    print(file.read(3))\n    file.seek(0)\n    print(file.read())`},
{id:"with",icon:"🪄",title:"Use with Statement",description:"Read a file using the with statement so it closes automatically.",code:`with open("welcome.txt","w") as file:\n    file.write("Welcome, Dino!")\n\nwith open("welcome.txt","r") as file:\n    print(file.read())\n\nprint("File handled safely")`}
]
},

quiz:{
title:"👾 File Handling Monster Hunt",
description:"Answer questions about opening, reading, writing and managing text files.",
questions:[
{question:"Which function is used to open a file in Python?",options:["file()","open()","openFile()","read()"],answer:1},
{question:"Which mode opens a file for reading?",options:["r","w","a","x"],answer:0},
{question:"Which mode can overwrite existing file content?",options:["r","w","a","rb"],answer:1},
{question:"Which mode adds data at the end of a file?",options:["r","w","a","x"],answer:2},
{question:"What does read() normally return?",options:["A list of files","The file content as a string","Only the first line","A number"],answer:1},
{question:"Which method reads one line at a time?",options:["readline()","readlines()","line()","readone()"],answer:0},
{question:"Which method returns multiple remaining lines as a list?",options:["read()","readline()","readlines()","lines()"],answer:2},
{question:"Which method writes a string to a file?",options:["write()","put()","append()","send()"],answer:0},
{question:"Which method writes a sequence of strings?",options:["writeall()","writelines()","writeList()","lineswrite()"],answer:1},
{question:"Which method returns the current file pointer position?",options:["position()","tell()","where()","pointer()"],answer:1},
{question:"Which method changes the file pointer position?",options:["move()","jump()","seek()","goto()"],answer:2},
{question:"What does close() do?",options:["Deletes the file","Closes the opened file","Reads the file","Renames the file"],answer:1},
{question:"Which statement automatically closes a file after its block finishes?",options:["if","with","for","def"],answer:1},
{question:"What happens to old content when a file is opened in w mode?",options:["It is always preserved","It is replaced when writing starts","It becomes read-only","It is copied to another file"],answer:1},
{question:"If a file does not exist, which mode can create it for writing?",options:["w","r","r only","rb only"],answer:0},
{question:"What type of data does readlines() return?",options:["String","Integer","List of strings","Dictionary"],answer:2},
{question:"What should normally be included to put separate lines in writelines()?",options:["\\n","\\t only","#","; only"],answer:0},
{question:"Which error commonly occurs when reading a missing file?",options:["NameError","FileNotFoundError","TypeError","IndexError"],answer:1},
{question:"What is the file pointer?",options:["The file name","The current position for file operations","The file size","The file extension"],answer:1},
{question:"Which is the safest common pattern for opening a file for a short operation?",options:["with open(...) as file:","file.open(...)","open then never close","print(open(...))"],answer:0}
]
},

challenge:{
title:"🏆 Guardian Battle",
description:"Complete the final mission and prove that you can control the Living Scrolls.",
icon:"📜",
heading:"The Lost Library Record",
story:"Dino must restore a damaged library record. Create a text file, store several student records, read them back, append a new record and display the final contents.",
tasks:[
"📜 Create a file named students.txt using write mode.",
"✍️ Store at least three student names and marks, one record per line.",
"📖 Read and display the complete file using read().",
"➕ Append one additional student record using append mode.",
"📚 Read the updated file using readlines().",
"📍 Display the file pointer position using tell().",
"🎯 Move the pointer to the beginning using seek(0).",
"🪄 Use the with statement for file operations.",
"🏆 Display a final message confirming that the Library record has been restored."
]
},

footer:{
button:"➡ Continue to CSV Savannah",
next:"../csv-kingdom/index.html"
},

audio:{
magic:"assets/audio/magic.mp3",
button:"assets/audio/button.mp3",
page:"assets/audio/page-flip.mp3"
}

};
