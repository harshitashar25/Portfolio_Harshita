import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'Integrated Dual Degree — Computer Science and Engineering',
      institution: 'Rajiv Gandhi Institute of Petroleum Technology',
      duration: '2023–28',
      location: 'Jais, Amethi',
      cgpa: 'CGPA: 8.36 / 10',
      description:
        'Pursuing IDD in Computer Science with focus on full-stack development, AI/ML, blockchain, and distributed systems. Active in hackathons, open-source contributions, and technical leadership roles.',
    },
    {
      degree: 'CBSE Board',
      institution: 'DAV Public School',
      duration: '2021–23',
      location: 'Bist, Jamshedpur',
      cgpa: 'Percent: 87.8%',
      description:
        'Completed higher secondary education with focus on science and mathematics.',
    },
    {
      degree: 'CBSE Board',
      institution: "St. Mary's English High School",
      duration: '2009–21',
      location: 'Jamshedpur',
      cgpa: 'Percent: 93.4%',
      description:
        'Completed primary and secondary education with excellent academic performance.',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-background text-foreground"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center text-foreground">About Me</h2>
        <div className="w-20 h-1 mx-auto mb-10 bg-primary"></div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2 animate-slide-in">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              About Me
            </h3>
            <p className="mb-4 text-foreground/80">
              I'm a Software Engineer and Full-Stack Developer currently working as a SWE Intern at Cryptique, 
              building core product infrastructure including SDK backends, analytics systems, and Web3 integrations. 
              Previously, I interned at Sheldon AI, developing MERN stack applications and AI-powered workflows.
            </p>
            <p className="mb-4 text-foreground/80">
              My technical expertise spans full-stack development (React, Node.js, MongoDB), blockchain technologies 
              (Ethereum, R3 Corda), AI/ML (TensorFlow, RAG systems), and cloud infrastructure. I've built systems 
              handling real-time fraud detection, AI-driven campus assistants, mentorship platforms, and voice cloning applications.
            </p>
            <p className="mb-4 text-foreground/80">
              I'm passionate about solving complex technical challenges, optimizing system performance, and building 
              scalable solutions. When I'm not coding, I contribute to open-source projects, participate in hackathons, 
              and explore emerging technologies in Web3 and AI.
            </p>
            <div className="mt-6 p-4 bg-card border border-border">
              <h4 className="text-lg font-semibold mb-2 text-primary">Key Courses</h4>
              <p className="text-sm text-foreground/70">
                Data Structures & Algorithms, DBMS, Web Technology, Discrete Mathematics, Statistical Methods & Data Analysis, 
                Operating Systems, Advance Algorithms, Artificial Intelligence, Theory Of Computation
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border border-primary bg-card"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 p-2 bg-primary/10">
                        <GraduationCap className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-foreground">{edu.degree}</h4>
                        <p className="text-lg font-medium text-foreground/70">
                          {edu.institution}
                        </p>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-foreground/60">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{edu.location}</span>
                          </div>
                          {edu.cgpa && (
                            <div className="flex items-center gap-1 text-primary">
                              <span className="font-semibold">{edu.cgpa}</span>
                            </div>
                          )}
                        </div>
                        <p className="mt-2 text-foreground/80">{edu.description}</p>
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
