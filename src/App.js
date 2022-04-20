import React, {useState} from "react";
import Welcome from "./pages/welcome";
import Chat from "./pages/chat";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? <Chat/>
        : <Welcome changeOpen={setIsOpen}/>}
    </>
  );
}

export default App;
