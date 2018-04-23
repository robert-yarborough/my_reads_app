import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from '../Book/Book';
import * as BooksAPI from '../../api/BooksAPI';


class Search extends Component{
	constructor(props){
		super(props);
		this.state = {
			query: '',
			addBooks: [],
			searchErr: false
		};

		this.updateQuery = this.updateQuery.bind(this);
	}

	updateQuery = (query) => {
		BooksAPI.search(query, 20)
			.then((books) => ({
				addBooks: books.length > 0 ? this.setState({addBooks: books, searchErr: false}) : this.setState({addBooks: [], searchErr: true})
			})).catch((event) => (console.log(event)));
	};



	render(){
		const { addBooks, searchErr } = this.state;
		const { books, onUpdate } = this.props;
		return (
			<div className='section group'>
				<div className='search_panel'>
					<Link className="close_search"  to="/">Close</Link>
					<div className='col span_10_of_12 search'>
						<input placeholder='Search by Title or Author'
							   onChange={(event) => this.updateQuery(event.target.value)}/>
					</div>
				</div>
				<div className='col span_12_of_12 search-results'>
					{ addBooks.length > 0 && (
						<div>
							<div className=''>
								<h3>Search returned { addBooks.length } books </h3>
							</div>
							<ol className="books-grid">
								{addBooks.map((book) => (
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