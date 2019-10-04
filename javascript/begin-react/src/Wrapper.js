import React from 'react';

function Wrapper(props) {
    const style = {
        border : '1px solid green'
    }
    return (
        <div style={style}>
            {props.children}
        </div>
    )
}
export default Wrapper;