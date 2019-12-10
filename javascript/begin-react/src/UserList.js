import React, {useEffect, useContext } from 'react';
import { UserDispatch } from './App';

const User = React.memo(function User({user}) {

    const dispatch = useContext(UserDispatch);

    useEffect( () => {
        console.log('마운트 될때 실행 ');
        return () => {
            console.log('언 마운트 될때 실행');
        };
    }, []);

    useEffect( () => {
        console.log('user의 상태가 변경될때');
        return () => {
            console.log('user의 상태가 변경될때 return ');
        };
    }, [user]);

    useEffect( () => {
        console.log('계속 호출 ');     
    });

    return (
        <div>
            <b style={{
                cursor: 'pointer',
                color: user.active ? 'green' : 'black'
                }}
               onClick={ () => dispatch({
                   type : 'TOGGLE_USER',
                   id : user.id
               })}     
            >
                {user.username}
            </b> ({user.email})
            <button onClick={() => dispatch({
                   type : 'REMOVE_USER',
                   id : user.id
               })}>삭제</button>
        </div>
    );
});

function UserList({users}) {
    const renderUsers = users
    .map( (user, index) => {
        return <User key={user.id} 
                    user={user} 
                    />
    });
    return (
        <>
            {renderUsers}
        </>
    );
}

export default React.memo(UserList);