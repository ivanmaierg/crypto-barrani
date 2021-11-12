export type ActionTypeDays = string;

export interface ActionNumberOfDaysReducer {
  type: ActionTypeDays;
  payload: ActionTypeDays;
}

export interface ActionNumberOfDaysState {
  state: ActionTypeDays;
}

export const numberOfDaysReducer = (
  state: ActionNumberOfDaysState,
  action: ActionNumberOfDaysReducer,
): ActionNumberOfDaysState => {
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
