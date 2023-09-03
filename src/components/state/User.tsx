import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null); //可能为两种类型
  const handleLogin = () => {
    setUser({
      name: "Jane",
      email: "jane@email.com",
    });
  }; //此时user已经被设定为null,不能为string了
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>LogOut</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};

//使用props时,要加?,因为值有可能是null,就会报错
export default User;
