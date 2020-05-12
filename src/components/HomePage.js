import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './../BooksAPI';
import BookShelf from './BookShelf';

import './../App.css';

class HomePage extends React.Component {
	state = {
		books : []
	};

	// componentDidUpdate = (book, shelf) => {
	// 	BooksAPI.update(book, shelf).then((data) => {
	// 		if (data) {
				
	// 			if (!data.error) {
	// 				console.log(data);
	// 			}
	// 		}
	// 	});

	// 	BooksAPI.getAll().then((books) => {
	// 		this.setState({ books });
			
	// 	});
	// };

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState({ books });
			console.log(this.state.books);
		});
	}

	render() {
		return (
			<div>
				<div className="app">
					<div className="list-books">
						<div className="list-books-title">
							<h1>MyReads</h1>
						</div>
						<div className="list-books-content">
							<div>
								<BookShelf books={this.state.books} updateShelf={this.componentDidUpdate} />
							</div>
						</div>
					</div>
					<div className="open-search">
						<Link to="/search" className="item">
							<button>Add a book</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default HomePage;
