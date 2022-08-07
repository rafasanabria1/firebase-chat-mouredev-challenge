import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Chat } from "./components/Chat";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { About } from "./components/About";
import { useContext } from "react";
import FChatContext from "./context/FChatContext";
import PrivateRoute from "./components/PrivateRoute";

function App () {

  const {userData, loadingUser} = useContext (FChatContext);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/chat" element={<PrivateRoute redirectPath="/login"><Chat /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/chat" replace/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
