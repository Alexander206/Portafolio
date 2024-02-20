import { useState, useEffect } from "react";

const Greeting = ({ greeting }) => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(200 - Math.random() * 50);
    const [index, setIndex] = useState(1);
    const toRotate = greeting.profession;
    const period = greeting.timer;

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    }, [text, delta]);

    const tick = () => {
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
        const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex((prevIndex) => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(150);
        } else {
            setIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <h1>
            {greeting.greeting}
            <br />
            <span className="txt-rotate" dataperiod="800" data-rotate={`${toRotate}`}>
                <span className="wrap">{text}</span>
            </span>
        </h1>
    );
};

export default Greeting;
