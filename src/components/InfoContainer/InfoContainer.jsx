import React, { Component } from 'react';

import Image from '../Image/Image.jsx';

import style from './InfoContainer.less';

export default class InfoContainer extends Component {
  render() {
    const { thumbnail, slug, title, description } = this.props;

    return (
      <div className={style.container}>
        {
          thumbnail &&
          <Image
            className={style.image}
            src={thumbnail}
            alt={slug}
            widht={'128'}
            height={'193'}
            scale={'2'}
          />
        }

        <h2 className={style.title}>
          {title}
        </h2>

        <p className={style.description}>
          {description}
        </p>
      </div>
    );
  }
}
