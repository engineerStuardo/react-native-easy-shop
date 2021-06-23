import { UserActionTypes } from './userTypes';
import isEmpty from './isEmpty';

export const user = (state = {}, action) => {
  switch (action.type) {
    case UserActionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload.decodedToken),
        user: action.payload.decodedToken,
        userProfile: action.payload.user,
      };
    case UserActionTypes.USER_LOGOUT:
      return {};
    case UserActionTypes.USER_LOADING:
      return { ...state, loading: action.payload };
  }
  return state;
};
