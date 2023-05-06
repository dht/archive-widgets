import { Scene } from 'isokit';

export class Queue {
  queue: Array<{ timestamp: number; callback: () => void }> = [];

  constructor(private scene: Scene) {}

  stopAt(timestamp: number) {}

  addFrame(timestamp: number, callback: () => void) {
    this.queue.push({ timestamp, callback });
  }

  onTime(timestamp: number) {
    const items = this.queue.filter((frame) => frame.timestamp <= timestamp);

    for (let item of items) {
      item.callback();
    }

    // remove
    this.queue = this.queue.filter((frame) => frame.timestamp > timestamp);
  }
}
