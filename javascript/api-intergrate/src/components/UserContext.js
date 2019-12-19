import React, { createContext, useReducer, useContext} from 'react';
import {createAsyncDispatcher, createAsyncHandler, initialAsyncState} from './asyncActionUtil';
import * as api from './api'; // api 파일에서 내보낸 모든 함수들을 불러옴

// UsersContext 에서 사용 할 기본 상태
const initialState = {
    users: initialAsyncState,
    user: initialAsyncState
};
const usersHandler = createAsyncHandler('GET_USERS', 'users');
const userHandler = createAsyncHandler('GET_USER', 'user');


// 리듀서 함수 
function usersReducer(state, action) {
    switch(action.type) {
        case 'GET_USERS' :            
        case 'GET_USERS_SUCCESS' :             
        case 'GET_USERS_FAIL' :
            return usersHandler(state, action);
        case 'GET_USER' :             
        case 'GET_USER_SUCCESS' :             
        case 'GET_USER_FAIL' :
            return userHandler(state, action);
        default :
            throw new Error("Unhanded action type");
    }
}

// State 용 Context와 Dispatch 용 Context
const UsersStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

// Context 들의 Provider로 감싸주는 컴포넌트
export function UsersProvider({children}) {
    const [state, dispatch] = useReducer(usersReducer, initialState);

    return (
        <UsersStateContext.Provider value={state}>
            <UsersDispatchContext.Provider value={dispatch}>
                {children}
            </UsersDispatchContext.Provider>
        </UsersStateContext.Provider>
    );
}

// State를 쉽게 조회할수 있게 해주는 커스텀 Hook
export function useUsersState() {
    const state = useContext(UsersStateContext);
    if(!state) {
        throw new Error('Cannot find UserProvider');
    }
    return state;
}
// Dispatch를 쉽게 조회할수 있게 해주는 커스텀 Hook
export function useUsersDispatch() {
    const dispatch = useContext(UsersDispatchContext);
    if(!dispatch) {
        throw new Error('Cannot find UserProvider');
    }
    return dispatch;
}

// API 처리함수 
export const getUsers = createAsyncDispatcher('GET_USERS', api.getUsers);
export const getUser = createAsyncDispatcher('GET_USER', api.getUser);