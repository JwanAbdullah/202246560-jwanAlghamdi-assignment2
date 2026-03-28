import React from "react";
import kommute from "../assets/images/kommute.png";
import aic from "../assets/images/aic.png";
import kfupmgpt from "../assets/images/kfupm-gpt.png";

function Projects() {
  const projects = [
    {
      image: kommute,
      desc: "A smart transportation solution designed to improve student commuting efficiency.",
      link: "https://www.canva.com/design/DAG_gymoKEI/mMmAOfvqPfbOOdbuFgniWw/edit",
    },
    {
      image: aic,
      desc: "A responsive website built to manage AI Club events and showcase technical projects.",
      link: "https://aic-kfupm.github.io/AIC/",
    },
    {
      image: kfupmgpt,
      desc: "An AI-powered assistant built to help students access academic resources and information.",
      link: "https://github.com/HasanMajed/kfupm-chatbot.git",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="card-grid">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              className="card project-card cardH"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                className="project-card__image"
              />
              <p className="card__text">{project.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Projects;