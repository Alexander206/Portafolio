import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import "./cursor.scss";

const Cursor = ({ cursorActive, setCursorActive }) => {
    const [isClickableHovered, setIsClickableHovered] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [cursorTwoPosition, setCursorTwoPosition] = useState({ x: 0, y: 0 });
    let location = useLocation();

    useEffect(() => {
        const clickableElements = document.querySelectorAll(".clickable");

        const handleElementMouseOver = () => {
            setIsClickableHovered(true);
        };

        const handleElementMouseOut = () => {
            setIsClickableHovered(false);
        };

        clickableElements.forEach((element) => {
            element.addEventListener("mouseover", handleElementMouseOver);
            element.addEventListener("mouseout", handleElementMouseOut);

            return () => {
                element.removeEventListener("mouseover", handleElementMouseOver);
                element.removeEventListener("mouseout", handleElementMouseOut);
            };
        });
    }, [location]);

    useEffect(() => {
        const handleMouseDown = () => {
            setCursorActive(true);
        };

        const handleMouseUp = () => {
            setCursorActive(false);
        };

        if (isClickableHovered) {
            setIsClickableHovered(false);
        }

        const handleLocationChange = () => {
            setIsClickableHovered(false);
        };

        const handleMouseMove = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });

            setTimeout(() => {
                setCursorTwoPosition({ x: e.clientX, y: e.clientY });
            }, 65);
        };

        window.addEventListener("popstate", handleLocationChange);
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mousedown", handleMouseDown);
        document.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.addEventListener("popstate", handleLocationChange);
            document.removeEventListener("mousemove", handleMouseMove);
            document.addEventListener("mousedown", handleMouseDown);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [location]);

    const classNameCursor = `cursor ${cursorActive ? "active" : ""} ${isClickableHovered ? "pointer" : ""}`.trim();
    const icon = `${isClickableHovered ? "ellipse" : "ellipse"}`;

    return (
        <>
            <div className={classNameCursor} style={{ left: cursorPosition.x, top: cursorPosition.y }}>
                <ion-icon name={icon}></ion-icon>
            </div>
            <div className={classNameCursor} style={{ left: cursorTwoPosition.x, top: cursorTwoPosition.y }}></div>
        </>
    );
};

Cursor.propTypes = {
    cursorActive: PropTypes.bool.isRequired,
    setCursorActive: PropTypes.func.isRequired,
};

export default Cursor;
