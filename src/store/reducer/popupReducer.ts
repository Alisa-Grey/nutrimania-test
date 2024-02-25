import { IPopupAction, IPopupState, PopopupActionsEnum } from '../type';

const initialState: IPopupState = {
  isOpened: false,
};

export const popupReducer = (
  state = initialState,
  action: IPopupAction
): IPopupState => {
  switch (action.type) {
    case PopopupActionsEnum.OPEN_POPUP:
      return {
        ...state,
        isOpened: true,
      };
    case PopopupActionsEnum.CLOSE_POPUP:
      return {
        ...state,
        isOpened: false,
      };
    default:
      return state;
  }
};
