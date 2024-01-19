import React from "react";
import css from "./Experties.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion.js";
const Experties = () => {
  return (
    <section className={css.wrapper}>
      <a className="anchor" id="experties"></a>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}
      >
      
        <motion.div variants={textVariant(0.5)} className={css.rightSide}>
          <span className="primaryText" style={{ textAlign: "center" }}>
            About me{" "}
          </span>
          <span className="secondaryText">
            <ul>
              <li>
                {" "}
                I'm a passionate Developer, with strong administrative and
                communication skills, good attention to detail and the ability
                to write efficient code using MERN Stack.
              </li>
              <li>
                {" "}
                My interest in web development started back last year when I was
                trying to edit things on the web, that taught me a lot about
                HTML & CSS.
              </li>
              <li>
                {" "}
                As I grow and flourish as a Developer, one thing which keeps me
                going is my inquisitiveness for discovering new things every
                day.
              </li>
              <li>
                {" "}
                Fast Forwarding to today, I built a number of web applications
                and 4 major projects. Learned a great deal about teamwork,
                leadership, and communication. After months of rigorous
                training, here I am looking for an opportunity as a full stack
                web developer.
              </li>
            </ul>
          </span>

          <div className={` ${css.stats}`} style={{ textAlign: "center" }}>
            <div className={`flexCenter ${css.stat}`}>
              <span className="primaryText">25+</span>
              <span className="secondaryText">Project Completed</span>
            </div>
       
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experties;
