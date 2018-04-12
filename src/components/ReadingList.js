import React, { Component } from 'react';
import CurrentReads from "./CurrentReads";

class ReadingList extends Component {
	render(){
		const options = ['currentlyReading', 'wantToRead', 'read', 'none'];
		return (
			<div className='section group'>
				<div className='col span_12_of_12'>
					<h3>Reads</h3>
					{this.props.books.map((book) => (
						<div key={book.id} className='col span_3_of_12 book-item'>
							<img className='' style={{ backgroundImage: `url(${book.imageLinks.thumbnail})`}} alt='img'/>
							<h3>{book.title}</h3>
							<p>{book.authors}</p>

							<select onChange={() => (this.props.selectShelf(book,  book.shelf))}>
								{options.map(option => {
									return <option value={this.props.shelf} key={option} >{option}</option>
								})}
							</select>
						</div>
					))}


				</div>
			</div>
		)
	}
}


export default ReadingList;