import React from 'react';
import { Link } from 'react-router-dom';

class SearchBox extends React.Component {
	state = {
		term : ''
	};

	onChange = (e) => {
		this.setState({
			term : e.target.value
		});

		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to="/">
						<button className="close-search">Close</button>
					</Link>

					<div className="search-books-input-wrapper">
						<input
							type="text"
							value={this.state.term}
							onChange={this.onChange}
							placeholder="Search by title or author"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default SearchBox;
