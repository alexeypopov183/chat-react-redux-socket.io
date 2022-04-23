export const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return (
        {
          user: action.user,
        }
      )
    case 'DELETE_USER':
      return (
        state.filter(el => el.id !== action.id)
      )
    default:
      return state
  }
}