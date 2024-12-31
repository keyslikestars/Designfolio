import React from 'react'
import '../services.css'


const servicesData = [
  {
    icon: "🌐", // Replace with appropriate icons
    title: "Web Design",
    description:
      "Sugary sweet lorem ipsum? You got it with Cup cake Ipsum, the only text generator treatment contrary.",
  },
  {
    icon: "💻",
    title: "Web Development",
    description:
      "Sugary sweet lorem ipsum? You got it with Cup cake Ipsum, the only text generator treatment contrary.",
  },
  {
    icon: "📱",
    title: "Mobile Development",
    description:
      "Sugary sweet lorem ipsum? You got it with Cup cake Ipsum, the only text generator treatment contrary.",
  },
  {
    icon: "📱",
    title: "IOS Development",
    description:
      "Sugary sweet lorem ipsum? You got it with Cup cake Ipsum, the only text generator treatment contrary.",
  },
];

const Services = () => {
  return (
    <div className="services-section">
      <h2 className="services-heading">MY SERVICES</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
