/**
 * https://stackoverflow.com/questions/30482887/playing-a-simple-sound-with-web-audio-api
 */
export class AudioService {
  audioContext = null;
  audioSource = null;
  isReady = false;
  elementCallback = false;

  constructor(elementCallback) {
    this.elementCallback = elementCallback

    // gainNode.value
  }

  setGain(value) {
    if (!this.isReady) return;
    this.audioSource.gain.value = value;
  }

  load(url) {
    const context = new (window.AudioContext || window.webkitAudioContext)();

    fetch(url)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) =>
        context.decodeAudioData(
          // Apple Dark Arts, beware decodeAudioData...
          arrayBuffer,
          (audioBuffer) => this.ready(context, audioBuffer),
          (error) => console.log("error", error)
        )
      );
  }

  ready(context, audioBuffer) {
    const source = context.createBufferSource();
    const gainNode = context.createGain();

    source.connect(gainNode).connect(context.destination);
    source.buffer = audioBuffer;

    this.audioContext = context;
    this.audioSource = source;
    this.isReady = true;
  }

  play() {
    this.context = new (window.AudioContext || window.webkitAudioContext)();
    const gainNode = this.context.createGain()
    this.audioSource = this.context.createMediaElementSource(this.elementCallback())
    this.audioSource.connect(gainNode).connect(this.context.destination)

    this.audioSource.start();
    // this.audioContext.resume()



    this.debug();

    // console.log('hello before')
    // if (!this.isReady) return
    // console.log('hello start')
    // this.source.start()

    // document.addEventListener('touchend', () => {
    //   if (this.context.state === 'suspended') {
    //     console.log('resume')
    //     this.context.resume()
    //   }
    //   // this.context.resume()
    // })
    // console.log("AudioService", {
    //   gainNode: this.gainNode,
    //   source: this.source,
    //   context: this.context,
    // });
  }

  resume() {
    // if (this.audioContext.state === 'running')
    //   this.audioContext.suspend()

    if (this.audioContext.state === 'suspended')
      this.audioContext.resume()
  }

  debug() {
    window.AudioService = this;
  }
}
