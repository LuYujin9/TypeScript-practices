import { GreetProps } from "./Greet.types";
//props 使用定义的type,用:
const Greet = (props: GreetProps) => {
  let message;
  if (props.status === "loading") {
    message = "loading";
  } else if (props.status === "success") {
    message = "Data fetched successfully";
  } else if (props.status === "error") {
    message = "Error fetching data";
  }
  return (
    <div>
      <p>{message}</p>
      {props.isLoggedIn ? (
        <h2>
          {props.name}!You have {props.messageCount} messages
        </h2>
      ) : (
        "Welcome"
      )}
      <p>
        You have {props.pets.cat} and {props.pets.dog}
      </p>
      {props.petsOffriends
        ? props.petsOffriends.map((pet) => (
            <p>
              {pet.cat}
              {pet.dog}
            </p>
          ))
        : null}
    </div>
  );
};
export default Greet;
