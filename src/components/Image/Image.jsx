import React, { Component } from 'react';

import ImagePlaceholder from './ImagePlaceholder.jsx';

export default class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false
    };

    this.setIsLoaded = this.setIsLoaded.bind(this);
  }

  setIsLoaded() {
    this.setState({
      isLoaded: true
    });
  }

  render() {
    const { className, src, alt, width, height, scale } = this.props;
    const { isLoaded } = this.state;
    const image = {
      display: (isLoaded ? 'block' : 'none'),
      width: '100%'
    };
    const container = {
      background: (isLoaded ? 'transparent' : '#e3e3e3')
    };

    return (
      <div
        className={className}
        style={container}
      >
        <img
          onLoad={this.setIsLoaded}
          style={image}
          src={src}
          alt={alt}
        />
        {
          !isLoaded &&
          <ImagePlaceholder
            width={width}
            height={height}
            scale={scale}
          />
        }
      </div>
    );
  }
}
