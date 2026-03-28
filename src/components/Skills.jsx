import React from "react";

function Skills() {
  const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C++",
  "HTML",
  "CSS",
  "Node.js",
  "Express.js",
  "SQL",
  "MongoDB",
  "Git",
  "GitHub",
  "Docker",
  "AWS",
  "Machine Learning",
  "Deep Learning",
  "PyTorch",
  "TensorFlow",
  "NLP",
  "Computer Vision"
];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <div key={idx} className="skill-badge cardH">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;