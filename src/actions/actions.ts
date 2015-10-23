import * as $ from 'jquery';
import { Action } from './../middlewares/TypedMiddleware';

export const START_SNAPSHOT_GENERATION = 'StartSnapshotGeneration';
export const END_SNAPSHOT_GENERATION = 'StopSnapshotGeneration';
export const UPDATE_VERSION_LIST = 'UPDATE_VERSION_LIST';

export class StartSnapshotGeneration extends Action {
    constructor() {
        super();
    }
}

export class StopSnapshotGeneration extends Action {
    constructor() {
        super();
    }
}

export function startSnapshotGeneration() {
    return {
        type: START_SNAPSHOT_GENERATION
    }
}

export function endSnapshotGeneration() {
    return {
        type: END_SNAPSHOT_GENERATION
    }
}

export function updateVersionList(versionList) {
    return {
        type: UPDATE_VERSION_LIST,
        versionList: versionList
    }
}

export function getVersionList() {
    return dispatch => {
        $.getJSON('/versions').then(
            (data) => {
                dispatch(updateVersionList(data));
            }
        );
    }
}