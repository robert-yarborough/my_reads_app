import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from '../api/BooksAPI';


class Search extends Component{
	constructor(props){
		super(props);
		this.state = {
			query: '',
			newBooks: [],
			searchErr: false
		};

		this.updateQuery = this.updateQuery.bind(this);
	}

	updateQuery = (query) => {
		BooksAPI.search(query, 20)
			.then((books) => ({
				newBooks: books.length > 0 ? this.setState({newBooks: books, searchErr: false}) : this.setState({newBooks: [], searchErr: true})
			})).catch((event) => (console.log(event)));
		if (query === ''){
			console.log('empty query');
			this.setState(() => ({
				newBooks: [],
				searchErr: false
			}))
		}
	};



	render(){
		const { newBooks, query, searchErr } = this.state;
		const { books, onUpdate } = this.props;
		return (
			<div className='search-panel'>
				<Link className="close-search"  to="/">Close</Link>
				<div className='search'>
					<input placeholder='Search by Title or Author'
						   onChange={(event) => this.updateQuery(event.target.value)}/>
				</div>
				<div className='search-results'>
					{ newBooks.length > 0 && (
						<div>
							<div className=''>
								<h3>Search returned { newBooks.length } books </h3>
							</div>
							<ol className="books-grid">
								{newBooks.map((book) => (
									<Book
										book={ book }
										books={ books }
										key={ book.id }
										onUpdate={ onUpdate }
									/>
								))}
							</ol>
						</div>
					)}
					{ searchErr  && (
						<div>
							<div className=''>
								<h3>Search returned 0 books.  Please try again!</h3>
							</div>
						</div>
					)}
				</div>

			</div>

		)
	}
}

export default Search;