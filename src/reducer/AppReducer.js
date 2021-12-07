import { Loading_Login, Login_Ac, Logout_AC, offLoading } from "../utils/action";

export const initState = {
  user: {
    name: "",
    email: "",
    image: "",
  },
  loginLoading: false,
};

export const reducer = (state, action) => {
  console.log(action.type,"타입!")
  switch (action.type) {
    case Login_Ac:
      const { displayName, email, photoURL } = action.payload;
      return {
        ...state,
        user: {
          name: displayName,
          email,
          image: photoURL,
        },
        loginLoading: false,
      };

    case Loading_Login:
      return { ...state, loginLoading: true };

    case Logout_AC:
      return { ...state, user: {name: "", email: "", image: "" },loginLoading: false};

    case offLoading:
      return{...state,loginLoading:false};
    default:
      console.log("Error");
  }
};
