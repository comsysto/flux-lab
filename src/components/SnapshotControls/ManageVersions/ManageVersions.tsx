import * as React from 'react';
import {IVersion} from "../../../models/IVersion";

export class ManageVersions extends React.Component<ManageVersionsProps, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Manage versions</h2>
                <select>
                    { this.props.versions.map(this.versionOption) }
                </select>
            </div>
        );
    }

    private versionOption(version) {
        return (
            <option>{version.name}</option>
        )
    }
}

export interface ManageVersionsProps {
    versions: IVersion[]
}
