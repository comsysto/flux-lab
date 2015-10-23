import * as React from 'react';
export declare class GenerateSnapshots extends React.Component<any, any> {
    constructor(props: any);
    render(): JSX.Element;
    getButton: () => JSX.Element;
}
export interface GenerateSnapshotsProps {
    started: boolean;
    startSnapshotGeneration: () => {};
    endSnapshotGeneration: () => {};
}
