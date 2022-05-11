import {ADD_MESSAGE, DELETE_MESSAGE} from "./reducers/messageReducer";
import {ADD_USER, DELETE_USER} from "./reducers/userReducer";


export const addMessage = (message) => {
  return {
    type: ADD_MESSAGE,
    message,
  }
}

export const deleteMessage = (id) => {
  return {
    type: DELETE_MESSAGE,
    id,
  }
}

export const addUser = (payload) => {
  return {
    type: ADD_USER,
    payload,
  }
}

export const deleteUser = (name) => {
  return {
    type: DELETE_USER,
    name,
  }
}