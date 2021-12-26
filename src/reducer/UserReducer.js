import {
  STORY_CHANGE,
  STORY_EDIT,
  STORY_FILE_EMPTY,
  STORY_FILE_FAIL,
  STORY_FILE_LOAD,
} from "../utils/action";

export const initState = {
  story: {
    title: "",
    description: "",
    file: null,
  },
  editMode: false,
  editId: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case STORY_CHANGE:
      const { name, value } = action.payload;
      return {
        ...state,
        story: { ...state.story, [name]: value },
      };

    case STORY_FILE_LOAD:
      return { ...state, story: { ...state.story, file: action.payload } };

    case STORY_FILE_EMPTY:
      return {
        ...state,
        editMode: false,
        editId: null,
        story: { title: "", description: "", file: null },
      };
    case STORY_EDIT:
      const { title, description, url, id } = action.payload;
      return {
        ...state,
        editId: id,
        story: { title, description, url },
        editMode: true,
      };
    case STORY_FILE_FAIL:
      return { ...state };
    default:
      console.log("Error@!@#@#");
  }
};
