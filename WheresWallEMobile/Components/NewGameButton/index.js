import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

'use strict';

const styles = {
	newGame: {
		background: 'transparent',
		padding: '5px',
		fontStyle: 'bold',
		margin: '-25px 0px 0px 115px',
		border: '0px !important',
		cursor: 'pointer',
		float: 'right',
		fontSize: '1.6em',
		':hover': {
			color: '#00ff00', 
			opacity: 1,
		}
	},
};

export default class NewGameButton extends Component {
	constructor(props) {
		super(props);
	}

	_onPressHandler() {
		this.props.onClick()
	}

	render() {
		var styleGameOver
			= this.props.gameOver
			? {color: '#00ff00', opacity: 1}
			: {color: 'gray', opacity: .4}

		return (
			// FontAwesome in ReactNative? Use Reat Native Icons
			<TouchableHighlight onPress={this._onPressHandler}
				<Text style={[styles.newGame, styleGameOver]}>Refresh</Text>
			</TouchableHighlight>
	}
};
