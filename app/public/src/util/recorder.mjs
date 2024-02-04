export default class Recorder {
  constructor() {
    this.audioType = "audio/webm;codecs=opus";
    this.mediaRecorder = {};
    this.mediaRecordedBlods = [];
  }
  _setup() {
    const options = { mineType: this.audioType };
    const isSupported = MediaRecorder.isTypeSupported(options);
    if (!isSupported) {
      const msg = `The codec: ${options.mineType} isn't supported`;
      alert(msg);
      throw new Error(msg);
    }
    return options;
  }

  startRecording(stream) {
    const options = this._setup();
    this.mediaRecorder = new MediaRecorder(stream, options);
    this.mediaRecorder.ondataavailable = (event) => {
      if (!event.data || event.data.size) return;

      this.mediaRecordedBlods.push(event.data);
    };

    this.mediaRecorder.start();
  }
}
