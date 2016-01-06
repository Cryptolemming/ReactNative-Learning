'use strict';

var React = require('react-native');
var {
	StyleSheet,
	Text,
	View,
} = React;
var Switch = require('./Switch');

var CrossPlatform = React.createClass({
	getInitialState() {
		return {
			value: false
		};
	},

	_onValueChange(value) {
		this.setState({
			value: value
		});
	},

	render: function() {
		var colorClass = this.state.value ? styles.blueContainer : styles.redContainer;
		return (
			<View style={[styles.container, colorClass]}>
				<Text style={styles.welcome}>
					Make me blue
				</Text>
				<Switch onValueChange={this._onValueChange} />
			</View>
		)
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	blueContainer: {
		backgroundColor: '#5555ff',
	},
	redContainer: {
		backgroundColor: '#ff5555',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
});

module.exports = CrossPlatform;