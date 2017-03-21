import { ImageMessage } from './model/image-message.model';
import { Message } from './model/message.model';

interface Factory {
  (text: string): Promise<any>;
}

const messageFactory: Factory = (text: string): Promise<Message>  => {
  const giphy: RegExp = /\/giphy ('.*'|\w+)/;
  if (giphy.test(text)) {
    const match: string = (text.match(giphy) as string[])[1];
    return fetch('http://api.giphy.com/v1/gifs/search?' +
          `q=${match}&api_key=dc6zaTOxFJmzC`, {
      method: 'GET',
      mode: 'cors',
    })
    .then((response: Response) => response.json())
    .then((result: any) => {
      const replaced = text.replace(giphy,
        `<img src='${result.data[0].images.fixed_height_small.url}'>`);
      return new ImageMessage(replaced, undefined, result.data[0].embed_url);
    })
    .catch(() => new Message(text)) as Promise<Message>;
  }
  return Promise.resolve(new Message(text));
};

class Store<T> {
  private store: Set<T>;
  constructor() {
    const sStore: string | null = localStorage.getItem('store');
    this.store = sStore ? JSON.parse(sStore) : new Set<T>();
  }
  public add(item: T): void {
    this.store.add(item);
  }
  public commit(): void {
    localStorage.setItem('store', JSON.stringify(Array.from(this.store)));
  }
  public list(): T[] {
    return Array.from(this.store);
  }
}

export { messageFactory, Store };
