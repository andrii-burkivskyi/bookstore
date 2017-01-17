import React, { Component } from 'react';

import style from './LoadMoreButton.less';

export default class LoadMoreButton extends Component {
  render() {
    const { onClick, isDisplayed } = this.props;


    return (
      <div className={style.container}>
        {
          isDisplayed &&
          <button
            className={style.button}
            onClick={onClick}
          >
            Load more
          </button>
        }
      </div>
    );
  }
}
