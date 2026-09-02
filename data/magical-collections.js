/*====================================================
        CODING QUEST — MAGICAL COLLECTIONS
        Strings • Lists • Tuples • Dictionaries
====================================================*/
const KINGDOM_DATA={
id:"collections",
title:"🧩 Magical Collections Kingdom",
shortTitle:"Magical Collections",
subtitle:"Four Magical Ways to Store and Shape Data",
description:"Dino enters a kingdom where strings hold words, lists gather changing collections, tuples protect fixed treasures, and dictionaries connect keys with their values.",
master:"🧙 Master Pyro",
hero:{background:"",logo:""},packages:[],
sections:[
{id:"comicSection",icon:"📖",title:"Story Scroll",subtitle:"Meet the Collection Keepers"},
{id:"animationSection",icon:"🎬",title:"Magic Vision",subtitle:"Watch Collections in Action"},
{id:"notesSection",icon:"📚",title:"Wisdom Grove",subtitle:"Learn String, List, Tuple & Dictionary"},
{id:"codingSection",icon:"🧪",title:"Spell Forge",subtitle:"Practice Collection Spells"},
{id:"quizSection",icon:"👾",title:"Monster Hunt",subtitle:"Test Your Collection Knowledge"},
{id:"challengeSection",icon:"🏆",title:"Guardian Battle",subtitle:"Complete the Collection Quest"}],
comic:{title:"📖 Dino and the Four Collection Keepers",description:"Dino discovers four magical vaults: the String Scroll, List Basket, Tuple Chest and Dictionary Hall.",folder:"../magical-collections/assets/comic/",totalPages:27},
animation:{title:"🎬 Magical Collections Journey",description:"Explore how Python collections store and organize information.",type:"youtube",source:"https://www.youtube.com/embed/rfscVS0vtbw"},
notes:{title:"📚 Wisdom Grove of Collections",description:"Master the four core collection types used throughout Python programming.",cards:[
{icon:"🔤",title:"Strings",text:"A string is an immutable sequence of characters. Example: name='Dino'. Strings support indexing, slicing, concatenation and useful methods such as upper(), lower(), replace() and split()."},
{icon:"🧺",title:"Lists",text:"A list is an ordered, mutable collection. Example: marks=[78,85,91]. Lists allow duplicate values and support indexing, slicing, append(), insert(), remove(), pop() and sort()."},
{icon:"📦",title:"Tuples",text:"A tuple is an ordered, immutable collection. Example: point=(10,20). Tuples are useful when a group of values should not be changed accidentally."},
{icon:"📖",title:"Dictionaries",text:"A dictionary stores data as key-value pairs. Example: student={'name':'Dino','marks':95}. Values are accessed using keys and dictionaries can be updated."},
{icon:"🔢",title:"Indexing",text:"Strings, lists and tuples use zero-based indexing. For example, items[0] gives the first item and items[-1] gives the last item."},
{icon:"✂️",title:"Slicing",text:"Sequences support slicing with start:stop:step. Example: word[1:4] returns characters from index 1 up to, but not including, index 4."},
{icon:"🔄",title:"Mutable vs Immutable",text:"Lists and dictionaries are mutable, so their contents can change. Strings and tuples are immutable, so their existing contents cannot be changed directly."},
{icon:"🧙",title:"Choosing the Right Collection",text:"Use a string for text, a list for an editable sequence, a tuple for a fixed sequence and a dictionary when values need meaningful keys."},
{icon:"🪄",title:"Nested Collections",text:"Collections can contain other collections. Example: students=[{'name':'Dino','marks':90},{'name':'Mira','marks':95}]."}]},
coding:{title:"🧪 Spell Forge",description:"Practice strings, lists, tuples and dictionaries with small Python spells.",defaultCode:`name="Dino"\nmarks=[78,85,92]\npoint=(10,20)\nstudent={"name":name,"marks":marks}\nprint(name)\nprint(marks)\nprint(point)\nprint(student)`,challenges:[
{id:"string",icon:"🔤",title:"String Spell",description:"Create and manipulate a string.",code:`name="Dino the Coder"\nprint(name.upper())\nprint("Length =",len(name))`},
{id:"list",icon:"🧺",title:"List Basket",description:"Create a list and update it.",code:`marks=[72,85,91]\nmarks.append(88)\nprint(marks)\nprint("Highest =",max(marks))`},
{id:"tuple",icon:"📦",title:"Tuple Chest",description:"Store fixed coordinates in a tuple.",code:`point=(12,25)\nx,y=point\nprint("X =",x)\nprint("Y =",y)`},
{id:"dictionary",icon:"📖",title:"Dictionary Hall",description:"Create and access key-value pairs.",code:`student={"name":"Dino","marks":95}\nprint(student["name"])\nprint(student["marks"])`},
{id:"nested",icon:"🧩",title:"Nested Treasure",description:"Work with a dictionary containing a list.",code:`student={"name":"Dino","subjects":["Python","SQL","Networks"]}\nprint(student["subjects"])\nprint(student["subjects"][1])`}]},
quiz:{title:"👾 Monster Hunt",description:"Defeat the Collection Monsters by answering correctly.",questions:[
{question:"Which collection is mutable?",options:["String","Tuple","List","None"],answer:2},{question:"Which collection stores key-value pairs?",options:["List","Tuple","Dictionary","String"],answer:2},{question:"Which collection is immutable?",options:["List","Dictionary","Tuple","All lists"],answer:2},{question:"What is the first index of a Python sequence?",options:["0","1","-1","10"],answer:0},{question:"Which method adds one item to a list?",options:["add()","append()","push()","insertEnd()"],answer:1},{question:"What does len('Dino') return?",options:["3","4","5","0"],answer:1},{question:"How is a dictionary value accessed?",options:["By key","Only by position","Only by index","By line number"],answer:0},{question:"Which brackets are normally used for a list?",options:["()","{}","[]","<>"],answer:2},{question:"Which brackets are normally used for a tuple?",options:["()","[]","{}","//"],answer:0},{question:"Which operation extracts part of a string or list?",options:["Slicing","Casting","Looping","Compiling"],answer:0}]},
challenge:{title:"🏆 Guardian Battle",description:"Complete the final collection mission.",icon:"🧩",heading:"The Four Vault Challenge",story:"The Guardian has locked four treasure vaults. Dino must use the correct Python collection for each task.",tasks:["🔤 Store and format a student's name using a string.","🧺 Store five marks in a list and calculate the highest mark.","📦 Store a fixed pair of coordinates in a tuple.","📖 Store a student's name and marks in a dictionary.","🧩 Create one nested collection and display a value from it."]},footer:{button:"Continue to Stack Tower"}};
