import {createStore,applyMiddleware,combineReducers} from 'redux';
//import thunkMiddleware from 'redux-thunk';
//import promiseMiddleware from 'redux-promise-middleware';
import schema from '../reducers/schema';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const rootReducer = combineReducers({
  schema
});

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    return store;
}