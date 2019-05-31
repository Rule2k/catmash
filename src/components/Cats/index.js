import React from 'react';
import { Image } from 'semantic-ui-react';

const Cats = ({ cat }) => (
  <div id="cats">
    <Image src={cat.url} width={400} height={400} circular centered no-stretch />
  </div>
);


export default Cats;
