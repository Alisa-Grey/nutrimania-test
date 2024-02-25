export interface IListElemetProps {
  id: number;
  name: string;
  color: string;
}

export interface IDateWithItem {
  date: string;
  value: IListElemetProps;
}

export interface IItemState {
  currentDate: Date;
  items: IDateWithItem[] | [];
}

export interface IAction {
  type: string;
  payload: IDateWithItem | Date | string;
}

export interface IPopupAction {
  type: string;
}

export enum ItemActionsEnum {
  ADD_ITEM = 'ADD_ITEM',
  EDIT_ITEM = 'EDIT_ITEM',
  RESET_ITEM = 'RESET_ITEM',
  SET_DATE = 'SET_DATE',
}

export interface IAdd {
  type: ItemActionsEnum.ADD_ITEM;
  payload: IDateWithItem;
}

export interface IEdit {
  type: ItemActionsEnum.EDIT_ITEM;
  payload: IDateWithItem;
}

export interface IResetItem {
  type: ItemActionsEnum.RESET_ITEM;
  payload: string;
}

export interface ISetDate {
  type: ItemActionsEnum.SET_DATE;
  payload: Date;
}

export type ItemActions = IAdd | IEdit | IResetItem | ISetDate;

export interface IPopupState {
  isOpened: boolean;
}

export enum PopopupActionsEnum {
  OPEN_POPUP = 'OPEN_POPUP',
  CLOSE_POPUP = 'CLOSE_POPUP',
}

export interface IOpenPopup {
  type: PopopupActionsEnum.OPEN_POPUP;
}

export interface IClosePopup {
  type: PopopupActionsEnum.OPEN_POPUP;
}

export type PopopupActions = IOpenPopup | IClosePopup;
