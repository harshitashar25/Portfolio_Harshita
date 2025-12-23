import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Briefcase } from 'lucide-react';

const Responsibility = () => {
  const responsibilities = [
    {
      title: 'PR & Outreach Head',
      organization: 'GeeksforGeeks RGIPT Chapter',
      duration: 'Aug 2024 – Present',
      responsibilities: [
        'Leading public relations and outreach initiatives for the GeeksforGeeks RGIPT Chapter',
        'Managing communication with external partners, sponsors, and industry professionals',
        'Organizing technical workshops, coding contests, and community events',
        'Building and maintaining relationships with tech communities and organizations',
        'Coordinating promotional activities and social media presence'
      ],
      icon: <Users className="text-primary" size={24} />
    },
    {
      title: 'Co-Coordinator (Design, Publicity & PR)',
      organization: 'Sports Council, RGIPT',
      duration: 'Aug 2024 – May 2025',
      responsibilities: [
        'Led design and publicity efforts for sports events and activities',
        'Managed public relations and media coverage for sports events',
        'Designed promotional materials for inter- and intra-college sports competitions',
        'Coordinated with various departments and student bodies for event execution',
        'Enhanced visibility and participation in sports activities across campus'
      ],
      icon: <Briefcase className="text-primary" size={24} />
    }
  ];

  return (
    <section id="responsibility" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center text-foreground">
          Leadership & Positions of Responsibility
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-10"></div>
        <p className="text-center text-lg max-w-3xl mx-auto mb-12 text-foreground/70">
          Beyond my technical expertise, I've taken on various leadership roles and responsibilities
          that have allowed me to make a broader impact in the tech community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {responsibilities.map((position, index) => (
            <Card key={index} className="animate-fade-in bg-card border border-border" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-primary/10">
                    {position.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{position.title}</h3>
                    <div className="flex justify-between items-center mt-1 mb-3">
                      <p className="text-foreground/70">{position.organization}</p>
                      <span className="px-2 py-1 bg-muted text-foreground/80 text-xs border border-border">
                        {position.duration}
                      </span>
                    </div>
                    <ul className="list-disc pl-5 space-y-1 text-foreground/70">
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
