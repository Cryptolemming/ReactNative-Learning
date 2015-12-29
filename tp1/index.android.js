/**
 * various components for learning APIs etc
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
} = React;
var Button = require('./Button');
var PanResponderDemo = require('./PanResponderDemo');
var BookList = require('./ListViewDemo/BookList');
var CrossPlatForm = require('./CrossPlatformDemo/CrossPlatform');

var Application = React.createClass({
  render: function() {
    return (
        <CrossPlatform />
    );
  }
});

AppRegistry.registerComponent('tp1', () => Application);
