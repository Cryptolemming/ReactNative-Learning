var React = require('react-native');
var {
	Image,
	Text,
	View,
	StyleSheet,
	TouchableHighlight,
} = React;

'use strict';

var styles = {
	card: {
		cursor: 'pointer',
		float: 'left',
		borderRadius: '50%',
		width: '21%',
		height: '23%',
		opacity: '.96',
		marginLeft: '4%',
		marginBottom: '4%',
		marginTop: '2%',
	    boxShadow: 'inset 5px 5px 15px #000',
	    border: '1px solid black',
	    ':hover': {
	    	backgroundColor: 'purple',
	    }
	},
};

@Radium
export default class Card extends React.Component {
	constructor(props) {
		super(props);
		this._onClickHandler = this._onClickHandler.bind(this);
	}

	_onClickHandler() {
		this.props.onClick(this.props.image);
	}

	render() {
		var styleFlipped
			= this.props.flipped
			? {backgroundImage: 'url(https://dl.dropboxusercontent.com/s/' + this.props.image + ')',
			   backgroundSize: 'cover'}
			: {backgroundColor: 'gray'};

		return(
			<TouchableHighlight onClick={this._onClickHandler}>
				// swap for Image tag?
				<li>
					style={[styles.card, styleFlipped]}>
				</li>
			</TouchableHighlight>
		);
	}
};

Card.propTypes = {
	image: React.PropTypes.string.isRequired,
	flipped: React.PropTypes.bool.isRequired,
	onClick: React.PropTypes.func.isRequired,
};