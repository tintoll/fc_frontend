const myLogger = store => next =>  action => {
    console.log(action) // 액션을 출력
    const result = next(action); // 다음 미들웨어(또는 리듀서)에게 액션을 전달한다.

    // 업데이트 이후의 상태를 조회합니다.
    console.log('\t', store.getState()); // '\t' 는 탭 문자 입니다.

    return result; // 여기서 반환값은 dispatch(action)의 결과물이 됩니다. 기본은 undefined
}

export default myLogger;