import React from "react";
import {useSelector} from "react-redux";

import Welcome from "./pages/welcome";
import Chat from "./pages/chat";

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
