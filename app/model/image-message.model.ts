import { Message } from './message.model';

export class ImageMessage extends Message {

  constructor(text = '',
              created = Date.now(),
              public url: string = '',
              public thumbnail: string = '') {
    super(text, created);
  }

  /**
   * Method overriden
   * @returns String
   */
  public toString(): string {
    return `Photo${super.toString()} ` +
           `- Url: ${this.url} ` +
           `- Thumbnail: ${this.thumbnail}`;
  }
}
