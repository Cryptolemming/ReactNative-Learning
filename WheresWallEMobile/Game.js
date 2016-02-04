'use strict';

var React = require('react-native');
var {
	Image,
	Text,
	View,
	StyleSheet
} = React;


const Cards = ['k3xkgdci3h9mlnf/walle.jpg?dl=0', 'k3xkgdci3h9mlnf/walle.jpg?dl=0', '1ll4rd0q28y7is8/eve.jpg?dl=0', '7sbiokkeq2hnaze/john.jpg?dl=0', '93ltebnju2vd5ns/captain2.jpg?dl=0', 'uho6nbflui260ca/mary.jpg?dl=0'];

var Card = React.createClass({
	propTypes: {
		image: React.PropTypes.string.isRequired,
		//flipped: React.PropTypes.bool.isRequired,
	},

	render: function() {
		return(
			<Image 
				style={styles.card}
				source={{uri: 'https://dl.dropboxusercontent.com/s/' + this.props.image}} />
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
			return <Card image={image} key={index} />			
		});
		return(
			<View style={styles.boardContainer}>
				{imageItems}
			</View>
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
		width: 50,
		height: 50,
		borderRadius: 50,
	},
	boardContainer: {
		flexDirection: 'column',
	},
	boardTopRow: {
		flex: 5,
		backgroundColor: 'red',
		flexDirection: 'row',
	},
	boardBottomRow: {
		backgroundColor: 'yellow',
		flex: 2,
		flexDirection: 'row',
	},
	bottom: {
		backgroundColor: 'blue',
		flex: 5,
	}
});

module.exports = Game;