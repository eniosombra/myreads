import React, { Component } from 'react'
import { Modal, Button, ButtonToolbar } from 'react-bootstrap'

export default class Book extends Component {

  constructor(props, context) {
    super(props, context)

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    }
  }

  handleClose() {
    this.setState({ show: false })
  }

  handleShow() {
    this.setState({ show: true })
  }

  render() {
    const { book, onChangeShelf } = this.props

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select value={book.shelf ? book.shelf : "none"} onChange={(event) => onChangeShelf(book, event.target.value)}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>

        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>

        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="xsmall" onClick={this.handleShow}>
            Full Description
        </Button>
        </ButtonToolbar>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Description Book: <strong>{book.title}</strong></Modal.Title>
          </Modal.Header>
          <Modal.Body>{book.description}</Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
