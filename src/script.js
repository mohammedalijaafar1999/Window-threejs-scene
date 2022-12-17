import "./style.css";
import * as THREE from "three";
import soundfile from "../static/sounds/build-that-wall.ogg";
import { Experince } from "./Scripts/Core/Experince";

import sources from "./Scripts/Core/sources";
console.log(sources);

// this is enough to run the scene
let experince = new Experince();
window.experince = experince;

experince.init(document.getElementsByClassName("webgl")[0]);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
experince.scene.add(cube);
experince.sceneCamera.camera.position.z = 5;

// loading sounds
let soundformat = new Audio(soundfile);
// soundformat.play();

const listener = new THREE.AudioListener();
experince.sceneCamera.camera.add(listener);

// create a global audio source
const sound = new THREE.Audio(listener);

// load a sound and set it as the Audio object's buffer
const audioLoader = new THREE.AudioLoader();
audioLoader.load(soundfile, function (buffer) {
  sound.setBuffer(buffer);
  sound.setLoop(true);
  sound.setVolume(0.1);
  sound.play();
});
