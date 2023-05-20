import React from 'react';

const Image = (props) => {
  return (
    <img src={props.imagePath} alt="Resume" />
  );
};

export default Image;