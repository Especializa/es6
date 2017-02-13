import Message from './model/message.model';
import template from './messages.html';
import './styles/modules/MessageBox.scss';
import './styles/modules/MessagesArea.scss';

console.log('Index started');
console.dir(new Message());

/* eslint no-undef: 0 */
document.getElementById('send').onclick = () => {
  const m = new Message(document.getElementById('message').value);
  document.getElementById('messages').innerHTML += template(m);
};

if (module && module.hot) {
  module.hot.accept();
}
