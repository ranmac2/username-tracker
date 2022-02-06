import "./App.css";
import UserInput from "./components/Users/UserInput/UserInput";
import UserList from "./components/Users/UserList/UserList";
import Card from "./UI/Card/Card";

function App() {
  return (
    <div className="App">
      <Card>
        <UserInput />
        <UserList />
      </Card>
    </div>
  );
}

export default App;
