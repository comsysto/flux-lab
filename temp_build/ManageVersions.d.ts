import * as React from 'react';
import { IVersion } from "../../../models/IVersion";
export declare class ManageVersions extends React.Component<ManageVersionsProps, any> {
    constructor(props: any);
    render(): JSX.Element;
}
export interface ManageVersionsProps {
    versions: IVersion[];
}
