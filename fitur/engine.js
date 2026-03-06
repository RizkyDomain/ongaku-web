import { pianoKeys } from "./../database/db.js";

let audioContext = null;
let activeOscillators = {};
let sustainMode = false;

function initAudio() {
    if (!audioContext) {
        try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            console.log('AudioContext created successfully');
        } catch (e) {
            console.error('Failed to create AudioContext:', e);
        }
    }

    if (audioContext && audioContext.state === 'suspended') {
        audioContext.resume().then(() => {
            console.log('AudioContext resumed successfully');
        }).catch(e => {
            console.error('Failed to resume AudioContext:', e);
        });
    }
}

function playNote(note, freq) {
    initAudio();

    const oscillators = [];
    const gains = [];

    const osc1 = audioContext.createOscillator();
    const gain1 = audioContext.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, audioContext.currentTime);
    gain1.gain.setValueAtTime(0.4, audioContext.currentTime);
    osc1.connect(gain1);
    oscillators.push(osc1);
    gains.push(gain1);

    const osc2 = audioContext.createOscillator();
    const gain2 = audioContext.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq * 2, audioContext.currentTime);
    gain2.gain.setValueAtTime(0.15, audioContext.currentTime);
    osc2.connect(gain2);
    oscillators.push(osc2);
    gains.push(gain2);

    const osc3 = audioContext.createOscillator();
    const gain3 = audioContext.createGain();
    osc3.type = 'triangle';
    osc3.frequency.setValueAtTime(freq * 3, audioContext.currentTime);
    gain3.gain.setValueAtTime(0.05, audioContext.currentTime);
    osc3.connect(gain3);
    oscillators.push(osc3);
    gains.push(gain3);

    const masterGain = audioContext.createGain();
    masterGain.gain.setValueAtTime(0.5, audioContext.currentTime);

    gains.forEach(g => g.connect(masterGain));
    masterGain.connect(audioContext.destination);

    oscillators.forEach(osc => osc.start());

    if (!sustainMode) {
        const stopTime = audioContext.currentTime + 1.5;
        masterGain.gain.exponentialRampToValueAtTime(0.01, stopTime);
        oscillators.forEach(osc => osc.stop(stopTime + 0.1));
    } else {
        activeOscillators[note] = { oscillators, gains, masterGain };
    }

    showNote(note);
}

function stopNote(note) {
    if (activeOscillators[note]) {
        const { oscillators, masterGain } = activeOscillators[note];
        masterGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        oscillators.forEach(osc => osc.stop(audioContext.currentTime + 0.6));
        delete activeOscillators[note];
    }
    hideNote();
}

function showNote(note) {
    const display = document.getElementById('noteDisplay');
    display.textContent = note.replace('#', '♯');
    display.classList.add('active');
}

function hideNote() {
    const display = document.getElementById('noteDisplay');
    display.classList.remove('active');
}

function createPiano() {
    const piano = document.getElementById('piano');
    let whiteKeyIndex = 0;

    pianoKeys.forEach((keyData, index) => {
        const keyEl = document.createElement('div');
        keyEl.className = `key ${keyData.type}`;
        keyEl.dataset.note = keyData.note;

        const label = document.createElement('span');
        label.className = 'key-label';
        label.textContent = keyData.note.replace('#', '♯');
        keyEl.appendChild(label);

        if (keyData.type === 'white' && keyData.key) {
            const hint = document.createElement('span');
            hint.className = 'key-hint';
            hint.textContent = keyData.key.toUpperCase();
            keyEl.appendChild(hint);
        }

        if (keyData.type === 'black') {
            const prevWhiteKeys = pianoKeys.slice(0, index).filter(k => k.type === 'white').length;
            keyEl.style.left = `${(prevWhiteKeys * 44) - 20}px`;
        }

        keyEl.addEventListener('mousedown', () => {
            keyEl.classList.add('active');
            playNote(keyData.note, keyData.freq);
        });

        keyEl.addEventListener('mouseup', () => {
            if (!sustainMode) {
                keyEl.classList.remove('active');
                stopNote(keyData.note);
            }
        });

        keyEl.addEventListener('mouseleave', () => {
            if (!sustainMode) {
                keyEl.classList.remove('active');
                stopNote(keyData.note);
            }
        });

        keyEl.addEventListener('touchstart', (e) => {
            e.preventDefault();
            keyEl.classList.add('active');
            playNote(keyData.note, keyData.freq);
        });

        keyEl.addEventListener('touchend', (e) => {
            e.preventDefault();
            if (!sustainMode) {
                keyEl.classList.remove('active');
                stopNote(keyData.note);
            }
        });

        piano.appendChild(keyEl);
    });
}

const keyboardMap = {};
pianoKeys.forEach(k => {
    keyboardMap[k.key] = { note: k.note, freq: k.freq };
});

document.addEventListener('keydown', (e) => {
    if (e.repeat) return;

    const key = e.key.toLowerCase();
    const keyData = keyboardMap[key];

    if (keyData) {
        const keyEl = document.querySelector(`.key[data-note="${keyData.note}"]`);
        if (keyEl && !keyEl.classList.contains('active')) {
            keyEl.classList.add('active');
            playNote(keyData.note, keyData.freq);
        }
    }
});

document.addEventListener('keyup', (e) => {
    const key = e.key.toLowerCase();
    const keyData = keyboardMap[key];

    if (keyData) {
        const keyEl = document.querySelector(`.key[data-note="${keyData.note}"]`);
        if (!sustainMode) {
            keyEl.classList.remove('active');
            stopNote(keyData.note);
        }
    }
});

const sustainBtn = document.getElementById('sustainBtn');
const sustainIndicator = document.getElementById('sustainIndicator');

sustainBtn.addEventListener('click', () => {
    sustainMode = !sustainMode;
    sustainBtn.textContent = sustainMode ? 'Sustain: ON' : 'Sustain: OFF';
    sustainBtn.classList.toggle('active', sustainMode);
    sustainIndicator.classList.toggle('active', sustainMode);

    if (!sustainMode) {
        document.querySelectorAll('.key.active').forEach(key => {
            key.classList.remove('active');
        });
        Object.keys(activeOscillators).forEach(note => {
            stopNote(note);
        });
    }
});

createPiano();