import { motion as Motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { github } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

// Web/External Link Icon Component (inline SVG)
const WebIcon = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="w-1/2 h-1/2 object-contain"
  >
    <path 
      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" 
      stroke="white" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <polyline 
      points="15,3 21,3 21,9" 
      stroke="white" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <line 
      x1="10" 
      y1="14" 
      x2="21" 
      y2="3" 
      stroke="white" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const ProjectCard = ({ index, name, description, tags, image, source_code_link, isWebsite = false }) => {
  return (
    <Motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <div
            className="w-full h-full rounded-2xl bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              imageRendering: 'crisp-edges'
            }}
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              title={isWebsite ? "Visit Website" : "View Source Code"}
            >
              {isWebsite ? (
                <WebIcon />
              ) : (
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              )}
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white text-[24px] font-bold">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

      </Tilt>
    </Motion.div>
  )
}

const Works = () => {
  return (
    <>
    <Motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}
      >My work / Contributed </p>
      <h2 className={styles.sectionHeadText}>Projects</h2>
    </Motion.div>
    <div className="w-full flex">
      <Motion.p
        variants ={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        These are some of the projects I have worked on or contributed to. They showcase my skills in web development, backend development,
        and various technologies. There are options to visit the Github for some of these as the <span className="font-bold">BluePrint Brief</span> repository is private as it is a company however it is available as a website.
      </Motion.p>
    </div>
    <div className="mt-20 flex flex-wrap gap-7">
      {projects.map((project, index) => (
        <ProjectCard 
        key={`project-${index}`}
        index={index}
        {...project} />
      ))}
    </div>
    </>
    
  )
}

export default  SectionWrapper(Works, "")