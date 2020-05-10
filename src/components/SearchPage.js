import React from 'react';
import SearchBox from './SearchBox';
import * as BooksAPI from './../BooksAPI';
import Book from './Book';

class SearchPage extends React.Component {
	state = {
		books : []
	};

	onSearchSubmit = (term) => {
		if (term) {
			BooksAPI.search(term, 20).then((books) => {
				if (books) {
					if (!books.error) {
						console.log(books);

						this.setState({ books });
					}
				}
			});
		}
	};
	render() {
		console.log(this.state.books);
		return (
			<div>
				<SearchBox onSubmit={this.onSearchSubmit} />
				<div className="search-books-results"><Book books={this.state.books} /></div>
			</div>
		);
	}
}

export default SearchPage;
