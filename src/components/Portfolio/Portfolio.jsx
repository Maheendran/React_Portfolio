import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import {
  fadeIn,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion";

import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { cssData, project, reactdata } from "./Projects";
const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div
          variants={textVariant(0.4)}
          className={`flexCenter ${css.heading} m`}
        >
          <div>
            <span className="primaryText">My Latest Works</span>
          </div>
        </motion.div>

        <div className={` ${css.boxx} `}>
          <p className={`${css.project_head} `}>React</p>

          <div
            className={` ${css.showCase}  ${css.boxx} `}
            style={{
              display: "flex",
              width: "100vw",
              overflow: "scroll",
              padding: "10px",
              margin: "auto",
            }}
          >
            {reactdata.map((data, index) => (
              <a href={data.github}>
                <div>
                  <Tooltip id={`${index}react`} aria-haspopup="true">
                    <h1 style={{ textAlign: "center" }}>{data.name}</h1>
                    <p>{data.discription}</p>

                    <ul>
                      <li>{data.tech}</li>
                    </ul>
                  </Tooltip>

                  <a data-tooltip-id={`${index}react`}>
                    <motion.img
                      variants={fadeIn("left", "tween", 0.5, 0.6)}
                      src={data.img}
                      alt="project"
                    />
                  </a>
                </div>
              </a>
            ))}
          </div>

          <p className={`${css.project_head} `}>Javascript</p>

          <div
            className={` ${css.showCase}  ${css.boxx} `}
            style={{
              display: "flex",
              width: "100vw",
              overflow: "scroll",
              padding: "10px",
              margin: "auto",
            }}
          >
            {project.map((data, index) => (
              <a href={data.github}>
                <div>
                  <Tooltip id={`${index}js`} aria-haspopup="true">
                    <h1 style={{ textAlign: "center" }}>{data.name}</h1>
                    <p>{data.discription}</p>

                    <ul>
                      <li>{data.tech}</li>
                    </ul>
                  </Tooltip>

                  <a data-tooltip-id={`${index}js`}>
                    <motion.img
                      variants={fadeIn("left", "tween", 0.5, 0.6)}
                      src={data.img}
                      alt="project"
                    />
                  </a>
                </div>
              </a>
            ))}
          </div>

          <p className={`${css.project_head} `}>CSS & Animations</p>
          <div
            className={` ${css.showCase}  ${css.boxx} `}
            style={{
              display: "flex",
              width: "100vw",
              overflow: "scroll",
              padding: "10px",
              margin: "auto",
            }}
          >
            {cssData.map((data, index) => (
              <a href={data.fachebook}>
                <div>
                  <Tooltip id={`${index}css`} aria-haspopup="true">
                    <h1 style={{ textAlign: "center" }}>{data.name}</h1>
                    <p>{data.discription}</p>

                    <ul>
                      <li>{data.tech}</li>
                    </ul>
                  </Tooltip>

                  <a data-tooltip-id={`${index}css`}>
                    <motion.img
                      variants={fadeIn("left", "tween", 0.5, 0.6)}
                      src={data.img}
                      alt="project"
                    />
                  </a>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
