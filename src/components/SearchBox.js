import React from 'react';

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
					<button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>
						Close
					</button>
					<div className="search-books-input-wrapper">
						<input
							type="text"
							value={this.state.term}
							onChange={this.onChange}
							placeholder="Search by title or author"
						/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid" />
				</div>
			</div>
		);
	}
}

export default SearchBox;
