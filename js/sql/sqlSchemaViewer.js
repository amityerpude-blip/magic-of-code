/*====================================================

            MAGIC OF CODE
            SQL SCHEMA VIEWER

====================================================*/

"use strict";

/*====================================================
            SHOW DATABASE SCHEMA
====================================================*/

function showTables(){

if(!sqlReady){

showSQLOutput(

"Database not initialized."

);

return;

}

const tables=

db.exec(

"SELECT name FROM sqlite_master WHERE type='table' ORDER BY name;"

);

if(tables.length===0){

showSQLOutput(

"No tables found."

);

return;

}

let html=`

<div class="schemaViewer">

<h2>

🐉 Dragon Database

</h2>

`;

tables[0].values.forEach(row=>{

const table=row[0];

const columns=

db.exec(

`PRAGMA table_info(${table});`

);

html+=`

<div class="schemaCard">

<h3>

📁 ${table}

</h3>

<ul>

`;

columns[0].values.forEach(col=>{

html+=`

<li>

${col[1]}

<span>

${col[2]}

</span>

</li>

`;

});

html+=`

</ul>

</div>

`;

});

html+=`

</div>

`;

document

.getElementById("output")

.innerHTML=html;

}
