import React from 'react';
import SearchBox from './SearchBox';

class SearchPage extends React.Component {
	onSearchSubmit = (term) => {
		console.log(term);
	};
	render() {
		return <SearchBox onSubmit={this.onSearchSubmit} />;
	}
}

export default SearchPage;
