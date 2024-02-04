export default class Controller {
  constructor({ view, media }) {
    this.view = view;
    this.media = media;
  }

  static initialize(dependencies) {
    const instance = new Controller(dependencies);
    return instance._init();
  }

  _init() {
    this.view.configureStartRecordingButton(this.onStartRecording.bind(this));
  }

  async onStartRecording() {
    const audioStream = await this.media.getAudio();
  }
}
