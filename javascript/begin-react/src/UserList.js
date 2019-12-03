import React from 'react';

function User({user, onRemove, onToggle}) {
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