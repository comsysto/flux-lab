import * as React from 'react';

export class GenerateSnapshots extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Generate Snapshots</h2>
                { this.getButton() }
            </div>
        )
    }

    getButton = () => {
        return !this.props.started ?
            <button onClick={ (e) => this.props.startSnapshotGeneration() }>Start snapshot generation</button>
            :
            <button onClick={ (e) => this.props.endSnapshotGeneration() }>Stop snapshot generation</button>
    }
}

export interface GenerateSnapshotsProps {
    started: boolean;
    startSnapshotGeneration: () => {},
    endSnapshotGeneration: () => {}
}