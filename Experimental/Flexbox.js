'use strict';

var React = require('react-native');
var {
	View,
	Text,
	StyleSheet,
} = React;

var FlexTest = React.createClass({
	render: function() {
		return (
			<View style={styles.parent}>
				<Text style={styles.child}>Child One</Text>
				<Text style={styles.child}>Child Two</Text>
				<Text style={styles.child}>Child Three</Text>
			</View>
		)
	}
});

var styles = StyleSheet.create({
	parent: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-start',
		backgroundColor: '#F5FCFF',
		borderColor: '#0099AA',
		borderWidth: 5,
		marginTop: 30,
	},
	child: {
		flex: 1,
		borderColor: '#AA0099',
		borderWidth: 2,
		textAlign: 'center',
		fontSize: 24,
	}
});

module.exports = FlexTest;