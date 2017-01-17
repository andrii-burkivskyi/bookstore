import React, { Component } from 'react';
import { Link } from 'react-router';

import Image from '../../Image/Image.jsx';

import style from './BookItem.less';

export default class BookItem extends Component {
  render() {
    const {
      slug,
      thumbnail,
      title,
      authors
    } = this.props;

    return (
      <div className={style.container}>
        <Image
          className={style.image}
          src={thumbnail}
          alt={slug}
          width={'128'}
          height={'168'}
          scale={'2'}
        />
        <h3 className={style.title}>
          <Link to={`/book/${slug}`}>
            {title}
          </Link>
        </h3>
        {
          authors.map((author) =>
            <span
              key={author.get('slug')}
              className={style.author}
            >
              <Link to={`/author/${author.get('slug')}`}>
                {author.get('name')}
              </Link>
            </span>
          )
        }
      </div>
    );
  }
}
