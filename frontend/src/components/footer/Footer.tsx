import { Link } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <footer
            style={{
                marginTop: isMobile ? "150px" : "50px",
                minHeight: "20vh",
                marginBottom: "100px",
                color: "white",
                fontSize: "23px",
            }}
        >
            <p>
                Built by{" "}
                <Link
                    style={{ color: "red", textDecoration: "none" }}
                    to={"https://github.com/delee03"}
                >
                    Fuderr Phạm
                </Link>{" "}
                ft Báo con 🌍
            </p>
        </footer>
    );
};

export default Footer;
