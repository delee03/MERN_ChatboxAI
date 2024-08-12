import { useLottie } from "lottie-react";
import animateIcon from "../assets/animation/404animation.json";

const PageNotFound = () => {
    const options = {
        animationData: animateIcon,
        loop: true,
    };
    const { View } = useLottie(options);

    return (
        <div
            style={{
                width: "60vw",
                height: "70vh",
                display: "flex",
                flexDirection: "row",
                margin: "0 auto",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {View}
        </div>
    );
};

export default PageNotFound;
