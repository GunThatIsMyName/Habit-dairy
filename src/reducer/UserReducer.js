import { storyChange_AC, storyFileFail_AC, storyFile_AC } from "../utils/action";

export const initState = {
  story: {
    title: "",
    description: "",
    file:null,
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case storyChange_AC:
      const { name, value } = action.payload;
      return {
        ...state,
        story: { ...state.story, [name]: value },
      };
    case storyFile_AC:
      return {...state,story:{...state.story,file:action.payload}}
      
    case storyFileFail_AC:
      console.log(action,"error");
      return {...state}
    default:
      console.log("Error@!@#@#");
  }
};
