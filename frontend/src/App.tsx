import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import SignUp from "./pages/SignUp";
import { useAuth } from "./context/AuthContext";

function App() {
    console.log(useAuth()?.isLoggedIn);
    return (
        <main>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="*" element={<Chat />} />
            </Routes>
        </main>
    );
}

export default App;