import axios from 'axios';
import {
  LOADING_HOMEPAGE, twoCatsReceived, CAT_CLICKED, allCatsReceived, LOADING_RATINGS, loadingHomePage,
} from './reducer';

const url = 'http://95.142.173.247:8060/api';

// middleware. Ces actions n'arrivent pas directement jusqu'au reducer mais sont destinés à l'API

const ajaxMiddleware = store => next => (action) => {
  switch (action.type) {
    // liste randomisé de 2 chats
    case LOADING_HOMEPAGE:
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
        // j'envoie son ID pour l'identifier côté back-end
        id: action.id,
      })
        .then((result) => {
          // je dispatche l'action loadingHomePage afin de récupérer deux nouveaux chats après avoir voté
          store.dispatch(loadingHomePage());
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
