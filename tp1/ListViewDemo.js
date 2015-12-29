// <ListView> functionality and learning

'use strict';
var React = require('react-native');
var {
	ListView,
	Text,
	StyleSheet,
} = React;

var ListViewDemo = React.createClass({
	getInitialState: function() {
		var ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		return {
			dataSource: ds.cloneWithRows(['a', 'b', 'b', 'a longer example', 'd', 'e'])
		};
	},

	_renderRow: function(rowData) {
		return <Text style={styles.row}>{rowData}</Text>;
	},

	render: function() {
		return (
			<ListView
				dataSource={this.state.dataSource}
				renderRow={this._renderRow} />
		)
	}	
});

var styles = StyleSheet.create({
	row: {
		padding: 25,
		textAlign: 'center',
		backgroundColor: '#bbdefb',
	}
});

module.exports = ListViewDemo;