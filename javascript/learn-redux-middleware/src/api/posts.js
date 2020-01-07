import axios from 'axios';

export const getPosts = async () => {
  const response = await axios.get('/posts');
  return response.data; 
};

// ID로 포스트를 조회하는 비동기 함수
export const getPostById = async id => {
  const response = await axios.get(`/posts/${id}`);
  return response.data; 
};