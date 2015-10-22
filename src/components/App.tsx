import * as React from 'react';
import { connect } from 'react-redux';
import {ControlSnapshotAction} from "../actions/ControlSnapshotAction";

@connect(state => state)
export class App extends React.Component<any, any> {

    static propTypes:React.ValidationMap<any> = {
        started: React.PropTypes.bool
    };

    constructor(props) {
        super(props);
        console.log('blaaa');
    }

    render() {
        const { dispatch, started } = this.props;

        return (
            <div>
                <p>The application is: { started.toString() }</p>
                <p><button onClick={ (e) => dispatch(new ControlSnapshotAction(true)) }>Start app</button></p>
                <p><button onClick={ (e) => dispatch(new ControlSnapshotAction(false)) }>Stop app</button></p>

            </div>
        );
    }

    componentDidMount() {

    }

}


//export interface AppProps {
//    started: boolean;
//}

