import posts from '../services/posts';
export const fetchPosts = () => async (dispatch, getState) => {
  const response = await posts.get('/posts');

  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data
  });
};
