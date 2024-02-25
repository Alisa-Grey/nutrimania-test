export const formatDate = (value: Date, showDay: boolean = true) => {
  switch (showDay) {
    case true:
      return value.toLocaleString(undefined, {
        month: 'long',
        day: 'numeric',
      });
    case false:
      return value.toLocaleString(undefined, {
        month: 'long',
      });
  }
};

export const removeOneDayToDate = (date: Date) => {
  date.setDate(date.getDate() - 1);

  return date;
};

export const addOneDayToDate = (date: Date) => {
  date.setDate(date.getDate() + 1);

  return date;
};

export const generateMonth = (date: Date) => {
  const getWeekDay = (date: Date) => {
    let day = date.getDay();

    if (day == 0) {
      day = 7;
    }
    return day;
  };

  const currentMonth = date.getMonth();
  const firstDate = new Date(date.getFullYear(), currentMonth, 1);
  const lastDate = new Date(date.getFullYear(), currentMonth + 1, 0);
  const month = [];
  let week = [];

  for (let i = 1; i < getWeekDay(firstDate); i++) {
    week.push('');
  }

  for (let i = 1; i <= lastDate.getDate(); i++) {
    const tempDate = new Date(date.getFullYear(), currentMonth, i);
    if (getWeekDay(tempDate) == 1) {
      if (week.length) month.push(week);
      week = [];
    }
    week.push(i);
  }

  for (let i = getWeekDay(lastDate); i < 7; i++) {
    week.push('');
  }

  if (week.length) month.push(week);

  return month;
};
