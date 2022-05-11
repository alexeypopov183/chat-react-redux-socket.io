import React, {useRef, useState} from 'react';
import socket from "../socket";
import {useDispatch} from "react-redux";
import {addMessage} from "../redux/actions";

const InputMessage = ({userName, img}) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const [encodeImage, setEncodeImage] = useState(null);
  const ref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message || encodeImage) {
      const socketMessage = {
        message: message,
        userName: userName,
        img: img,
        uniqId: `${userName}:${Date.now()}`,
        encodeImage: encodeImage,
      };
      dispatch(addMessage(socketMessage));
      sendMessage(socketMessage);
      setEncodeImage(null);
      setMessage('');
    } else {
      alert('Вы не ввели сообщение!');
    }
  }

  const sendMessage = (socketMessage) => {
    socket.emit('ADD_MESSAGE', socketMessage);
  };

  const encodeImageFileAsURL = () => {
    const filesSelected = ref.current.files;
    if (filesSelected.length > 0) {
      const fileToLoad = filesSelected[0];
      const fileReader = new FileReader();
      fileReader.onload = (fileLoadedEvent)  => {
        const srcData = fileLoadedEvent.target.result;
        setEncodeImage(srcData);
      }
      fileReader.readAsDataURL(fileToLoad);
    }
  }

  return (
    <footer className="footer">
      <form className="footer__input" onSubmit={handleSubmit}>
        <input
          placeholder="Введите сообщение..."
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          type="file"
          accept=".jpeg,.png,.gif,.svg"
          onChange={encodeImageFileAsURL}
          ref={ref}
        />
      </form>
    </footer>
  );
};

export default InputMessage;