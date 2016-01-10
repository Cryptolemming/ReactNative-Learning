var React = require('react-native');
var {
	View,
	Text,
	StyleSheet,
	TextInput,
	Image,
} = React;
var Forecast = require('./Forecast');

var WEATHER_API_KEY = 'fb3459605300717e453107a8b4a04926';
var API_STEM = 'http://api.openweathermap.org/data/2.5/weather?';

var WeatherProject = React.createClass({
  getInitialState: function() {
  	return {
  		id: '',
  		forecast: null
  	};
  },

  _handleTextChange(event) {
  	var id = event.nativeEvent.text;
  	this.setState({id: id});
  	fetch('${API_STEM}id=${id}&units=imperial&APPID=${WEATHER_API_KEY}')
  		.then((response) => response.json())
  		.then((responseJSON) => {
  			console.log(responseJSON);
  			this.setState({
  				forecast: {
  					name: responseJSON.name,
  					main: responseJSON.weather[0].main,
  					description: responseJSON.weather[0].description,
  					temp: responseJSON.main.temp,
  				}
  			});
  		})
  		.catch((error) => {
  			console.warn(error);
  		});
  },

  _getForecastForCoords: function(lat, lon) {
    this._getForecast(
      '${API_STEM}lat=${lat}&lon=${lon}&units=imperial&APPID=${WEATHER_API_KEY}'
    );
  },

  _getForecastForId: function(id) {
    this._getForecast(
      '${API_STEM}q=${zip}&units=imperial$APPID=${WEATHER_API_KEY}'
    );
  },

  _getForecast: function(url, cb) {
    fetch(url) {
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
    }
  },

  render: function() {
  	var content = null;
  	if (this.state.forecast!== null) {
  		content = <Forecast
			       		name={this.state.forecast.name}
			        	main={this.state.forecast.main}
			        	description={this.state.forecast.description}
			        	temp={this.state.forecast.temp} />;
  	}

    return (
    	<View style={styles.container}>
	    	<Image source={require('./clouds.png')}
	    				 resizeMode='cover'
	    				 style={styles.backdrop}>
		      <View style={styles.overlay}>
		      	<View style={styles.row}>
			        <Text style={styles.mainText}>
			          Weather for (City ID):
			        </Text>
			        <View style={styles.idContainer}>
				        <TextInput
				        	style={[styles.idCode, styles.mainText]}
				        	returnKeyType='go'
				        	onSubmitEditing={this._handleTextChange}/>
			        </View>
			      </View>
            <LocationButton onGetCoords={this._getForecastForCoords} />
			      {content}
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
  idContainer: {
  	flex: 1,
  	borderBottomColor: '#ddd',
  	borderBottomWidth: 1,
  	marginLeft: 5,
  	marginTop: 3,
  },
  idCode: {
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