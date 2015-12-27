var React = require('react-native');
var {
	View,
	Text,
	StyleSheet,
	TextInput,
} = React;

var WeatherProject = React.createClass({
  getInitialState: function() {
  	return {
  		zip: ''
  	};
  },

  _handleTextChange(event) {
  	console.log(event.nativeEvent.text);
  	this.setState({zip: event.nativeEvent.text})
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Weather for: {this.state.zip}
        </Text>
        <TextInput
        	style={styles.input}
        	onSubmitEditing={this._handleTextChange}/>
      </View>
    );
  }
});

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
  input: {
  	fontSize: 20,
  	borderWidth: 2,
  	height: 40,
  	padding: 5,
  }
});

module.exports = WeatherProject;