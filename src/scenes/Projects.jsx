import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { Carousel } from "@material-tailwind/react";


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, desc }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          {desc}.
        </p>
      </div>
      <img src={`../assets/${projectTitle}.png`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red ml-7">ORGANIZATIONAL</span>EXPERIENCE
          </p>
          <div className="flex justify-center mt-5 ">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          I have orgazisation experiences as Internal Human Resource Development BEM FILKOM UB 2023.
          The duties of the person in charge of this position is Monitoring & Evaluation, Upgrading Skill and many more.
          The purpose of these position is to keep organization performance stable
        </p>
      </motion.div>
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold text-black"
          >
            BEM FILKOM UB 2023<br />
            Human Resource Development
          </div>
          <Project title="Upgrading BEM 1" desc="BEM Filkom Upgrading Organization as Steering Commitee"/>
          <Project title="Upgrading BEM 2" desc="BEM Filkom Upgrading Organization as Project Officer"/>
          <Project title="Training Organization" desc="Head of Event"/>
          <Project title="Leader Of Tomorrow" desc="Known as L.O.T 5.0"/>
          <Project title="Internship Staff Organizer" desc="as Public Relation"/>

        </motion.div>
      </div>


        <motion.div
        className="md:w-2/5 mx-auto text-center mt-10 p-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="mt-4 p-4">
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
        List of view of my recent projects that based on many tech stack.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            WEBSITES PROJECT
          </div>
          <Project title="Malang Assistant" desc="A research project based of Mobile Game Media Laboratory, developed with php native based on MVC concept. On process to Intellectual Property Right registration"/>
          <Project title="FilkomStar" desc="Website developed with Laravel framework. Site for Inventory Management in FILKOM"/>

          {/* ROW 2 */}
          <Project title="GapuraUB" desc="College Academic Application redesign"/>
          <Project title="SkillZone" desc="Educational apps to develop Skill with learning framework"/>

          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            DESIGN PROJECT
          </div>
         <a href="https://drive.google.com/drive/folders/1OLRXvms19YF8mUklyrzg-acJBTCG04L_?usp=drive_link"> <button
              className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
              target="_blank" 
            >
              Other Portfolio
            </button>
            </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
