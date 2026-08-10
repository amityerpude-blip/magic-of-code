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

    files:{
        hover:"assets/audio/common/hover.mp3",
        button:"assets/audio/common/button.mp3",
        success:"assets/audio/common/success.mp3",
        wrong:"assets/audio/common/wrong.mp3",
        error:"assets/audio/common/error.mp3",
        pageFlip:"assets/audio/common/page-flip.mp3",
        magic:"assets/audio/common/magic.mp3",
        levelUp:"assets/audio/common/level-up.mp3",
        victory:"assets/audio/common/victory.mp3",
        defeat:"assets/audio/common/defeat.mp3",
        coin:"assets/audio/common/coin.mp3",
        badge:"assets/audio/common/badge.mp3",
        chestOpen:"assets/audio/common/chest-open.mp3",
        reward:"assets/audio/common/reward.mp3",
        spellCast:"assets/audio/common/spell-cast.mp3",
        monsterHit:"assets/audio/common/monster-hit.mp3",
        monsterDefeat:"assets/audio/common/monster-defeat.mp3",
        click:"assets/audio/common/click.mp3",
        notification:"assets/audio/common/notification.mp3",
        transition:"assets/audio/common/magic-transition.mp3"
    },

    init(){
        Object.keys(this.files).forEach(key=>{
            const audio=new Audio(this.files[key]);
            audio.volume=this.volume;
            this.sounds[key]=audio;
        });
    },

    play(name){
        if(!this.enabled || !this.sounds[name]) return;
        this.sounds[name].currentTime=0;
        this.sounds[name].play().catch(()=>{});
    },

    playAmbient(file){
        if(!this.enabled) return;
        if(this.ambient) this.ambient.pause();
        this.ambient=new Audio(file);
        this.ambient.loop=true;
        this.ambient.volume=0.25;
        this.ambient.play().catch(()=>{});
    },

    stopAmbient(){
        if(this.ambient){
            this.ambient.pause();
        }
    },

    toggle(){
        this.enabled=!this.enabled;
        return this.enabled;
    }
};

document.addEventListener("DOMContentLoaded",()=>{
    AudioManager.init();
});

window.AudioManager=AudioManager;
