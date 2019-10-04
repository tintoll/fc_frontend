import React, {useState} from 'react';
function Counter() {
    // 배열 비구조화 할당으로 표현한것임 
    const [number, setNumber] = useState(0);    
    /*
    첫번째 원소는 현재 상태
    두번째 원소는 Setter 함수이다.
    const numberState = useState(0);
    const number = numberState[0];
    const setNumber = numberState[1];
    */

    const onIncrease = () => {
        setNumber(number + 1);
        // 함수형 업데이트 : 컴포넌트 최적화때문에 이방식을 많이 사용함.
        // setNumber(prevNumber => prevNumber + 1);
    }
    const onDecrease = () => {
        setNumber(number - 1);
    }
    return (
        <>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </>
    );
}
export default Counter;