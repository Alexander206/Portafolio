import PropTypes from "prop-types";

import { motion } from "framer-motion";

function ScrollAnimationWrapper({ children, className, ...props }) {
    return (
        <motion.section
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}
            className={className}
            {...props}
        >
            {children}
        </motion.section>
    );
}

ScrollAnimationWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string.isRequired,
};

export default ScrollAnimationWrapper;
