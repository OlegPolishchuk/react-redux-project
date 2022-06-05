const initialState = {};

export type InitialStateType = typeof initialState;

export const loginReducer = (state: InitialStateType, action: any): InitialStateType => {
  switch (action.type) {
    default:
      return state;
  }
};
