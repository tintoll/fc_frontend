import React, { useRef, useState, useMemo, useCallback } from 'react';
import './App.css';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countUserActive(users) {
  console.log('활성사용자 세는중...');
  return users.filter(user => user.active).length;
}


function App() {

  const [inputs, setInputs] = useState({
    username : '',
    email :''
  });

  const { username, email } = inputs;
  const onChange = useCallback((e) => {
    const {name, value} = e.target;
    setInputs( inputs => ({
      ...inputs,
      [name] : value
    }))
  }, []);


  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  let nextId = useRef(4);
  
  const onCreate = useCallback(() => {
    const user = {
      id : nextId.current,
      username,
      email
    };

    // 배열 추가 - spread 연산자 이용 
    setUsers(users => ([
      ...users,
      user
    ]));
    // 배열 추가 - concat 함수 이용 
    // setUsers(users.concat(user));

    
    setInputs({
      username : '',
      email : ''
    });
    
    // todo
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback(id => {
    // user.id가 일치하지 않는것만 가지고 새로운 배열을 만들어서 넘겨준다.
    setUsers( users => users.filter(user => user.id !== id) );
  }, []);

  const onToggle = useCallback(id => {
    setUsers( users => users
      .map( user => user.id === id ? {...user, active : !user.active} : user)
    );
  },[]);

  let count = useMemo(() => countUserActive(users) , [users]);

  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}      
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} /> 

      활성사용자수 : {count}
    </>
  );
}
export default App;
