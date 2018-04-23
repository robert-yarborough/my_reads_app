import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './api/BooksAPI';
import BookList from './components/BookList/BookList';
import Search from "./components/Search/Search";



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
			<div className='app'>
				<Route exact path='/' render={() => (
					<div className='homepage'>
						<nav className='header'>
							<h1 className='span_12_of_12'>MyReads</h1>
						</nav>
						<BookList books={books} onUpdate={this.onUpdate} />
						<div className='search_btn'>
							<Link to='/search'>Search</Link>
						</div>
					</div>
				)} />
				<Route exact path='/search' render={({ history }) => (
					<Search books={books} onUpdate={this.onUpdate}/>
				)}/>
			</div>
		)
	}


}

export default App;