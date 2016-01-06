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
var CrossPlatform = require('./CrossPlatformDemo/CrossPlatform');
var FlexTest = require('./Flexbox');

var Application = React.createClass({
  render: function() {
    return (
        <FlexTest />
    );
  }
});

AppRegistry.registerComponent('Experimental', () => Application);
