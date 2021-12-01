import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/actions";

import {Link } from "react-router-dom";
function Home() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
          <nav>
        <Link to="next">Next</Link>
      </nav>
      <h1>Gayan Perera</h1>
      <button onClick={() => dispatch(increment(5))}>Incremnt</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default Home;
