import React from 'react';
import { StyleCustomIcon } from './style';

const IconWidget = ({ width, height, alt, src, style, ...others }) => {
  return (
    <StyleCustomIcon
      Width={width}
      Height={height}
      alt={alt}
      src={src}
      style={style}
      {...others}
    />
  );
};

export default IconWidget;
