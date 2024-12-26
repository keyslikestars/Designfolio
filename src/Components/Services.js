import React from 'react'
import '../services.css'

const servicesData = [
    {
      id: 1,
      title: "Web Design",
      description:
        "Sugary sweet lorem ipsum? You got it with Cup cake Ipsum, the only text generator treatment contrary.",
      icon: "🖌️",
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "Sugary sweet lorem ipsum? You got it with Cup cake Ipsum, the only text generator treatment contrary.",
      icon: "💻",
    },
    {
      id: 3,
      title: "Mobile Development",
      description:
        "Sugary sweet lorem ipsum? You got it with Cup cake Ipsum, the only text generator treatment contrary.",
      icon: "📱",
    },
    {
      id: 4,
      title: "IOS Development",
      description:
        "Sugary sweet lorem ipsum? You got it with Cup cake Ipsum, the only text generator treatment contrary.",
      icon: "📲",
    },
  ];

function Services() {
  return (
<div className="services-section">
      <h5 className="section-label"> Services</h5>
      <h2 className="section-title">MY SERVICES</h2>
      <div className="services-container">
            {servicesData.map((service) => (
            <div className="service-card" key={service.id}>
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
            </div>
            ))}
      </div>
    </div>  
    )
}

export default Services
