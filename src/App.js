
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./componets/Header";
import Home from "./page/Home";
import Loader from "./componets/Loader";
import Login from "./page/Login";
import { useAppContext } from "./context/AppContext";
import Story from "./page/Story";
import Feed from "./page/Feed";

function App() {
  const {loginLoading,user}=useAppContext();
  const isLoggedIn = user && user.name !== "" && user.email !== "";

  if(loginLoading){
    return <Loader />
  }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
        <Route path="/story" element={<Story />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
