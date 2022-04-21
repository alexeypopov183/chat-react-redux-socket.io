import React, {useState, useEffect} from "react";
import Welcome from "./pages/welcome";
import Chat from "./pages/chat";
import {useDispatch} from "react-redux";
import getRandomName from "./functions/getRandomName";
import {addUser} from "./redux/actions";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  //TODO передача в редакс будет со стороны сервера, потом удалить из диспатча и пользоваться в пропсах
  const dispatch = useDispatch();
  //
  useEffect(() => {
    const userName = getRandomName();
    setName(userName);
    dispatch(addUser(userName));
  }, [])

  return (
    <>
      {isOpen ? <Chat userName={name} />
        : <Welcome changeOpen={setIsOpen} />}
    </>
  );
}

export default App;
