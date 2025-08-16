
import { Tilt } from 'react-tilt';

import { motion as Motion } from 'framer-motion';
import { services } from '../constants';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

import SectionWrapper from "../hoc/SectionWrapper";

const Servicecard = ({index, title, icon}) => {
  return (
    <Tilt
    className="xs:w-[250px] w-full">
      <Motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </Motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <Motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </Motion.div>
      <Motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a full-stack developer with a passion for building digital experiences. 
        Currently, I'm focused on developing web applications and exploring new technologies.
      </Motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <Servicecard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")