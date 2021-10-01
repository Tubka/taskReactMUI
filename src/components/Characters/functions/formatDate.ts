export const formatDate = (date: Date | string): string => {
  const createdDate = new Date(date);
  return new Intl.DateTimeFormat('en-US').format(createdDate);
};