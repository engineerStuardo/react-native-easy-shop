import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { UserActionTypes } from './userTypes';
import baseURL from '../../../assets/common/baseUrl';

export const loginSuccess = (decodedToken, user) => ({
	type: UserActionTypes.USER_LOGIN_SUCCESS,
	payload: { decodedToken, user }
});

export const logoutUser = () => ({
	type: UserActionTypes.USER_LOGOUT,
});

export const userLoading = (loading) => ({
	type: UserActionTypes.USER_LOADING,
	payload: loading
})


export const loginUser = (user) => {
	return dispatch => {
		dispatch(userLoading(true));
		axios.post(`${baseURL}users/login/`, user)
			.then((response) => {
				if (response.data) {
					const { token } = response.data;
					AsyncStorage.setItem('jwt', token);
					const decodedToken = jwt_decode(token);
					dispatch(loginSuccess(decodedToken, user));
					dispatch(userLoading(false));
				} else {
					dispatch(logoutUser());
					dispatch(userLoading(false));
				}
			})
			.catch((error) => {
				dispatch(logoutUser());
				dispatch(userLoading(false));
				AsyncStorage.removeItem('jwt');
				Toast.show({
					topOffset: 60,
					type: 'error',
					text1: "Please provide correct credentials"
				});
			})
	}
}