type OscarProps = {
  children: React.ReactNode;
}; //允许react node 作为children. 例如一个element

const Oscar = (props: OscarProps) => {
  return <h1>{props.children}</h1>;
};
export default Oscar;
