var redux_1 = require('redux');
var actions_1 = require('./../actions/actions');
function started(state, action) {
    if (state === void 0) { state = false; }
    switch (action.type) {
        case actions_1.START_SNAPSHOT_GENERATION:
            return true;
        case actions_1.END_SNAPSHOT_GENERATION:
            return false;
        default:
            return state;
    }
}
function versions(state, action) {
    if (state === void 0) { state = []; }
}
exports.snapshotApp = redux_1.combineReducers({
    started: started
});
//# sourceMappingURL=snapshotApp.js.map