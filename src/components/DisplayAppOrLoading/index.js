import React from 'react';
import Cats from 'src/components/Cats';
import Loading from 'src/components/Loading';

const DisplayAppOrLoading = ({ loading, cats }) => (
  loading ? <Loading /> : cats.map(cat => (
    <Cats cat={cat} key={cat.id} />
  ))
);


export default DisplayAppOrLoading;
