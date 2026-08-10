/*====================================================
        CODING QUEST SHARED AUDIO BOOTSTRAP
        Loads common audio library only.
        Kingdom-specific audio intentionally not included.
====================================================*/

"use strict";

(function(){

    function initSharedAudio(){

        if(window.AudioManager){
            window.AudioManager.init();
            console.log("🔊 Shared Audio Library Ready");
        }

    }

    if(document.readyState === "loading"){
        document.addEventListener("DOMContentLoaded", initSharedAudio);
    }
    else{
        initSharedAudio();
    }

})();
