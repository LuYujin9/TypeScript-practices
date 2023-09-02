import "./App.css";
import Greet from "./components/Greet";

function App() {
  const pets = { cat: "Lili", dog: "Leo" };
  const petsOffriends = [
    { cat: "Lili", dog: "Leo" },
    { cat: "Lili", dog: "Leo" },
  ];

  return;
  <Greet
    name="Jane"
    messageCount={2}
    isLoggedIn={true}
    pets={pets}
    petsOffriends={petsOffriends}
    status="loading"
  />;
}

export default App;
