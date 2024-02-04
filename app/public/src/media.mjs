export default class Media {
  async getAudio() {
    return navigator.mediaDevices.getAudio({
      audio: true,
    });
  }
}
