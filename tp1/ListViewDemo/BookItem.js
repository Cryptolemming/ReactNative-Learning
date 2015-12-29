'use strict';

var React = require('react-native');
var {
	StyleSheet,
	Text,
	View,
	Image,
	ListView,
} = React;

var BookItem = React.createClass({
	propTypes: {
		coverURL: React.PropTypes.string.isRequired,
		author: React.PropTypes.string.isRequired,
		title: React.PropTypes.string.isRequired,
	},

	render: function() {
		return (
			<View style={styles.bookItem}>
				<Image style={styles.cover} source={this.props.coverURL} />
				<View style={styles.info}>
					<Text style={styles.author}>
						{this.props.author}
					</Text>
					<Text style={styles.title}>
						{this.props.title}
					</Text>
				</View>
			</View>
		);
	}
});

var styles = StyleSheet.create({
	bookItem: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#fff',
		borderBottomColor: '#aaa',
		borderBottomWidth: 2,
		padding: 5,
	},
	cover: {
		flex: 1,
		height: 150,
		resizeMode: 'contain',
	},
	info: {
		flex: 3,
		alignItems: 'flex-end',
		flexDirection: 'column',
		alignSelf: 'center',
		padding: 20,
	},
	author: {
		fontSize: 18,
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
	}
});

module.exports = BookItem;