import AuthLogin from "./AuthLogin";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>; // 在React类型后面定义数据类型
};

const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  //为了让props component转换为Component
  if (isLoggedIn) {
    return <Component name="Jane" />; // 使用任意一个component作为props
  } else {
    return <AuthLogin />;
  }
};

export default Private;
