'use strict';

var React = require('react-native');
var {
	Stylesheet,
	Text,
	View,
} = React;
var Switch = require('./Switch');

var CrossPlatForm = React.createClass({
	getInitialState() {
		return {
			value: false
		};
	},

	_onValueChange(value) {
		this.setState({
			value: value;
		});
	},

	render: function() {
		var colorClass = this.state.val ? styles.blueContainer : styles.redContainer;
		return (
			<View style={[styles.container, colorClass]}>
				<Text style={styles.welcome}>
					Make me blue
				</Text>
				<Switch onValueChange=this._onValueChange />
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
		fontsize: 20,
		textAlign: 'center',
		margin: 10
	},
});

module.exports = CrossPlatform;