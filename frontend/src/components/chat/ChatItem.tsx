import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";

const ChatItem = ({
    content,
    role,
}: {
    content: string;
    role: "user" | "assistant";
}) => {
    const auth = useAuth();
    return role === "assistant" ? (
        <Box sx={{ display: "flex", p: 2, bgcolor: "#1A1A1C", my: 2, gap: 2 }}>
            <Avatar sx={{ ml: 0 }}>
                <img src="openai.png" width={30} alt="openai" />
            </Avatar>
            <Box>
                <Typography sx={{ fontSize: "20px" }}>{content}</Typography>
            </Box>
        </Box>
    ) : (
        <Box sx={{ display: "flex", p: 2, bgcolor: "#004d56", gap: 2 }}>
            <Avatar sx={{ ml: 0, bgcolor: "black", color: "white" }}>
                {auth?.user?.name[0]}
                {auth?.user?.name.split(" ")[1][0]}
            </Avatar>
            <Box>
                <Typography sx={{ fontSize: "20px" }}>{content}</Typography>
            </Box>
        </Box>
    );
};

export default ChatItem;
