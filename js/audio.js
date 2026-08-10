/*====================================================
        CODING QUEST AUDIO MANAGER
        One shared audio library for every kingdom
====================================================*/

"use strict";

const AUDIO_SCRIPT_URL = document.currentScript ? document.currentScript.src : null;
const AUDIO_PREFS_KEY = "magicOfCodeAudioPrefs";

const AudioManager = {
    sounds: {}, ambient: null, ambientStarted: false, enabled: true, volume: 0.35, initialized: false, rootPath: "",
    files:{hover:"hover.mp3",button:"button.mp3",success:"success.mp3",wrong:"wrong.mp3",error:"error.mp3",pageFlip:"transition.mp3",magic:"magic.mp3",levelUp:"level-up.mp3",victory:"victory.mp3",defeat:"defeat.mp3",coin:"coin.mp3",badge:"badge.mp3",chestOpen:"chest-open.mp3",reward:"reward.mp3",spellCast:"spell-cast.mp3",monsterHit:"monster-hit.mp3",monsterDefeat:"monster-defeat.mp3",click:"button.mp3",notification:"notification.mp3",transition:"transition.mp3"},
    init(){
        if(this.initialized)return;
        if(AUDIO_SCRIPT_URL)this.rootPath=new URL("../",AUDIO_SCRIPT_URL).href; else this.rootPath=new URL("./",window.location.href).href;
        try{const saved=JSON.parse(localStorage.getItem(AUDIO_PREFS_KEY)||"null");if(saved){this.enabled=saved.enabled!==false;this.volume=Math.max(0,Math.min(1,Number(saved.volume)));}}catch(e){}
        Object.keys(this.files).forEach(key=>{this.sounds[key]=null;});
        this.initialized=true; console.log("🔊 Shared Audio Library Ready");
    },
    savePrefs(){try{localStorage.setItem(AUDIO_PREFS_KEY,JSON.stringify({enabled:this.enabled,volume:this.volume}));}catch(e){}},
    resolveAsset(file){return new URL("assets/audio/common/"+file,this.rootPath).href;},
    play(name){
        if(!this.enabled)return; if(!this.initialized)this.init(); const file=this.files[name]; if(!file)return;
        let audio=this.sounds[name]; if(!audio){audio=new Audio(this.resolveAsset(file));audio.preload="auto";audio.volume=this.volume;this.sounds[name]=audio;}
        audio.volume=this.volume;audio.currentTime=0;audio.play().catch(()=>{});
    },
    playAmbient(file="ambient.mp3"){
        if(!this.enabled)return Promise.resolve(false); if(!this.initialized)this.init();
        const source=file.startsWith("http")?file:new URL(file,this.rootPath).href;
        if(this.ambient&&this.ambient.src!==source){this.ambient.pause();this.ambient=null;this.ambientStarted=false;}
        if(!this.ambient){this.ambient=new Audio(source);this.ambient.preload="auto";this.ambient.loop=true;this.ambient.volume=this.volume;}
        this.ambient.volume=this.volume;
        return this.ambient.play().then(()=>{this.ambientStarted=true;console.log("🎵 Shared background music started:",source);return true;}).catch(()=>{this.ambientStarted=false;console.log("🎵 Background music waiting for user interaction.");return false;});
    },
    stopAmbient(){if(this.ambient){this.ambient.pause();this.ambient.currentTime=0;this.ambientStarted=false;}},
    setVolume(value){this.volume=Math.max(0,Math.min(1,Number(value)));if(this.ambient)this.ambient.volume=this.volume;Object.values(this.sounds).forEach(a=>{if(a)a.volume=this.volume;});this.savePrefs();this.updateControl();},
    toggle(){this.enabled=!this.enabled;if(!this.enabled)this.stopAmbient();else this.playAmbient();this.savePrefs();this.updateControl();return this.enabled;},
    updateControl(){const btn=document.getElementById("audioBirdButton");if(btn){btn.textContent=this.enabled?"🐦":"🐦🔇";btn.setAttribute("aria-label",this.enabled?"Music on":"Music off");}const slider=document.getElementById("audioVolumeSlider");if(slider)slider.value=this.volume;}
};
window.AudioManager=AudioManager;
document.addEventListener("DOMContentLoaded",()=>AudioManager.init());
