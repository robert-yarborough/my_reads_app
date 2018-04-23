import React, { Component } from 'react';
import Book from '../Book/Book';

class BookShelf extends Component{
	render(){
		const { books, onUpdate } = this.props;
		return (
			<div className='section group'>
				{books.map((book) => (
					<Book
						key={ book.id }
						book={ book }
						books={ books }
						onUpdate={ onUpdate } />
				))}
			</div>
		)
	}
}

export default BookShelf;