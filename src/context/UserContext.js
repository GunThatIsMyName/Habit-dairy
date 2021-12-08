import { createContext, useContext, useReducer, useState } from "react";
import { firebaseDatabase, firebaseStorage, timestamps } from "../firebase";
import { initState, reducer } from "../reducer/UserReducer";
import { STORY_CHANGE, STORY_EDIT, STORY_FILE_EMPTY, STORY_FILE_LOAD } from "../utils/action";
import { storyCollection } from "../utils/helps";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [preview, setPreview] = useState(null);
  const [state, dispatch] = useReducer(reducer, initState);

  const handleFile = (e) => {
    let selected = e.target.files[0];
    const reader = new FileReader();
    let preview;

    // image preview before upload to firebse
    reader.onloadend = (finisheEvent) => {
      preview = finisheEvent.currentTarget.result;
      setPreview(preview);
    };
    reader.readAsDataURL(selected);
    return dispatch({ type: STORY_FILE_LOAD, payload: selected });
  };

  const storyEmpty =()=>{
    dispatch({type:STORY_FILE_EMPTY})
    setPreview(null);
  }

  const storyChange = (e) => {
    const { name, value } = e.target;

    if (name === "images") {
      handleFile(e, name);
    }
    return dispatch({ type: STORY_CHANGE, payload: { name, value } });
  };

  const storyDelete = async(item)=>{
    await firebaseDatabase.doc(`${storyCollection}/${item.id}`).delete();
    await firebaseStorage.refFromURL(item.url).delete();
  }

  const storyEdit = (item)=>{
    const {description,title}=item.story;
    const {url,id}=item;
    dispatch({type:STORY_EDIT,payload:{description,title,url,id}})
  }

  const storyEditSubmit = async(e,user)=>{
    e.preventDefault();
    const editStory = {
      title: state.story.title,
      description: state.story.description,
      id: user.id,
    }
    await firebaseDatabase.doc(`${storyCollection}/${state.editId}`).update({
      story:editStory
    });
  }

  const storySubmit = (e, user) => {
    e.preventDefault();

    const story = {
      title: state.story.title,
      description: state.story.description,
      id: user.id,
    };
    const userInfo = {
      user: user.name,
      email: user.email,
      image: user.image,
    };

    // firebase setup
    const filename = state.story.file.name;
    const file = state.story.file;
    const imgStorage = firebaseStorage.ref(filename);
    const collectionRef = firebaseDatabase.collection(storyCollection);

    // image uploading
    imgStorage.put(file).on("state_changed", {
      next: (snap) => {
        console.log(snap, "snap");
      },
      error: (error) => {
        console.log(error, "error");
      },
      complete: async () => {
        const url = await imgStorage.getDownloadURL();
        const createdAt = timestamps();
        collectionRef.add({ url, createdAt, story, userInfo });
      },
    });
  };

  return (
    <UserContext.Provider
      value={{ ...state, preview, storySubmit,storyEditSubmit, storyChange,storyEmpty ,storyDelete,storyEdit }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export default UserProvider;
