var React = require('react-native');
var {
	View,
	Text,
	StyleSheet
} = React;
var styles = require('../styles/typography.js');

var Forecast = React.createClass({
	render: function() {
		return (
			<View style={forecastStyles.forecast}>
				<Text style={styles.bigText}>
					City: {this.props.name}
				</Text>
				<Text style={styles.bigText}>
					General: {this.props.main}
				</Text>
				<Text style={styles.bigText}>
					Specific: {this.props.description}
				</Text>
				<Text style={styles.bigText}>
					Temp(F): {this.props.temp}
				</Text>
			</View>
		)
	}
})

var forecastStyles = StyleSheet.create({
	forecast: {
		alignItems: 'center'
	}
});

module.exports = Forecast;