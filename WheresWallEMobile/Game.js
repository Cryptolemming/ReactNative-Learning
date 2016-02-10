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
		flipped: React.PropTypes.bool.isRequired,
		onPress: React.PropTypes.func.isRequired,
	},

	render: function() {
		var flipStyling = this.props.flipped === true ? styles.cardFlipped : styles.card;

		return(
			<TouchableHighlight onPress={this._onPress(this.props.image)}>
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

	_initialCardData() {
		var CardData = {};
		this._shuffleImages.map((image) => {
			CardData[image] = false;
		});
	},

	getInitialState() {
		return {
			cardData: this._initialCardData;
		}
	},

	_onPress(image) {
		var updatedCardData = Object.assign({}, this.state.cardData, cardData[image] = true);
		this.setState({
			cardData: updatedCardData;
		});
	},

	render: function() {
		var cardObj = this.state.cardData;
		var board = Object.keys(cardObj).map((value, index) => {
			<Card image={value} key={index} onPress={this._onPress} flipped={cardObj[value]} />
		});
		return(
			<View style={styles.boardContainer}>
				{board}
			</View>
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