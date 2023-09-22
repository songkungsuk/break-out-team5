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
const attack_block = document.querySelector('#atack_block');
attack_block.volume = 0.5; //효과음소리가 너무 커서 크기조절했음