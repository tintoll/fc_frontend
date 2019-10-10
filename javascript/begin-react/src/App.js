import React, { useRef } from 'react';
import './App.css';
import UserList from './UserList';

function App() {
  const users = [
    {
      id : 1,
      name : '홍길동',
      nickname : 'hong'
    },
    {
      id : 2,
      name : '김길동',
      nickname : 'kim'
    },
    {
      id : 3,
      name : '이길동',
      nickname : 'lee'
    }
  ];

  let nextId = useRef(4);
  
  const onCreate = () => {
    // todo
    nextId.current += 1;
  }

  return (
    <UserList users={users}/> 
  );
}
export default App;
