type InputProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void; //type function 和 event的要求
  value: string;
};

const Input = (props: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event); //在conponent里type event
  };
  return (
    <div>
      <input type="text" value={props.value} onChange={props.handleChange} />;
      <input type="text" value={props.value} onChange={handleInputChange} />;
    </div>
  );
};
export default Input;
