import React, { Component } from 'react';
import * as BooksAPI from './api/BooksAPI';
import BookList from './components/BookList';



class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			books: []
		};

		this.onUpdate = this.onUpdate.bind(this);
	}

	//get books from api on document load
	componentDidMount(){
		BooksAPI.getAll().then((books) => {
			this.setState(() => ({ books }));
		});
	}


	// update book.id and book.shelf with new book id and shelf passed by event.target.value
	onUpdate = (newBook, newShelf) => {
		console.log('currentShelf', newShelf);
		BooksAPI.update(newBook, newShelf)
			.then((shelf) => {
				const { books } = this.state;
				//set shelf for new or updated book
				newBook.shelf = newShelf;

				//add book to array, and set new state
				this.setState((prevState) => ({
					//remove duplicate book.id in array by filtering
					//(book) => (book.id !== newShelf.id) ? books.concat(newBook) : false
					books: prevState.books.filter((book) => (book.id !== newShelf.id) ? books.concat(newBook) : false)
				}));
			})
	};




	render(){
		const { books } = this.state;
		return (
			<div className=''>
				<h1 className='span_2_of_12'>MyReads</h1>
				<BookList books={books} onUpdate={this.onUpdate} />
			</div>);
	}
}

export default App;