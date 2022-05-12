import {addUser} from "../actions";
import {getRandomNum} from "../../functions/getRandomNum";

export const fetchImg = (socketUser=null, users=[], join=false) => {
  return (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${getRandomNum()}`)
      .then(res => res.json())
      .then(({url}) => {
        if (!url) {
          url = 'https://vk.com/images/camera_200.png'
        }
       dispatch(addUser({socketUser, url, users, join}))
      })
      .catch(e => console.log(e.message));
  }
}