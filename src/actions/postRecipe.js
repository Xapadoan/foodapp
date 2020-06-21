import {
  ADD_INGREDIENT_FIELD,
  REMOVE_INGREDIENT_FIELD
} from '../constants/actionTypes';

export const addIngredientField = () => {
  return {type: ADD_INGREDIENT_FIELD};
}

export const removeIngredientField = () => {
  return {type: REMOVE_INGREDIENT_FIELD};
}