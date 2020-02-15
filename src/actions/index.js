import api from '../services/api';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  // const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // userIds.forEach(i => dispatch(fetchUser(i)));
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
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
