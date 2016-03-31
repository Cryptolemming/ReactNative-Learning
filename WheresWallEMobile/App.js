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
	// takes in an image, flipped truthiness, and onPress flipped function as props
	propTypes: {
		image: React.PropTypes.string.isRequired,
		flipped: React.PropTypes.bool.isRequired,
		onPress: React.PropTypes.func.isRequired,
	},

	_onPressHandler: (e) => {
		this.props.Onpress(this.props.image);
	},

	render: function() {
		var flipStyling = this.props.flipped ? styles.cardFlipped : styles.card;

		return(
			<TouchableHighlight onPress={this._onPressHandler}>
				<Image 
					style={flipStyling}
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
	// takes the images array as a prop from the main component
	propTypes: {
		images: React.PropTypes.array.isRequired,
	},

	// shuffles the images for the cards
	_shuffleImages(images) {
		var currentIndex = images.length, temporaryValue, randomIndex;

		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * images.length);
			currentIndex -= 1;

			// swap a random value with a value at the back
			temporaryValue = images[currentIndex];
			images[currentIndex] = images[randomIndex];
			images[randomIndex] = temporaryValue;
		}

		return images;
	},

	// the initial state is that initial card data object
	getInitialState() {
		var startingImages = this._shuffleImages(this.props.images);
		var flippedValues = [false, false, false, false, false, false];
		console.log(startingImages);
		return {
			shuffledCards: startingImages,
			flippedValues: flippedValues,
			flippedImages: [],
		};
	},

	// when a card is pressed, update state truthiness for the card being flipped
	_onPress(image) {
		var cardIndex = this.state.shuffledCards.indexOf(image);

		var updateFlippedValues = this.state.flippedValues;
		updateFlippedValues[cardIndex] = true;
		var updateFlippedImages = this.state.flippedImages;
		updateFlippedImages[cardIndex] = this.state.shuffledCards[cardIndex];
		this.setState({
			flippedValues: updateFlippedValues,
			flippedImages: updateFlippedImages,
		});
	},

	render: function() {
		var board = this.state.shuffledCards.map((card, index) => {
			return <Card image={card} key={index} onPress={this._onPress} flipped={this.state.flippedValues[index]} />
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
		borderRadius: 50,
		width: 200,
		height: 200,
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