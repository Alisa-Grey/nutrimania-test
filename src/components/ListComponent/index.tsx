import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { IListElemetProps, ItemActionsEnum } from '../../store/type';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { testValues } from '../../data/data';
import './style.css';

export interface IProps {
  data: IListElemetProps[] | IListElemetProps;
}

export const ListComponent: FC<IProps> = ({ data }) => {
  const dispatch = useDispatch();

  const { items, currentDate } = useTypedSelector((state) => state.item);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const current = items.find((el) => el.date === currentDate.toDateString());
    const currentItem = testValues.find((el) => el.id === +e.currentTarget.id);

    if (current) {
      dispatch({
        type: ItemActionsEnum.EDIT_ITEM,
        payload: { date: currentDate.toDateString(), value: currentItem },
      });
    } else {
      dispatch({
        type: ItemActionsEnum.ADD_ITEM,
        payload: { date: currentDate.toDateString(), value: currentItem },
      });
    }
  };

  const handleReset = () => {
    dispatch({
      type: ItemActionsEnum.RESET_ITEM,
      payload: currentDate.toDateString(),
    });
  };

  return (
    <div className='list-wrap'>
      <button
        className='button button--outlined'
        onClick={handleReset}
        disabled={Array.isArray(data)}
      >
        Сброс
      </button>
      {Array.isArray(data) ? (
        <ul className='list'>
          <>
            {data.map((item) => (
              <li
                key={item.id}
                id={String(item.id)}
                className={`list__item ${item.color}`}
                onClick={handleClick}
              >
                {item.name}
              </li>
            ))}
          </>
        </ul>
      ) : (
        <p id={String(data.id)} className={`list__item ${data.color}`}>
          {' '}
          {data.name}
        </p>
      )}
    </div>
  );
};
