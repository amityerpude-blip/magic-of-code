/*====================================================
        CODING QUEST — STACK TOWER
        Stack Data Structure
====================================================*/
const KINGDOM_DATA={
id:"stack",
title:"📚 Stack Tower",
shortTitle:"Stack Tower",
subtitle:"Climb the Tower of Last-In, First-Out Magic",
description:"Before entering Dragon SQL Citadel, Dino must master the Stack Tower. Every item placed on the stack goes on top, and the newest item is the first one to leave.",
master:"🧙 Master Pyro",
hero:{background:"",logo:""},
packages:[],
sections:[
{id:"comicSection",icon:"📖",title:"Story Scroll",subtitle:"Dino Enters the Stack Tower"},
{id:"animationSection",icon:"🎬",title:"Magic Vision",subtitle:"Watch LIFO in Action"},
{id:"notesSection",icon:"📚",title:"Wisdom Grove",subtitle:"Learn Stack Operations"},
{id:"codingSection",icon:"🧪",title:"Spell Forge",subtitle:"Build Stack Programs"},
{id:"quizSection",icon:"👾",title:"Monster Hunt",subtitle:"Test Stack Knowledge"},
{id:"challengeSection",icon:"🏆",title:"Guardian Battle",subtitle:"Complete the Stack Quest"}
],
comic:{title:"📖 The Tower of the Magical Stack",description:"Dino discovers a tower where treasures can only be removed from the top.",folder:"../assets/comic/",totalPages:1},
animation:{title:"🎬 LIFO Magic",description:"See how Push and Pop work in a Last-In, First-Out structure.",type:"youtube",source:"https://www.youtube.com/embed/RBSGKlAvoiM"},
notes:{title:"📚 Stack Wisdom",description:"Learn the stack data structure and its most important operations.",cards:[
{icon:"📚",title:"What is a Stack?",text:"A stack is a linear data structure that follows LIFO — Last In, First Out. The element inserted most recently is removed first."},
{icon:"⬆️",title:"Push",text:"Push adds an element to the top of the stack. In Python, list.append(value) can be used to push an item."},
{icon:"⬇️",title:"Pop",text:"Pop removes and returns the top element. In Python, list.pop() removes the last item from a list."},
{icon:"👀",title:"Peek",text:"Peek means viewing the top element without removing it. For a Python list used as a stack, stack[-1] gives the top item."},
{icon:"🚫",title:"Underflow",text:"Trying to pop from an empty stack causes an underflow condition. In Python, an empty list.pop() raises IndexError."},
{icon:"📏",title:"Stack Size",text:"The number of elements in a stack can be found with len(stack)."},
{icon:"↩️",title:"Real-Life Examples",text:"A stack appears in undo operations, browser history, function calls, expression evaluation and a pile of plates."},
{icon:"🐍",title:"Stack Using a Python List",text:"Python lists provide efficient append() and pop() operations at the end, making them a convenient way to implement a stack."},
{icon:"🧠",title:"LIFO vs FIFO",text:"A stack follows LIFO, while a queue follows FIFO — First In, First Out. Remember: stack removes from the top."}
]},
coding:{title:"🧪 Spell Forge",description:"Build and manipulate stacks using Python lists.",defaultCode:`stack=[]\nstack.append("Book 1")\nstack.append("Book 2")\nstack.append("Book 3")\nprint("Stack =",stack)\nprint("Top =",stack[-1])\nremoved=stack.pop()\nprint("Removed =",removed)\nprint("Stack =",stack)`,challenges:[
{id:"push",icon:"⬆️",title:"Push Treasures",description:"Push three values onto a stack.",code:`stack=[]\nstack.append(10)\nstack.append(20)\nstack.append(30)\nprint(stack)`},
{id:"pop",icon:"⬇️",title:"Pop the Top",description:"Remove the top item and display it.",code:`stack=[10,20,30]\nitem=stack.pop()\nprint("Popped =",item)\nprint("Stack =",stack)`},
{id:"peek",icon:"👀",title:"Peek Spell",description:"Display the top item without removing it.",code:`stack=["A","B","C"]\nprint("Top =",stack[-1])\nprint("Stack =",stack)`},
{id:"size",icon:"📏",title:"Measure the Tower",description:"Find the number of items in a stack.",code:`stack=["Python","SQL","Pandas","NumPy"]\nprint("Size =",len(stack))`},
{id:"menu",icon:"🧙",title:"Mini Stack",description:"Perform push and pop operations.",code:`stack=[]\nstack.append(5)\nstack.append(10)\nstack.append(15)\nprint("Before pop:",stack)\nprint("Removed:",stack.pop())\nprint("After pop:",stack)`}
]},
quiz:{title:"👾 Monster Hunt",description:"Defeat the Stack Monsters with LIFO knowledge.",questions:[
{question:"What principle does a stack follow?",options:["FIFO","LIFO","Random order","Sorted order"],answer:1},
{question:"Which operation adds an item to a stack?",options:["Pop","Peek","Push","Delete"],answer:2},
{question:"Which operation removes the top item?",options:["Push","Pop","Peek","Insert"],answer:1},
{question:"For a Python list used as a stack, which gives the top item?",options:["stack[0]","stack[-1]","stack[1]","stack.top"],answer:1},
{question:"Which Python list method is commonly used for push?",options:["append()","push()","add()","insertTop()"],answer:0},
{question:"Which Python list method is commonly used for pop?",options:["removeTop()","delete()","pop()","take()"],answer:2},
{question:"What is stack underflow?",options:["Adding too much data","Popping an empty stack","Sorting a stack","Peeking at the top"],answer:1},
{question:"What is the first item removed from [10,20,30] using pop()?",options:["10","20","30","None"],answer:2},
{question:"Which is a real-life stack example?",options:["Queue at a counter","Pile of plates","Railway track","Dictionary"],answer:1},
{question:"Which data structure generally follows FIFO?",options:["Stack","Queue","Tree","Set"],answer:1}
]},
challenge:{title:"🏆 Guardian Battle",description:"Complete the final stack mission before entering SQL.",icon:"📚",heading:"The LIFO Tower Challenge",story:"The Stack Guardian challenges Dino to build a working stack and demonstrate every essential operation.",tasks:["⬆️ Create an empty stack and push at least five values.","👀 Display the current top element without removing it.","⬇️ Pop two elements and display each removed value.","📏 Display the final stack size.","🚫 Safely handle an attempt to pop from an empty stack.","🧠 Explain why the last pushed item is removed first."]},
footer:{button:"Continue to Dragon SQL Citadel"}
};
