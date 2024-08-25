import "./user.css";
import { useReducer, useState } from "react";
import p1 from "../assets/p1.jpg"; // Ensure correct file extension
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";

const data = [
  { id: 1, name: "Sokphol", age: 21, img: p1 },
  { id: 2, name: "Nara", age: 44, img: p2 },
  { id: 3, name: "Ko Sal", age: 90, img: p3 },
];

//store varibale tpye action

const Clear = "Clear_List";
const Reset = "RESET_ALL";
const Remove = "REMOVE";

const initialState = {
  users: data,
};

const reducer = (state, action) => {
  if (action.type === Clear) {
    return { ...state, users: [] };
  }
  if (action.type === Reset) {
    return { ...state, users: data };
  }
  if (action.type === Remove) {
    const filterData = state.users.filter((u) => u.id !== action.id);
    return { ...state, users: filterData };
  }

  throw new Error(`Cann't read ${action.type}`);
};

const UserList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //   const [user, setUser] = useState(data);

  function handleClear() {
    // setUser([]);
    dispatch({ type: Clear });
  }

  function handleRemove(id) {
    // const filterData = user.filter(function (u) {
    //   return u.id !== id; // Corrected to return true/false
    // });
    // setUser(filterData);

    dispatch({ type: Remove, id });
  }

  function handleReset() {
    dispatch({ type: Reset });
    // setUser(data);
  }

  return (
    <div className="main">
      {state.users.map(({ id, img, name, age }) => (
        <article key={id}>
          <img src={img} alt="profile" />
          <h2>{name}</h2>
          <h2>{age}</h2>
          <button onClick={() => handleRemove(id)}> Remove </button>
        </article>
      ))}
      {state.users.length === 0 ? (
        <button onClick={handleReset}> Resrt All</button>
      ) : (
        <button onClick={handleClear}>Clear All</button>
      )}
    </div>
  );
};

export default UserList;
