import {Action} from "../flux-impl/store";

export class ControlSnapshotAction implements Action {
    constructor(public started:boolean) {
    }
}