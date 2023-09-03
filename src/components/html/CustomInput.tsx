type InputProps = React.ComponentProps<"input">; //type input element的 props

const CustomInput = (props: InputProps) => {
  return <input {...props} />; //...props也要使用
};

export default CustomInput;
