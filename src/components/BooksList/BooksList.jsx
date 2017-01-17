import React, { Component } from 'react';

import BookItem from './BookItem/BookItem.jsx';

import style from './BooksList.less';

export default class BooksList extends Component {
  render() {
    const { books } = this.props;

    return (
      <div className={style.container}>
        {
          books.map((book) =>
            <BookItem
              key={book.get('slug')}
              slug={book.get('slug')}
              thumbnail={book.get('thumbnail')}
              title={book.get('title')}
              authors={book.get('authors')}
            />
          )
        }
      </div>
    );
  }
}
