import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
    return (
        <div>
            <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                    500,
                    "Chat with your AI 🤖", // initially rendered starting point
                    1000,
                    "Built with ❤️ by Team Báo con",
                    1000,
                    "We are a team of 3 students from HUTECH University 👨‍🎓👩‍🎓👨‍🎓",
                    1000,
                    "This is our final project for Network Programming course 💻",
                    500,
                ]}
                speed={50}
                style={{
                    fontSize: "40px",
                    marginLeft: "50px",
                    height: "100px",
                    padding: "40px",
                    display: "inline-block",
                    textShadow: "3px 3px 10px blue",
                }}
                repeat={Infinity}
            />
        </div>
    );
};

export default TypingAnimation;
