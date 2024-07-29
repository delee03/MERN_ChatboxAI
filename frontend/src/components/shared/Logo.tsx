import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const Logo = () => {
    return (
        <div
            style={{
                display: "flex",
                marginRight: "auto",
                alignItems: "center",
                gap: "15px",
            }}
        >
            <Link to="/">
                <img
                    src="openai.png"
                    alt="openai"
                    width={"30px"}
                    height={"30px"}
                    className="image-inverted"
                />
            </Link>
            <Typography
                sx={{
                    display: { md: "block", sm: "none", xs: "none" },
                    mr: "auto",
                    fontWeight: "800",
                    textShadow: "2px 2px 20px #000",
                    transition: "all .5s",
                    ":hover": {
                        color: "purple",
                        fontSize: "24px",
                        filter: "drop-shadow(5px 5px 20px rgb(121, 4, 255))",
                    },
                }}
            >
                <span style={{ fontSize: "20px" }}>Fuderr</span>-GPT
            </Typography>
        </div>
    );
};

export default Logo;
