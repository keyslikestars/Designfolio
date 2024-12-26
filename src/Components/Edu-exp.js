import React from "react";
import "../edu-exp.css";

// Data for Education and Experience
const educationExperienceData = [
  {
    id: 1,
    title: "Bachelor Degree of Development",
    institution: "University of Toronto",
    years: "2018 - 2022",
  },
  {
    id: 2,
    title: "UI/UX Design Certificate",
    institution: "University of Waterlaw",
    years: "2016 - 2018",
  },
  {
    id: 3,
    title: "Bachelor Degree of Communication",
    institution: "University of Ottawa",
    years: "2014 - 2016",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    institution: "Dev Studio CA",
    years: "2016 - Running",
  },
  {
    id: 2,
    title: "Mobile & IOS Developer",
    institution: "Tech Park Inc.",
    years: "2012 - 2016",
  },
  {
    id: 3,
    title: "Web Development",
    institution: "Art Studio CA",
    years: "2006 - 2012",
  },
];

// Component for rendering Education and Experience section
const EducationExperience = () => {
  return (
    <div className="resume-section">
      {/* Section Title */}
      <h5 className="section-label">Resume</h5>
      <h2 className="section-title">EDUCATION & EXPERIENCE</h2>

      {/* Main Content */}
      <div className="resume-container">
        {/* Education Section */}
        <div className="education">
          {educationExperienceData.map((item) => (
            <div className="resume-card" key={item.id}>
              <h3 className="resume-title">{item.title}</h3>
              <p className="resume-institution">{item.institution}</p>
              <span className="resume-years">{item.years}</span>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="experience">
          {experienceData.map((item) => (
            <div className="resume-card" key={item.id}>
              <h3 className="resume-title">{item.title}</h3>
              <p className="resume-institution">{item.institution}</p>
              <span className="resume-years">{item.years}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationExperience;
