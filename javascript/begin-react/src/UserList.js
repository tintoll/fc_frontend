import React from 'react';

function User({user}) {
    return (
        <div>
            <b>{user.name}</b>({user.nickname})
        </div>
    );
}

function UserList({users}) {
    const renderUsers = users.map((user, index) => <User key={user.id} user={user} />);
    return (
        <>
            {renderUsers}
        </>
    );
}

export default UserList;