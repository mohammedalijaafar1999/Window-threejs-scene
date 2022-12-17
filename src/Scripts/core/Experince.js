import * as THREE from "three";
import { Camera, LoadingManager } from "three";
import EventEmitter from "events";
import { Time } from "./Time";
import { SceneCamera } from "./Camera";
import { ExperinceLoadingManager } from "./LoadingManager";
import { World } from "../World/World";

export class Experince {
  constructor() {
    if (Experince._instance) {
      return Experince._instance;
    }
    Experince._instance = this;

    // the constructor bgeins here
    this.events = new EventEmitter();
    this.time = new Time();
    this.loadingManager = new ExperinceLoadingManager();
    this.renderer = new THREE.WebGLRenderer();
    this.scene = new THREE.Scene();
    this.sceneCamera = new SceneCamera();

    var self = this;
    this.events.on("tick", (delta) => {
      self.update(delta);
    });

    this.events.on("LoadingFinished", () => {
      console.log("Experince resources has been loaded");
      self.world = new World();
    });
  }

  init(element) {
    self = this;
    if (element == undefined) {
      element = document.body;
    }
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    element.appendChild(this.renderer.domElement);

    window.addEventListener(
      "resize",
      () => {
        self.sceneCamera.camera.aspect = window.innerWidth / window.innerHeight;
        self.sceneCamera.camera.updateProjectionMatrix();

        this.renderer.setSize(window.innerWidth, window.innerHeight);
      },
      false
    );
  }

  update(delta) {
    this.renderer.render(this.scene, this.sceneCamera.camera);
  }
}
