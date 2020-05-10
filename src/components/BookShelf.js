import React from 'react';
import Book from './Book';
import './../App.css';

class BookShelf extends React.Component {
	render() {
		const books = this.props.books;
		const read = 'read';
		const currentlyReading = 'currentlyReading';
		const wantToRead = 'wantToRead';

		return (
			<div>
				<div className="bookshelf">
					<h2 className="bookshelf-title">Currently Reading</h2>
					<div className="bookshelf-books">
						<Book shelf={currentlyReading} books={books} />
					</div>
				</div>
				<div className="bookshelf">
					<h2 className="bookshelf-title">Want to Read</h2>
					<div className="bookshelf-books">
						<Book shelf={wantToRead} books={books} />
					</div>
				</div>
				<div className="bookshelf">
					<h2 className="bookshelf-title">Read</h2>
					<div className="bookshelf-books">
						<Book shelf={read} books={books} />
					</div>
				</div>
			</div>
		);
	}
}

export default BookShelf;
