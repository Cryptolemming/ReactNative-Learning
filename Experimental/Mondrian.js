'use strict';

var React = require('react-native');
var = {
	View,
	StyleSheet,
} = React;

var Mondrian = React.createClass({
	render: function() {
		return (
			<View style={styles.parent}>
				<View style={styles.childOne}></View>
			</View>
		)
	}
});

var styles = StyleSheet.create({
	parent: {

	},
	childOne: {

	},
});

module.exports = Mondrian;