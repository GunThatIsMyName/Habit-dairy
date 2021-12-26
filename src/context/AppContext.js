import { createContext, useContext, useEffect, useReducer } from "react";
import { firebaseAuth, googleProvider } from "../firebase";
import { initState, reducer } from "../reducer/AppReducer";
import { LOGIN_LOADING, LOGIN_BEGIN,LOGIN_LOGOUT, LOGIN_CHECK } from "../utils/action";

const AppContext = createContext();

const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initState);

    const handleLogin = async()=>{
        try{
            const {user} = await firebaseAuth.signInWithPopup(googleProvider);
            const {displayName,email,photoURL,uid}=user;
            dispatch({type:LOGIN_BEGIN,payload:{displayName,email,photoURL,id:uid}})
        }catch(error){
            console.log(error,"에러 입니다.")
        }
    }

    const checkLoginStatus=()=>{
        dispatch({type:LOGIN_LOADING})
        firebaseAuth.onAuthStateChanged(observer=>{
            if(observer){
                const {displayName,email,photoURL,uid}=observer;
                dispatch({type:LOGIN_BEGIN,payload:{displayName,email,photoURL,id:uid}})
            }
            dispatch({type:LOGIN_CHECK})
        })
    }

    const handleLogout=async()=>{
        try{
            await firebaseAuth.signOut();
            dispatch({type:LOGIN_LOGOUT})
        }catch{
            console.log("error")
        }
    }

    useEffect(()=>{
        checkLoginStatus();
        return ()=>checkLoginStatus();
    },[])

    return (
        <AppContext.Provider value={{...state,handleLogin,handleLogout}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = ()=>{
    return useContext(AppContext);
}

export default AppProvider;