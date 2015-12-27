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
  			main: '',
  			description: '',
  			temp: '',
  		}
  	};
  },

  _handleTextChange(event) {
  	var zip = event.nativeEvent.text;
  	this.setState({zip: zip});
  	fetch('http://api.openweathermap.org/data/2.5/weather?id='+zip+'&APPID=fb3459605300717e453107a8b4a04926')
  		.then((response) => response.json())
  		.then((responseJSON) => {
  			console.log(responseJSON);
  			this.setState({
  				forecast: {
  					main: responseJSON.weather[0].main,
  					description: responseJSON.weather[0].description,
  					temp: responseJSON.main.temp
  				}
  			});
  		})
  		.catch((error) => {
  			console.warn(error);
  		});
  },

  render: function() {
    return (
    	<View style={styles.container}>
	    	<Image source={require('./clouds.png')}
	    				 resizeMode='cover'
	    				 style={styles.backdrop}>
		      <View style={styles.overlay}>
		      	<View style={styles.row}>
			        <Text style={styles.mainText}>
			          Weather for:
			        </Text>
			        <View style={styles.zipContainer}>
				        <TextInput
				        	style={[styles.zipCode, styles.mainText]}
				        	returnKeyType='go'
				        	onSubmitEditing={this._handleTextChange}/>
			        </View>
			      </View>
			       <Forecast
			        	main={this.state.forecast.main}
			        	description={this.state.forecast.description}
			        	temp={this.state.forecast.temp} />
		      </View>
		    </Image>
		  </View>
    );
  }
});

var baseFontSize = 16;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  backdrop: {
  	flex: 1,
  	flexDirection: 'column',
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
});

module.exports = WeatherProject;