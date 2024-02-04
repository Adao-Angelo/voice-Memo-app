export default class Controller {
  constructor({ view }) {
    this.view = view;
  }

  static initialize(dependencies) {
    const instance = new Controller(dependencies);
    return instance._init();
  }

  _init() {
    this.view.configureStartRecordingButton(this.onStartRecording.bind(this));
  }

  async onStartRecording() {
    console.log("init tha record");
  }
}
