export var typedMiddleware = (store) => (next) => (action) => {
    if (action instanceof Action) {
        var newAction = Object.assign({}, action, {
            type: action.constructor.name
        });
        next(newAction);
    }
    else {
        next(action);
    }
};


export class Action {

}

export function typedReducer<A extends Action>(actionType:{ new(...args:any[]):A },
                                                  reducer:(state:any, action:A) => any) {
    return (state, action) => {
        if (action.type === actionType['name']) {
            return reducer(state, action);
        }
        else {
            return state;
        }
    }
}

export function chainReducers(...functions:((state:any, action:any) => any)[]):(state:any, action:any) => any {
    return (state, action) => {
        return functions.reduce((state, fn) => {
            return fn(state, action);
        }, state);
    };
}

export function initialState(initialValue:any, f:(state:any, action:any) => any):(state:any, action:any) => any {
    return (state, action) => {
        if (state === undefined) {
            return initialValue;
        }
        else {
            return f(state, action);
        }
    }
}