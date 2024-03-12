import { useEffect, useState, useRef } from "react";
import "./btnScroll.scss";

const BtnScroll = ({ href }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isAnimationEnd, setAnimationEnd] = useState(false);
    const [elementClass, setElementClass] = useState("mouse");

    const btnRef = useRef(null);

    useEffect(() => {
        const onAnimationEnd = () => {
            setAnimationEnd(true);
        };

        const handleScroll = () => {
            if (window.scrollY > 60) {
                setIsVisible(false);
                if (btnRef.current) {
                    btnRef.current.addEventListener("animationend", onAnimationEnd);
                }
            } else {
                setIsVisible(true);
                setAnimationEnd(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        if (!isVisible && isAnimationEnd) {
            setElementClass("hidden");
        } else if (!isVisible) {
            setElementClass("fade-out");
        } else {
            setElementClass("");
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (btnRef.current) {
                btnRef.current.removeEventListener("animationend", onAnimationEnd);
            }
        };
    }, [isVisible, isAnimationEnd]);

    return <a ref={btnRef} href={href} className={`mouse ${elementClass}`} />;
};

export default BtnScroll;
