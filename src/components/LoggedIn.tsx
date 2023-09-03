import { useState } from "react";

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //在typeScript里, isXXX自动为boolean
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {};
  setIsLoggedIn(false);
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>LogOut</button>
      <div>User is {isLoggedIn ? "logged in" : "logged out"}</div>
    </div>
  );
};
export default LoggedIn;
