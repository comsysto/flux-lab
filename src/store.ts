import { createStore, applyMiddleware } from 'redux';
import * as thunk from 'redux-thunk';
import { snapshotApp } from './reducers/snapshotApp';
import Middleware = Redux.Middleware;

const createStoreWithMiddleware = applyMiddleware(thunk as any)(createStore);

export const store = createStoreWithMiddleware(snapshotApp);
