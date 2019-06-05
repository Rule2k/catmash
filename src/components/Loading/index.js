import React from 'react';
import Header from 'src/components/Header';
import { Loader } from 'semantic-ui-react';
import './loading.scss';


const Loading = () => (
  <div id="loading-page">
    <Header />
    <Loader id="loader" active inline content="Loading" size="big" />
  </div>
);


export default Loading;
