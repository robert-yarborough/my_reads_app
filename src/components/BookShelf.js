import React, { Component } from 'react';
import Book from './Book';


class BookShelf extends Component{
	render(){
		const { books, onUpdate } = this.props;
		return (
			<div>
				{books.map((book, index) => (
					<Book
						key={ index }
						book={ book }
						books={ books }
						onUpdate={ onUpdate }
					/>
				))}
			</div>
		)
	}
}

export default BookShelf;