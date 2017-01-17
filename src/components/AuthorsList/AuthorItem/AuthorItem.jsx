import React, { Component } from 'react';
import { Link } from 'react-router';

import style from './AuthorItem.less';

export default class AuthorItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDropDownOpen: false
    };

    this.handleTogleDropDown = this.handleTogleDropDown.bind(this);
  }

  handleTogleDropDown() {
    this.setState({
      isDropDownOpen: !this.state.isDropDownOpen
    });
  }

  render() {
    const { slug, name, books } = this.props;
    const { isDropDownOpen } = this.state;

    return (
      <div className={style.container}>

        <h3 className={style.name}>
          <button onClick={this.handleTogleDropDown}>
            {name}
          </button>
        </h3>

        {
          isDropDownOpen &&
          <div className={style.drop_down}>
            <span
              className={style.read_more}
            >
              <Link
                to={`/author/${slug}`}
              >
                Read more about author
              </Link>
            </span>

            {
              books.map((book) =>
                <span
                  key={book.get('slug')}
                  className={style.book}
                >
                  <Link to={`/book/${book.get('slug')}`}>
                    {book.get('title')}
                  </Link>
                </span>
              )
            }
          </div>
        }


      </div>
    );
  }
}
