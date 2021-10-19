import { Typography } from '@material-ui/core';
import React from 'react';

const Booklist = ({ books }) => {
	return (
		<div data-test='book-list'>
			{books.map((book) => (
				<div key={book.key} className='book-item'>
					<Typography varaint='h2' component='h2'>
						{book.name}
					</Typography>
				</div>
			))}
		</div>
	);
};
export default Booklist;
