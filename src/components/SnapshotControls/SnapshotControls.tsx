import * as React from 'react';

import { connect } from 'react-redux';
import { startSnapshotGeneration, endSnapshotGeneration, getVersionList  } from './../../actions/actions';
import Dispatch = Redux.Dispatch;

import { SnapshotState } from './SnapshotState/SnapshotState';
import { GenerateSnapshots } from './GenerateSnapshots/GenerateSnapshots';
import { ManageVersions } from './ManageVersions/ManageVersions';
import {IVersion} from "../../models/IVersion";

let getActiveVersion = (versions) => {
    let activeVersion = versions.find((version:IVersion) => version.active);
    if (activeVersion) {
        return activeVersion.name;
    } else {
        return '';
    }
};

let mapState = (state) => {
    let props:UIState = {
        started: state.started,
        versions: state.versions,
        versionName: getActiveVersion(state.versions),
        dispatch: state.dispatch
    };

    return props;
};

@connect(mapState)
export class SnapshotControls extends React.Component<SnapshotControlsProps, any> {
    static propTypes:React.ValidationMap<any> = {
        started: React.PropTypes.bool,
        dispatch: React.PropTypes.func,
        versions: React.PropTypes.arrayOf(
            React.PropTypes.shape(
                {
                    name: React.PropTypes.string,
                    active: React.PropTypes.bool
                }
            )
        )
    };

    constructor(props:SnapshotControlsProps) {
        super(props);
    }

    render() {
        const { dispatch, started, versions, versionName } = this.props as UIState;

        return (
            <div>
                <SnapshotState
                    versionName={ versionName }
                />
                <GenerateSnapshots
                    started={ started }
                    startSnapshotGeneration={ () => dispatch(startSnapshotGeneration()) }
                    endSnapshotGeneration={ () => dispatch(endSnapshotGeneration()) }
                />
                <ManageVersions
                    versions={ versions }
                />
            </div>
        )
    }

    componentDidMount() {
        const { dispatch } = this.props as UIState;
        dispatch(getVersionList());
    }
}

export interface UIState {
    started: boolean;
    versions: IVersion[];
    versionName: string;
    dispatch: Dispatch;
}

export interface SnapshotControlsProps {

}
