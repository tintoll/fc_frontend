import React, { useState } from 'react';
import User from './User';
import { useUsersState, useUsersDispatch, getUsers } from './UserContext';


function Users() {
    const [userId, setUserId] = useState(null);

    const state = useUsersState();
    const dispatch = useUsersDispatch();

    const {data:users, isLoding, error} = state.users;
    const fetchData = () => {
        getUsers(dispatch);
      };
    
    if(isLoding) return <div>로딩중...</div>;
    if(error) return <div>에러발생...</div>;    
    if(!users) return  <button onClick={fetchData}>불러오기</button>;

    return ( 
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id}
                        onClick={() => setUserId(user.id)}
                    >
                    {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={fetchData}>다시 불러오기</button>
            { userId && <User id={userId} />}
        </>
    );
}

export default Users;