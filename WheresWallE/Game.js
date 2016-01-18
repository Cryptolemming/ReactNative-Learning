var React = require('react-native');
var {
	Text,
	View,
	StyleSheet
} = React;

'use strict';

var Card = React.createClass({
	propTypes: {
		picture: image,
		flipped: boolean,
	}
});

var newGameButton = React.createClass({
	propTypes: {
		active: boolean,
	}
});

var winModal = React.createClass({
	propTypes: {
		render: boolean,
	}
});

var Board = React.createClass({
	propTypes: {
		images: array
	}
});

var Game = React.createClass({

});

module.exports = Game;