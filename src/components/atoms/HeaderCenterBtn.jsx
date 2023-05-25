import React from "react";

const HeaderCenterBtn = ({ handlerMenu, setHandlerMenu }) => {
    return (
        <button className="header_btn" onClick={() => setHandlerMenu(!handlerMenu)}>
            <ion-icon name="reorder-three"></ion-icon>
        </button>
    );
};

export default HeaderCenterBtn;
