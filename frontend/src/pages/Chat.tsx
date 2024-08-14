import { Box, Avatar, Typography, Button } from "@mui/material";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { colors, IconButton } from "@mui/material";
import ChatItem from "./../components/chat/ChatItem";
import { IoMdSend } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import {
    deleteUerChats,
    getUserChats,
    sendChatRequest,
} from "../helpers/api-communicator";
import { toast } from "react-hot-toast";

type Message = {
    role: "user" | "assistant";
    content: string;
};

const Chat = () => {
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const auth = useAuth();
    const [chatMessages, setChatMessages] = useState<Message[]>([]);
    const handleSubmit = async () => {
        const content = inputRef.current?.value as string;
        if (inputRef && inputRef.current) {
            inputRef.current.value = "";
        }
        const newMessage: Message = { role: "user", content };
        setChatMessages((prev) => [...prev, newMessage]);
        const chatData = await sendChatRequest(content);
        setChatMessages([...chatData.chats]);
    };

    const handleDeleteChats = async () => {
        try {
            toast.loading("deleting chats", { id: "deleteChats" });
            await deleteUerChats();
            setChatMessages([]);
            toast.success("Successfully Deleted Chats", { id: "deleteChats" });
        } catch (error) {
            console.log(error);
            toast.error("Failed to delete chats", { id: "Error Messages" });
        }
    };

    useLayoutEffect(() => {
        if (auth?.isLoggedIn && auth.user) {
            toast.loading("Loading Chats", { id: "loading" });
            getUserChats()
                .then((data: any) => {
                    setChatMessages([...data.chats]);
                    toast.success("Successfully Loaded Chats", {
                        id: "loading",
                    });
                })
                .catch((err: any) => {
                    console.log(err);
                    toast.error("Loading chats Failed", { id: "loading" });
                });
        }
    }, [auth]);

    useEffect(() => {
        if (!auth?.user) {
            return navigate("/login");
        }
    }, [auth]);

    return (
        //using box & avatar from material UI mui
        <Box
            sx={{
                display: "flex",
                flex: 1,
                alignItems: "center",
                width: "100%",
                height: "100%",
                mt: 5,
                gap: -1,
            }}
        >
            <Box
                sx={{
                    display: { md: "flex", xs: "none", sm: "none" },
                    flex: { md: 0.2 },
                    marginLeft: "18px",
                    flexDirection: "column",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        width: "100%",
                        height: "60vh",
                        bgcolor: "rgb(17,29,39)",
                        borderRadius: 4,
                        boxShadow: "0px 0px 10px #000",
                        flexDirection: "column",

                        mt: 4,
                        py: 3,
                    }}
                >
                    <Avatar
                        sx={{
                            mx: "auto",
                            my: 2,
                            bgcolor: "white",
                            color: "black",
                            fontWeight: 700,
                        }}
                    >
                        {auth?.user?.name[0]}
                        {auth?.user?.name.split(" ")[1][0]}
                    </Avatar>
                    <Typography sx={{ mx: "auto", fontFamily: "work sans" }}>
                        You are talking to a Chatbot
                    </Typography>
                    <Typography
                        sx={{
                            mx: "auto",
                            fontFamily: "work sans",
                            my: 4,
                            p: 3,
                        }}
                    >
                        You can ask some questions related to Knowledge,
                        Business, Economices, Education,etc. But avoid sharing
                        personal information, sensitive policities
                    </Typography>
                    <Button
                        onClick={handleDeleteChats}
                        sx={{
                            width: "200px",
                            my: "auto",
                            color: "white",
                            fontFamily: "700",
                            borderRadius: 4,
                            py: 1.8,
                            mx: "auto",

                            bgcolor: colors.red[400],
                            transition: "all .4s",
                            ":hover": {
                                bgcolor: colors.red.A700,
                                filter: "drop-shadow(5px 5px 20px rgb(121, 4, 255))",
                            },
                        }}
                    >
                        Clear Conversation
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flex: { md: 0.8, xs: 1, sm: 1 },
                    flexDirection: "column",
                    px: 3,
                }}
            >
                <Typography
                    sx={{
                        mx: "auto",
                        display: "flex",
                        alignItems: "center",
                        fontSize: "40px",
                        color: "white",
                        mb: 2,
                    }}
                >
                    BaoCon-GPT Turbo
                    <img
                        src="openai.png"
                        alt="openai"
                        style={{ marginLeft: "10px" }}
                        width={"40px"}
                        height={"40px"}
                        className="image-main"
                    />
                </Typography>
                <Box
                    sx={{
                        maxWidth: "100%",
                        height: "60vh",
                        borderRadius: "3",
                        mx: "auto",
                        display: "flex",
                        flexDirection: "column",

                        overflowX: "auto",
                        overflowY: "auto",
                        scrollBehavior: "smooth",
                    }}
                >
                    {chatMessages.map((chat, index) => (
                        //@ts-ignore
                        <ChatItem
                            content={chat.content}
                            role={chat.role}
                            key={index}
                        />
                    ))}
                </Box>
                <div
                    style={{
                        width: "100%",
                        borderRadius: 8,
                        paddingBottom: "30px",
                        backgroundColor: "rgb(17,27,39)",
                        display: "flex",
                    }}
                >
                    <input
                        ref={inputRef}
                        type="text"
                        style={{
                            width: "100%",
                            textWrap: "wrap",
                            backgroundColor: "transparent",
                            padding: "10px",
                            border: "none",
                            outline: "none",
                            color: "white",
                            fontSize: "20px",
                        }}
                    />
                    <IconButton
                        onClick={handleSubmit}
                        sx={{
                            ml: "auto",
                            color: "white",
                            fontSize: 30,
                            mt: 2,
                        }}
                    >
                        {" "}
                        <IoMdSend></IoMdSend>
                    </IconButton>
                </div>
            </Box>
        </Box>
    );
};

export default Chat;
