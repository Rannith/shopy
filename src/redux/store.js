import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import rootReducer from './root-reducer';

const middleWares = [reduxThunk];

if(process.env.NODE_ENV === "development") {
    middleWares.push(logger);
}

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWares)));
