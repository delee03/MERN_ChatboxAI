import { Avatar, Box, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// hàm trích xuất code từ chuỗi
function extractCodeFromString(message: string) {
    if (message.includes("```")) {
        const codeBlocks = message.split("```");
        return codeBlocks;
    }
}
// kiểm tra có phải là code không
function iscodeBlock(message: string) {
    if (
        message.includes("=") ||
        message.includes(";") ||
        message.includes("{") ||
        message.includes("}") ||
        message.includes("(") ||
        message.includes(")") ||
        message.includes("#") ||
        message.includes("]") ||
        message.includes("//")
    ) {
        return true;
    }
    return false;
}

const ChatItem = ({
    content,
    role,
}: {
    content: string;
    role: "user" | "assistant";
}) => {
    const messageBlocks = extractCodeFromString(content);
    const auth = useAuth();
    return role === "assistant" ? (
        <Box
            sx={{
                display: "flex",
                py: 2,
                bgcolor: "#1A1A1C",
                my: 2,
                maxWidth: "75vw",
                pr: 7,
                gap: 2,
            }}
        >
            <Avatar sx={{ ml: 1 }}>
                <img src="openai.png" width={30} alt="openai" />
            </Avatar>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    width: "100%",
                }}
            >
                {messageBlocks ? (
                    messageBlocks.map((block, index) => {
                        return iscodeBlock(block) ? (
                            <SyntaxHighlighter
                                key={index}
                                language="javascript"
                                style={coldarkDark}
                            >
                                {block}
                            </SyntaxHighlighter>
                        ) : (
                            <Typography key={index} sx={{ fontSize: "18px" }}>
                                {block}
                            </Typography>
                        );
                    })
                ) : (
                    <Typography sx={{ fontSize: "18px", width: "100%" }}>
                        {content}
                    </Typography>
                )}
            </Box>
        </Box>
    ) : (
        <Box
            sx={{
                display: "flex",
                p: 2,
                bgcolor: "#004d56",
                gap: 2,
                maxWidth: "100%",
                my: 2,
            }}
        >
            <Avatar sx={{ ml: 0, bgcolor: "black", color: "white" }}>
                {auth?.user?.name[0]}
                {auth?.user?.name.split(" ")[1][0]}
            </Avatar>
            <Box>
                {messageBlocks ? (
                    messageBlocks.map((block, index) => {
                        return iscodeBlock(block) ? (
                            <SyntaxHighlighter
                                key={index}
                                language="javascript"
                                style={coldarkDark}
                            >
                                {block}
                            </SyntaxHighlighter>
                        ) : (
                            <Typography key={index} sx={{ fontSize: "18px" }}>
                                {block}
                            </Typography>
                        );
                    })
                ) : (
                    <Typography sx={{ fontSize: "18px" }}>{content}</Typography>
                )}
            </Box>
            {/* <Box>
                <Typography sx={{ fontSize: "20px" }}>{content}</Typography>
            </Box> */}
        </Box>
    );
};

export default ChatItem;
