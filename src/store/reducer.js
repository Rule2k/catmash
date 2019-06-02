// State initial au lancement de l'application
const initialState = {
  twocats: [],
  allcats: [],
  loadingHomepage: true,
  loadingRatings: true,
};

// Types d'actions
// actions à destination du reducer :
const RECEIVED_TWO_RANDOM_CATS = 'RECEIVED_TWO_RANDOM_CATS';
const RECEIVED_ALL_CATS = 'RECEIVED_ALL_CATS';

// actions à destination du middleware (pour l'API) :
export const LOADING_HOMEPAGE = 'LOADING_HOMEPAGE';
export const LOADING_RATINGS = 'LOADING_RATINGS';
export const CAT_CLICKED = 'CAT_CLICKED';

// reducer

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // cette action désigne la réception des datas de la BDD
    // à la réception de cette action je retourne dans un nouveau tableau :
    // l'ancien state de redux, une liste de 2 chats issus de la BDD,
    // le loading de la page actuelle devient false, tandis que l'autre page devient true
    case RECEIVED_TWO_RANDOM_CATS:
      return {
        ...state,
        twocats: action.data,
        loadingHomepage: false,
        loadingRatings: true,
      };
    case RECEIVED_ALL_CATS:
    // idem mais pour la seconde page
      return {
        ...state,
        allcats: action.data,
        loadingRatings: false,
        loadingHomepage: true,
      };
    default:
      return state;
  }
};

// actions

export const twoCatsReceived = data => ({
  type: RECEIVED_TWO_RANDOM_CATS,
  data,
});

export const allCatsReceived = data => ({
  type: RECEIVED_ALL_CATS,
  data,
});

export const loadingHomePage = () => ({
  type: LOADING_HOMEPAGE,
});

export const catHasBeenClicked = id => ({
  type: CAT_CLICKED,
  id,
});

export const loadingRatings = () => ({
  type: LOADING_RATINGS,
});

export default reducer;
