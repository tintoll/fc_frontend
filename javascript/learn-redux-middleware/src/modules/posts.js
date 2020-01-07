import * as postsAPI from '../api/posts'; // api/posts 안의 함수 모두 불러오기
import { createPromiseThunk, reducerUtils, createPromiseThunkById, handleAsyncActionsById } from '../lib/asyncUtils'
import { handleAsyncActions } from './../lib/asyncUtils';

/* 액션 타입 */
// 포스트 여러개 조회하기
const GET_POSTS = 'GET_POSTS'; // 요청 시작
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'; // 요청 성공
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'; // 요청 실패

// 포스트 하나 조회하기
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

// 아주 쉽게 thunk 함수를 만들 수 있게 되었습니다.
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunkById(GET_POST, postsAPI.getPostById);
export const goToHome = () => (dispatch, getState, {history}) => {
  history.push('/');
}

const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial()
};

export default function posts(state = initialState, action) {
    switch (action.type) {
      case GET_POSTS:
      case GET_POSTS_SUCCESS:
      case GET_POSTS_ERROR:
        return handleAsyncActions(GET_POSTS, 'posts', true)(state, action);
      case GET_POST:
      case GET_POST_SUCCESS:
      case GET_POST_ERROR:
        return handleAsyncActionsById(GET_POST, 'post', true)(state, action);
      default:
        return state;
    }
  }