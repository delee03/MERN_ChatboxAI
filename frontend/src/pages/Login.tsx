import { Box, Button, Typography } from "@mui/material";
import { TbLogin2 } from "react-icons/tb";
import React from "react";
import CustomizedInput from "../components/shared/CustomizedInput";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

const Login = () => {
    const auth = useAuth();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        // console.log(formData, email, password);
        try {
            toast.loading("Signing In!", { id: "login" });
            await auth?.login(email, password);
            toast.success("Signed In Successfully!", { id: "login" });
        } catch (error) {
            console.log(error);
            toast.error("Signging is Failed!", { id: "login" });
        }
    };
    return (
        <Box width={"100%"} height={"100%"} display="flex" flex={1}>
            <Box
                padding={8}
                mt={3}
                width={"100%"}
                display={{ md: "flex", sm: "none", xs: "none" }}
            >
                <img
                    src="airobot.png"
                    alt="AI Robot"
                    style={{ width: "400px" }}
                />
            </Box>
            <Box
                display={"flex"}
                flex={{ xs: 1, md: 0.5 }}
                justifyContent={"center"}
                alignContent={"center"}
                padding={2}
                ml={"auto"}
                mr={16}
            >
                <form
                    onSubmit={handleSubmit}
                    action=""
                    style={{
                        margin: "auto",
                        padding: "20px 30px 50px",
                        boxShadow: "10px 10px 20px #000",
                        borderRadius: "10px",
                        border: "none",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <Typography
                            variant="h4"
                            textAlign="center"
                            padding={4}
                            fontWeight={600}
                        >
                            Login
                        </Typography>
                        <CustomizedInput
                            type="email"
                            name="email"
                            label="Email"
                        />
                        <CustomizedInput
                            type="password"
                            name="password"
                            label="Password"
                        />
                        <Button
                            type="submit"
                            sx={{
                                px: 2,
                                py: 2,
                                fontSize: "18px",
                                mt: 3,
                                color: "#fff",
                                width: "400px",
                                borderRadius: 999,
                                bgcolor: "#08e4e0",
                                transition: "all .5s",
                                ":hover": {
                                    bgcolor: "#fff",
                                    color: "#08e4e0",
                                },
                            }}
                            endIcon={
                                <TbLogin2
                                    style={{
                                        marginLeft: "-10px",
                                        height: "23px",
                                        width: "30px",
                                    }}
                                ></TbLogin2>
                            }
                        >
                            Login
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default Login;