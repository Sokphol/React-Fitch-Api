import { useEffect, useReducer } from "react";
import axios from "axios";

const defaultState = {
  users: [],
  isLoading: true,
  isError: false,
};

const reducer = (state, action) => {
  if (action.type === "FITCHDATA") {
    return { ...state, users: action.payload };
  }
  if (action.type === "ERROR") {
    return { ...state, isError: true };
  }
  if (action.type === "LOADING") {
    return { ...state, isLoading: false };
  }
};

const Data = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const { users, isError, isLoading } = state;

  const url = "https://api.github.com/users";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios(url);
        dispatch({ type: "FITCHDATA", payload: data });
      } catch (error) {
        dispatch({ type: "ERROR" });
      }

      dispatch({ type: "LOADING" });
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  if (isError) {
    return <h1>Something was wrong</h1>;
  }

  return (
    <div>
      {users.map(({ id, avatar_url, login, html_url }) => {
        return (
          <article key={id}>
            <img src={avatar_url} alt={login} />
            <h3>{login}</h3>
            <a href={html_url}>See Profile</a>
          </article>
        );
      })}
    </div>
  );
};

export default Data;
