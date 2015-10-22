///<reference path="../typings/tsd.d.ts"/>
import * as React from 'react';
import { Provider } from 'react-redux';
import { App } from './components/App';
import { addReducer, combineReducers } from './reducers/reducers';
// Redux utility functions
import { compose, createStore, applyMiddleware } from 'redux';
// Redux DevTools store enhancers
import { devTools, persistState } from 'redux-devtools';
// React components for Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import {ControlSnapshotAction} from "./actions/ControlSnapshotAction";

addReducer('started', ControlSnapshotAction, (state, action) => action.started, false);

let store = createStore(combineReducers);

let rootElement = document.getElementById('root');
React.render(
    <Provider store={store}>
        { () => <App /> }
    </Provider>,
    rootElement
);

