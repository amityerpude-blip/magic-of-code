/*====================================================

            MAGIC OF CODE
            SQL HELP SYSTEM

====================================================*/

"use strict";

/*====================================================
                HELP TOPICS
====================================================*/

const sqlHelp={

SELECT:`

<b>SELECT</b><br><br>

Used to retrieve data from a table.

<pre>

SELECT *
FROM Students;

</pre>

`,

WHERE:`

<b>WHERE</b><br><br>

Filters records based on a condition.

<pre>

SELECT *
FROM Students
WHERE Marks>80;

</pre>

`,

ORDERBY:`

<b>ORDER BY</b><br><br>

Sorts the result.

<pre>

SELECT *
FROM Students
ORDER BY Marks DESC;

</pre>

`,

GROUPBY:`

<b>GROUP BY</b><br><br>

Groups similar records.

<pre>

SELECT Class,
COUNT(*)
FROM Students
GROUP BY Class;

</pre>

`,

INSERT:`

<b>INSERT</b><br><br>

Adds a new record.

<pre>

INSERT INTO Students
VALUES
(6,'Alex','XII-A',89);

</pre>

`,

UPDATE:`

<b>UPDATE</b><br><br>

Updates existing records.

<pre>

UPDATE Students
SET Marks=90
WHERE Roll=5;

</pre>

`,

DELETE:`

<b>DELETE</b><br><br>

Deletes records.

<pre>

DELETE FROM Students
WHERE Roll=5;

</pre>

`

};


/*====================================================
            SHOW HELP
====================================================*/

function showSQLHelp(topic){

const panel=

document.getElementById(

"helpPanel"

);

if(!panel) return;

panel.innerHTML=

sqlHelp[topic] ||

"<b>No help available.</b>";

}


/*====================================================
        OPEN DEFAULT HELP
====================================================*/

function openSQLHelp(){

showSQLHelp(

"SELECT"

);

}
