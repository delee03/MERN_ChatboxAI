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
                position: "fixed",
                boxShadow: "none",
                // ":hover": {
                //     filter: "drop-shadow(-10px -3px 5px blue)",
                // },
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    padding: "10px 0",
                    boxShadow: "-2px 8px 20px #545155;",
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
                                onClick={auth.logout} // logout function
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
