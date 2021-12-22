import "./App.css";
import Nav from "./Nav";
import { increment, decrement } from "./actions/Counter";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);

  //for updating disatch go to reducer for updating by type
  const dispatch = useDispatch();
  const signedIn = useSelector((state) => state.isLogged);
  return (
    <div className="App">
      <h1>Counter:{counter}</h1>
      <button onClick={() => dispatch(increment(5))}>increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <Nav />
      {signedIn && <h1>List of movies</h1>}
    </div>
  );
}

export default App;
