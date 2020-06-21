import {
  ADD_INGREDIENT_FIELD,
  REMOVE_INGREDIENT_FIELD
} from '../constants/actionTypes';

const initialState = {
  nb_fields: 0,
}

export default function postRecipe(state = initialState, action) {
  switch (action.type) {
    case ADD_INGREDIENT_FIELD:
      Object.assign({}, state, {
        nb_fields: state.nb_fields + 1,
      });
      break;
    case REMOVE_INGREDIENT_FIELD:
      Object.assign({}, state, {
        nb_fields: state.nb_fields - 1,
      });
      break;
    default:
      return state;
  }
}