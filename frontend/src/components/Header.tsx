import React from "react";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";

const Header = () => {
    const auth = useAuth();
    return (
        <AppBar
            sx={{
                bgcolor: "transparent",
                position: "sticky",
                boxShadow: "none",
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    padding: "10px 0",
                    boxShadow: "10px 10px 20px #000",
                }}
            >
                <Logo />
                <div>
                    {auth?.isLoggedIn ? (
                        <>
                            <NavigationLink
                                bg="#00fffc"
                                to="/chat"
                                text="Go to Chat"
                                textColor="black"
                            />
                            <NavigationLink
                                bg="#51538f"
                                to="/"
                                text="Logout"
                                textColor="white"
                                onClick={auth.logout}
                            />
                        </>
                    ) : (
                        <>
                            <NavigationLink
                                bg="#00fffc"
                                to="/login"
                                text="Login"
                                textColor="black"
                            />
                            <NavigationLink
                                bg="#51538f"
                                to="/signup"
                                text="SignUp"
                                textColor="white"
                            />
                        </>
                    )}
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
