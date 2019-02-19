import React, { Component } from 'react'
import * as BooksAPI from './api/BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import Search from './components/Search'
import Shelves from './components/Shelves'

export default class BooksApp extends Component {

  constructor() {
    super()
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books: books
      })
    })
  }

  changeShelf = (book, shelf) => {
    book.shelf = shelf
    BooksAPI.update(book, shelf).then(() => {
      this.setState({ books: this.state.books.filter((b) => b.id !== book.id).concat([book]) })
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/" exact render={() => (
          <Shelves books={this.state.books} onChangeShelf={this.changeShelf} />
        )} />

        <Route exact path='/search' render={() => (
          <Search books={this.state.books} onChangeShelf={this.changeShelf} />
        )} />
      </div>
    )
  }
}