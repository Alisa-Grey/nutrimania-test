import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { rootState } from '../store/reducer';

export const useTypedSelector: TypedUseSelectorHook<rootState> = useSelector;
