class AudioPlayer {
    constructor() { }

    play(el) {
        if (!el.ended) {
            this._stop(el);
        }
        el.play();
    }

    _stop(el) {
        el.pause();
        el.currentTime = 0.0;
    }
}

const player = new AudioPlayer();
const attack_block = document.querySelector('#attack_block');
const eat_item = document.querySelector('#eat_item');
const paddle_sound = document.querySelector('#paddle_sound');
const stageClear = document.querySelector('#stageClear');
