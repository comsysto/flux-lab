///<reference path="../typings/tsd.d.ts"/>
import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { App } from './components/App';

let store = createStore((state, action) => {
    if (!state) {
        state = {
            started: false
        }
    }

    switch (action.type) {
        case 'start':
            return Object.assign({}, state, {
                started: true
            });
        case 'stop':
            return Object.assign({}, state, {
                started: false
            });
    }

    return state;
});

let rootElement = document.getElementById('root');
React.render(
    <Provider store={store}>
        { () => <App /> }
    </Provider>,
    rootElement
);

