var React = require('react-native');
var {
	View,
	Text,
	StyleSheet,
	TextInput,
	Image,
} = React;

var Forecast = require('./Forecast');
var LocationButton = require('./LocationButton');
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
  	this._getForecastForId(id);
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
            name: responseJSON.weather[0].name,
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
  		content = (
        <View style={styles.row}>
          <Forecast
	       		name={this.state.forecast.name}
	        	main={this.state.forecast.main}
	        	description={this.state.forecast.description}
	        	temp={this.state.forecast.temp} />;
        </View>);
  	}

    return (
    	<Image source={require('./clouds.png')}
    				 resizeMode='cover'
    				 style={styles.backdrop}>
	      <View style={styles.overlay}>
	      	<View style={styles.row}>
		        <Text style={textStyles.mainText}>
		          Current Weather for (City ID):
		        </Text>
		        <View style={styles.idContainer}>
			        <TextInput
			        	style={[styles.idCode, textStyles.mainText]}
			        	returnKeyType='go'
			        	onSubmitEditing={this._handleTextChange}/>
		        </View>
		      </View>
          <View style={styles.row}>
            <LocationButton onGetCoords={this._getForecastForCoords} />
          </View>
		      {content}
	      </View>
	    </Image>
    );
  }
});

var textStyles = require('./styles/typography.js');

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
  },
  row: {
    width: 400,
  	flex: 1,
  	flexDirection: 'row',
  	flexWrap: 'nowrap',
  	alignItems: 'center',
    justifyContent: 'center',
  	padding: 30,
  },
  idContainer: {
  	flex: 1,
  	borderBottomColor: '#ddd',
  	borderBottomWidth: 1,
  	marginLeft: 5,
  	marginTop: 3,
    width: 10,
  },
  idCode: {
  	width: 50,
  	height: textStyles.baseFontSize,
  },
  mainText: {
  	flex: 1,
  	fontSize: baseFontSize,
  	color: '#fff',
  },
});

module.exports = WeatherProject;