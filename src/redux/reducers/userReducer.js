export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';

const initialState = {
  join: false,
  user: null,
  users: [],
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return Object.assign({}, state, {
        join: action.payload.join || state.join,
        user: Object.assign({}, state.user, {
          name: action.payload.socketUser,
          img: action.payload.url || state.user.img,
        } ),
        users: [...action.payload.users]
      })
    case DELETE_USER:
      return Object.assign({}, state, {
          join: state.join,
          user: state.user,
          users: state.users.filter(el => el.name !== action.name)
        })
    default:
      return state
  }
}