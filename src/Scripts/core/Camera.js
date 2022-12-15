import * as THREE from "three";
import { Experince } from "./Experince";

export class Camera {
  constructor() {
    this.experince = new Experince();
    this.events = this.experince.events;
  }
}
