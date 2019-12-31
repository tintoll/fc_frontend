import React, {useCallback} from 'react';
import Todos from './Todos';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo } from '../module/todos';

function TodosContainer() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const onCreate = (text) => dispatch(addTodo(text));
    // 최적화를 위해 useCallback 사용
    const onToggle = useCallback(id =>  dispatch(toggleTodo(id)),[dispatch]);

    return (
        <Todos 
            todos={todos}
            onCreate={onCreate}
            onToggle={onToggle}
        />
    );
}

export default TodosContainer;