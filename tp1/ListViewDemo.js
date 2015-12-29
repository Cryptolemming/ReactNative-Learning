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
			dataSource: ds.cloneWithRows([])
		};
	},

	_refreshData: function() {
		var endpoint = 'http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction?'+
			'response-format=json&api-key=' + API_KEY;
		fetch(endpoint)
			.then((response) => response.json())
			.then((rjson) => {
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(rjson.results.books)
				});
			});
	},

	_renderRow: function(rowData) {
		return <BookItem coverURL={rowData.book_image}
						 title={rowData.title}
						 author:{rowData.author}/>;
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