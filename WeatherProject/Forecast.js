var React = require('react-native');
var {
	View,
	Text,
	StyleSheet
} = React;

var Forecast = React.createClass({
	render: function() {
		return (
			<View>
				<Text style={styles.bigText}>
					{this.props.main}
				</Text>
				<Text style={styles.mainText}>
					Current Conditions: {this.props.description}
				</Text>
				<Text style={styles.bigText}>
					{this.props.temp} F
				</Text>
			</View>
		)
	}
})

var styles = StyleSheet.create({
	bigText: {
		flex: 2,
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: '#fff',
	},
	mainText: {
		flex: 1,
		fontSize: 16,
		textAlign: 'center',
		color: '#fff',
	}
})

module.exports = Forecast;