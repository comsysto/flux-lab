exports.START_SNAPSHOT_GENERATION = 'START_SNAPSHOT_GENERATION';
exports.END_SNAPSHOT_GENERATION = 'END_SNAPSHOT_GENERATION';
function startSnapshotGeneration() {
    return {
        type: exports.START_SNAPSHOT_GENERATION
    };
}
exports.startSnapshotGeneration = startSnapshotGeneration;
function endSnapshotGeneration() {
    return {
        type: exports.END_SNAPSHOT_GENERATION
    };
}
exports.endSnapshotGeneration = endSnapshotGeneration;
//# sourceMappingURL=actions.js.map