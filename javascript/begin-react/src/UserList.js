import React, {useEffect} from 'react';

function User({user, onRemove, onToggle}) {
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
               onClick={ () => onToggle(user.id)}     
            >
                {user.username}
            </b> ({user.email})
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({users, onRemove, onToggle}) {
    const renderUsers = users
    .map( (user, index) => {
        return <User key={user.id} 
                    user={user} 
                    onRemove={onRemove}
                    onToggle={onToggle} />
    });
    return (
        <>
            {renderUsers}
        </>
    );
}

export default UserList;