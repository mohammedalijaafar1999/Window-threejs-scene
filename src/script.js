import "./style.css";
import * as THREE from "three";
import soundfile from "../static/sounds/build-that-wall.mp3";
import { Experince } from "./Scripts/core/Experince";

// this is enough to run the scene
let experince = new Experince();
window.experince = experince;

experince.init(document.getElementsByClassName("webgl")[0]);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
scene.add(camera);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// loading sounds
let soundformat = new Audio(soundfile);
// soundformat.play();

const listener = new THREE.AudioListener();
camera.add(listener);

// create a global audio source
const sound = new THREE.Audio(listener);

// load a sound and set it as the Audio object's buffer
const audioLoader = new THREE.AudioLoader();
audioLoader.load("./sounds/build-that-wall.ogg", function (buffer) {
  sound.setBuffer(buffer);
  sound.setLoop(true);
  sound.setVolume(0.1);
  // sound.play();
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
// animate();
