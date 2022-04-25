import React from "react";

import Welcome from "./pages/welcome";
import Chat from "./pages/chat";
import {useSelector} from "react-redux";

function App() {

  const {join} = useSelector(state => state.userReducer)
  return (
    <>
      {join ? <Chat />
        : <Welcome />}
    </>
  );
}

export default App;
