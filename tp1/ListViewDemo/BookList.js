// <ListView> functionality and learning

'use strict';
var React = require('react-native');
var {
	ListView,
	Text,
	View,
	Image,
	StyleSheet,
} = React;
var BookItem = require('./BookItem');
var QUERY_TYPE = 'hardcover-fiction';

var BookList = React.createClass({
	getInitialState: function() {
		var ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		return {
			dataSource: ds.cloneWithRows([])
		};
	},

	componentDidMount: function() {
		this._refreshData();
	},

	_refreshData: function() {
		var endpoint = 'http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction?'+
			'response-format=json&api-key=e26018c98b9b2fb3fbec4901c554ec92:18:73885278';
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
						 author={rowData.author}/>;
	},

	_renderHeader: function() {
		return (
			<View style={styles.sectionDivider}>
				<Text style={styles.headingText}>
					Bestsellers in Hardcover Fiction
				</Text>
			</View>
		)
	},

	_renderFooter: function() {
		return (
			<View style={styles.sectionDivider}>
				<Text>
					Data from the New York Times Bestsellers list.
				</Text>
			</View>
		);
	},

	render: function() {
		return (
			<ListView
				style={styles.container}
				dataSource={this.state.dataSource}
				renderRow={this._renderRow}
				renderHeader={this._renderHeader}
				renderFooter={this._renderFooter} />
		);
	}	
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		paddingTop: 24,
	},
	list: {
		flex: 1,
		flexDirection: 'row',
	},
	row: {
		flex: 1,
		fontSize: 24,
		padding: 42,
		borderWidth: 1,
		borderColor: '#ddd',
	},
	sectionDivider: {
		padding: 8,
		backgroundColor: '#eee',
		alignItems: 'center',
	},
	headingText: {
		flex: 1,
		fontSize: 24,
		alignSelf: 'center',
	}
});

module.exports = BookList;