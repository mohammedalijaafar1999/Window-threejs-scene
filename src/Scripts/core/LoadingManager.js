export class LoadingManager {
  constructor() {
    this.gltfLoader = new GLTFLoader();
    this.audioListener = new THREE.AudioLoader();
  }

  load() {}
}
