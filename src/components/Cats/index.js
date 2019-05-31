import React from 'react';
import { Image } from 'semantic-ui-react';

const Cats = ({ cat, catHasBeenClicked }) => {
  const handleClickOnCat = () => (catHasBeenClicked(cat.id));
  return (
    <div id="cats">
      <Image src={cat.url} width={400} height={400} circular centered onClick={handleClickOnCat} />
    </div>
  );
};


export default Cats;
