import React from 'react';
import SearchBox from './SearchBox';
import * as BooksAPI from './../BooksAPI';
import Book from './Book';

class SearchPage extends React.Component {
	state = {
		books : []
	};

	onSearchSubmit = (term) => {
		if (term !== '') {
			BooksAPI.search(term, 20).then((books) => {
				if (books) {
					console.log(books);
					if (!books.error) {
						console.log(books);
						this.setState({ books });
					}
					else {
						this.setState({ books: [] });
					}
				}
			});
		}
	};
	render() {
		return (
			<div>
				<SearchBox onSubmit={this.onSearchSubmit} />
				<div className="search-books-results">
					<ol className="books-grid">
						{this.state.books.map((book) => {
							return <Book book={book} />;
						})}
					</ol>
				</div>
			</div>
		);
	}
}

export default SearchPage;
