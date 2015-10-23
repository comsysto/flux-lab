
export const START_SNAPSHOT_GENERATION = 'START_SNAPSHOT_GENERATION';
export const END_SNAPSHOT_GENERATION = 'END_SNAPSHOT_GENERATION';

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