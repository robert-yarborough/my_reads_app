import React, { Component } from 'react';
import * as BooksAPI from './api/BooksAPI';
import CurrentReads from './components/CurrentReads';
import DesirableReads from './components/DesirableReads';
import ReadingList from './components/ReadingList';



class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			books: [],
			shelf: ['currentlyReading', 'wantToRead', 'read']

		};

		//this.logger = this.logger.bind(this);
		this.onUpdate = this.onUpdate.bind(this);
	}

	//get books from api
	componentDidMount(){
		BooksAPI.getAll().then((books) => {
			this.setState(()=> ({
				books
			}));
		});
	}


	/*logger(){
		console.log(this.state.books)
	}*/

	//write a function that handles selection of shelves
	/*onUpdate = (shelf) => {
		this.setState((currentState) => ({
			shelf: currentState.shelf.concat(shelf)
		}));
	};*/

	onUpdate = (book, shelf) => {
		BooksAPI.update(book,  shelf)
			.then((shelf) => {
				this.setState((currentState) => {
					//this conditional is funky, but I'm testing for data state
					if (currentState.books.filter((book) => ({
							book: book.shelf
						})) === currentState.shelf.filter((s) => ({
							shelf: s
						}))){
						console.log('give me this shelf', shelf)
					}else{
						console.log('give me all shelves', shelf)
					}
				})

			})
	};




	render(){
		return (
			<div className=''>
				<h1 className='span_2_of_12'>MyReads</h1>
				<CurrentReads />
				<DesirableReads />
				<ReadingList books={this.state.books}
							 selectShelf={(book, shelf) => {this.onUpdate(book, shelf)}} />
			</div>);
	}
}

export default App;