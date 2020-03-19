import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function BookList() {
	const [books, setBooks] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	useEffect(() => {
		getBooks();
	}, []);

	function getBooks() {
		axios.get(`http://localhost:3000/books?q=${searchTerm}`).then(res => {
			setBooks(res.data);
			console.log(res.data);
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		getBooks();
	}

	function handleChange(e) {
		setSearchTerm(e.target.value);
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div class='input-group mb-3'>
					<input
						type='text'
						class='form-control'
						placeholder='Enter a Search Term'
						aria-label='Search Term'
						aria-describedby='button-addon2'
						onChange={handleChange}
					/>
					<div class='input-group-append'>
						<button class='btn btn-primary' type='button' id='button-addon2'>
							Submit
						</button>
					</div>
				</div>
			</form>
			{books.map(book => (
				<div className='card mb-4'>
					<h5 className='card-header'>{book.title}</h5>
					<div className='card-body'>
						<p>Type: {book.Type}</p>
						<p>
							Author: {book.first_name} {book.last_name}
						</p>
						<p>Contact: {book.email}</p>
						<p>Published Date: {book.published}</p>
						<p>ISBN Number: {book.ISBN}</p>
						<p>Page Count: {book.page_count}</p>
					</div>
				</div>
			))}
		</div>
	);
}
