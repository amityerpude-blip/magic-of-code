/* =========================================================
   CODING QUEST — CINEMATIC CHEST ENTRANCE
   No images required. Uses CSS 3D + emoji/code particles.
   Homepage only.
   ========================================================= */
(function(){
  'use strict';

  function init(){
    const stage=document.querySelector('.magic-stage');
    if(!stage) return;

    const reduced=window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const open=()=>stage.classList.add('chest-open');

    // Cinematic sequence: title + chest -> Master Pyro -> wand cast -> chest opens -> items scatter.
    stage.classList.remove('pyro-enter','pyro-cast','chest-open','items-ready');
    setTimeout(()=>stage.classList.add('pyro-enter'),900);
    setTimeout(()=>stage.classList.add('pyro-cast'),1800);
    setTimeout(open,2500);
    setTimeout(()=>stage.classList.add('items-ready'),3000);

    if(reduced){
      stage.classList.add('pyro-enter','pyro-cast','chest-open','items-ready');
    }

    // Chest itself is an active Start Adventure control.
    const chest=document.querySelector('.chest-zone');
    if(chest){
      chest.setAttribute('role','button');
      chest.setAttribute('tabindex','0');
      chest.setAttribute('aria-label','Open Coding Quest adventure');
      const launch=()=>{
        open();
        stage.classList.add('items-ready');
        setTimeout(()=>{ window.location.href='dashboard.html'; },850);
      };
      chest.addEventListener('click',launch);
      chest.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();launch();}});
    }

    // Floating coding objects are working navigation buttons.
    document.querySelectorAll('.magic-item[href]').forEach(item=>{
      item.addEventListener('click',function(e){
        if(this.dataset.busy==='1') return;
        this.dataset.busy='1';
        e.preventDefault();
        stage.classList.add('items-ready');
        this.animate([
          {transform:'scale(1)',filter:'brightness(1)'},
          {transform:'scale(1.45)',filter:'brightness(2)'},
          {transform:'scale(.15)',filter:'brightness(3)'}
        ],{duration:650,easing:'cubic-bezier(.2,.8,.2,1)',fill:'forwards'}).finished
          .then(()=>{window.location.href=this.href;});
      });
    });

    // Start / Continue buttons remain normal, reliable links.
    document.querySelectorAll('.portal-actions a').forEach(btn=>{
      btn.addEventListener('click',()=>stage.classList.add('items-ready'));
    });
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
