import { combineReducers } from 'redux';
import posts from './posts';
import usersReducer from './users';
/* const posts = () => {
  return [{ id: 1, title: 'hello' }];
}; */
export default combineReducers({ posts, users: usersReducer });
