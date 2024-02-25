import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ItemActionsEnum, PopopupActionsEnum } from '../../store/type';
import { addOneDayToDate, formatDate, removeOneDayToDate } from '../../utils';
import './style.css';

export const DatePicker: FC = () => {
  const dispatch = useDispatch();
  let date: Date;

  const { currentDate } = useTypedSelector((state) => state.item);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.id;

    if (id === 'prev') {
      date = removeOneDayToDate(currentDate);
    } else {
      date = addOneDayToDate(currentDate);
    }

    dispatch({ type: ItemActionsEnum.SET_DATE, payload: date });
  };

  const handleOpenCalendar = () => {
    dispatch({ type: PopopupActionsEnum.OPEN_POPUP });
  };

  return (
    <div className='date-picker'>
      <button className='button' id='prev' onClick={handleClick}>
        <svg
          fill='#504f5c'
          height='64px'
          width='64px'
          version='1.1'
          id='Layer_1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 330 330'
          transform='rotate(180)'
        >
          <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
          <g
            id='SVGRepo_tracerCarrier'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></g>
          <g id='SVGRepo_iconCarrier'>
            <path
              id='XMLID_222_'
              d='M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z'
            ></path>
          </g>
        </svg>
      </button>
      <div className='date-field' onClick={handleOpenCalendar}>
        {formatDate(currentDate)}
      </div>
      <button
        className='button'
        id='next'
        onClick={handleClick}
        disabled={currentDate.toDateString() === new Date().toDateString()}
      >
        <svg
          fill='#504f5c'
          height='64px'
          width='64px'
          version='1.1'
          id='Layer_1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 330 330'
        >
          <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
          <g
            id='SVGRepo_tracerCarrier'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></g>
          <g id='SVGRepo_iconCarrier'>
            <path
              id='XMLID_222_'
              d='M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z'
            ></path>
          </g>
        </svg>
      </button>
    </div>
  );
};
