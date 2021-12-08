export class AudioService {
  gainNode = null;
  source = null;

  set volume(value) {
    this.gainNode.gain.value = value;
  }

  constructor(url) {
    this.load(url)
  }

  async load(url) {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    const context = new AudioContext();
    this.source = context.createBufferSource();
    this.gainNode = context.createGain();
    const audioBuffer = await fetch(url)
      .then((res) => res.arrayBuffer())
      .then((ArrayBuffer) => context.decodeAudioData(ArrayBuffer));

    this.source.buffer = audioBuffer;
    this.source.connect(this.gainNode).connect(context.destination);
  }

  play() {
      this.source.start();
  }
}
