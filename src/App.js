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
			shelf: []

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

	};




	render(){
		return (
			<div className=''>
				<h1 className='span_2_of_12'>MyReads</h1>
				<CurrentReads />
				<DesirableReads />
				<ReadingList books={this.state.books}
							 selectShelf={(shelf) => {this.onUpdate(shelf)}} />
			</div>);
	}
}

export default App;