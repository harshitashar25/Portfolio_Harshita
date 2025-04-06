
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'Master of Computer Science',
      institution: 'Stanford University',
      duration: '2020 - 2022',
      location: 'California, USA',
      description: 'Specialized in Artificial Intelligence and Human-Computer Interaction with a focus on creating intuitive user experiences.'
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Massachusetts Institute of Technology',
      duration: '2016 - 2020',
      location: 'Massachusetts, USA',
      description: 'Graduated with honors. Focused on software engineering and data structures.'
    },
    {
      degree: 'High School Diploma',
      institution: 'Tech Preparatory School',
      duration: '2012 - 2016',
      location: 'New York, USA',
      description: 'Graduated top of class with focus on mathematics and computer science.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">About Me</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-10"></div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2 animate-slide-in">
            <h3 className="text-2xl font-semibold mb-4">Get to know me!</h3>
            <p className="mb-4">
              I'm a passionate Full-Stack Developer with expertise in creating responsive web applications 
              and intuitive user interfaces. With over 5 years of experience in the field, I've worked on 
              diverse projects ranging from e-commerce platforms to enterprise solutions.
            </p>
            <p className="mb-4">
              My approach combines technical excellence with creative problem-solving to deliver 
              seamless digital experiences that meet business objectives while delighting users.
            </p>
            <p className="mb-4">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or hiking in the mountains.
            </p>
          </div>
          
          <div className="lg:w-1/2 animate-slide-in" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="overflow-hidden border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 p-2 bg-primary/10 rounded-full">
                        <GraduationCap className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold">{edu.degree}</h4>
                        <p className="text-lg font-medium text-muted-foreground">{edu.institution}</p>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
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
