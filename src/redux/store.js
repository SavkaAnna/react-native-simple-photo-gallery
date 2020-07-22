import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import {createStore, applyMiddleware, compose} from 'redux';

export const store = createStore(rootReducer, compose(
    applyMiddleware(thunk)
));

export default store
