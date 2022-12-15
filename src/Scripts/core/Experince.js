import * as THREE from "three";
import { LoadingManager } from "three";
import EventEmitter from "events";
import { Time } from "./Time";

export class Experince {
  constructor() {
    if (Experince._instance) {
      return Experince._instance;
    }
    Experince._instance = this;

    // the constructor bgeins here
    this.scene;
    this.loadingManager = new LoadingManager();
    this.events = new EventEmitter();
    this.time = new Time();

    var self = this;
    this.events.on("tick", (delta) => {
      self.update(delta);
    });
  }

  init(element) {
    if (element == undefined) {
      element = document.body;
    }
    const renderer = new THREE.WebGLRenderer();
    this.renderer = renderer;
    renderer.setSize(window.innerWidth, window.innerHeight);
    element.appendChild(renderer.domElement);
  }

  update(delta) {}
}
