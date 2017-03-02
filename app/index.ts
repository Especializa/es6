import moment from 'moment';
import './styles/modules/MessageBox.scss';
import './styles/modules/MessagesArea.scss';

const template: any = require('./messages.html');
const logo: any = require('./images/especializa_logo.jpg');

console.log('Index started again');

const Message = function(text) {
  this.text = text;
  this.created = Date.now();
};

(<HTMLButtonElement> document.getElementById('send')).onclick = () => {
  const m = new Message(
    (<HTMLInputElement> document.getElementById('message')).value,
  );
  (<HTMLElement> document.getElementById('messages')).innerHTML += template({
    m,
    relativeTime: moment(m.created).fromNow(),
  });
};

(<HTMLImageElement> document.getElementById('logo')).src = logo;

if (module && module.hot) {
  module.hot.accept();
}
