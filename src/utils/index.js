export const getTimeFromDateTimeString = (datetime) =>
  new Date(datetime).toLocaleTimeString(undefined, {
		hour:   '2-digit',
		minute: '2-digit',
		second: '2-digit',
  });