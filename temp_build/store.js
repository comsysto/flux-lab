var redux_1 = require('redux');
var snapshotApp_1 = require('./reducers/snapshotApp');
var initialState = {
    started: false,
    versions: []
};
exports.store = redux_1.createStore(snapshotApp_1.snapshotApp, initialState);
//# sourceMappingURL=store.js.map