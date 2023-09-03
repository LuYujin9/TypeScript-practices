type HeadingProps = {
  children: string;
  styles: React.CSSProperties;
};

const Heading = (props: HeadingProps) => {
  return <p style={props.styles}>{props.children}</p>;
};
export default Heading;
