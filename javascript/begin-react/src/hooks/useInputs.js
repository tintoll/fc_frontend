import { useReducer, useCallback} from 'react';

function reducer(state, action) {
    switch(action.type) {
        case 'CHANGE_INPUT' :
            return {
                ...state,
                [action.name] : action.value
            };
        case 'RESET' :
            return action.initailState;
        default : 
            return state;    
    }
}

function useInputs(initailState) {
    const [form, dispatch] = useReducer(reducer,initailState);

    const onChange = useCallback( (e) => {
        const {name, value} = e.target;
        dispatch({
            type : 'CHANGE_INPUT',
            name,
            value 
        })
    }, []);

    const reset = useCallback(() => {
        dispatch({
            type : 'RESET',
            initailState
        })
    }, [initailState]);

    return [form, onChange, reset];
}

export default useInputs;