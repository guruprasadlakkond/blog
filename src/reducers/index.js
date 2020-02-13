import { combineReducers } from 'redux';
import posts from './posts';
/* const posts = () => {
  return [{ id: 1, title: 'hello' }];
}; */
export default combineReducers({ posts });
