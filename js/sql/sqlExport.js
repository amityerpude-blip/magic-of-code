/*====================================================

            MAGIC OF CODE
            SQL EXPORT

====================================================*/

"use strict";

/*====================================================
            EXPORT RESULT TABLE
====================================================*/

function exportSQLResult(){

const table=

document.querySelector(

"#output table"

);

if(!table){

showSQLOutput(

"No result available to export."

);

return;

}

let csv=[];

const rows=

table.querySelectorAll("tr");

rows.forEach(row=>{

let cols=[];

row.querySelectorAll(

"th,td"

).forEach(col=>{

cols.push(

`"${col.innerText}"`

);

});

csv.push(

cols.join(",")

);

});

downloadCSV(

csv.join("\n"),

"sql-result.csv"

);

}


/*====================================================
            DOWNLOAD CSV
====================================================*/

function downloadCSV(data,fileName){

const blob=

new Blob(

[data],

{

type:"text/csv"

}

);

const url=

URL.createObjectURL(blob);

const a=

document.createElement("a");

a.href=url;

a.download=fileName;

document.body.appendChild(a);

a.click();

document.body.removeChild(a);

URL.revokeObjectURL(url);

}


/*====================================================
            EXPORT QUERY
====================================================*/

function exportSQLQuery(){

const query=

getSQLQuery();

const blob=

new Blob(

[query],

{

type:"text/plain"

}

);

const url=

URL.createObjectURL(blob);

const a=

document.createElement("a");

a.href=url;

a.download="query.sql";

document.body.appendChild(a);

a.click();

document.body.removeChild(a);

URL.revokeObjectURL(url);

}
