/*=========================================================
                PYTHON QUEST
                FLIPBOOK ENGINE
=========================================================*/

"use strict";

/*=========================================================
                SETTINGS
=========================================================*/

const TOTAL_PAGES = 21;      // Change for each world

let currentPage = 1;


/*=========================================================
                LOAD PAGE
=========================================================*/

function loadPage(){

    const flipbook = document.getElementById("flipbook");

    if(!flipbook) return;

    flipbook.innerHTML = `

        <div class="comicViewer">

            <img
                id="comicImage"
                src="comics/t${currentPage}.png"
                alt="Comic Page ${currentPage}"
            >

            <div class="comicPageNumber">

                Page ${currentPage} / ${TOTAL_PAGES}

            </div>

        </div>

    `;

    const image = document.getElementById("comicImage");

    image.onload = function(){

        console.log("Comic Loaded :", currentPage);

    };

    image.onerror = function(){

        flipbook.innerHTML = `

            <div class="comicError">

                <h2>📜 Missing Comic Page</h2>

                <p>

                comics/t${currentPage}.png

                </p>

            </div>

        `;

    };

}


/*=========================================================
                NEXT PAGE
=========================================================*/

function nextComic(){

    if(currentPage < TOTAL_PAGES){

        currentPage++;

        loadPage();

    }

}


/*=========================================================
                PREVIOUS PAGE
=========================================================*/

function previousComic(){

    if(currentPage > 1){

        currentPage--;

        loadPage();

    }

}


/*=========================================================
                GO TO PAGE
=========================================================*/

function goToPage(page){

    if(page>=1 && page<=TOTAL_PAGES){

        currentPage = page;

        loadPage();

    }

}


/*=========================================================
                KEYBOARD SUPPORT
=========================================================*/

document.addEventListener("keydown",function(event){

    if(event.key==="ArrowRight"){

        nextComic();

    }

    if(event.key==="ArrowLeft"){

        previousComic();

    }

});


/*=========================================================
                INITIALIZE
=========================================================*/

document.addEventListener("DOMContentLoaded",function(){

    loadPage();

    const nextButton = document.getElementById("nextComic");

    const previousButton = document.getElementById("previousComic");

    if(nextButton){

        nextButton.addEventListener("click",nextComic);

    }

    if(previousButton){

        previousButton.addEventListener("click",previousComic);

    }

});


/*=========================================================
                DEBUG
=========================================================*/

console.log("📖 Flipbook Ready");
