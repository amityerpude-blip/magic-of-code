/*====================================================

            MAGIC OF CODE
            SQL VISUALIZER

====================================================*/

"use strict";

/*====================================================
        VISUALIZE SQL EXECUTION
====================================================*/

function visualizeQuery(query){

query=query.toUpperCase();

let steps=[];

/*----------------------------
        SELECT
-----------------------------*/

if(query.includes("SELECT")){

steps.push({

icon:"📋",

title:"SELECT",

text:"Choose the required columns."

});

}

/*----------------------------
        FROM
-----------------------------*/

if(query.includes("FROM")){

steps.push({

icon:"📂",

title:"FROM",

text:"Choose the source table."

});

}

/*----------------------------
        WHERE
-----------------------------*/

if(query.includes("WHERE")){

steps.push({

icon:"🔍",

title:"WHERE",

text:"Filter the required rows."

});

}

/*----------------------------
        GROUP BY
-----------------------------*/

if(query.includes("GROUP BY")){

steps.push({

icon:"📦",

title:"GROUP BY",

text:"Group similar records."

});

}

/*----------------------------
        HAVING
-----------------------------*/

if(query.includes("HAVING")){

steps.push({

icon:"⚡",

title:"HAVING",

text:"Filter grouped records."

});

}

/*----------------------------
        ORDER BY
-----------------------------*/

if(query.includes("ORDER BY")){

steps.push({

icon:"📈",

title:"ORDER BY",

text:"Sort the final result."

});

}

/*----------------------------
        LIMIT
-----------------------------*/

if(query.includes("LIMIT")){

steps.push({

icon:"🔢",

title:"LIMIT",

text:"Return only required rows."

});

}

renderVisualization(steps);

}


/*====================================================
        RENDER FLOWCHART
====================================================*/

function renderVisualization(steps){

const container=

document.getElementById(

"queryVisualizer"

);

if(!container) return;

container.innerHTML="";

steps.forEach((step,index)=>{

container.innerHTML+=`

<div class="visualCard">

<div class="visualIcon">

${step.icon}

</div>

<h3>

${step.title}

</h3>

<p>

${step.text}

</p>

</div>

`;

if(index<steps.length-1){

container.innerHTML+=`

<div class="visualArrow">

⬇

</div>

`;

}

});

}
