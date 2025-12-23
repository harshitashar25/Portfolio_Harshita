import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Calendar, MapPin, Code, TrendingUp, Database, Cloud } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'SWE Intern',
      company: 'Cryptique',
      location: 'Remote',
      duration: 'Aug 2025 – Present',
      icon: <Code className="text-primary" size={24} />,
      achievements: [
        'Developed core product infrastructure incl. complete Cryptique SDK backend for event tracking/analytics',
        'Unified Web2 marketing data with Web3 wallet behavior',
        'Enhanced CQ Intelligence agents',
        'Shipped custom SQL analytics, smart-contract integrations',
        'Optimized infra (90% cost cut)',
        'Led ops: Cloudflare DNS & domain mapping for cqi.li, backend deploys on Vercel, UTM Link Shortener rollout & guide, and project tracking in Linear',
      ],
    },
    {
      title: 'MERN Full-Stack Intern',
      company: 'Sheldon AI',
      location: 'Remote',
      duration: 'Mar 2025 – Jul 2025',
      icon: <Database className="text-primary" size={24} />,
      achievements: [
        'Delivered features across MongoDB, Express.js, React, Node.js',
        'Raised page-load performance by ~25% and cut API latency via efficient data access',
        'Designed agentic AI workflows for automated interview feedback & reasoning-based question evaluation',
        'Boosted evaluation consistency by ~30%',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center text-foreground">Experience</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-10"></div>
        <p className="text-center text-lg max-w-3xl mx-auto mb-12 text-foreground/70">
          Building scalable systems and innovative solutions at leading tech companies.
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="overflow-hidden animate-fade-in bg-card border border-primary hover:border-primary/80 transition-colors"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-3 bg-primary/10">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                        <p className="text-lg font-medium text-foreground">{exp.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end gap-1 mt-2 md:mt-0">
                        <div className="flex items-center gap-2 text-sm text-foreground/60">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-foreground/60">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-foreground/70 mt-4">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="leading-relaxed">{achievement}</li>
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

export default Experience;

