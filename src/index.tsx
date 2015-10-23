///<reference path="../typings/tsd.d.ts"/>

import * as React from 'react';
import { Provider } from 'react-redux';
import { SnapshotControls } from './components/SnapshotControls/SnapshotControls';
import { SnapshotList } from './components/SnapshotList/SnapshotList';
import { store } from './store';

let rootElement = document.getElementById('root');
React.render(
    <div>
        <Provider store={store}>
            { () => <SnapshotControls /> }
        </Provider>
        <Provider store={store}>
            { () => <SnapshotList /> }
        </Provider>
    </div>,
    rootElement
);

