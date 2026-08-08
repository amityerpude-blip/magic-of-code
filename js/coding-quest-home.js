/* =========================================================
   CODING QUEST — CINEMATIC VIDEO HOMEPAGE
   Opening.mp4 plays once -> repeat.mp4 loops until Start Adventure.
   ========================================================= */
(function(){
  'use strict';

  function init(){
    const stage=document.querySelector('.video-home-stage');
    const opening=document.getElementById('openingVideo');
    const repeat=document.getElementById('repeatVideo');
    const start=document.getElementById('startAdventureBtn');
    const sound=document.getElementById('soundToggle');
    const hint=document.getElementById('videoHomeHint');
    if(!stage || !opening || !repeat) return;

    let started=false;

    function showRepeat(){
      stage.classList.add('repeat-active');
      repeat.currentTime=0;
      repeat.loop=true;
      const p=repeat.play();
      if(p && typeof p.catch==='function') p.catch(()=>{});
      if(hint) hint.textContent='✨ Your Coding Quest awaits...';
    }

    opening.addEventListener('ended',showRepeat,{once:true});
    opening.addEventListener('error',showRepeat,{once:true});

    const playOpening=()=>{
      const p=opening.play();
      if(p && typeof p.catch==='function') p.catch(()=>{});
    };
    playOpening();

    function enableSound(){
      opening.muted=false;
      repeat.muted=false;
      if(sound){
        sound.textContent='🔊';
        sound.setAttribute('aria-label','Mute magical sound');
      }
      if(stage.classList.contains('repeat-active')) repeat.play().catch(()=>{});
    }

    if(sound){
      sound.addEventListener('click',function(){
        const muted=opening.muted && repeat.muted;
        if(muted){
          enableSound();
        }else{
          opening.muted=true;
          repeat.muted=true;
          sound.textContent='🔇';
          sound.setAttribute('aria-label','Enable magical sound');
        }
      });
    }

    stage.addEventListener('pointerdown',function(event){
      if(event.target===sound || event.target===start) return;
      if(opening.muted && repeat.muted) enableSound();
    },{passive:true});

    if(start){
      start.addEventListener('click',function(){
        if(started) return;
        started=true;
        opening.pause();
        repeat.pause();
        stage.classList.add('leaving-adventure');
      });
    }
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
