import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

/* const User = () => {
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
//此时使用useState 的props时,要加?,因为值有可能是null,就会报错 */

//当state不会重新设置为null时,可以这样写,不需要check user的value
const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser); //use type Assertion, 目的: 让TS认为空的object是一个authUser
  const handleLogin = () => {
    setUser({
      name: "Jane",
      email: "jane@email.com",
    });
  }; //此时user已经被设定为null,不能为string了
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  );
};

export default User;
