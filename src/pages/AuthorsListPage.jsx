import React, { Component } from 'react';
import { connect } from 'react-redux';

import Wrapper from '../components/Wrapper/Wrapper.jsx';
import AuthorsList from '../components/AuthorsList/AuthorsList.jsx';
import LoadMoreButton from '../components/LoadMoreButton/LoadMoreButton.jsx';

import { loadAuthors, loadMoreAuthors } from '../actions/authors.actions.js';
import { getAuthorsList } from '../selectors/authors.selectors.js';

function mapStateToProps(state) {
  return {
    authors: getAuthorsList(state),
    isDisplayed: state.getIn(['authors', 'haveNextPage'])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAuthors: () => dispatch(loadAuthors()),
    fetchMoreAuthors: () => dispatch(loadMoreAuthors())
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class AuthorsListPage extends Component {
  componentWillMount() {
    const { fetchAuthors } = this.props;

    document.title = 'Authors list';

    fetchAuthors();
  }

  render() {
    const { authors, isDisplayed, fetchMoreAuthors } = this.props;

    return (
      <Wrapper>
        <AuthorsList
          authors={authors}
        />

        <LoadMoreButton
          isDisplayed={isDisplayed}
          onClick={fetchMoreAuthors}
        />
      </Wrapper>
    );
  }
}
