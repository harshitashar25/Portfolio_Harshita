import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Briefcase } from 'lucide-react';

const Responsibility = () => {
  const responsibilities = [
    {
      title: 'Event Management Team',
      organization: 'Geeks for Geeks',
      duration: 'Feb 2024 - Present',
      responsibilities: [
        'Coordinated and organized technical events and coding contests',
        'Managed logistics and volunteer teams for seamless execution',
        'Collaborated with sponsors and speakers for event participation',
        'Contributed to promotional content and participant engagement'
      ],
      icon: <Users className="text-primary" size={24} />
    },
    {
      title: 'Co-Coordinator (PR, Outreach & Designing)',
      organization: 'RGIPT Sports Council',
      duration: 'Aug 2024 - Present',
      responsibilities: [
        'Led outreach efforts to increase sports participation across campus',
        'Designed promotional material for inter- and intra-college events',
        'Managed public relations and media coverage for sports events',
        'Collaborated with student bodies and external organizations for smooth coordination'
      ],
      icon: <Briefcase className="text-primary" size={24} />
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
            <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
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
