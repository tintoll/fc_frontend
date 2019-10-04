import React, {useState} from 'react';

function InputSample() {
    const [text, setText] = useState('');
    // 이벤트 함수에는 이벤트 객체를 e파라미터로 받아올수 있다.
    const onInputChange = (e) => {
        // e.tartget이 Input태그 엘리먼트
        setText(e.target.value);
    }
    const initText = () => {
        setText('');
    }
    return (
        <>
            <input onChange={onInputChange} value={text} />
            <button onClick={initText}>초기화</button>
            <div>
                값 : {text}
            </div>
        </>
    );
}

export default InputSample;