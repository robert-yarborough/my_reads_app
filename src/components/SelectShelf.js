import React, { Component } from 'react';


class SelectShelf extends Component{
	render(){
		const { book, books, onUpdate } = this.props;

		// set current shelf to none as default
		let currentShelf = 'none';

		// if book is in current list, set current shelf to book.shelf
		for (let item of books ) {
			if (item.id === book.id)  {
				currentShelf = item.shelf;
				break
			}
		}


		return (
			<select onChange={(event) => (onUpdate(book, event.target.value))} defaultValue={ currentShelf }>
					<option value="none" disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
			</select>
		)

	}
}



export default SelectShelf;