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
    case 'DELETE_MESSAGE':
      return (
        state.filter(el => el.id !== action.id)
      )
    default:
      return state
  }
}