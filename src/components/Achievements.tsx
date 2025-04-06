
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Star, Trophy } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Best Web Application Award',
      organization: 'Tech Innovation Summit 2023',
      year: '2023',
      description: 'Received recognition for developing an innovative healthcare management platform that improved patient care efficiency by 45%.',
      icon: <Trophy className="text-primary" size={24} />
    },
    {
      title: 'Open Source Contributor of the Year',
      organization: 'GitHub Community Awards',
      year: '2022',
      description: 'Recognized for significant contributions to open source projects, including over 200 pull requests and maintaining 3 popular libraries.',
      icon: <Star className="text-primary" size={24} />
    },
    {
      title: 'First Place Hackathon Winner',
      organization: 'Global Code Fest',
      year: '2021',
      description: 'Led a team of 4 developers to create an AI-powered solution for environmental monitoring, beating 50+ international teams.',
      icon: <Award className="text-primary" size={24} />
    },
    {
      title: 'Published Research Paper',
      organization: 'International Journal of Computer Science',
      year: '2020',
      description: 'Published a paper on "Efficient Algorithms for Real-time Data Processing in Edge Computing Environments".',
      icon: <Star className="text-primary" size={24} />
    },
    {
      title: 'Full-Stack Developer Certification',
      organization: 'Tech Academy',
      year: '2019',
      description: 'Completed an intensive 6-month program with distinction, mastering both front-end and back-end technologies.',
      icon: <Award className="text-primary" size={24} />
    },
    {
      title: 'Dean\'s List',
      organization: 'Stanford University',
      year: '2018-2022',
      description: 'Consistently maintained a GPA above 3.8 throughout the Master\'s program, earning a place on the Dean\'s List every semester.',
      icon: <Trophy className="text-primary" size={24} />
    }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Achievements & Awards</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-10"></div>
        <p className="text-center text-lg max-w-3xl mx-auto mb-12">
          A collection of milestones and recognitions I've received throughout my academic and professional journey.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="overflow-hidden animate-fade-in hover:shadow-lg transition-shadow" 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-primary/10 rounded-full">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{achievement.title}</h3>
                    <div className="flex justify-between items-center mt-1 mb-2">
                      <p className="text-muted-foreground">{achievement.organization}</p>
                      <span className="px-2 py-1 bg-secondary text-muted-foreground text-xs rounded">
                        {achievement.year}
                      </span>
                    </div>
                    <p>{achievement.description}</p>
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

export default Achievements;
