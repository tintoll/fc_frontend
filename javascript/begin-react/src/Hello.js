import React from 'react';

function Hello({isSpecial}) {
    return (
        <>
            <div> {isSpecial ? <b>*</b> : null }안녕하세요</div>
            <div> {isSpecial && <b>*</b> }안녕하세요</div>
        </>
    );
}

export default Hello;