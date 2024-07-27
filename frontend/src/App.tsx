import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import SignUp from "./pages/SignUp";

function App() {
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
            s
        </main>
    );
}

export default App;
