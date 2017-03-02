import moment from 'moment';
import './styles/modules/MessageBox.scss';
import './styles/modules/MessagesArea.scss';
var template = require('./messages.html');
var logo = require('./images/especializa_logo.jpg');
var Message = function (text) {
    this.text = text;
    this.created = Date.now();
};
console.log('Index started');
document.getElementById('send').onclick = function () {
    var m = new Message(document.getElementById('message').value);
    document.getElementById('messages').innerHTML += template({
        m: m,
        relativeTime: moment(m.created).fromNow()
    });
};
document.getElementById('logo').src = logo;
if (module && module.hot) {
    module.hot.accept();
}
