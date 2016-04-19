"use strict";
exports.Position = {
    Left: 'left',
    Right: 'right'
};
var Props = (function () {
    function Props() {
        this.content = '';
        this.position = exports.Position.Left;
        this.portrait = '';
        this.name = '';
        this.nameRender = function () {
        };
    }
    return Props;
}());
exports.Props = Props;
var State = (function () {
    function State() {
    }
    return State;
}());
exports.State = State;
