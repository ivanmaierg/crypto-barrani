export const numberOfDaysReducer = (state, action) => {
  switch (action.type) {
    case `monthly`:
      return { state: action.payload };
    case `yearly`:
      return { state: action.payload };
    case `quartearly`:
      return { state: action.payload };
    case `all`:
      return { state: action.payload };
    default:
      return { state: `monthly` };
  }
};
