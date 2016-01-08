'use strict';

var React = require('react-native');
var {
	StyleSheet,
} = React;

var styles = StyleSheet.create({
	parent: {
		flexDirection: 'column',
		position: 'absolute',
		top: 30,
		left: 0,
		right: 0,
		bottom: 0,
	},
	base: {
		borderColor: '#000',
		borderWidth: 5,
	},
	topBlock: {
		flexDirection: 'row',
		flex: 5,
	},
	leftCol: {
		flex: 2,
	},
	bottomBlock: {
		flex: 2,
		flexDirection: 'row',
	},
	bottomRight: {
		flexDirection: 'column',
	},
	cellOne: {
		flex: 1,
		borderBottomWidth: 15,
	},
	cellTwo: {
		flex: 3,
	},
	cellThree: {
		flex: 5,
		backgroundColor: '#FF000',
	},
	cellFour: {
		flex: 3,
		backgroundColor: '#0000FF',
	},
	cellFive: {
		flex: 6,
	},
	cellSix: {
		flex: 1,
	},
	cellSeven: {
		flex: 1,
		backgroundColor: '#FFFF00',
	}
});

module.exports = styles;