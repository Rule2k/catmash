import React from 'react';

const SingleCat = ({ singlecat }) => {
  const backgroundImage = {
    backgroundImage: `url(${singlecat.url})`,
  };
  return (
    <div>
      <div className="singlecat" style={backgroundImage} />
      <div>
        Score : {singlecat.score}
      </div>
    </div>
  );
};


export default SingleCat;
