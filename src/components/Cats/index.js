
import React from 'react';


const Cats = ({ cat }) => (
  <div id="cats">
    <img src={cat.url} alt="" />
  </div>
);


export default Cats;
