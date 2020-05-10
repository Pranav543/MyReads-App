import React from 'react';
import HomePage from './components/HomePage';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import './App.css';

class BooksApp extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Route path="/" exact component={HomePage} />
				<Route path="/search" exact component={SearchPage} />
			</BrowserRouter>
		);
	}
}

export default BooksApp;
