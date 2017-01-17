import React, { Component } from 'react';
import { Link } from 'react-router';

import style from './InfoBar.less';

export default class InfoBar extends Component {
  render() {
    const { title, list, urlPrefix, nameKey = 'name' } = this.props;

    if (!list) { return null; }

    return (
      <div className={style.container}>
        <span className={style.title}>
          {title}
        </span>
        {
          list.map((item) =>
            <span
              key={item.get('slug')}
              className={style.item}
            >
              <Link
                to={`${urlPrefix}${item.get('slug')}`}
              >
                {item.get(nameKey)}
              </Link>
            </span>
          )
        }
      </div>
    );
  }
}
