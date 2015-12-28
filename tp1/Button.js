// TouchableHighlight exercise

'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React;

var Button = React.createClass({
	getInitialState: function() {
		return {
			pressing: false
		}
	},

	_onPressIn: function() {
		this.setState({
			pressing: true
		});
	},

	_onPressOut: function() {
		this.setState({
			pressing: false
		});
	},

	render: function() {
		var textContent = this.state.pressing ? 'EEK!' : 'PUSH ME';

		return (
			<View style={styles.container}>
				<TouchableHighlight
					onPressIn={this._onPressIn}
					onPressOut={this._onPressOut}
					style={styles.touchable}>
					<View style={styles.button}>
						<Text style={styles.welcome}>
							{textContent}
						</Text>
					</View>
				</TouchableHighlight>
			</View>
		);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f5fcff',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: '#fff',
	},
	touchable: {
		borderRadius: 100,
	},
	button: {
		backgroundColor: 'blue',
		borderRadius: 100,
		height: 200,
		width: 200,
		justifyContent: 'center',
	},
});

module.exports = Button;