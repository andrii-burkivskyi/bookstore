import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

import style from './Sidebar.less';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const { className } = event.currentTarget;
    const { isOpen } = this.state;

    if (className.indexOf(style.item_active) >= 0) {
      this.setState({
        isOpen: !isOpen
      });
    } else {
      this.setState({
        isOpen: false
      });
    }
  }

  render() {
    const { categories } = this.props;
    const { isOpen } = this.state;
    const container = classNames(
      (!isOpen && style.close),
      style.container
    );

    return (
      <div
        className={container}
      >
        {
          categories.map((category) =>
            <Link
              key={category.get('slug')}
              className={style.item}
              activeClassName={style.item_active}
              onClick={this.onClick}
              to={`/books/${category.get('slug')}`}
            >
              {category.get('name')}
            </Link>
          )
        }
      </div>
    );
  }
}
