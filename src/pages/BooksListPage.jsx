import React, { Component } from 'react';
import { connect } from 'react-redux';

import Wrapper from '../components/Wrapper/Wrapper.jsx';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import BooksList from '../components/BooksList/BooksList.jsx';
import LoadMoreButton from '../components/LoadMoreButton/LoadMoreButton.jsx';

import { getBooksListByCategory, getCategories } from '../selectors/books.selectors.js';
import { loadBooks, loadMoreBooks, loadCategories } from '../actions/books.actions.js';

function mapStateToProps(state, ownProps) {
  const { category } = ownProps.params;


  return {
    books: getBooksListByCategory(state, category),
    categories: getCategories(state),
    category: state.getIn(['entities', 'categories', category, 'name']),
    isDisplayed: state.getIn(['books', category, 'haveNextPage'])
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  const { params } = ownProps;

  return {
    fetchBooks: (category) => dispatch(loadBooks(category)),
    fetchMoreBooks: () => dispatch(loadMoreBooks(params.category)),
    fetchCategories: () => dispatch(loadCategories())
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class CorePage extends Component {
  componentWillMount() {
    const { fetchBooks, fetchCategories } = this.props;
    const { category } = this.props.params;

    document.title = `Books List | ${this.props.category || ''}`;

    fetchBooks(category);
    fetchCategories();
  }

  componentWillUpdate(nextProps) {
    const { fetchBooks } = this.props;
    const { category } = nextProps.params;

    document.title = `Books List | ${nextProps.category || ''}`;

    if (this.props.params.category !== category) {
      fetchBooks(nextProps.params.category);
    }
  }

  render() {
    const { categories, books, isDisplayed, fetchMoreBooks } = this.props;

    return (
      <Wrapper>

        <Sidebar categories={categories} />

        <BooksList books={books} />

        <LoadMoreButton
          isDisplayed={isDisplayed}
          onClick={fetchMoreBooks}
        />

      </Wrapper>
    );
  }
}
