/*====================================================

            MAGIC OF CODE
            SQL QUERY TEMPLATES

====================================================*/

"use strict";

/*====================================================
            QUERY TEMPLATES
====================================================*/

const sqlTemplates={

select:

`SELECT *
FROM Students;`,

where:

`SELECT Name, Marks
FROM Students
WHERE Marks > 80;`,

order:

`SELECT *
FROM Students
ORDER BY Marks DESC;`,

count:

`SELECT COUNT(*)
FROM Students;`,

sum:

`SELECT SUM(Marks)
FROM Students;`,

avg:

`SELECT AVG(Marks)
FROM Students;`,

min:

`SELECT MIN(Marks)
FROM Students;`,

max:

`SELECT MAX(Marks)
FROM Students;`,

group:

`SELECT Class,
COUNT(*)
FROM Students
GROUP BY Class;`,

insert:

`INSERT INTO Students
VALUES
(6,'Alex','XII-B',89);`,

update:

`UPDATE Students
SET Marks=90
WHERE Roll=5;`,

delete:

`DELETE FROM Students
WHERE Roll=5;`

};


/*====================================================
            LOAD TEMPLATE
====================================================*/

function loadSQLTemplate(name){

if(

!sqlTemplates[name]

) return;

setSQLQuery(

sqlTemplates[name]

);

showSQLOutput(

"📜 SQL Template Loaded"

);

}
