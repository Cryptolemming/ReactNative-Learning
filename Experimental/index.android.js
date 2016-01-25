/**
 * various components to learn
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
var Mondrian = require('./Mondrian/Mondrian');

var Application = React.createClass({
  render: function() {
    return (
        <Mondrian />
    );
  }
});

AppRegistry.registerComponent('Experimental', () => Application);
