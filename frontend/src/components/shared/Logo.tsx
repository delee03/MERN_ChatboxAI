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
                    style={{ backgroundColor: "#fff" }}
                    alt="openai"
                    width={30}
                    height={30}
                    className="image-inverted"
                />
                <Typography
                    sx={{
                        display: { md: "block", sm: "none", xs: "none" },
                        mr: "auto",
                        fontWeight: "800",
                        textShadow: "2px 2px 20px #000",
                    }}
                >
                    <span style={{ fontSize: "20px" }}>MERN</span>-GPT
                </Typography>
            </Link>
        </div>
    );
};

export default Logo;
