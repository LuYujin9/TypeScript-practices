import "./App.css";
import Button from "./components/Button";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Box from "./components/context/Box";
import ThemeContextProvider from "./components/context/ThemeContext";
import UserContextProvider from "./components/context/UserContext";
import User from "./components/context/User";
import Counter from "./components/state/Counter";
import { CounterTwo } from "./components/class/CounterTwo";

function App() {
  const pets = { cat: "Lili", dog: "Leo" };
  const petsOffriends = [
    { cat: "Lili", dog: "Leo" },
    { cat: "Lil", dog: "Leo" },
  ];

  return (
    <div>
      <Oscar>
        <Heading styles={{ border: "none", padding: "1em" }}>
          Placeholder text
        </Heading>
      </Oscar>
      <Greet
        name="Jane"
        messageCount={2}
        isLoggedIn={true}
        pets={pets}
        petsOffriends={petsOffriends}
        status="loading"
      />
      <Counter />
      <Button handleClick={(event, id) => console.log("button", event, id)} />
      <Input value="" handleChange={(event) => console.log(event)} />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <CounterTwo message="The count value is " />
    </div>
  );
}

export default App;
