/*====================================================
        CODING QUEST AUDIO MANAGER
        Shared audio system
====================================================*/

"use strict";

const AudioManager = {

    sounds: {},
    ambient: null,
    enabled: true,
    volume: 0.35,
    initialized: false,
    rootPath: "",

    files:{
        hover:"hover.mp3",
        button:"button.mp3",
        success:"success.mp3",
        wrong:"wrong.mp3",
        error:"error.mp3",
        pageFlip:"page-flip.mp3",
        magic:"magic.mp3",
        levelUp:"level-up.mp3",
        victory:"victory.mp3",
        defeat:"defeat.mp3",
        coin:"coin.mp3",
        badge:"badge.mp3",
        chestOpen:"chest-open.mp3",
        reward:"reward.mp3",
        spellCast:"spell-cast.mp3",
        monsterHit:"monster-hit.mp3",
        monsterDefeat:"monster-defeat.mp3",
        click:"click.mp3",
        notification:"notification.mp3",
        transition:"magic-transition.mp3"
    },

    resolveAsset(file){

        return new URL(
            "assets/audio/common/" + file,
            this.rootPath
        ).href;

    },

    init(){

        if(this.initialized) return;

        /* Resolve the repository root from this shared script itself.
           This keeps the same library working from every kingdom folder. */
        const script=document.currentScript;

        if(script && script.src){
            this.rootPath=new URL("../",script.src).href;
        }
        else{
            this.rootPath=new URL("../",window.location.href).href;
        }

        Object.keys(this.files).forEach(key=>{

            const audio=new Audio(
                this.resolveAsset(this.files[key])
            );

            audio.preload="auto";
            audio.volume=this.volume;
            this.sounds[key]=audio;

        });

        this.initialized=true;

    },

    play(name){

        if(!this.enabled)return;

        if(!this.initialized)this.init();

        const audio=this.sounds[name];

        if(!audio)return;

        audio.currentTime=0;

        audio.play().catch(()=>{});

    },

    playAmbient(file){

        if(!this.enabled)return;

        if(this.ambient){
            this.ambient.pause();
        }

        this.ambient=new Audio(
            file.startsWith("http")
                ? file
                : new URL(file,this.rootPath).href
        );

        this.ambient.loop=true;
        this.ambient.volume=0.25;
        this.ambient.play().catch(()=>{});

    },

    stopAmbient(){

        if(this.ambient){
            this.ambient.pause();
            this.ambient.currentTime=0;
        }

    },

    toggle(){

        this.enabled=!this.enabled;

        return this.enabled;

    }
};

window.AudioManager=AudioManager;

document.addEventListener("DOMContentLoaded",()=>{
    AudioManager.init();
});
