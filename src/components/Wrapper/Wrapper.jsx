import React, { Component } from 'react';

import style from './Wrapper.less';

export default class Wrapper extends Component {
  render() {
    return (
      <div className={style.container}>
        {this.props.children}
      </div>
    );
  }
}
