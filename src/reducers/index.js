import { combineReducers } from 'redux';
const posts = () => {
  return [{ id: 1, title: 'hello' }];
};
export default combineReducers({ posts });
