interface IDeprecatedMetadata {
  reason: string;
  replacement: string;
}
const Deprecated: Function = (data: IDeprecatedMetadata) => {
  return (target: Function, propertyKey?: string) => {
    console.warn(`${propertyKey || 'This class'} has been deprecated. ` +
                 `Reason: ${data.reason}\n` +
                 `You should use ${data.replacement} instead`);
  };
};

@Deprecated({
  reason: 'IDK',
  replacement: 'OtherMessageClass',
})
export class Message {
  @Deprecated({
    reason: 'useless method',
    replacement: 'normal constructor',
  })
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
