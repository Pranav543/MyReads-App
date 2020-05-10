import React from 'react';
import './../App.css';

class Book extends React.Component {
	bookShelf() {
		return this.props.books.map((book) => {
			if (book.shelf === this.props.shelf) {
				return (
					<li key={book.id}>
						<div className="book">
							<div className="book-top">
								<div
									className="book-cover"
									style={{
										width           : 128,
										height          : 193,
										backgroundImage : `url(${book.imageLinks.thumbnail})`
									}}
								/>
								<div className="book-shelf-changer">
									<select defaultValue={book.shelf}>
										<option value="move" disabled>
											Move to...
										</option>
										<option value="currentlyReading">Currently Reading</option>
										<option value="wantToRead">Want to Read</option>
										<option value="read">Read</option>
										<option value="none">None</option>
									</select>
								</div>
							</div>
							<div className="book-title">{book.title} </div>
							{book.authors.map((author) => {
								return (
									<div className="book-authors" key={author}>
										{author}
									</div>
								);
							})}
						</div>
					</li>
				);
			}
		});
	}

	render() {
		return (
			<div>
				<ol className="books-grid">{this.bookShelf()}</ol>
			</div>
		);
	}
}

export default Book;
