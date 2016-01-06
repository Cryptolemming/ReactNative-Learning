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
				<View style={styles.topBlock}>
					<View style={styles.leftCol}>
						<View style={[styles.cellOne, styles.base]} />
						<View style={[styles.cellTwo, styles.base]} />
					</View>
					<View style={[styles.cellThree, styles.base]} />
				</View>
				<View style={styles.bottomBlock}>
					<View style={[styles.cellFour, styles.base]} />
					<View style={[styles.cellFive, styles.base]} />
					<View style={styles.bottomRight}>
						<View style={[styles.cellSix, styles.base]} />
						<View style={[styles.cellSeven, styles.base]} />
					</View>
				</View>
			</View>
		);
	}
});

var styles = StyleSheet.create({
	parent: {
		flexDirection: 'column',
		position: 'absolute',
		top: 30,
		left: 0,
		right: 0,
		bottom: 0,
	},
	childOne: {

	},
});

module.exports = Mondrian;