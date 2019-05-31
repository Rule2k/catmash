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

export default reducer;
