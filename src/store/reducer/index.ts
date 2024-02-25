import { combineReducers } from 'redux';
import { itemReducer } from './itemReducer';
import { popupReducer } from './popupReducer';

export const rootReducer = combineReducers({
  item: itemReducer,
  popup: popupReducer,
});

export type rootState = ReturnType<typeof rootReducer>;
