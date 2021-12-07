import { createContext, useContext, useReducer, useState } from "react";
import { firebaseDatabase, firebaseStorage } from "../firebase";
import { initState, reducer } from "../reducer/UserReducer";
import { storyChange_AC, storyFile_AC, storyPreview_AC } from "../utils/action";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [preview, setPreview] = useState(null);
  const [state, dispatch] = useReducer(reducer, initState);

  const handleFile = (e, name) => {
    let selected = e.target.files[0];
    const reader = new FileReader();
    let preview;
    reader.onloadend = (finisheEvent) => {
      preview = finisheEvent.currentTarget.result;
      setPreview(preview);
    };
    reader.readAsDataURL(selected);
    return dispatch({ type: storyFile_AC, payload: selected });
  };
  const storyChange = (e) => {
    const { name, value } = e.target;
    if (name === "images") {
      handleFile(e, name);
    }
    return dispatch({ type: storyChange_AC, payload: { name, value } });
  };
  const storySubmit = (e) => {
    e.preventDefault();
    const newObj = {
        title:state.story.title,
        description:state.story.description
    }
    const filename = state.story.file.name;
    const file = state.story.file;
    const imgStorage = firebaseStorage.ref(filename);
    const collectionRef = firebaseDatabase.collection("stories");
    imgStorage.put(file).on("state_changed",{
        "next":(snap)=>{
            console.log(snap,"snap")
        }
        ,"error":(error)=>{
            console.log(error,"error");
        }
        ,"complete":async()=>{
            const url = await imgStorage.getDownloadURL();
            console.log(url,"URL@@@");
            collectionRef.add({url,newObj});
            console.log("@@@@@@@@@@@@@@")
        }
    })
  };
  return (
    <UserContext.Provider
      value={{ ...state, preview, storySubmit, storyChange }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export default UserProvider;
