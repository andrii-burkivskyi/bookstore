import React, { Component } from 'react';

import Menu from '../components/Menu/Menu.jsx';

export default class CorePage extends Component {

  render() {
    const { children } = this.props;

    return (
      <div>
        <Menu />
        {children}
      </div>
    );
  }
}
