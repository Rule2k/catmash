import React from 'react';

const SingleCat = ({ singlecat }) => {
  const backgroundImage = {
    backgroundImage: `url(${singlecat.url})`,
  };
  return (
    <div className="singlecat" style={backgroundImage} />
  );
};


export default SingleCat;
