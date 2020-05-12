import React from 'react';
//import * as BooksAPI from './../BooksAPI';
import './../App.css';

class Book extends React.Component {
	state = {
		// books        : [],
		currentBook  : this.props.book||{},
		updatedShelf : this.props.book.shelf || 'none'
	};

	// updateShelf = () => {
	// 	BooksAPI.update(this.state.currentBook, this.state.updatedShelf).then((data) => {
	// 		if (data) {
	// 			console.log(data);
	// 			if (!data.error) {
	// 				console.log(data);
	// 			}
	// 		}
	// 	});
	// };

	renderBooks = () => {
		return (
			<li key={this.props.book.id}>
				<div className="book">
					<div className="book-top">
						<div
							className="book-cover"
							style={{
								width           : 128,
								height          : 193,
								backgroundImage : `url(${this.props.book.imageLinks.thumbnail})`
							}}
						/>
						<div className="book-shelf-changer">
							<select
								value={this.state.updatedShelf}
								onChange={(e) => {
									this.setState({ updatedShelf: e.target.value });
									// this.props.transferBookData(this.state.currentBook, this.state.updatedShelf);
								}}
								// defaultValue={book.shelf}
							>
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
					{this.props.book.title && <div className="book-title">{this.props.book.title} </div>}{' '}
					{/*implementing null checks*/}
					{this.props.book.authors &&
						this.props.book.authors.map((author) => {
							return (
								<div className="book-authors" key={author}>
									{author}
								</div>
							);
						})}
				</div>
			</li>
		);
	};

	render() {
		return (
			<div>
				{this.renderBooks()}
				{console.log(this.state.currentBook, this.state.updatedShelf)}
			</div>
		);
	}
}

export default Book;
