import * as React from 'react';
import { context } from '../flux-impl/context';
import {ControlSnapshotAction} from "../actions/ControlSnapshotAction";
import {ControlButton} from './ControlButton'
import {Store, propertyReducer, initialValue, reducer} from '../flux-impl/store'

var store = new Store({started: false});
store.reducer(ControlSnapshotAction, propertyReducer('started')((state, action: ControlSnapshotAction) => action.started));

@context(store)
export class App extends React.Component<any, any> {

    static propTypes:React.ValidationMap<any> = {
        started: React.PropTypes.bool
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { dispatch, started } = this.props;

        return (
            <div>
                {'' + started}
                <button  onClick={() => dispatch(new ControlSnapshotAction(true))}>start</button>
                <button  onClick={() => dispatch(new ControlSnapshotAction(false))}>stop</button>
            </div>
        );
    }


}




//export interface AppProps {
//    started: boolean;
//}

