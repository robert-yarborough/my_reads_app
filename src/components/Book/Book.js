import React, { Component } from 'react';
import SelectShelf from '../SelectShelf/SelectShelf';


class Book extends Component{
	render(){
		const { book, books, onUpdate} = this.props;

		return (
			<div key={book.id} className='col span_2_of_12 book'>
				<div className='book-cover'>
					<img className='cover' style={{ backgroundImage: `url(${book.imageLinks.thumbnail})`}} alt='img'/>
				</div>
				<div className='select-shelf'>
					<SelectShelf book={book} books={books} onUpdate={onUpdate}/>
				</div>
				<div className="book-title">{ book.title }</div>
				{book.authors && book.authors.map((author, index) => (
						<div className="book-authors" key={index}>{author}</div>
					))}
			</div>
		)
	}
}

export default Book;