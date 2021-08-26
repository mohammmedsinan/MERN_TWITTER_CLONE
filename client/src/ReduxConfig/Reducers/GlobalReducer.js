import { GetYourProfile } from '../../Api/index';

export const GlobalReducerAction = (match) => async (dispatch, getState) => {
  const res = await GetYourProfile(match);
  dispatch({ type: 'GLOBALING', payload: res.data });
};

const GlobalReducer = (state = null, action) => {
  switch (action.type) {
    case 'GLOBALING':
      return (state = action.payload);
  }
  return state;
};

export default GlobalReducer;
