import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'Integrated Dual Degree In Computer Science',
      institution: 'Rajiv Gandhi Institute Of Petroleum Technology',
      duration: '2023 - 2028',
      location: 'Amethi, Uttar Pradesh',
      description:
        'Pursuing B.Tech in Computer Science and M.Tech in Artificial Intelligence. Involved in diverse projects like AI-based emotion recognition, solar energy estimation portal, Virtual Herbal Garden, and construction activity monitoring using ML. Hackathon finalist and runner-up at multiple national events.',
    },
  ];

  return (
    <section
      id="about"
      className="py-20"
      style={{ backgroundColor: '#00171F', color: '#FFFFFF' }} // Rich Black bg, white text
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">About Me</h2>
        <div className="w-20 h-1 mx-auto mb-10" style={{ backgroundColor: '#ADEBFF' }}></div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2 animate-slide-in">
            <h3 className="text-2xl font-semibold mb-4" style={{ color: '#ADEBFF' }}>
              Get to know me!
            </h3>
            <p className="mb-4">
              I'm a passionate Full-Stack Developer with expertise in creating responsive web applications
              and intuitive user interfaces. I enjoy blending creativity with technical know-how, working on
              projects that solve real-world problems in healthcare, education, and sustainability.
            </p>
            <p className="mb-4">
              My portfolio includes work in AI-based emotion synthesis, solar power estimation,
              Virtual Reality for skill enhancement, and ML-powered construction progress tracking.
            </p>
            <p className="mb-4">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source
              projects, or hiking in the mountains.
            </p>
          </div>

          <div className="lg:w-1/2 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: '#ADEBFF' }}>
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-l-4"
                  style={{ borderColor: '#ADEBFF', backgroundColor: '#003459', color: '#FFFFFF' }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 p-2 rounded-full" style={{ backgroundColor: '#ADEBFF22' }}>
                        <GraduationCap style={{ color: '#ADEBFF' }} size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold">{edu.degree}</h4>
                        <p className="text-lg font-medium" style={{ color: '#FFFFFFB3' }}>
                          {edu.institution}
                        </p>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm" style={{ color: '#FFFFFFB3' }}>
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                        <p className="mt-2">{edu.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
