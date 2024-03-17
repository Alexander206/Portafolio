import PropTypes from "prop-types";
import BtnGeneric from "../../../../library/btns/BtnGeneric";

// Components

const Buttons = ({ btns }) => {
    const listButtons = btns.map((item, index) => (
        <BtnGeneric key={index} text={item.text} route={item.url} className="btn_projetcs" icon={item.icon} />
    ));

    return <article className="buttons">{listButtons}</article>;
};

Buttons.propTypes = {
    btns: PropTypes.array.isRequired,
};

export default Buttons;
