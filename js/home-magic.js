/*====================================================
   CODING QUEST — MAGICAL CHEST ENTRANCE
   Homepage-only animation. No kingdom logic touched.
====================================================*/
(function(){
    "use strict";

    function initMagicEntrance(){
        const stage=document.querySelector('.magic-stage');
        const chest=document.querySelector('.magic-chest');
        const wand=document.querySelector('.magic-wand');
        const realms=document.querySelectorAll('.realm');
        if(!stage || !chest || !wand || !realms.length) return;

        // Respect reduced-motion accessibility settings.
        if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches){
            stage.classList.add('magic-ready');
            return;
        }

        // Restart cleanly if the page is restored from browser cache.
        stage.classList.remove('magic-ready','chest-open','wand-cast');
        realms.forEach(r=>r.classList.remove('realm-reveal'));

        // The chest is the first visual anchor.
        setTimeout(()=>stage.classList.add('chest-awaken'),350);

        // Wand appears and casts a spark.
        setTimeout(()=>stage.classList.add('wand-cast'),1450);

        // Chest opens with a magical burst.
        setTimeout(()=>stage.classList.add('chest-open'),2250);

        // Release the five realms one after another.
        realms.forEach((realm,index)=>{
            setTimeout(()=>realm.classList.add('realm-reveal'),2600 + index*260);
        });

        // Leave the scene in its calm orbiting state.
        setTimeout(()=>stage.classList.add('magic-ready'),4300);

        // Clicking a realm gives a short magical feedback before navigation.
        realms.forEach(realm=>{
            realm.addEventListener('click',function(event){
                if(stage.classList.contains('realm-transition')) return;
                event.preventDefault();
                stage.classList.add('realm-transition');
                realm.classList.add('realm-selected');
                setTimeout(()=>{ window.location.href=realm.href; },700);
            });
        });
    }

    if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',initMagicEntrance,{once:true});
    else initMagicEntrance();
})();
