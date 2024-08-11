import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import TypingAnimation from "../components/typer/TypingAnimation";
import Footer from "../components/footer/Footer";

const Home = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <Box width={"100%"} height={"100%"} flex={"flex"} mx={"auto"}>
            <Box
                sx={{
                    display: "flex",
                    width: "75%",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    mx: "auto",
                    mt: 3,
                }}
            >
                <TypingAnimation />
                {/* <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: { md: "row", xs: "column" },
                        gap: 5,
                        my: 10,
                    }}
                >
                    <img
                        src="robot.png"
                        alt="robot"
                        style={{ margin: "auto" }}
                        width={"200px"}
                        height={"200px"}
                    />
                    <img
                        src="openai.png"
                        alt="robot"
                        style={{ margin: "auto" }}
                        width={"200px"}
                        height={"200px"}
                    />
                </Box> */}
                <Box sx={{ display: "flex", width: "100%", mx: "auto" }}>
                    <img
                        src="chat.png"
                        alt="chat bot"
                        style={{
                            display: "flex",
                            margin: "auto",
                            width: isMobile ? "100%" : "60%",
                            borderRadius: 20,
                            boxShadow: "-5px -5px 100px #64f3d5",
                            marginTop: 20,
                        }}
                    />
                </Box>
                <Footer />
            </Box>
        </Box>
    );
};

export default Home;
