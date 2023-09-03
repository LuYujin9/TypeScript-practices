import { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
  const userContext = useContext(UserContext);
  console.log(userContext);

  const handleLogin = () => {
    if (userContext) {
      userContext.setUser({ name: "Jane", email: "jane@mail.com" });
    }
  };

  const handleLogout = () => {
    if (userContext) {
      userContext.setUser(null);
    }
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext?.user?.name}</div>
      <div>User name is {userContext?.user?.email}</div>
    </div>
  );
};
export default User;
