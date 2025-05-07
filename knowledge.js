
import React, { useEffect, useRef, useState } from "react";


const skills = [
  { name: "WordPress", level: 75 },
  { name: "Drupal", level: 70 },
  { name: "Wix", level: 95 },
  { name: "Photoshop", level: 85 },
  { name: "Illustrator", level: 80 },
  { name: "JavaScript", level: 85 },
  { name: "HTML & CSS", level: 80 },
];

const KnowledgeLevel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div className="knowledge-container" ref={ref}>
      <h2>My Knowledge Level in Software</h2>
      <div className="bars-wrapper">
        {skills.map((skill, index) => (
          <div key={index} className="bar-item">
            <div className="bar-label">{skill.name}</div>
            <div className="bar-outer">
              <div
                className={`bar-inner ${isVisible ? "active" : ""}`}
                style={{ height: isVisible ? `${skill.level}%` : "0%" }}
              >
                <span>{skill.level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeLevel;
