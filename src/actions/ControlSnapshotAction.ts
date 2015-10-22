import {Action} from "./Action";

export class ControlSnapshotAction extends Action {
    constructor(public started:boolean) {
        super();
    }
}