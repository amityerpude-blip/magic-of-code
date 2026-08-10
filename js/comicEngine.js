/*====================================================

            MAGIC OF CODE
            COMIC ENGINE

            comicEngine.js

====================================================*/

"use strict";

let comicPage = 1;
let comicTotal = 1;
let comicFolder = "";

function initializeComic(data){
    comicFolder = data.comic.folder;
    comicTotal = data.comic.totalPages;
    comicPage = 1;
    updateComic();
    enableComicKeyboard();
    enableComicSwipe();
    preloadComicImages();
}

function updateComic(){
    const image=document.getElementById("comicImage");
    const counter=document.getElementById("pageNumber");
    if(!image)return;
    image.src=comicFolder+comicPage+".png";
    if(counter)counter.innerHTML=`📖 Page ${comicPage} / ${comicTotal}`;
    if(typeof recordComicPage==="function")recordComicPage(comicPage);
    playPageSound();
}

function nextComic(){if(comicPage<comicTotal){comicPage++;updateComic();}}
function previousComic(){if(comicPage>1){comicPage--;updateComic();}}
function firstComic(){comicPage=1;updateComic();}
function lastComic(){comicPage=comicTotal;updateComic();}
function goToComic(page){if(page<1||page>comicTotal)return;comicPage=page;updateComic();}

function preloadComicImages(){
    for(let i=1;i<=comicTotal;i++){
        const img=new Image();
        img.src=comicFolder+i+".png";
    }
}

function enableComicKeyboard(){
    document.addEventListener("keydown",function(e){
        if(e.key==="ArrowRight")nextComic();
        if(e.key==="ArrowLeft")previousComic();
    });
}

function enableComicSwipe(){
    const image=document.getElementById("comicImage");
    if(!image)return;
    let startX=0;
    image.addEventListener("touchstart",e=>{startX=e.changedTouches[0].clientX;});
    image.addEventListener("touchend",e=>{
        const endX=e.changedTouches[0].clientX;
        if(endX-startX>60)previousComic();
        if(startX-endX>60)nextComic();
    });
}

function playPageSound(){
    if(window.AudioManager){
        AudioManager.play("pageFlip");
    }
}
