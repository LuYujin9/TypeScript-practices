type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void; //type function 和 event的要求
};

const Button = (props: ButtonProps) => {
  return <button onClick={props.handleClick}>click</button>;
};
export default Button;
