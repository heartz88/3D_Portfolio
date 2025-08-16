import { motion as Motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";



const SectionWrapper = (Component, idName) =>
function HOC() {
    return (
        <Motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
            <span className="hash-span" id={idName}>
                &nbsp;
            </span>
            <Component />
        </Motion.section>
    );
};

export default SectionWrapper;