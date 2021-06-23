import { UserActionTypes } from './userTypes';
import isEmpty from './isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {},
  userProfile: {},
  loading: false,
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload.decodedToken),
        user: action.payload.decodedToken,
        userProfile: action.payload.user,
      };
    case UserActionTypes.USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: {},
        userProfile: {},
        loading: false,
      };
    case UserActionTypes.USER_LOADING:
      return { ...state, loading: action.payload };
  }
  return state;
};
