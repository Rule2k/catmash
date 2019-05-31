import React from 'react';
import { Image } from 'semantic-ui-react';

const Cats = ({ cat }) => (
  <div id="cats">
    <Image src={cat.url} width={600} height={600} circular centered  />
  </div>
);


export default Cats;
