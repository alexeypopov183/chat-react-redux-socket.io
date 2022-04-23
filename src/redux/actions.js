export const addMessage = (message) => {
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
  }
}

export const deleteUser = (id) => {
  return {
    type: 'ADD_USER',
    id,
  }
}