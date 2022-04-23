import React, {useState} from "react";

import Welcome from "./pages/welcome";
import Chat from "./pages/chat";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');

  return (
    <>
      {isOpen ? <Chat userName={name} />
        : <Welcome changeName={setName} changeOpen={setIsOpen} />}
    </>
  );
}

export default App;
