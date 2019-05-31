import axios from 'axios';
import { LOADING_HOMEPAGE, twoCatsReceived } from './reducer';

const url = 'http://localhost:8060/api';

const ajaxMiddleware = store => next => (action) => {
  switch (action.type) {
    case LOADING_HOMEPAGE:
      axios.get(`${url}/cats`, {
      })
        .then((result) => {
          store.dispatch(twoCatsReceived(result.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      next(action);
  }
};

export default ajaxMiddleware;
