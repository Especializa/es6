"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("./model");
var model_2 = require("./model");
function messageFactory(text) {
    var giphy = /\/giphy ('.*'|\w+)/;
    if (giphy.test(text)) {
        var match = text.match(giphy)[1];
        return fetch('http://api.giphy.com/v1/gifs/search?' +
            ("q=" + match + "&api_key=dc6zaTOxFJmzC"), {
            method: 'GET',
            mode: 'cors',
        })
            .then(function (response) { return response.json(); })
            .then(function (result) {
            var replaced = text.replace(giphy, "<img src='" + result.data[0].images.fixed_height_small.url + "'>");
            return new model_1.ImageMessage(replaced, undefined, result.data[0].embed_url);
        })
            .catch(function () { return new model_2.Message(text); });
    }
    return Promise.resolve(new model_2.Message(text));
}
exports.messageFactory = messageFactory;
var Store = (function () {
    function Store() {
        var sStore = localStorage.getItem('store');
        this.store = sStore ? JSON.parse(sStore) : new Set();
    }
    Store.prototype.add = function (item) {
        this.store.add(item);
    };
    Store.prototype.commit = function () {
        localStorage.setItem('store', JSON.stringify(Array.from(this.store)));
    };
    Store.prototype.list = function () {
        return Array.from(this.store);
    };
    return Store;
}());
exports.Store = Store;
