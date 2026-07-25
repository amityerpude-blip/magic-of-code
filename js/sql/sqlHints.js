/*====================================================

            MAGIC OF CODE
            SQL HINT SYSTEM

====================================================*/

"use strict";

/*====================================================
                SQL HINTS
====================================================*/

const sqlHints={

SELECT:
"Use SELECT to choose columns you want to display.",

FROM:
"FROM specifies the table to read data from.",

WHERE:
"WHERE filters rows according to a condition.",

ORDERBY:
"ORDER BY sorts records in ascending or descending order.",

GROUPBY:
"GROUP BY creates groups before aggregation.",

HAVING:
"HAVING filters groups after GROUP BY.",

INSERT:
"INSERT adds new records into a table.",

UPDATE:
"UPDATE modifies existing records.",

DELETE:
"DELETE removes records from a table.",

COUNT:
"COUNT() counts the number of rows.",

SUM:
"SUM() calculates the total value.",

AVG:
"AVG() calculates the average value.",

MIN:
"MIN() returns the smallest value.",

MAX:
"MAX() returns the largest value."

};


/*====================================================
            SHOW HINT
====================================================*/

function showSQLHint(keyword){

const panel=

document.getElementById(

"hintPanel"

);

if(!panel) return;

const hint=

sqlHints[keyword] ||

"No hint available.";

panel.innerHTML=`

<div class="hintCard">

<h3>

💡 SQL Hint

</h3>

<p>

${hint}

</p>

</div>

`;

}


/*====================================================
        AUTO DETECT QUERY
====================================================*/

function updateSQLHint(query){

const upper=

query.toUpperCase();

if(upper.includes("GROUP BY"))

return showSQLHint(

"GROUPBY"

);

if(upper.includes("ORDER BY"))

return showSQLHint(

"ORDERBY"

);

if(upper.includes("HAVING"))

return showSQLHint(

"HAVING"

);

if(upper.includes("SELECT"))

return showSQLHint(

"SELECT"

);

if(upper.includes("FROM"))

return showSQLHint(

"FROM"

);

if(upper.includes("WHERE"))

return showSQLHint(

"WHERE"

);

if(upper.includes("INSERT"))

return showSQLHint(

"INSERT"

);

if(upper.includes("UPDATE"))

return showSQLHint(

"UPDATE"

);

if(upper.includes("DELETE"))

return showSQLHint(

"DELETE"

);

if(upper.includes("COUNT"))

return showSQLHint(

"COUNT"

);

if(upper.includes("SUM"))

return showSQLHint(

"SUM"

);

if(upper.includes("AVG"))

return showSQLHint(

"AVG"

);

if(upper.includes("MIN"))

return showSQLHint(

"MIN"

);

if(upper.includes("MAX"))

return showSQLHint(

"MAX"

);

}
