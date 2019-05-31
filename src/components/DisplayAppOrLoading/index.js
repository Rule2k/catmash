import React from 'react';
import App from 'src/components/App';
import Loading from 'src/components/Loading';

const DisplayAppOrLoading = ({ loading, cats }) => (
  loading ? <Loading /> : <App cats={cats} />
);

export default DisplayAppOrLoading;
