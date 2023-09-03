import "./App.css";
import Button from "./components/Button";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";

function App() {
  const pets = { cat: "Lili", dog: "Leo" };
  const petsOffriends = [
    { cat: "Lili", dog: "Leo" },
    { cat: "Lili", dog: "Leo" },
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
      <Button handleClick={(event, id) => console.log("button", event, id)} />
      <Input value="" handleChange={(event) => console.log(event)} />
    </div>
  );
}

export default App;
