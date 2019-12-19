import React ,{ useEffect}from 'react';
import { getUser, useUsersState, useUsersDispatch } from './UserContext';


function User({id}) {    
    const state = useUsersState();
    const dispatch = useUsersDispatch();
    useEffect( () => {
        getUser(dispatch, id);
    }, [dispatch, id]);

    const {data:user, isLoding, error} = state.user;
    
    if(isLoding) return <div>로딩중...</div>;
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