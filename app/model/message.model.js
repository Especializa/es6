class Message {
  constructor(text = '', created = Date.now()) {
    this.text = text;
    this.created = created;
  }
  get created() {
    return this._created;
  }
  set created(created) {
    if (typeof created === 'undefined' || isNaN(created)) {
      throw new Error('Invalid created');
    }
    if (Message.hasOwnProperty.call(this, '_created')) {
      throw new Error('Created already defined');
    }
    this._created = created;
  }
  toString() {
    const { created, text } = this;
    return `Message created at: ${created} - Text: ${text}`;
  }
  static newEmptyMessage() {
    return new Message();
  }
}
module.exports = Message;
