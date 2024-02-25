import { IAction, IDateWithItem, IItemState, ItemActionsEnum } from '../type';

const initialState: IItemState = {
  items: [],
  currentDate: new Date(),
};

export const itemReducer = (
  state = initialState,
  action: IAction
): IItemState => {
  switch (action.type) {
    case ItemActionsEnum.SET_DATE:
      return {
        ...state,
        currentDate: action.payload as Date,
        items: state.items,
      };
    case ItemActionsEnum.ADD_ITEM:
      return {
        ...state,
        currentDate: state.currentDate,
        items: [...state.items, action.payload as IDateWithItem],
      };
    case ItemActionsEnum.EDIT_ITEM:
      // eslint-disable-next-line no-case-declarations
      const items = state.items.map((el) => {
        if (el.date === (action.payload as IDateWithItem).date) {
          return action.payload;
        }
        return el;
      });
      return { ...state, items: items as IDateWithItem[] };
    case ItemActionsEnum.RESET_ITEM:
      return {
        ...state,
        items: state.items.filter((el) => el.date !== action.payload),
      };
    default:
      return state;
  }
};
