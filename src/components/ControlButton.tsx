import * as React from 'react';
import {ControlSnapshotAction} from "../actions/ControlSnapshotAction";

export class ControlButton extends React.Component<any, any>{


    constructor(props: any){
        super(props);
    }

    render(){
        return <p><button >Start app</button></p>
    }




}

//interface ControlButtonProps {
//    started: boolean
//}