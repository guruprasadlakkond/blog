import api from '../services/api';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  console.log('fetched posts', getState().posts);
  const userIds = _.uniq(_.map(getState().posts, 'userId'));

  console.log(userIds);
  userIds.forEach(i => dispatch(fetchUser(i)));
};

export const fetchPosts = () => async (dispatch, getState) => {
  const response = await api.get('/posts');

  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data
  });
};

export const fetchUser = id => async dispatch => {
  const response = await api.get(`users/${id}`);

  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  });
};

/* export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
//lodash library
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await api.get(`users/${id}`);

  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  });
}); */
