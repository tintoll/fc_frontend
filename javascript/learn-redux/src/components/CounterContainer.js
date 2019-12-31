import React from 'react';
import Counter from './Counter';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, setDiff } from '../module/counter';

function CounterContainer() {
    // useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
    // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.
    const { number, diff } = useSelector( state => ({
        number : state.counter.number,
        diff : state.counter.diff
    }));

    // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook 입니다.
    const dispatch = useDispatch();
    // 각 액션들을 디스패치하는 함수
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));

    return (
        <Counter 
            number={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    )
}

export default CounterContainer;