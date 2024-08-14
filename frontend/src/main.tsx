import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.tsx";
import { Toaster } from "react-hot-toast";
import axios from "axios";

const baseURL =
    process.env.NODE_ENV === "development"
        ? process.env.REACT_APP_API_URL
        : "https://mern-chatbot-ai-ruddy.vercel.app/api/v1";

axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;
//lệnh xác thực cho phép set cookies từ backend trực tiếp, trao đổi thông tin cookies

const theme = createTheme({
    typography: {
        fontFamily: "Roboto Slab, serif",
        allVariants: { color: "white" },
    },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AuthProvider>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <Toaster position="top-center" />
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>
);
