import axios from 'axios';
import {
  LOADING_HOMEPAGE, twoCatsReceived, CAT_CLICKED, allCatsReceived, LOADING_RATINGS,
} from './reducer';

const url = 'http://localhost:8060/api';

// middleware. Ces actions n'arrivent pas directement jusqu'au reducer mais sont destinés à l'API

const ajaxMiddleware = store => next => (action) => {
  switch (action.type) {
    // liste randomisé de 2 chats
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
    // liste de tous les chats
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
    // vote pour un chat
    case CAT_CLICKED:
        axios.post(`${url}/updatescore`, {
          id: action.id,
        })
          .then((result) => {
            console.log(result.data);
          })
          .catch((error) => {
            console.log(error);
          });
      console.log(action.id);
      break;
    default:
      next(action);
  }
};

export default ajaxMiddleware;
