export default () => {
  const calendarDate = new Date(),
    year = calendarDate.getFullYear(),
    month = calendarDate.getMonth(),
    lastDayMonth = new Date(year,month+1,0).getDate();

    let month_days = [];
    for(let i=1; i<=lastDayMonth; i++) {
      month_days.push(i);
    }
    
    return month_days;
};
