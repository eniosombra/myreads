import React from 'react'
import Book from './Book'
import { Panel } from 'react-bootstrap'

export default function Shelf(props) {

    const { books, title, onChangeShelf } = props

    return (
        <div className="bookshelf">
            <div className="container">
                <Panel bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title><h3>{title}</h3></Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {books.map(book => (
                                    <li key={book.id}>
                                        <Book book={book} onChangeShelf={onChangeShelf} />
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </Panel.Body>
                </Panel>
            </div>
        </div>
    )
}
