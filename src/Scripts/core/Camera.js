import * as THREE from "three";
import { Experince } from "./Experince";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export class SceneCamera {
  constructor() {
    this.experince = new Experince();
    this.events = this.experince.events;
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.controls = new OrbitControls(
      this.camera,
      this.experince.renderer.domElement
    );

    var self = this;
    // add the camera to the scene
    this.experince.scene.add(this.camera);
    this.events.on("tick", function () {
      self.update();
    });
  }

  orbit() {
    // controls

    let controls = controls.listenToKeyEvents(window); // optional

    //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.05;

    controls.screenSpacePanning = false;

    controls.minDistance = 100;
    controls.maxDistance = 500;

    controls.maxPolarAngle = Math.PI / 2;
  }

  update() {
    this.controls.update();
  }
}
