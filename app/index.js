import Message from './model/message.model';
import template from './messages.html';
import './styles/modules/MessageBox.scss';
import './styles/modules/MessagesArea.scss';
import logo from './images/especializa_logo.jpg';

console.log('Index started');
console.dir(new Message());

/* eslint no-undef: 0 */
document.getElementById('send').onclick = () => {
  const m = new Message(document.getElementById('message').value);
  document.getElementById('messages').innerHTML += template(m);
};

document.getElementById('logo').src = logo;

if (module && module.hot) {
  module.hot.accept();
}
