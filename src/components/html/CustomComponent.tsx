import Heading from "../Heading";

const CustomComponent = (props: React.ComponentProps<typeof Heading>) => {
  //不需要export的情况下,import一个component就可以使用它的props
  return <div>{props.children}</div>;
};

export default CustomComponent;
