import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
// import donationsReducer from './slices/donationsSlice';

const rootReducer = combineReducers({
  user: userReducer,
//   donations: donationsReducer,
});

export default rootReducer;
