
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Briefcase, User } from 'lucide-react';

const Responsibility = () => {
  const responsibilities = [
    {
      title: 'Technical Lead',
      organization: 'Tech Solutions Inc.',
      duration: '2022 - Present',
      responsibilities: [
        'Lead a team of 8 developers across multiple projects',
        'Architect system designs and establish coding standards',
        'Perform code reviews and mentor junior developers',
        'Collaborate with product managers to define technical roadmaps'
      ],
      icon: <Users className="text-primary" size={24} />
    },
    {
      title: 'Open Source Maintainer',
      organization: 'React UI Components Library',
      duration: '2020 - Present',
      responsibilities: [
        'Maintain a popular open-source UI component library with 10K+ stars on GitHub',
        'Review and merge community contributions',
        'Write comprehensive documentation and create examples',
        'Ensure backward compatibility and accessibility compliance'
      ],
      icon: <User className="text-primary" size={24} />
    },
    {
      title: 'Workshop Instructor',
      organization: 'Tech Community Meetups',
      duration: '2019 - Present',
      responsibilities: [
        'Conduct monthly workshops on web development technologies',
        'Create curriculum and hands-on exercises for participants',
        'Mentor beginner developers through coding challenges',
        'Organize coding hackathons and community events'
      ],
      icon: <Briefcase className="text-primary" size={24} />
    },
    {
      title: 'Technical Content Writer',
      organization: 'Dev Hub Blog',
      duration: '2018 - Present',
      responsibilities: [
        'Author in-depth technical articles on emerging technologies',
        'Create coding tutorials with practical examples',
        'Contribute to the developer education community',
        'Review and edit technical content from other contributors'
      ],
      icon: <User className="text-primary" size={24} />
    }
  ];

  return (
    <section id="responsibility" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Positions of Responsibility</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-10"></div>
        <p className="text-center text-lg max-w-3xl mx-auto mb-12">
          Beyond my technical expertise, I've taken on various leadership roles and responsibilities
          that have allowed me to make a broader impact in the tech community.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {responsibilities.map((position, index) => (
            <Card key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-primary/10 rounded-full">
                    {position.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{position.title}</h3>
                    <div className="flex justify-between items-center mt-1 mb-3">
                      <p className="text-muted-foreground">{position.organization}</p>
                      <span className="px-2 py-1 bg-secondary text-xs rounded">
                        {position.duration}
                      </span>
                    </div>
                    <ul className="list-disc pl-5 space-y-1">
                      {position.responsibilities.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Responsibility;
