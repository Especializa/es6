import moment from 'moment';
import { Message } from './model';
import { messageFactory, Store } from './utils';

import './styles/modules/MessageBox.scss';
import './styles/modules/MessagesArea.scss';

const template: any = require('./messages.html');
const logo: any = require('./images/especializa_logo.jpg');

const store: Store<Message> = new Store<Message>();

(<HTMLButtonElement> document.getElementById('send')).onclick = () => {
  messageFactory((<HTMLInputElement> document.getElementById('message')).value)
  .then((m: Message) => {
    (<HTMLElement> document.getElementById('messages')).innerHTML += template({
        m,
        relativeTime: moment(m.created).fromNow(),
      });
    store.add(m);
    store.commit();
  });
};

(<HTMLImageElement> document.getElementById('logo')).src = logo;

if (module && module.hot) {
  module.hot.accept();
}
