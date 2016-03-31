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
	winModal: {
		background: 'black',
		marginTop: '-25px',
		opacity: .7,
		width: '500px',
		height: '300px',
		position: 'absolute',
		borderRadius: '15px',
		border: '1px solid purple',
	},
	winText: {
		fontSize: '5em',
		color: '#00FF00',
		textAlign: 'center',
		verticalAlign: 'center',
		opacity: 2,
	},
};

export default class WinModal extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		var modalStyling
			= this.props.won
			? {visibility: 'visible', transitionDelay: '1s'}
			: {visibility: 'hidden'};

		return (
			<View style={[styles.winModal, modalStyling]}>
				<Text style={styles.winText}>YOU WIN!</Text>
		  	</View>
		);
	}
};

WinModal.propTypes = {
	won: React.PropTypes.bool.isRequired,
};

WinModal.defaultProps = {
	won: false
};