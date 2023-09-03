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
import Private from "./components/componentProp/Private";
import Profile from "./components/componentProp/Profile";
import List from "./components/generics/List";
import RandomNumber from "./components/restriction/RandomNumber";
import Toast from "./components/templateliterals/Toast";

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
      <Private isLoggedIn={true} component={Profile} />
      {/*    <List
        items={[
          { name: "Batman", id: 1 },
          { name: "Superman", id: 2 },
        ]}
        onClick={(item) => console.log(item)}
      /> */}
      <List items={[1, 2]} onClick={(item) => console.log(item)} />
      <RandomNumber value={10} isPositive />
      <Toast position="center" />
    </div>
  );
}

export default App;
