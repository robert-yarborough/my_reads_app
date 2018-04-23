import React, { Component } from 'react';
import BookShelf from '../BookShelf/BookShelf';

class BookList extends Component {
	render(){
		const { books, onUpdate } = this.props;
		const shelfOptionTypes = [{type: 'currentlyReading', title: 'Currently Reading'},{type: 'wantToRead', title: 'Want To Read'}, { type: 'read', title: 'Read'}];
		return (
			<div className='section group'>
					{shelfOptionTypes.map((shelf, index) => {
						const shelfBooks = books.filter((book) => book.shelf === shelf.type);
						return (
							<div key={index} className='col span_12_of_12 book-item'>
								<h3>{shelf.title}</h3>
								<BookShelf
									books={ shelfBooks }
									onUpdate={ onUpdate }/>
							</div>
						)
					})}
			</div>
		)
	}
}


export default BookList;