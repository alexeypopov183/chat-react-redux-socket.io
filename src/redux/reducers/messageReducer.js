export const messageReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return action.message

    case 'DELETE_MESSAGE':
      return (
        state.filter(el => el.uniqId !== action.id)
      )
    default:
      return state
  }
}