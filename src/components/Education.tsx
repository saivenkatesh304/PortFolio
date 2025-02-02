import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    institution: "Insight Academy ",
    degree: "Primary Education",
    year: "2010-2020",
    description: "Completed primary education with 91%"
  },
  {
    institution: "FIITJEE Junior College",
    degree: "Secondary Education",
    year: "2020-2022",
    description: "Completed secondary education with 85%"
  },
  {
    institution: "Institute of Aeronautical Engineering",
    degree: "Bachelor of Technology",
    year: "2022-2026",
    description: "Currently pursuing B.Tech in Computer Science(AIML) with 8.5 CGPA"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Education Timeline
        </h2>
        <VerticalTimeline lineColor="rgba(147, 51, 234, 0.2)">
          {educationData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education"
              contentStyle={{ 
                background: 'rgba(17, 24, 39, 0.8)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(147, 51, 234, 0.2)'
              }}
              contentArrowStyle={{ borderRight: '7px solid rgba(147, 51, 234, 0.2)' }}
              date={item.year}
              iconStyle={{ background: 'rgb(147, 51, 234)', color: '#fff' }}
              icon={<GraduationCap />}
            >
              <h3 className="vertical-timeline-element-title text-xl font-bold text-purple-500">
                {item.institution}
              </h3>
              <h4 className="vertical-timeline-element-subtitle mt-2 text-pink-400">
                {item.degree}
              </h4>
              <p className="text-gray-300 mt-2">{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Education