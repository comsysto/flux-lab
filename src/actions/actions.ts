import * as $ from 'jquery';

export const START_SNAPSHOT_GENERATION = 'START_SNAPSHOT_GENERATION';
export const END_SNAPSHOT_GENERATION = 'END_SNAPSHOT_GENERATION';
export const UPDATE_VERSION_LIST = 'UPDATE_VERSION_LIST';

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