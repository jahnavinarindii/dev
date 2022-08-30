import { createStore ,applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import thunk from "redux-thunk" 



function setUpStore(state ) {
    return createStore(rootReducer,state,applyMiddleware(thunk));
  };

  export default setUpStore;

  /*const store = createStore(rootReducer);

     export default store;
     */
