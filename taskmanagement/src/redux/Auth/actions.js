import {SET_LOADING, SET_DATA, SET_ISLOGIN, SET_ERROR} from './constan';
import AsyncStorage from '@react-native-community/async-storage';
import {QUERY_USERS} from '@config';
import {useQuery} from '@apollo/client';

export const setData = data => {
  return {type: SET_DATA, data};
};

export const setLoading = data => {
  return {type: SET_LOADING, data};
};

export const setIsLogin = data => {
  return {type: SET_ISLOGIN, data};
};

export const setError = data => {
  return {type: SET_ERROR, data};
};

const loginAction = (email, password) => {
  const {data, loading, error} = useQuery(QUERY_USERS, {
    variables: {
      email: email,
      password: password,
    },
  });

  return dispatch => {
    dispatch(setData(loading));
    dispatch(setLoading(data));
    dispatch(setIsLogin(true));
    console.log({email, password});
  };
};


export default loginAction;
