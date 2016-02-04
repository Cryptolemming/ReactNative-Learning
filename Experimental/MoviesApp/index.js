'use strict';

var React = require('react-native');
var {
	View,
	Image,
	Text,
	StyleSheet,
} = React;

var MOCKED_MOVIES_DATA = [
	{title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];

var MoviesApp = React.createClass({

	render() {
		var movie = MOCKED_MOVIES_DATA[0];
		return (
			<View style={styles.container}>
				<Text>{movie.title}</Text>
				<Text>{movie.year}</Text>
				<Image source={{uri: movie.posters.thumbnail}} />
			</View>
		);
	}
});

var styles = StyleSheet.create({
	container: {

	}
});

module.exports = MoviesApp;