import api from '../services/api';
export const fetchPosts = () => async (dispatch, getState) => {
  const response = await api.get('/posts');

  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data
  });
};
export const fetchUser = id => async (dispatch, getState) => {
  const response = await api.get(`users/${id}`);

  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  });
};
