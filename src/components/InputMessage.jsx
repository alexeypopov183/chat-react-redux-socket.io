import React, {useRef, useState} from 'react';
import socket from "../socket";
import {useDispatch} from "react-redux";

import {addMessage} from "../redux/actions";

const InputMessage = ({userName, img}) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const [encodeImage, setEncodeImage] = useState(null);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const socketMessage = {
      message: message,
      userName: userName,
      img: img,
      uniqId: `${userName}:${Date.now()}`,
      encodeImage: encodeImage,
    };
    swapMessages(socketMessage);
    setEncodeImage(null);
    setMessage('');
  }

  const swapMessages = (socketMessage) => {
    socket.emit('MESSAGE', socketMessage);
  };

  socket.on('MESSAGE', data => {
    dispatch(addMessage(data));
  });

  const encodeImageFileAsURL = () => {
    const filesSelected = ref.current.files;
    if (filesSelected.length > 0) {
      const fileToLoad = filesSelected[0];
      const fileReader = new FileReader();
      fileReader.onload = function(fileLoadedEvent) {
        const srcData = fileLoadedEvent.target.result;
        setEncodeImage(srcData);
      }
      fileReader.readAsDataURL(fileToLoad);
    }
  }

  return (
    <footer className="footer">
      <form className="footer__input" onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder="Введите сообщение..."
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          type="file"
          onChange={encodeImageFileAsURL}
          ref={ref}
        />
      </form>
    </footer>
  );
};

export default InputMessage;