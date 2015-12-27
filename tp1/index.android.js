/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Intro = React.createClass({
  propTypes: {
    intro: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.props.intro}
        </Text>
      </View>
    );
  }
});

var Application = React.createClass({
  render: function() {
    return (
      <Intro intro='Welcome to your first ReactNative App' />
    )
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('tp1', () => Application);
