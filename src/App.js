import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header, Loader } from "./componets";
import { useAppContext } from "./context/AppContext";
import { Feed, Home, Login, Story } from "./page";

function App() {
  const { loginLoading, user } = useAppContext();
  const isLoggedIn = user && user.name !== "" && user.email !== "";

  if (loginLoading) {
    return <Loader />;
  }
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
        {isLoggedIn && (
          <>
            <Route path="/story" element={<Story />} />
            <Route path="/feed" element={<Feed />} />
          </>
        )}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
