/*====================================================

            MAGIC OF CODE
            COMIC ENGINE

            comicEngine.js

====================================================*/


/*====================================================
            GLOBAL VARIABLES
====================================================*/

let comicPage = 1;

let comicTotal = 1;

let comicFolder = "";


/*====================================================
            INITIALIZE COMIC
====================================================*/

function initializeComic(data){

comicFolder = data.comic.folder;

comicTotal = data.comic.totalPages;

comicPage = 1;

updateComic();

enableComicKeyboard();

enableComicSwipe();

preloadComicImages();

}


/*====================================================
            UPDATE COMIC
====================================================*/

function updateComic(){

const image = document.getElementById("comicImage");

const counter = document.getElementById("pageNumber");

if(!image)return;

image.src = comicFolder + comicPage + ".png";

counter.innerHTML =

`📖 Page ${comicPage} / ${comicTotal}`;

playPageSound();

}


/*====================================================
            NEXT PAGE
====================================================*/

function nextComic(){

if(comicPage<comicTotal){

comicPage++;

updateComic();

}

}


/*====================================================
            PREVIOUS PAGE
====================================================*/

function previousComic(){

if(comicPage>1){

comicPage--;

updateComic();

}

}


/*====================================================
            FIRST PAGE
====================================================*/

function firstComic(){

comicPage=1;

updateComic();

}


/*====================================================
            LAST PAGE
====================================================*/

function lastComic(){

comicPage=comicTotal;

updateComic();

}


/*====================================================
            GO TO PAGE
====================================================*/

function goToComic(page){

if(page<1)return;

if(page>comicTotal)return;

comicPage=page;

updateComic();

}


/*====================================================
            PRELOAD IMAGES
====================================================*/

function preloadComicImages(){

for(let i=1;i<=comicTotal;i++){

const img=new Image();

img.src=comicFolder+i+".png";

}

}


/*====================================================
            KEYBOARD SUPPORT
====================================================*/

function enableComicKeyboard(){

document.addEventListener(

"keydown",

function(e){

if(e.key==="ArrowRight"){

nextComic();

}

if(e.key==="ArrowLeft"){

previousComic();

}

}

);

}


/*====================================================
            MOBILE SWIPE
====================================================*/

function enableComicSwipe(){

const image=document.getElementById("comicImage");

if(!image)return;

let startX=0;

image.addEventListener("touchstart",(e)=>{

startX=e.changedTouches[0].clientX;

});

image.addEventListener("touchend",(e)=>{

let endX=e.changedTouches[0].clientX;

if(endX-startX>60){

previousComic();

}

if(startX-endX>60){

nextComic();

}

});

}


/*====================================================
            PAGE SOUND
====================================================*/

function playPageSound(){

const audio=document.getElementById("pageFlip");

if(audio){

audio.currentTime=0;

audio.play().catch(()=>{});

}

}
