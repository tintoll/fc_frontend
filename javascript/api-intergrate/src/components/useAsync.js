import { useReducer, useEffect} from 'react';

function reducer(state, action) {
    switch(action.type) {
        case 'LODING' :
            return {
                loding : true,
                data : null,
                error : null
            }
        case 'SUCCESS' :
            return {
                loding : false,
                data : action.data,
                error : null
            } 
        case 'ERROR' :
            return {
                loding : false,
                data : null,
                error : action.error
            }       
        default :
            throw new Error('Not Suppoted Type');
    }
}

function useAsync(callback, deps=[], skip =false) {
    const [state, dispatch] = useReducer(reducer, {
        loding : false,
        data : null,
        error : null
    });

    const fetchData = async () => {
        dispatch({type : 'LODING'});
        try {            
            const data = await callback();
            dispatch({type : 'SUCCESS', data});
        } catch (e) {
            dispatch({type : 'ERROR', error : e});
        }
    }

    useEffect(() => {
        if(skip) return;
        fetchData();
        // eslint 설정을 다음 줄에서만 비활성화
        // eslint-disable-next-line
    }, deps);

    return [state, fetchData]; 
}

export default useAsync;