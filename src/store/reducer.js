/**
 * Initial State
 */
const initialState = {
  twocats: [],
  allcats: [],
  loadingHomepage: true,
  loadingRatings: true,
};

/**
 * Types
 */

const RECEIVED_TWO_RANDOM_CATS = 'RECEIVED_TWO_RANDOM_CATS';
const RECEIVED_ALL_CATS = 'RECEIVED_ALL_CATS';
export const LOADING_HOMEPAGE = 'LOADING_HOMEPAGE';
export const LOADING_RATINGS = 'LOADING_RATINGS';
export const CAT_CLICKED = 'CAT_CLICKED';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case RECEIVED_TWO_RANDOM_CATS:
      return {
        ...state,
        twocats: action.data,
        loadingHomepage: false,
        loadingRatings: true,
      };
    case RECEIVED_ALL_CATS:
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

/**
 * Action Creators
 */
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
