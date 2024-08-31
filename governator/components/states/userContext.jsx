import { useContext, useReducer } from "react";

const UserContext = React.createContext(); // create context

const initialState = {
  user: null, // user object
  loading: true, // loading state
  error: null, // error state
  count: 0, // count state
  theme: "light", // theme state
};
