'use strict';

var React = require('react-native');
var {
	Image,
	Text,
	View,
	StyleSheet,
	TouchableHighlight,
} = React;

var Card = React.createClass({
	propTypes: {
		image: React.PropTypes.string.isRequired,
		flipped: React.PropTypes.boolean.isRequired,
	},

	render: function() {
		console.log(this.props.flipped);
		var flipStyling = this.props.flipped === true ? styles.cardFlipped : styles.card;

		return(
			<TouchableHighlight onPress={this._onPress}>
				<Image 
					style={[flipStyling]}
					source={{uri: 'https://dl.dropboxusercontent.com/s/' + this.props.image}} />
			</TouchableHighlight>
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
	getInitialState() {

	},

	_onPress() {
		this.setState({
			Object.assign({}, )
		})
	}

	render: function() {
		var imageItems = this._shuffleImages.map(function(image, index) {
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
	propTypes: {
		images: React.PropTypes.array.isRequired,
	},

	_shuffleImages(images) {
		var shuffledImages = [];
		for (var i = 0; i < 6; i += 1) {
			shuffledImages.push(images.splice(Math.floor(Math.random() * array.length), 1));
		}
		return shuffledImages;
	},

	_initialCardData(this._shuffleImages) {
		var CardData = {};
		this._shuffleImages.map((image) {
			CardData[image]: false;
		});
	},

	render: function() {
		return(
			<Board cardData={this._initialCardData} />
		);
	}
});

const styles = StyleSheet.create({
	boardContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	card: {
		width: 50,
		height: 50,
		borderRadius: 50,
	},
	cardFlipped: {
		borderRadius: 100,
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