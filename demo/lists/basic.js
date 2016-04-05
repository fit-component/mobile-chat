"use strict";
const React = require('react');
const chat_1 = require('../../src/chat');
class Demo extends React.Component {
    handleNameRender() {
        return (React.createElement("div", null, "fitRender"));
    }
    render() {
        return (React.createElement("div", null, 
            React.createElement(chat_1.default, {name: "fit", content: "fit组件很好用", portrait: "http://himg.bdimg.com/sys/portrait/item/052ee28496e7bfb1e7be8ae7bebde5a4a7e7a9ba4620.jpg"}), 
            React.createElement(chat_1.default, {position: chat_1.default.Position.Right, name: "fit", nameRender: this.handleNameRender.bind(this), content: "没错儿", portrait: "http://himg.bdimg.com/sys/portrait/item/052ee28496e7bfb1e7be8ae7bebde5a4a7e7a9ba4620.jpg"})));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Demo;
