export const userReducer = (state = {join: false}, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return (
        {
          join: action.payload.join || state.join,
          user: {
            name: action.payload.socketUser,
            img: action.payload.url || state.user.img
          },
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