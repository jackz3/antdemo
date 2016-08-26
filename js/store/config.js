import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import schema from '../reducers/schema'
import posts from '../reducers/posts'

const createStoreWithMiddleware = applyMiddleware(thunk,promiseMiddleware())(createStore);

const rootReducer = combineReducers({
  posts,
  schema
});

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    return store;
}