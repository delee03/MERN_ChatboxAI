import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import { useAuth } from "./context/AuthContext";
import PageNotFound from "./pages/PageNotFound";
import SignUp from "./pages/SignUp";

function App() {
    console.log(useAuth()?.isLoggedIn);
    const auth = useAuth();
    return (
        <>
            <main>
                <Header />
                <Routes>
                    <Route path="/" index element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    {auth?.isLoggedIn && auth.user && (
                        <Route path="/chat" element={<Chat />} />
                    )}
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
