import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer
            style={{
                marginTop: "50px",
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
