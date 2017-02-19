import moment from 'moment';
import generator from './messages-generator';
import template from './messages.html';
import './styles/modules/MessagesArea.scss';

const messages = generator();

const messagesContent = messages
  .map(m => template({ m, relativeTime: moment(m.created).fromNow() }))
  .reduce((result, current) => result + current);

/* eslint no-undef: 0 */
document.getElementById('messages').innerHTML = messagesContent;

console.log('old-messages');
