import { createContext, useContext, useReducer } from "react";
import { initState, reducer } from "../reducer/UserReducer";
import {
  storyChange_AC,
  storyFileFail_AC,
  storyFile_AC,
} from "../utils/action";
import { fileCheck } from "../utils/helps";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const handleFile = (e,name) => {
    let selected = e.target.files[0];
    if (fileCheck.includes(selected.type)) {
      return dispatch({ type: storyFile_AC, payload: selected });
    } else {
      console.log(name, "3");
      return dispatch({ type: storyFileFail_AC });
    }
  };
  const storyChange = (e) => {
    const { name, value } = e.target;
    if (name === "images") {
        handleFile(e,name);
    }
    return dispatch({ type: storyChange_AC, payload: { name, value } });
  };
  const storySubmit = (e) => {
    e.preventDefault();
    console.log(state, "state @@");
  };
  return (
    <UserContext.Provider value={{ ...state, storySubmit, storyChange }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export default UserProvider;
