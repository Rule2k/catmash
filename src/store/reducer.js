/**
 * Initial State
 */
const initialState = {
  data: [],
  loading: true,
};

/**
 * Types
 */

const RECEIVED_TWO_RANDOM_CATS = 'RECEIVED_TWO_RANDOM_CATS';
export const LOADING_HOMEPAGE = 'LOADING_HOMEPAGE';
export const CAT_CLICKED = 'CAT_CLICKED';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case RECEIVED_TWO_RANDOM_CATS:
      return {
        ...state,
        data: action.data,
        loading: false,
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

export const loadingHomePage = () => ({
  type: LOADING_HOMEPAGE,
});

export const catHasBeenClicked = id => ({
  type: CAT_CLICKED,
  id,
});

export default reducer;
