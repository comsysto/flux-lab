import * as React from 'react';
import {IVersion} from "../../../models/IVersion";

export class ManageVersions extends React.Component<ManageVersionsProps, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return <p>Versions halt</p>
    }
}

export interface ManageVersionsProps {
    versions: IVersion[]
}