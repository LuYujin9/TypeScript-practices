type HeadingProps = {
  children: string;
  styles: React.CSSProperties;
};

const Heading = (props: HeadingProps) => {
  return <h1 style={props.styles}>{props.children}</h1>;
};
export default Heading;
