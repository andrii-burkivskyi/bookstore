import React, { Component } from 'react';
import { connect } from 'react-redux';

import Wrapper from '../components/Wrapper/Wrapper.jsx';
import InfoContainer from '../components/InfoContainer/InfoContainer.jsx';
import InfoBar from '../components/InfoBar/InfoBar.jsx';

import { loadAuthor } from '../actions/authors.actions.js';
import { getAuthorSingle } from '../selectors/authors.selectors.js';

function mapStateToProps(state, ownProps) {
  const { name } = ownProps.params;

  return {
    author: getAuthorSingle(state, name)
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  const { name } = ownProps.params;

  return {
    fetchAuthor: () => dispatch(loadAuthor(name))
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class AuthorSinglePage extends Component {
  componentWillMount() {
    const { author, fetchAuthor } = this.props;

    document.title = `Author Single | ${author.get('name')}`;

    fetchAuthor();
  }

  render() {
    const { author } = this.props;

    return (
      <Wrapper>
        <InfoContainer
          title={author.get('name')}
          description={author.get('biography')}
        />

        <InfoBar
          title={'Books:'}
          list={author.get('books')}
          urlPrefix={'/book/'}
          nameKey={'title'}
        />
      </Wrapper>
    );
  }
}
