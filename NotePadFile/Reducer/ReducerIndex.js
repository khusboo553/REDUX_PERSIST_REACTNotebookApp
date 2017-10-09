import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import SignupReducer from './SignupReducer';
import noteDetailsReducer from './noteDetailsReducer';
import { REHYDRATE } from 'redux-persist/constants';



const ReducerIndex = combineReducers({
  users: LoginReducer,
  signUpUser:SignupReducer,
  
});

// if (action.type === REHYDRATE){
//  console.log(action.type);
//     // retrive stored data for reducer callApi
//     const savedData = action.payload.callApi;
//
//     return {
//         ...state, ...savedData
//     };
// }
export default ReducerIndex;
