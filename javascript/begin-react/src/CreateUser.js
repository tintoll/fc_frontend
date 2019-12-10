import React, {useRef, useContext, useCallback} from 'react';
import { UserDispatch } from './App';
import useInputs from './hooks/useInputs';


function CreateUser() {

    const dispatch = useContext(UserDispatch);

    const nextId = useRef(4);
    const [{username, email}, onChange, reset] = useInputs({
        username : '',
        email : ''
    });

    const onCreate = useCallback( () => {
        dispatch({
          type : 'CREATE_USER',
          user : {
            id : nextId.current,
            username,
            email
          }
        });
        nextId.current += 1;
        reset();
      }, [username, email, reset]);

    return (
        <div>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default React.memo(CreateUser);