import { Room } from "./Room";
import { Experince } from "../Core/Experince";

export class World {
  constructor() {
    this.experince = new Experince();
    this.events = this.experince.events;
    this.init();
    this.room = new Room();
  }

  init() {}
}
