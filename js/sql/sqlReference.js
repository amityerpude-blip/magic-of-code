/*====================================================

            MAGIC OF CODE
            SQL REFERENCE

====================================================*/

"use strict";

/*====================================================
            SQL REFERENCE
====================================================*/

const sqlReference=[

{

title:"SELECT",

syntax:"SELECT column_name FROM table_name;",

example:"SELECT * FROM Students;"

},

{

title:"WHERE",

syntax:"SELECT * FROM table_name WHERE condition;",

example:"SELECT * FROM Students WHERE Marks>80;"

},

{

title:"ORDER BY",

syntax:"SELECT * FROM table_name ORDER BY column ASC|DESC;",

example:"SELECT * FROM Students ORDER BY Marks DESC;"

},

{

title:"GROUP BY",

syntax:"SELECT column, COUNT(*) FROM table_name GROUP BY column;",

example:"SELECT Class, COUNT(*) FROM Students GROUP BY Class;"

},

{

title:"HAVING",

syntax:"SELECT column, COUNT(*) FROM table_name GROUP BY column HAVING COUNT(*)>1;",

example:"SELECT Class, COUNT(*) FROM Students GROUP BY Class HAVING COUNT(*)>1;"

},

{

title:"COUNT",

syntax:"SELECT COUNT(*) FROM table_name;",

example:"SELECT COUNT(*) FROM Students;"

},

{

title:"SUM",

syntax:"SELECT SUM(column) FROM table_name;",

example:"SELECT SUM(Marks) FROM Students;"

},

{

title:"AVG",

syntax:"SELECT AVG(column) FROM table_name;",

example:"SELECT AVG(Marks) FROM Students;"

},

{

title:"MIN",

syntax:"SELECT MIN(column) FROM table_name;",

example:"SELECT MIN(Marks) FROM Students;"

},

{

title:"MAX",

syntax:"SELECT MAX(column) FROM table_name;",

example:"SELECT MAX(Marks) FROM Students;"

},

{

title:"INSERT",

syntax:"INSERT INTO table_name VALUES(...);",

example:"INSERT INTO Students VALUES(6,'Alex','XII-A',89);"

},

{

title:"UPDATE",

syntax:"UPDATE table_name SET column=value WHERE condition;",

example:"UPDATE Students SET Marks=90 WHERE Roll=5;"

},

{

title:"DELETE",

syntax:"DELETE FROM table_name WHERE condition;",

example:"DELETE FROM Students WHERE Roll=5;"

}

];


/*====================================================
        RENDER REFERENCE
====================================================*/

function renderSQLReference(){

const panel=

document.getElementById(

"referencePanel"

);

if(!panel) return;

let html="";

sqlReference.forEach(item=>{

html+=`

<div class="referenceCard">

<h3>

${item.title}

</h3>

<p>

<b>Syntax</b>

</p>

<pre>

${item.syntax}

</pre>

<p>

<b>Example</b>

</p>

<pre>

${item.example}

</pre>

</div>

`;

});

panel.innerHTML=html;

}
