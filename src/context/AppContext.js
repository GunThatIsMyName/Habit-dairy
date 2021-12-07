import { createContext, useContext, useEffect, useReducer } from "react";
import { firebaseAuth, googleProvider } from "../firebase";
import { initState, reducer } from "../reducer/AppReducer";
import { Loading_Login, Login_Ac,Logout_AC, offLoading } from "../utils/action";

const AppContext = createContext();

const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initState);

    const handleLogin = async()=>{
        try{
            const {user} = await firebaseAuth.signInWithPopup(googleProvider);
            const {displayName,email,photoURL}=user;
            dispatch({type:Login_Ac,payload:{displayName,email,photoURL}})
        }catch(error){
            console.log(error)
        }
    }

    const checkLoginStatus=()=>{
        dispatch({type:Loading_Login})
        firebaseAuth.onAuthStateChanged(observer=>{
            if(observer){
                const {displayName,email,photoURL}=observer;
                dispatch({type:Login_Ac,payload:{displayName,email,photoURL}})
            }
            dispatch({type:offLoading})
        })
    }

    const handleUser = ()=>{
        console.log("@@@s")
    }
    const handleLogout=async()=>{
        try{
            await firebaseAuth.signOut();
            dispatch({Logout_AC})
        }catch{
            console.log("error")
        }

    }

    useEffect(()=>{
        checkLoginStatus();
        return ()=>checkLoginStatus();
    },[])

    console.log(state,"all state")
    return (
        <AppContext.Provider value={{...state,handleLogin,handleLogout,handleUser}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = ()=>{
    return useContext(AppContext);
}

export default AppProvider;