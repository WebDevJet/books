import React from 'react';

export default function Navbar() {
	return (
		<div>
			<nav className='navbar navbar-dark bg-primary mb-4'>
				<a href='/' className='navbar-brand mb-0 h1'>
					Home
				</a>
				<a href='/about' className='nav-item text-light mb-0'>
					About
				</a>
			</nav>
		</div>
	);
}
