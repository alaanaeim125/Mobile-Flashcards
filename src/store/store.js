import React from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import decks from './reducers/index';

const reducers = combineReducers({ decks });
const store = createStore(reducers, applyMiddleware(thunk, logger));


export default store;