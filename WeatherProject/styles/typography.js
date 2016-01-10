var React = require('react-native');

var {
	StyleSheet,
} = React;

var baseFontSize = 18;

var styles = StyleSheet.create({
	bigText: {
		fontSize: baseFontSize + 8,
		color: '#fff'
	},
	mainText: {
		fontSize: baseFontSize,
		color: '#fff',
	},
});

styles['baseFontSize'] = baseFontSize;

module.exports = styles;