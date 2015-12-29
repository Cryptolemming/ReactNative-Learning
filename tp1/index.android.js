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
var ListViewDemo = require('./ListViewDemo');

var Application = React.createClass({
  render: function() {
    return (
        <ListViewDemo/>
    );
  }
});

AppRegistry.registerComponent('tp1', () => Application);
