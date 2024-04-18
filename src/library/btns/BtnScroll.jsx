import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

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

        let currentBtnRef = btnRef.current;

        const updateElementState = () => {
            if (!isVisible && isAnimationEnd) {
                setElementClass("hidden");
            } else if (!isVisible) {
                setElementClass("fade-out");
            } else {
                setElementClass("");
            }
        };

        updateElementState();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (currentBtnRef) {
                currentBtnRef.removeEventListener("animationend", onAnimationEnd);
            }
        };
    }, [isVisible, isAnimationEnd]);

    return <a ref={btnRef} href={href} className={`mouse ${elementClass} clickable`} />;
};

BtnScroll.propTypes = {
    href: PropTypes.string.isRequired,
};

export default BtnScroll;
