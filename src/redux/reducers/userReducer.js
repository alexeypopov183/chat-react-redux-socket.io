export const userReducer = (state = {join: false}, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return (
        {
          join: action.payload.join,
          user: action.payload.socketUser,
          users: [...action.payload.users]
        }
      )
    case 'DELETE_USER':
      return (
        {
          join: state.join,
          user: state.user,
          users: state.users.filter(el => el.name !== action.name)
        }
      )
    default:
      return state
  }
}