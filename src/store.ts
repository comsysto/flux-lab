import { createStore, applyMiddleware } from 'redux';
import * as thunk from 'redux-thunk';
import { typedMiddleware } from './middlewares/TypedMiddleware'
import { snapshotApp } from './reducers/snapshotApp';
import Middleware = Redux.Middleware;

const createStoreWithMiddleware = applyMiddleware(typedMiddleware, thunk as any)(createStore);

export const store = createStoreWithMiddleware(snapshotApp);
