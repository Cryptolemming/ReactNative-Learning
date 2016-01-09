var React = require('react-native');

var {
	TouchableHighlight
	Text
	View
	StyleSheet
} = React;

var Button = React.createClass({
	render: function() {
		return(
			<View>
				<TouchableHighlight>
					<Text>{this.props.label}</Text>
				</TouchableHighLight>
			</View>
		);
	}
});

var styles = StyleSheet.create({
});

module.exports = Button;