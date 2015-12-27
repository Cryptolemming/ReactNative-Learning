var React = require('react-native');
var {
	View,
	Text,
	StyleSheet,
	TextInput,
	Image,
} = React;
var Forecast = require('./Forecast.js');

var WeatherProject = React.createClass({
  getInitialState: function() {
  	return {
  		zip: '',
  		forecast: {
  			main: 'Clouds',
  			description: 'few clouds',
  			temp: 45.7,
  		}
  	};
  },

  _handleTextChange(event) {
  	console.log(event.nativeEvent.text);
  	this.setState({zip: event.nativeEvent.text})
  },

  render: function() {
    return (
    	<Image source={require('image!Colorado-River')}
    				 resizeMode='cover'
    				 style={styles.backdrop}>
	      <View style={styles.overlay}>
	      	<View style={styles.row}>
		        <Text style={styles.mainText}>
		          Weather for: {this.state.zip}
		        </Text>
		        <TextInput
		        	style={[styles.zipCode, styles.mainText]}
		        	returnKeyType='go'
		        	onSubmitEditing={this._handleTextChange}/>
		        <Forecast
		        	main={this.state.forecast.main}
		        	description={this.state.forecast.description}
		        	temp={this.state.forecast.temp} />
		       </View>
	      </View>
	    </Image>
    );
  }
});

var baseFontSize = 16;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  overlay: {
  	paddingTop: 5,
  	backgroundColor: '#000',
  	opacity: 0.5,
  	flexDirection: 'column',
  	alignItems: 'center',
  },
  row: {
  	flex: 1,
  	flexDirection: 'row',
  	flexWrap: 'nowrap',
  	alignItems: 'flex-start',
  	padding: 30,
  },
  zipContainer: {
  	flex: 1,
  	borderBottomColor: '#ddd',
  	borderBottomWidth: 1,
  	marginLeft: 5,
  	marginTop: 3,
  },
  zipCode: {
  	width: 50,
  	height: baseFontSize,
  },
  mainText: {
  	flex: 1,
  	fontSize: baseFontSize,
  	color: '#fff',
  },
  backdrop: {
  	flex: 1,
  	flexDirection: 'column',
  }
});

module.exports = WeatherProject;