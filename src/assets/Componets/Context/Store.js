import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // Import Redux Thunk middleware
import rootReducer from './Reducer/Roootreducer'; // Import your root reducer

// Create the Redux store with rootReducer and apply middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
