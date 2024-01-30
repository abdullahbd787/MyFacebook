import "./App.css";
import Home from "./pages/Home";
import Login from "./component/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import About from "./pages/About";
import Messages from "./pages/Messages";
import Notification from "./pages/Notification";
import Watch from "./pages/Watch";
import MarketPlace from "./pages/MarketPlace";
import Group from "./pages/Group";
import Games from "./pages/Games";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/home" />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/group" element={<Group />} />
        <Route path="/games" element={<Games />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
