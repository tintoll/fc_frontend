import {createStore} from 'redux';

// createStore : 스토어를 만들어주는 함수 
// 리액트에서는 단 하나의 스토어만 만든다.

// 관리 할 상태 
const initialState = {
    counter : 0,
    text : '',
    list : []
};

// 액션 타입 정의 - 주로 대문자로 작성한다.
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// 액션 생성함수 = 주로 camelCase로 작성한다.
function increase() {
    return {
        type : INCREASE // 액션 객체에는 type 값이 필수 
    }
};
// 화살표함수가 간단하여 아래와같이 사용한다.
const decrease = () => ({
    type : DECREASE
});
const changeText = text => ({
    type: CHANGE_TEXT,
    text // 액션안에는 type 외에 추가적인 필드를 마음대로 넣을 수 있습니다.
});
const addToList = item => ({
    type: ADD_TO_LIST,
    item
});


// 리듀서 만들기 - 불변성을 꼭 지켜줘야 한다.
function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
          return {
            ...state,
            counter: state.counter + 1
          };
        case DECREASE:
          return {
            ...state,
            counter: state.counter - 1
          };
        case CHANGE_TEXT:
          return {
            ...state,
            text: action.text
          };
        case ADD_TO_LIST:
          return {
            ...state,
            list: state.list.concat(action.item)
          };
        default:
          return state;
      }
}



// 스토어 만들기
const store = createStore(reducer);

console.log(store.getState()); // 현재 store 안에 들어있는 상태를 조회합니다.

// 스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수
const listener = () => {
    const state = store.getState();
    console.log(state);
};
const unsubscribe = store.subscribe(listener);
// 구독을 해제하고 싶을 때는 unsubscribe() 를 호출하면 됩니다.

// 액션들을 디스패치 해봅시다.
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({ id: 1, text: '와우' }));