import { createStore } from 'redux';
import { snapshotApp } from './reducers/snapshotApp';

let initialState = {
    started: false,
    versions: [
        {
            name: '1.5',
            active: false
        },
        {
            name: '3.0',
            active: true
        },
        {
            name: '5.0',
            active: false
        }
    ]
};

export const store = createStore(snapshotApp, initialState);