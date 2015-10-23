import { combineReducers } from 'redux';
import {
    START_SNAPSHOT_GENERATION,
    END_SNAPSHOT_GENERATION,
    UPDATE_VERSION_LIST
} from './../actions/actions'
import { IVersion } from "../models/IVersion";
import { typedReducer, chainReducers, initialState } from "../middlewares/TypedMiddleware";
import {StartSnapshotGeneration, StopSnapshotGeneration} from "../actions/actions";

var started = initialState(
    false, chainReducers(
        typedReducer(
            StartSnapshotGeneration,
            () => {
                return true;
            }
        ),
        typedReducer(
            StopSnapshotGeneration,
            () => {
                return false;
            }
        )
    )
);

//function started(state:boolean = false, action?:any) {
//    switch (action.type) {
//        case START_SNAPSHOT_GENERATION:
//            return true;
//        case END_SNAPSHOT_GENERATION:
//            return false;
//        default:
//            return state;
//    }
//}

function versions(state:IVersion[] = [], action?:any) {
    switch (action.type) {
        case UPDATE_VERSION_LIST:
            return action.versionList;
        default:
            return state;
    }
}

export const snapshotApp = combineReducers({
    started,
    versions
});