import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { formatDate, generateMonth } from '../../utils';
import { weekdays } from '../../data/weekdays';
import { ItemActionsEnum, PopopupActionsEnum } from '../../store/type';
import './style.css';

interface IProps {
  opened: boolean;
}

export const CalendarPopup: FC<IProps> = () => {
  const dispatch = useDispatch();

  const { currentDate, items } = useTypedSelector((state) => state.item);
  const [activeId, setActiveId] = useState(currentDate.getDate());

  const monthByWeeks = generateMonth(currentDate);

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    if ((event.target as Element).id.includes('overlay')) {
      dispatch({ type: PopopupActionsEnum.CLOSE_POPUP });
    }
  };

  const handleArrowClick = (event: React.MouseEvent<HTMLElement>) => {
    const date = currentDate;
    if (event.currentTarget.id === 'prev') {
      date.setMonth(date.getMonth() - 1);
    } else {
      date.setMonth(date.getMonth() + 1);
    }
    dispatch({ type: ItemActionsEnum.SET_DATE, payload: date });
  };

  const chooseDay = (event: React.MouseEvent<HTMLElement>) => {
    if (event.currentTarget.innerText.length) {
      setActiveId(+event.currentTarget.id);
    }
  };

  const setClassNames = (index: number, elementId: string) => {
    const weekend = index > 5 ? 'weekend' : '';
    const active = +elementId === activeId ? 'active' : '';

    return { weekend, active };
  };

  const findEl = (index: number) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = index;
    const newDate = new Date(year, month, day).setHours(0, 0, 0).toString();

    const element = items.find((el) => {
      const currentDate = new Date(el.date).setHours(0, 0, 0).toString();

      return currentDate === newDate;
    });

    if (element) {
      return element?.value.color;
    } else {
      return 'default';
    }
  };

  const handleChooseClick = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = activeId;
    const newDate = new Date(year, month, day, 12);

    dispatch({ type: ItemActionsEnum.SET_DATE, payload: newDate });
    dispatch({ type: PopopupActionsEnum.CLOSE_POPUP });
  };

  return (
    <div className='overlay' id='overlay' onClick={handleClose}>
      <div className='calendar'>
        <h2 className='title'>Календарь</h2>
        <div className='calendar__header'>
          <button className='button' id='prev' onClick={handleArrowClick}>
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
          <p className='month-title'>{formatDate(currentDate, false)}</p>
          <button className='button' id='next' onClick={handleArrowClick}>
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
        <table className='table'>
          <thead className='table__head table-head'>
            <tr>
              {weekdays.map((day) => (
                <th className='table-head__cell' key={day}>
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {monthByWeeks.map((week, index) => (
              <tr className='table-head__cell' key={`week-${index + 1}`}>
                <>
                  {week.map((day, index) => (
                    <td
                      id={day.toLocaleString()}
                      key={`day-${index}`}
                      className={`
                      table__cell 
                      ${setClassNames(index, day.toLocaleString()).active} 
                      `}
                      onClick={chooseDay}
                    >
                      {day.toLocaleString()}
                      {day.toLocaleString() !== '' && (
                        <span className={`color ${findEl(+day)}`}></span>
                      )}
                    </td>
                  ))}
                </>
              </tr>
            ))}
          </tbody>
        </table>
        <button className='button--primary' onClick={handleChooseClick}>
          Выбрать
        </button>
      </div>
    </div>
  );
};
