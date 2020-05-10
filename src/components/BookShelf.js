import React from 'react';
import Book from './Book';
import './../App.css';

class BookShelf extends React.Component {
	currentlyReading = () => {
		const books = this.props.books.filter((book) => {
			return book.shelf === 'currentlyReading';
		});
		return (
			<div>
				<div className="bookshelf-books">
					<Book books={books} />
				</div>
			</div>
		);
	};

	wantToRead() {
		const books = this.props.books.filter((book) => {
			return book.shelf === 'wantToRead';
		});
		return (
			<div>
				<div className="bookshelf-books">
					<Book books={books} />
				</div>
			</div>
		);
	}

	read() {
		const books = this.props.books.filter((book) => {
			return book.shelf === 'read';
		});
		return (
			<div>
				<div className="bookshelf-books">
					<Book books={books} />
				</div>
			</div>
		);
	}

	render() {
		return (
			<div>
				<div className="bookshelf">
					<h2 className="bookshelf-title">Currently Reading</h2>
					{this.currentlyReading()}
				</div>
				<div className="bookshelf">
					<h2 className="bookshelf-title">Want to Read</h2>
					{this.wantToRead()}
				</div>
				<div className="bookshelf">
					<h2 className="bookshelf-title">Read</h2>
					{this.read()}
				</div>
			</div>
		);
	}
}

export default BookShelf;
