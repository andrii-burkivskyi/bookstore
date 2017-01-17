import React, { Component } from 'react';

import AuthorItem from './AuthorItem/AuthorItem.jsx';

import style from './AuthorsList.less';

export default class AuthorsList extends Component {
  render() {
    const { authors } = this.props;

    return (
      <div className={style.container}>
        {
          authors.map((author) =>
            <AuthorItem
              key={author.get('slug')}
              slug={author.get('slug')}
              name={author.get('name')}
              books={author.get('books')}
            />
          )
        }
      </div>
    );
  }
}
