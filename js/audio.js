/*====================================================
        MAGIC OF CODE AUDIO MANAGER
        One shared audio library for every kingdom
====================================================*/

"use strict";

const AUDIO_SCRIPT_URL = document.currentScript ? document.currentScript.src : null;
const AUDIO_PREFS_KEY = "magicOfCodeAudioPrefs";

const AudioManager = {
    sounds: {},
    ambient: null,
    ambientStarted: false,
    enabled: true,
    volume: 0.35,
    initialized: false,
    rootPath: "",

    files: {
        hover: "hover.mp3",
        button: "button.mp3",
        success: "success.mp3",
        wrong: "wrong.mp3",
        error: "error.mp3",
        pageFlip: "transition.mp3",
        magic: "magic.mp3",
        levelUp: "level-up.mp3",
        victory: "victory.mp3",
        defeat: "defeat.mp3",
        coin: "coin.mp3",
        badge: "badge.mp3",
        chestOpen: "chest-open.mp3",
        reward: "reward.mp3",
        spellCast: "spell-cast.mp3",
        monsterHit: "monster-hit.mp3",
        monsterDefeat: "monster-defeat.mp3",
        click: "button.mp3",
        notification: "notification.mp3",
        transition: "transition.mp3"
    },

    init() {
        if (this.initialized) return;

        if (AUDIO_SCRIPT_URL) {
            // audio.js lives in /js, so this resolves to the repository root.
            this.rootPath = new URL("../", AUDIO_SCRIPT_URL).href;
        } else {
            this.rootPath = new URL("./", window.location.href).href;
        }

        try {
            const saved = JSON.parse(localStorage.getItem(AUDIO_PREFS_KEY) || "null");
            if (saved) {
                this.enabled = saved.enabled !== false;
                const savedVolume = Number(saved.volume);
                if (Number.isFinite(savedVolume)) {
                    this.volume = Math.max(0, Math.min(1, savedVolume));
                }
            }
        } catch (e) {
            console.warn("Audio preferences could not be read.", e);
        }

        Object.keys(this.files).forEach(key => this.sounds[key] = null);
        this.initialized = true;
        console.log("🔊 Shared Audio Library Ready", this.rootPath);
        this.updateControl();
    },

    savePrefs() {
        try {
            localStorage.setItem(AUDIO_PREFS_KEY, JSON.stringify({
                enabled: this.enabled,
                volume: this.volume
            }));
        } catch (e) {}
    },

    resolveAsset(file) {
        return new URL("assets/audio/common/" + file, this.rootPath).href;
    },

    play(name) {
        if (!this.initialized) this.init();
        if (!this.enabled) return Promise.resolve(false);

        const file = this.files[name];
        if (!file) return Promise.resolve(false);

        let audio = this.sounds[name];
        if (!audio) {
            audio = new Audio(this.resolveAsset(file));
            audio.preload = "auto";
            audio.volume = this.volume;
            this.sounds[name] = audio;
        }

        audio.volume = this.volume;
        audio.currentTime = 0;

        return audio.play()
            .then(() => true)
            .catch(error => {
                console.warn("Audio play blocked/failed:", name, error);
                return false;
            });
    },

    playAmbient(file = "ambient.mp3") {
        if (!this.initialized) this.init();
        if (!this.enabled) return Promise.resolve(false);

        const source = file.startsWith("http")
            ? file
            : new URL(file, this.rootPath).href;

        if (this.ambient && this.ambient.src !== source) {
            this.ambient.pause();
            this.ambient = null;
            this.ambientStarted = false;
        }

        if (!this.ambient) {
            this.ambient = new Audio(source);
            this.ambient.preload = "auto";
            this.ambient.loop = true;
            this.ambient.volume = this.volume;
            this.ambient.addEventListener("error", () => {
                this.ambientStarted = false;
                console.error("❌ Background music failed to load:", source);
            });
        }

        this.ambient.volume = this.volume;

        return this.ambient.play()
            .then(() => {
                this.ambientStarted = true;
                console.log("🎵 Shared background music started:", source);
                this.updateControl();
                return true;
            })
            .catch(error => {
                this.ambientStarted = false;
                console.warn("🎵 Background music needs a user gesture:", error.name);
                this.updateControl();
                return false;
            });
    },

    // Called by the visible bird. A click should START music if autoplay was blocked,
    // rather than turning the music off on the first click.
    userStart() {
        if (!this.initialized) this.init();
        if (!this.enabled) {
            this.enabled = true;
            this.savePrefs();
        }
        if (this.ambientStarted) {
            this.toggle();
            return;
        }
        this.playAmbient("assets/audio/common/ambient.mp3");
    },

    stopAmbient() {
        if (this.ambient) {
            this.ambient.pause();
            this.ambient.currentTime = 0;
        }
        this.ambientStarted = false;
        this.updateControl();
    },

    setVolume(value) {
        const numeric = Number(value);
        if (!Number.isFinite(numeric)) return;

        this.volume = Math.max(0, Math.min(1, numeric));
        if (this.ambient) this.ambient.volume = this.volume;
        Object.values(this.sounds).forEach(audio => {
            if (audio) audio.volume = this.volume;
        });
        this.savePrefs();
        this.updateControl();
    },

    toggle() {
        this.enabled = !this.enabled;

        if (!this.enabled) {
            this.stopAmbient();
        } else {
            this.playAmbient("assets/audio/common/ambient.mp3");
        }

        this.savePrefs();
        this.updateControl();
        return this.enabled;
    },

    updateControl() {
        const bird = document.getElementById("audioBirdButton");
        if (bird) {
            bird.textContent = this.enabled ? "🐦" : "🐦🔇";
            bird.setAttribute("aria-label", this.enabled ? "Play or mute music" : "Music muted");
            bird.classList.toggle("audioPlaying", !!this.ambientStarted);
        }

        const mute = document.getElementById("audioMuteButton");
        if (mute) mute.textContent = this.enabled ? "🔊" : "🔇";

        const slider = document.getElementById("audioVolumeSlider");
        if (slider) slider.value = String(this.volume);
    }
};

window.AudioManager = AudioManager;
document.addEventListener("DOMContentLoaded", () => AudioManager.init());
