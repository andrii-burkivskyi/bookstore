import React, { Component } from 'react';
import { Link } from 'react-router';

import style from './Menu.less';

export default class Menu extends Component {
  render() {
    return (
      <header className={style.container}>
        <div className={style.logo}>
          Bookstore
        </div>
        <nav className={style.menu}>
          <Link
            className={style.item}
            activeClassName={style.item_active}
            to="books"
          >
            Books
          </Link>
          <Link
            className={style.item}
            activeClassName={style.item_active}
            to="/authors"
          >
            Authors
          </Link>
        </nav>
      </header>
    );
  }
}
