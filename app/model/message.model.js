"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Deprecated = function (data) {
    return function (target, propertyKey) {
        console.warn((propertyKey || 'This class') + " has been deprecated. " +
            ("Reason: " + data.reason + "\n") +
            ("You should use " + data.replacement + " instead"));
    };
};
var Message = Message_1 = (function () {
    function Message(text, created) {
        if (text === void 0) { text = ''; }
        if (created === void 0) { created = Date.now(); }
        this.text = text;
        this.created = created;
    }
    Message.newEmptyMessage = function () {
        return new Message_1();
    };
    Message.prototype.toString = function () {
        var _a = this, created = _a.created, text = _a.text;
        return "Message created at: " + created + " - Text: " + text;
    };
    return Message;
}());
__decorate([
    Deprecated({
        reason: 'useless method',
        replacement: 'normal constructor',
    })
], Message, "newEmptyMessage", null);
Message = Message_1 = __decorate([
    Deprecated({
        reason: 'IDK',
        replacement: 'OtherMessageClass',
    })
], Message);
exports.Message = Message;
var Message_1;
