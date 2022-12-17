import * as THREE from "three";
import sources from "./sources";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Experince } from "./Experince";

export class ExperinceLoadingManager {
  constructor() {
    var self = this;
    this.experince = new Experince();
    this.events = this.experince.events;
    this.manager = new THREE.LoadingManager();
    this.resources = {};
    this.gltfLoader = new GLTFLoader(this.manager);
    this.audioListener = new THREE.AudioLoader(this.manager);
    this.loadResources();

    this.manager.onLoad = function () {
      self.events.emit("LoadingFinished");
    };
  }

  loadResources() {
    console.log("loading started");
    var self = this;

    //load all gltf
    for (let index = 0; index < sources.gltf.length; index++) {
      var source = sources.gltf[index];
      this.gltfLoader.load(
        source.url,
        (asset) => {
          self.sourceLoaded(source.name, asset);
        },
        (progress) => {},
        (error) => {
          console.log(error);
        }
      );
    }
  }

  sourceLoaded(name, file) {
    this.resources[name] = file;
  }
}
