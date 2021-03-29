import {SET_DATA, SET_ISLOGIN, SET_LOADING, SET_ERROR} from './constan';

const initialState = {
  list: [],
  loading: false,
  isLogin: false,
  error:null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {...state, list: action.data};
    case SET_LOADING:
      return {...state, loading: action.data};
      break;
    case SET_ISLOGIN:
      return {...state, isLogin: action.data};
      break;
      case SET_ERROR:
        return {...state, error: action.data};
        break;
    default:
      return state;
      break;
  }
};

export default reducer;
