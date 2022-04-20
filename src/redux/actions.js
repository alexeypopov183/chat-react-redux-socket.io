let uniqIdMessage = 0;
let uniqIdUser = 0;

export const addMessage = (message, user) => {
  return {
    type: 'ADD_MESSAGE',
    message,
    user,
    id: user + uniqIdMessage++,
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
    id: user + uniqIdUser++,
  }
}
export const deleteUser = (id) => {
  return {
    type: 'ADD_USER',
    id,
  }
}