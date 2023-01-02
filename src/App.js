import React, { createContext, useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext, { AuthContextProvider } from "./store/authContext";

function App() {
  const auth = createContext(AuthContext);

  return (
    <AuthContextProvider>
      <MainHeader />
      <main>
        {!auth.isLoggedIn && <Login />}
        {auth.isLoggedIn && <Home />}
      </main>
    </AuthContextProvider>
  );
}

export default App;
