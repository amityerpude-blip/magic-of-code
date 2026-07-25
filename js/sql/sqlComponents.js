/*====================================================

            MAGIC OF CODE
            SQL COMPONENTS

            sqlComponents.js

====================================================*/

"use strict";

/*====================================================
            SQL CODING COMPONENT
====================================================*/

function SQLCodingComponent(data){

return `

<section
id="codingSection"
class="lessonContent">

<h2>

🐉 ${data.coding.title}

</h2>

<p>

${data.coding.description}

</p>

<div class="sqlWorkbench">

<div class="sqlToolbar">

<button onclick="runSQLCode()">

▶ Execute Query

</button>

<button onclick="clearSQL()">

🧹 Clear

</button>

<button onclick="resetDatabase()">

🔄 Reset Database

</button>

<button onclick="showTables()">

📋 Show Tables

</button>

</div>

<!-- SQL Query Visualizer -->

<div
id="queryVisualizer"
class="queryVisualizer">

</div>

<textarea

id="codeEditor"

spellcheck="false"

class="sqlEditor">

${data.coding.defaultCode}

</textarea>

<div
id="output"
class="sqlOutput">

🐉 Dragon SQL is waiting...

</div>

</div>

</section>

`;

}

CodingComponent = SQLCodingComponent;

console.log("SQL Components Loaded");
