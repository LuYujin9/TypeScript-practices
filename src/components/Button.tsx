type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void; //type function 和 event的要求
};

const Button = (props: ButtonProps) => {
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>click</button>
  );
};
//当component里面需要给event props 赋予 parameter value时, 加上array function
export default Button;
