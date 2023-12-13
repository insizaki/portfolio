import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            I'm a student that balanced both in hardskill and softskill.
          </p>
          <p className="font-playfair font-semibold text-4xl mb-5">
            HARD <span className="text-red">SKILLS</span>
          </p>
          <li>HTML</li>
          <li>CSS</li>
          <li>Laravel</li>
          <li>ReactJS</li>
          <li>Python</li>
          <li>Tailwind</li>
          <li>Bootstrap</li>
          <p className="mt-10 font-playfair font-semibold text-4xl mb-5">
            SOFT <span className="text-red">SKILLS</span>
          </p>
          <li>Communication</li>
          <li>Teamwork</li>
          <li>Team Management</li>
          <li>Self Management</li>
          <li>Public Speaking</li>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
      
      </div>
    </section>
  );
};

export default MySkills;
