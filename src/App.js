import "./App.css";
import { Provider } from "react-redux";
import Todo from "./componenets/Todo";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Todo></Todo>
    </div>
  );
}

export default App;
