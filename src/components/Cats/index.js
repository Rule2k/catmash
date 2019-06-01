import React from 'react';
import './cats.scss';

const Cats = ({ cat, catHasBeenClicked }) => {
  const handleClickOnCat = () => (catHasBeenClicked(cat.id));
  const backgroundImage = {
    backgroundImage: `url(${cat.url})`,
  };
  return (
    <div className="cats" style={backgroundImage} onClick={handleClickOnCat} />
  );
};

// <Image src={cat.url} width={400} height={400} circular centered onClick={handleClickOnCat} />
export default Cats;
