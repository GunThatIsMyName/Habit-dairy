import {
  LOGIN_LOADING,
  LOGIN_BEGIN,
  LOGIN_LOGOUT,
  LOGIN_CHECK,
} from "../utils/action";

export const initState = {
  user: {
    name: "",
    email: "",
    image: "",
    id: "",
  },
  loginLoading: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    
    case LOGIN_BEGIN:
      const { displayName, email, photoURL, id } = action.payload;
      return {
        ...state,
        user: {
          name: displayName,
          email,
          image: photoURL,
          id: id,
        },
        loginLoading: false,
      };

    case LOGIN_LOADING:
      return { ...state, loginLoading: true };

    case LOGIN_LOGOUT:
      return {
        ...state,
        user: { ...state.user, name: "", email: "", image: "" ,id:""},
        loginLoading: false,
      };

    case LOGIN_CHECK:
      return { ...state, loginLoading: false };
    default:
      console.log("Error");
      throw new Error("에러 입니다.");
  }
};
