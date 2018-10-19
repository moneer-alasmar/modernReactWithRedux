import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      )
    });
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // WHATEVER IS RETURNED WILL SHOW UP AS PROPS INSIDE OF BOOKLIST
  return {
    books: state.books,
  };
}

// ANYTHING RETURNED FROM THIS FUCNTION WILL END UP AS PROPS ON THE BOOKLIST CONTAINER
function mapDispatchToProps(dispatch) {
  // WHENEVER SELECTBOOK IS CALLED THE RESULT SHOULD BE PASSED TO ALL OF OUR REDUCERS
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// PROMOTE BOOKLIST FROM A COMPONENT TO A CONTAINER - IT NEEDS TO KNOW ABOUT THIS NEW DISPATCH METHOD, SELECTBOOK. MAKE IT AVAILABLE AS A PROP
export default connect(mapStateToProps, mapDispatchToProps)(BookList);