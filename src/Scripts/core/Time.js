import { Experince } from "./Experince";

export class Time {
  constructor() {
    // Setup
    this.experince = new Experince();
    this.events = this.experince.events;
    this.start = Date.now();
    this.current = this.start;
    this.elapsed = 0;
    this.delta = 16;

    window.requestAnimationFrame(() => {
      this.tick();
    });
  }

  tick() {
    const currentTime = Date.now();
    this.delta = currentTime - this.current;
    this.current = currentTime;
    this.elapsed = this.current - this.start;

    this.events.emit("tick", this.delta);

    window.requestAnimationFrame(() => {
      this.tick();
    });
  }
}
