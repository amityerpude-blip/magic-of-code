/*====================================================

            MAGIC OF CODE
            SQL RESULT RENDERER

====================================================*/

"use strict";

/*====================================================
            SHOW SQL TABLE
====================================================*/

function renderResult(result){

const output=document.getElementById("output");

if(!output) return;

if(result.length===0){

output.innerHTML=`

<div class="sqlSuccess">

✅ Query executed successfully.

</div>

`;

return;

}

let html=`

<div class="sqlResult">

<table class="sqlTable">

<thead>

<tr>

`;

result[0].columns.forEach(column=>{

html+=`<th>${column}</th>`;

});

html+=`

</tr>

</thead>

<tbody>

`;

result[0].values.forEach(row=>{

html+="<tr>";

row.forEach(value=>{

html+=`<td>${value}</td>`;

});

html+="</tr>";

});

html+=`

</tbody>

</table>

</div>

`;

output.innerHTML=html;

}


/*====================================================
            SHOW MESSAGE
====================================================*/

function showSQLOutput(message){

const output=document.getElementById("output");

if(!output) return;

output.innerHTML=`

<div class="sqlMessage">

${message}

</div>

`;

}
