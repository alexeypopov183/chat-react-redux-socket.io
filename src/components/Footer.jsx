import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addMessage} from "../redux/actions";

const Footer = ({userName}) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  // TODO add to dispatch id user!
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMessage(message, userName));
  }

  return (
    <footer className="footer">
      <form className="footer__input" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
      </form>
    </footer>
  );
};

export default Footer;