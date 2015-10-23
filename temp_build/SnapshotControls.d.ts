import * as React from 'react';
import Dispatch = Redux.Dispatch;
import { IVersion } from "../../models/IVersion";
export declare class SnapshotControls extends React.Component<SnapshotControlsProps, any> {
    static propTypes: React.ValidationMap<any>;
    constructor(props: SnapshotControlsProps);
    render(): JSX.Element;
}
export interface SnapshotControlsProps {
    dispatch?: Dispatch;
    started?: boolean;
    versions?: IVersion[];
}
