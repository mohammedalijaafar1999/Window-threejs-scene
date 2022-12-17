import { Experince } from "../Core/Experince";

export class Room {
  constructor() {
    this.experince = new Experince();
    this.events = this.experince.events;
    this.init();
  }

  init() {
    this.experince.scene.add(
      this.experince.loadingManager.resources.oldRoom.scene
    );
  }
}
