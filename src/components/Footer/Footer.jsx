import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <div style={{ overflow: "hidden" }}>
        <span className="primaryText">Take a coffe And Chat With Me</span>
      </div>
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left} id="people">
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by{" "}
            <a className={css.email} href="mailto:maheendrankp100@gmail.com">
              saying hi
            </a>
          </span>
        </div>

        <div className={css.right}>
          <img
            style={{ width: "80%" }}
            src="https://media.giphy.com/media/bY0eGUbaWbRi8/giphy.gif"
            alt=""
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
