import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import { Panel, Image } from 'react-bootstrap'
import BookReader from '../icons/book-reader.svg'

export default function Shelves(props) {

  const shelves = [
    { id: 'currentlyReading', title: 'Currently Reading' },
    { id: 'wantToRead', title: 'Want to Read' },
    { id: 'read', title: 'Read' }
  ]

  const { books, onChangeShelf } = props

  return (
    <div className="list-books">
      <Panel bsStyle="primary text-center">
        <Panel.Heading>
          <Panel.Title>
            <h1>MyReads</h1>
            <img src={BookReader} />
          </Panel.Title>
        </Panel.Heading>
      </Panel>

      <div className="list-books-content">
        {shelves.map(shelf => (
          <div key={shelf.id}>
            <Shelf title={shelf.title} onChangeShelf={onChangeShelf} books={books.filter(book => book.shelf === `${shelf.id}`)} />
          </div>
        ))}

        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </div>
  )
}
