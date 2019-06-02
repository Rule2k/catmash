import axios from 'axios';
import {
  LOADING_HOMEPAGE, twoCatsReceived, CAT_CLICKED, allCatsReceived, LOADING_RATINGS,
} from './reducer';

const url = 'http://localhost:8060/api';

const ajaxMiddleware = store => next => (action) => {
  switch (action.type) {
    case LOADING_HOMEPAGE:
      console.log('loading homepage');
      axios.get(`${url}/gettwocats`, {
      })
        .then((result) => {
          store.dispatch(twoCatsReceived(result.data.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case LOADING_RATINGS:
        console.log('loading ratings');
      axios.get(`${url}/getallcats`, {
      })
        .then((result) => {
          store.dispatch(allCatsReceived(result.data.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case CAT_CLICKED:
      console.log(action.id);
      break;
    default:
      next(action);
  }
};

export default ajaxMiddleware;
