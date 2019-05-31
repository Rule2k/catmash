import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import './loading.scss';


const DisplayAppOrLoading = () => (
  <div id="loading">
    <Dimmer active inverted>
      <Loader active inline />
    </Dimmer>
  </div>
);


export default DisplayAppOrLoading;
