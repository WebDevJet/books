import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import About from './components/About';
import './App.css';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<div className='container mx-auto'>
					<Route exact path='/'>
						<BookList />
					</Route>
					<Route exact path='/about'>
						<About />
					</Route>
				</div>
			</div>
		</Router>
	);
}

export default App;
