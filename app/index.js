import Message from './model/message.model';

console.log('Index started');
console.dir(new Message());

/* eslint no-undef: 0 */
document.getElementById('send').onclick = () => {
  const m = new Message(document.getElementById('message').value);
  document.getElementById('messages').innerHTML +=
    `<li>${m.text} ${m.created}</li>`;
};

if (module && module.hot) {
  module.hot.accept();
}
