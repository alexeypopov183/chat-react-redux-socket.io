
let uniqIdUser = 0;

export const addMessage = (message, user, id) => {
  return {
    type: 'ADD_MESSAGE',
    message,
  }
}
export const deleteMessage = (id) => {
  return {
    type: 'DELETE_MESSAGE',
    id,
  }
}
export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    user,
    id: uniqIdUser++,
  }
}
export const deleteUser = (id) => {
  return {
    type: 'ADD_USER',
    id,
  }
}