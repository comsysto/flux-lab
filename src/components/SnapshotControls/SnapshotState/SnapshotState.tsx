import * as React from 'react';

export class SnapshotState extends React.Component<SnapshotStateProps, any> {
    static propTypes:React.ValidationMap<any> = {
        versionName: React.PropTypes.string
    };

    constructor(props:SnapshotStateProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Snapshot State</h2>
                <p>Current version: { this.props.versionName }</p>
            </div>
        )
    }
}

export interface SnapshotStateProps {
    versionName: string
}