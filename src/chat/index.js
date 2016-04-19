"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var classNames = require('classnames');
var _ = require('lodash');
var module = require('./module');
var src_1 = require('../../../../common/transmit-transparently/src');
require('./index.scss');
var Chat = (function (_super) {
    __extends(Chat, _super);
    function Chat(props) {
        _super.call(this, props);
        this.state = new module.State();
    }
    Chat.prototype.render = function () {
        var containerClass = classNames((_a = {
                '_namespace': true,
                'left': this.props.position === module.Position.Left,
                'right': this.props.position === module.Position.Right
            },
            _a[this.props['className']] = !!this.props['className'],
            _a
        ));
        var textContentClass = classNames({
            'text-content': true,
            'left': this.props.position === module.Position.Left,
            'right': this.props.position === module.Position.Right
        });
        var rightContentClass = classNames({
            'right-content': true,
            'left': this.props.position === module.Position.Left,
            'right': this.props.position === module.Position.Right
        });
        return (React.createElement("div", React.__spread({className: containerClass}, src_1.others(new module.Props(), this.props)), React.createElement("img", {className: "portrait", src: this.props.portrait}), React.createElement("div", {className: rightContentClass}, React.createElement("div", {className: "name"}, !_.isEmpty(this.props.nameRender()) ? this.props.nameRender() : this.props.name), React.createElement("div", {className: textContentClass}, this.props.content))));
        var _a;
    };
    Chat.defaultProps = new module.Props();
    Chat.Position = module.Position;
    return Chat;
}(React.Component));
exports.__esModule = true;
exports["default"] = Chat;
