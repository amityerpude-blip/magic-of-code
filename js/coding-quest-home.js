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

    stage.classList.remove('pyro-enter','pyro-cast','chest-open','items-ready');
    setTimeout(()=>stage.classList.add('pyro-enter'),900);
    setTimeout(()=>stage.classList.add('pyro-cast'),1800);
    setTimeout(open,2500);
    setTimeout(()=>stage.classList.add('items-ready'),3000);

    if(reduced){
      stage.classList.add('pyro-enter','pyro-cast','chest-open','items-ready');
    }

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

    // Floating coding objects are working navigation shortcuts.
    document.querySelectorAll('.magic-item[data-href]').forEach(item=>{
      const go=()=>{
        if(item.dataset.busy==='1') return;
        item.dataset.busy='1';
        stage.classList.add('items-ready');
        const target=item.dataset.href;
        if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches){
          window.location.href=target;
          return;
        }
        if(item.animate){
          item.animate([
            {transform:'scale(1)',filter:'brightness(1)'},
            {transform:'scale(1.45)',filter:'brightness(2)'},
            {transform:'scale(.15)',filter:'brightness(3)'}
          ],{duration:650,easing:'cubic-bezier(.2,.8,.2,1)',fill:'forwards'}).finished
            .then(()=>{window.location.href=target;});
        }else{
          window.location.href=target;
        }
      };
      item.addEventListener('click',go);
      item.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();go();}});
    });

    document.querySelectorAll('.portal-actions a').forEach(btn=>{
      btn.addEventListener('click',()=>stage.classList.add('items-ready'));
    });
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
