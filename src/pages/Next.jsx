import { useSelector } from "react-redux";


function Next() {
    const count = useSelector((state) => state.counter);
  return <div>Current Count {count}</div>;
}

export default Next;
