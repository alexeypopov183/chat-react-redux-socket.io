export const messageReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [
        ...state, {
          user: action.user,
          message: action.message,
          id: action.id,
        }
      ]
    default:
      return state
  }
}