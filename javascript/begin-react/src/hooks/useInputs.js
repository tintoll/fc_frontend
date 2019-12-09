import {useState, useCallback} from 'react';

function useInputs(initailState) {
    const [form, setForm] = useState(initailState);

    const onChange = useCallback( (e) => {
        const {name, value} = e.target;

        setForm( form => ({
            ...form,
            [name] : value
        }));

    }, []);

    const reset = useCallback(() => {
        setForm(initailState);
    }, [initailState]);

    return [form, onChange, reset];
}

export default useInputs;