export const getDataAndHour = (dateTimeString: string) => {
  const dateTime = new Date(dateTimeString);
  const localDateTime = new Date(
    dateTime.getTime() + dateTime.getTimezoneOffset() * 60000,
  );
  const formattedDate = `${localDateTime.getDate()}/${localDateTime.getMonth() + 1}/${localDateTime.getFullYear()}`;
  const formattedHour = `${localDateTime.getHours()}h${localDateTime.getMinutes()}`;
  return { date: formattedDate, hour: formattedHour };
};
