import { combineReducers } from 'redux';
import postRecipe from './postRecipe';

const reducers = combineReducers({
  postRecipe,
});

const rootReducer = (state, action) => {
  return (reducers);
};

export default rootReducer;