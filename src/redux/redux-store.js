import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import employees from './employees-reducer';
import articles from './articles-reducer';
import reports from './reports-reducer';
import businesses from './businesses-reducer';
import advertising from './advertising-reducer';
import partners from './partners-reducer';

const reducers = combineReducers({
  employees,
  articles,
  reports,
  businesses,
  advertising,
  partners,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
