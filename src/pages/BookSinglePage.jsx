import React, { Component } from 'react';
import { connect } from 'react-redux';

import Wrapper from '../components/Wrapper/Wrapper.jsx';
import InfoContainer from '../components/InfoContainer/InfoContainer.jsx';
import InfoBar from '../components/InfoBar/InfoBar.jsx';

import { loadBook, loadCategories } from '../actions/books.actions.js';
import { getBookSingle } from '../selectors/books.selectors.js';

function mapStateToProps(state, ownProps) {
  const { title } = ownProps.params;

  return {
    book: getBookSingle(state, title)
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  const { title } = ownProps.params;

  return {
    fetchBook: () => dispatch(loadBook(title)),
    fetchCategories: () => dispatch(loadCategories())
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class BookSinglePage extends Component {
  componentWillMount() {
    const { book, fetchBook, fetchCategories } = this.props;

    document.title = `Book Single | ${book.get('title')}`;

    fetchBook();
    fetchCategories();
  }

  render() {
    const { book } = this.props;

    return (
      <Wrapper>
        <InfoContainer
          thumbnail={book.get('thumbnail')}
          slug={book.get('slug')}
          title={book.get('title')}
          description={book.get('description')}
        />

        <InfoBar
          title={'Authors:'}
          list={book.get('authors')}
          urlPrefix={'/author/'}
        />

        <InfoBar
          title={'Categories:'}
          list={book.get('categories')}
          urlPrefix={'/books/'}
        />
      </Wrapper>
    );
  }
}
