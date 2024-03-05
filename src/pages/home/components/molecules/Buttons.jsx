// Dependences
import PropTypes from "prop-types";

import Btn from "../atoms/Btn";

const Buttons = ({ btns }) => {
    const listButtons = btns.map((item, index) => <Btn key={index} text={item.text} url={item.url} icon={item.icon} />);

    return <article className="buttons">{listButtons}</article>;
};

Buttons.propTypes = {};

export default Buttons;
