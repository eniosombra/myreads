import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../api/BooksAPI'
import Book from './Book'

export default class Search extends Component {

  constructor() {
    super()
    this.state = { booksFound: [] }
  }

  searchBooks = (query) => {
    const { books } = this.props

    if (query) {
      BooksAPI.search(query, 1000).then(response => {
        if (response.length > 0) {
          const booksToShow = response.map(searchBook => {
            const found = books.find(book => book.id === searchBook.id)
            searchBook.shelf = found ? found.shelf : 'none'
            return searchBook
          })
          this.setState({ booksFound: booksToShow })
        } else {
          this.setState({ booksFound: [] })
        }
      })
    } else {
      this.setState({ booksFound: [] })
    }
  }

  render() {
    const { onChangeShelf } = this.props
    const { booksFound } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" >Close</Link>

          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={(event) => this.searchBooks(event.target.value)} />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {booksFound.length > 0 && booksFound.map((book) => (
              <li key={book.id}>
                <Book book={book} onChangeShelf={onChangeShelf} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}
