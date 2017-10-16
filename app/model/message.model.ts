const test: Function = (data: any) => {
  console.log(data);
  return (target: Function) => {
    console.log(target);
  };
};
const deprecated: ClassDecorator = (target: Function) => {
  console.log('This has been deprecated');
};

@test({ foo: 'bar' }) @deprecated
export class Message {
  public static newEmptyMessage(): Message {
    return new Message();
  }

  constructor(public text: string = '',
              public readonly created: number = Date.now()) {
  }
  public toString(): string {
    const { created, text } = this;
    return `Message created at: ${created} - Text: ${text}`;
  }
}
