export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

export const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      if (Array.isArray(action.message)) return [...action.message];
      return [...state, action.message];
    case DELETE_MESSAGE:
      return (
        state.filter(el => el.uniqId !== action.id)
      );
    default:
      return state;
  }
}