import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAPI, getInfo } from "./redux/userSlice";
import "./styles.css";

export default function App() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  useEffect(() => {
    dispatch(fetchAPI());
  }, []);

  const users = useSelector((state) => state.user.user);
  setName(users.name);

  const handleChangeName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
    const action = getInfo(e.target.value);
    dispatch(action);
  };

  return (
    <div className="App">
      <div>{users.name}</div>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type="text" value={name} onChange={handleChangeName} />
    </div>
  );
}
