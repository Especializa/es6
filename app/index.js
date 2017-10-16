"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = require("moment");
var utils_1 = require("./utils");
require("./styles/modules/MessageBox.scss");
require("./styles/modules/MessagesArea.scss");
var template = require('./messages.html');
var logo = require('./images/especializa_logo.jpg');
var store = new utils_1.Store();
document.getElementById('send').onclick = function () {
    utils_1.messageFactory(document.getElementById('message').value)
        .then(function (m) {
        document.getElementById('messages').innerHTML += template({
            m: m,
            relativeTime: moment_1.default(m.created).fromNow(),
        });
        store.add(m);
        store.commit();
    });
};
document.getElementById('logo').src = logo;
if (module && module.hot) {
    module.hot.accept();
}
