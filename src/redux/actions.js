let uniqIdMessage = 0;
let uniqIdUser = 0;

export const addMessage = (message, user) => {
  return {
    type: 'ADD_MESSAGE',
    message,
    user,
    id: uniqIdMessage++,
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