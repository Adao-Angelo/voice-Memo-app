export default class View {
  constructor() {
    this.btnStart = document.getElementById("btnStart");
    this.btnStop = document.getElementById("btnStop");
    this.audio = document.getElementById("audio");
  }
  onRecordClick(command) {
    return () => {
      command();
    };
  }

  configureStartRecordingButton(command) {
    this.btnStart.addEventListener("click", this.onRecordClick(command));
  }
}
