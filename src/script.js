import "./style.css";
import * as THREE from "three";
import soundfile from "../static/sounds/build-that-wall.mp3";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
let canvas = document.getElementsByClassName("webgl")[0];
canvas.appendChild(renderer.domElement);

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
  sound.setVolume(0.5);
  // sound.play();
});
