import PropTypes from "prop-types";

const HeaderCenterBtn = ({ handlerMenu, setHandlerMenu }) => {
    return (
        <button className="header_btn" onClick={() => setHandlerMenu(!handlerMenu)} aria-label="handler menu">
            <ion-icon name="reorder-three"></ion-icon>
        </button>
    );
};

HeaderCenterBtn.propTypes = {
    handlerMenu: PropTypes.bool.isRequired,
    setHandlerMenu: PropTypes.func.isRequired,
};

export default HeaderCenterBtn;
