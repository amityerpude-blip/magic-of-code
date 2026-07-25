/*====================================================

            MAGIC OF CODE
            SQL RESET ENGINE

====================================================*/

"use strict";

/*====================================================
            RESET DATABASE
====================================================*/

function resetDatabase(){

if(!confirm(

"Reset Dragon Database?"

)) return;

db.close();

db=new SQL.Database();

createSampleDatabase();

showSQLOutput(

`🐉 Dragon Database Restored Successfully!

All sample data has been recreated.`

);

console.log(

"Database Reset"

);

}


/*====================================================
        RELOAD SAMPLE DATA
====================================================*/

function reloadSampleData(){

db.close();

db=new SQL.Database();

createSampleDatabase();

}
