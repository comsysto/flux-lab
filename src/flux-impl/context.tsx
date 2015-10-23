import * as React from 'react';
import {Store} from "./store";

//export function context(services:{[name: string]:any}):(componentClass:  React.ComponentClass<any>)  => React.ComponentClass<any> {
export function context(store:Store<any>):any {
    return (Child: React.ComponentClass<any>) => {


        class Wrapper<C> extends React.Component<any, any>{

            private disposeOnChange: () => void;


            constructor(props: any){
                super(props);
            }



            componentDidMount(){
                store.onChange(()=> this.forceUpdate());
            }

            componentWillUnmount(){
                if(this.disposeOnChange){
                    this.disposeOnChange();
                }
            }

            render(){
                var allProps = Object.assign({}, store.getState(), {dispatch: action => store.dispatch(action) }, this.props);
                return <Child {...allProps}></Child>
            }



        }

        return Wrapper;
    }
}
