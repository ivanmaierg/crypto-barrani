export const stringToDate = (dateString) => {
  const [dd, mm, yyyy] = dateString.split(`-`);
  return new Date(`${yyyy}-${mm}-${dd}`);
};
