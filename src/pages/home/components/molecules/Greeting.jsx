import React, { useState, useEffect } from "react";

const Greeting = ({ greeting }) => {
    const [text, setText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isBlinking, setIsBlinking] = useState(false);
    const toRotate = greeting.profession;
    const fullText = toRotate[0];

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex < fullText.length) {
                setText((prevText) => prevText + fullText[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            } else {
                clearInterval(interval);
                setIsBlinking(true);
            }
        }, greeting.timer);

        return () => clearInterval(interval);
    }, [currentIndex, fullText, greeting.timer]);

    useEffect(() => {
        let blinkingInterval;

        if (isBlinking) {
            blinkingInterval = setInterval(() => {
                setIsBlinking(false);
            }, 500);
        } else {
            blinkingInterval = setInterval(() => {
                setIsBlinking(true);
            }, 500);
        }

        return () => clearInterval(blinkingInterval);
    }, [isBlinking]);

    return (
        <h1>
            {greeting.greeting}
            <br />
            <span className="txt-rotate" dataperiod="800" data-rotate={`${toRotate}`}>
                <span className="wrap" style={{ borderRight: isBlinking ? "0.08rem solid transparent" : "0.08rem solid var(--darkNeutral)" }}>
                    {text}
                </span>
            </span>
        </h1>
    );
};

export default Greeting;
