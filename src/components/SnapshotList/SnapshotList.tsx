import * as React from 'react';
import { connect } from 'react-redux';

@connect()
export class SnapshotList extends React.Component<SnapshotListProps, any> {
    constructor(props:SnapshotListProps) {
        super(props);
    }

    render() {
        return (
            <p>Here is the list</p>
        )
    }
}

export interface SnapshotListProps {

}