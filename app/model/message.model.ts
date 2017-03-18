export abstract class Message {

  constructor(public text: string = '',
              public readonly created: number = Date.now()) {
  }
  public toString(): string {
    const { created, text } = this;
    return `Message created at: ${created} - Text: ${text}`;
  }
}
