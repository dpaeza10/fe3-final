import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../Reducers/Reducer";

const ContextGlobal = createContext();

const initialState = {
  theme: "light", 
  docs: [], 
  favs: []
};

export const Context = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        console.log(res.data);
        dispatch({type: "GET_DOCS", payload: res.data});
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default Context;

export const useContextGlobal = () => useContext(ContextGlobal);