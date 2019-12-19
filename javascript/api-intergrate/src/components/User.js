import React from 'react';
import axios from 'axios';
import useAsync from './useAsync';

async function getUser(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
}

function User({id}) {
    // 파라미터를 포함시켜서 함수를 호출하는 새로운 함수를 만들어서 등록해준다.
    const [state] = useAsync(() => getUser(id), [id]);

    const {loding, data: user, error} = state;
    if(loding) return <div>로딩중...</div>;
    if(error) return <div>에러발생...</div>;    
    if(!user) return null;

    return ( 
        <div>
            <h2>{user.username}</h2>
            <p>
                <b>Email:</b> {user.email}
            </p>
        </div>
    );
}

export default User;