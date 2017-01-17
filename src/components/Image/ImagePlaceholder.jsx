import React, { Component } from 'react';

export default class ImagePlaceholder extends Component {
  constructor(props) {
    super(props);

    this.getViewBox = this.getViewBox.bind(this);
  }

  getViewBox() {
    const { width = 128, height = 193, scale = 2 } = this.props;
    const defaultWidth = 315.58;
    const defaultHeight = 315.58;
    let shiftWidth = 0;
    let shiftHeight = 0;
    let svgWidth = 0;
    let svgHeight = 0;

    if (width >= height) {
      shiftWidth = -defaultWidth * (width / height * scale - 1) / 2;
      shiftHeight = -defaultHeight * (scale - 1) / 2;
      svgWidth = defaultWidth * width / height * scale;
      svgHeight = defaultHeight * scale;
    } else {
      shiftWidth = -defaultWidth * (scale - 1) / 2;
      shiftHeight = -defaultHeight * (height / width * scale - 1) / 2;
      svgWidth = defaultWidth * scale;
      svgHeight = defaultHeight * height / width * scale;
    }

    return [shiftWidth, shiftHeight, svgWidth, svgHeight].join(' ');
  }

  render() {
    const viewBox = this.getViewBox();

    return (
      <svg
        viewBox={viewBox}
      >
        <g>
          <path
            d="
            M310.58, 33.331
            H5
            c-2.761, 0-5, 2.238-5, 5
            v238.918
            c0, 2.762, 2.239, 5, 5, 5
            h305.58
            c2.763, 0, 5-2.238, 5-5
            V38.331
            C315.58, 35.569, 313.343, 33.331, 310.58, 33.331
            z
            M285.58, 242.386
            l-68.766-71.214
            c-0.76-0.785-2.003-0.836-2.823-0.114
            l-47.695,41.979l-60.962-75.061
            c-0.396-0.49-0.975-0.77-1.63-0.756
            c-0.631, 0.013-1.22, 0.316-1.597, 0.822
            L30,234.797
            V63.331
            h255.58
            V242.386
            z"
          />
          <path
            d="
            M210.059, 135.555
            c13.538, 0, 24.529-10.982, 24.529-24.531
            c0-13.545-10.991-24.533-24.529-24.533
            c-13.549, 0-24.528, 10.988-24.528, 24.533
            C185.531, 124.572, 196.511, 135.555, 210.059, 135.555
            z"
          />
        </g>
      </svg>
    );
  }
}
