import React, {useState} from 'react';
import socket from "../socket";
import {useDispatch} from "react-redux";

import {addMessage} from "../redux/actions";

const Footer = ({userName}) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const [encodeImage, setEncodeImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const socketMessage = {
      message: message,
      userName: userName,
      uniqId: `${userName}:${Date.now()}`,
      encodeImage: encodeImage,
    };
    swapMessages(socketMessage);
    setEncodeImage(null);
  }
  socket.on('MESSAGE', data => {
    dispatch(addMessage(data));
  });
  const swapMessages = (socketMessage) => {
    socket.emit('MESSAGE', socketMessage);
  }

  function encodeImageFileAsURL() {
    const filesSelected = document.getElementById("inputFileToLoad").files;
    if (filesSelected.length > 0) {
      const fileToLoad = filesSelected[0];
      const fileReader = new FileReader();
      fileReader.onload = function(fileLoadedEvent) {
        const srcData = fileLoadedEvent.target.result; // <--- data: base64
        setEncodeImage(srcData)
      }
      fileReader.readAsDataURL(fileToLoad);
    }
  }

  return (
    <footer className="footer">
      <form className="footer__input" onSubmit={(e) => handleSubmit(e)}>
        <input placeholder="Введите сообщение..."
               type="text"
               value={message}
               onChange={(e) => setMessage(e.target.value)}
        />
        <input id="inputFileToLoad"
               type="file"
               onChange={encodeImageFileAsURL}
        />
      </form>
    </footer>
  );
};

export default Footer;