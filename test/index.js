var ReactDOMServer = require('react-dom/server')
var React = require('react')

var Chat = require('../lib')

ReactDOMServer.renderToString(React.createElement(Chat.Chat))