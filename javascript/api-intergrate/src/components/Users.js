import React, { useReducer, useEffect} from 'react';
import axios from 'axios';

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

function Users() {
    const [state, dispatch] = useReducer(reducer, {
        loding : false,
        data : null,
        error : null
    });

    const fetchData = async () => {
        dispatch({type : 'LODING'});
        try {            
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch({type : 'SUCCESS', data : response.data});
        } catch (e) {
            dispatch({type : 'ERROR', error : e});
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const {loding, data : users, error} = state;

    if(loding) return <div>로딩중...</div>;
    if(error) return <div>에러발생...</div>;
    if(!users) return null;

    return ( 
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                    {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={fetchData}>다시 불러오기</button>
        </>
    );
}

export default Users;