export default class Recorder {
  constructor() {
    this.audioType = "audio/webm;codecs=opus";
    this.mediaRecorder = {};
    this.recordedBlods = [];
  }
  _setup() {
    const options = { mineType: this.audioType };
    const isSupported = MediaRecorder.isTypeSupported(options.mineType);
    if (!isSupported) {
      const msg = `The codec: ${options.mineType} isn't supported`;
      alert(msg);
      //throw new Error(msg);
    }
    return options;
  }

  startRecording(stream) {
    const options = this._setup();
    this.mediaRecorder = new MediaRecorder(stream, options);
    this.mediaRecorder.ondataavailable = (event) => {
      if (!event.data || event.data.size) return;

      this.recordedBlods.push(event.data);
    };

    this.mediaRecorder.onstop = (event) => {
      console.log("Recorder Blobs", this.recordedBlods);
    };

    this.mediaRecorder.start();
    console.log("midia recorder starting", this.mediaRecorder);
  }

  async stopRecording() {
    if (this.mediaRecorder.state === "inactive") return;

    this.mediaRecorder.stop();
    console.log("midia recorder stoped", this.recordedBlods);
  }
}
