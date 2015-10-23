export class Store<T> {

    private listeners:{[id:number]:()=>void} = {};
    private reducers:ReducerRegistration[] = [];
    private id: number = 0;

    constructor(private state:T){
    }

    reducer<A extends Action>(actionType: ActionType<A>, reducer:Reducer<any, A>) {
        this.reducers.push({reducer, actionType});
    }

    onChange(listener:() => void):()=>void {
        var id = this.id++;
        this.listeners[id] = listener;
        return () => {
            delete this.listeners[id];
        }
    }

    dispatch(action:Action):void {
        this.state = this.reducers.reduce((state:T, reducerRegistraion:ReducerRegistration) => {
            return (action instanceof <any>reducerRegistraion.actionType) ? reducerRegistraion.reducer(state, action) : state
        }, this.state);
        Object.keys(this.listeners).forEach(key => {
            this.listeners[key]();
        })
    }


    getState():T {
        return this.state;
    }

}


interface ReducerRegistration {
    reducer: Reducer<any, any>
    actionType: ActionType<any>
}

export interface Action {}
export type ActionType<A extends Action> = {new(...args:any[]): A}
export type Reducer<S, A extends Action> = (state:S, action:A) => S

export function propertyReducer(property:string): <A extends Action>(reducer:Reducer<any, A>) => Reducer<any, A> {
    return (reducer) => {
        return (state:any, action:any) => {
            return Object.assign({}, state, {
                [property]: reducer(state[property], action)
            });
        }
    }
}

export function updateArrayReducer<S, A>(index:number):<S, A>(reducer:Reducer<S, A>) => Reducer<S, A> {
    return (reducer) => {
        return (state:S[], action:A) => {
            return [
                ...state.slice(0, index),
                reducer(state[index], action),
                ...state.slice(index + 1)
            ];
        }
    };
}

export function initialValue<S, A>(value: S):<S, A>(reducer:Reducer<S, A>) => Reducer<S, A> {
    return (reducer) => {
        return (state:S[], action:A) => {
            var initialisedState = state === undefined ? value : state;
            return reducer(initialisedState, action);
        }
    };
}

export function reducer<A extends Action>(store: Store<any>, actionType: ActionType<A>): any{
    return (r: Reducer<any, A>) => {
        store.reducer(actionType, r);
        return r;
    }
}






