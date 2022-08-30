import {combineReducers}  from 'redux';
  import formdataReducer  from './formdataReducer.js';
 

  
const rootReducer = combineReducers({
    formdataReducer,
   
});

export default rootReducer;