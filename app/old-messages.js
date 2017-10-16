"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = require("moment");
var utils_1 = require("./utils");
require("./styles/modules/MessagesArea.scss");
var template = require('./messages.html');
var store = new utils_1.Store();
var messages = store.list();
var messagesContent = messages
    .map(function (m) {
    return template({ m: m, relativeTime: moment_1.default(m.created).fromNow() });
})
    .reduce(function (result, current) { return result + current; });
document.getElementById('messages').innerHTML = messagesContent;
console.log('old-messages');
