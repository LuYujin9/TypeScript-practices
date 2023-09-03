type ButtonProps = {
  variant: "primary" | "secondary";
  children: string; //可以额外单独定义element props, 但是可能会出现错误提示, 所以需要omit
} & Omit<React.ComponentProps<"button">, "children">; //type button element的 props: & React.ComponentProps<"button"> 此时如果children是element也适用

const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}l
    </button>
  ); //...rest也要使用
};

export default CustomButton;
