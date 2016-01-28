'use strict';

var React = require('react-native');
var {
	Text,
	View,
	StyleSheet
} = React;

const Cards = ['1', '2', '3', '4', '5', '6'];

var Card = React.createClass({
	propTypes: {
		image: React.PropTypes.string.isRequired,
		//flipped: React.PropTypes.bool.isRequired,
	},

	render: function() {
		return(
			<Text>{this.props.image}</Text>
		);
	}
});

/**
var newGameButton = React.createClass({
	propTypes: {
		active: React.PropTypes.bool.isRequired,
	}
});

var winModal = React.createClass({
	propTypes: {
		render: React.PropTypes.bool.isRequired,
	}
});
**/

var Board = React.createClass({
	propTypes: {
		images: React.PropTypes.array.isRequired,
	},

	render: function() {
		var imageItems = this.props.images.map(function(image, index) {
			return <Card image={image} key={index}/>
		});
		return(
			<View>{imageItems}</View>
		);
	}
});

var Game = React.createClass({

	render: function() {
		return(
			<Board images={Cards} />
		);
	}
});

const styles = StyleSheet.create({
	card: {

	},
	board: {

	}
});

module.exports = Game;