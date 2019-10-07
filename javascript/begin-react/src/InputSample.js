import React, {useState, useRef} from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name : '',
        nickname : ''
    });
    
    const {name, nickname} = inputs;
    const nameInput = useRef();

    const onInputChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        })
    }
    const onReset = (e) => {
        setInputs({
            name : '',
            nickname : ''
        });
        nameInput.current.focus();
    };

    return (
        <>
            <input ref={nameInput} onChange={onInputChange} value={name} name="name" placeholder="이름" />
            <input onChange={onInputChange} value={nickname} name="nickname" placeholder="닉네임" />
            <button onClick={onReset}>초기화</button>
            <div>
                {name} ({nickname})
            </div>
        </>
    );
}

export default InputSample;