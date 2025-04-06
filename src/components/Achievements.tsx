import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Star, Trophy } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Runner-Up – KodeCurrent Hackathon',
      organization: 'IEEE RGIPT & Prodigal AI',
      year: '2024',
      description: 'Developed a generic text-to-speech generator with voice cloning using AI. Awarded runner-up position in a national-level competition.',
      icon: <Trophy className="text-primary" size={24} />
    },
    {
      title: 'Top 5 Finalist – MNIT Jaipur Hackathon',
      organization: 'MNIT Jaipur',
      year: '2024',
      description: 'Built "Vidyamitra" – a student support portal featuring notes, quizzes, and club events. Recognized as one of the top 5 teams.',
      icon: <Star className="text-primary" size={24} />
    },
    {
      title: 'Runner-Up – GeeksforGeeks Hackathon',
      organization: 'RGIPT',
      year: '2024',
      description: 'Created an AI-based emotion synthesis system to bring emotional depth to generated speech.',
      icon: <Award className="text-primary" size={24} />
    },
    {
      title: 'Semifinalist – Dark Patterns Buster Hackathon',
      organization: 'Department of Consumer Affairs, GoI',
      year: '2024',
      description: 'Developed a browser extension that detects and blocks misleading online patterns. Made it to the semifinals.',
      icon: <Star className="text-primary" size={24} />
    },
    {
      title: 'Machine Learning Research & Applications',
      organization: 'Academic Projects',
      year: '2023-2025',
      description: 'Worked on real-world projects like solar energy estimation, Virtual Herbal Garden, and construction activity recognition using ML and computer vision.',
      icon: <Award className="text-primary" size={24} />
    },
    {
      title: 'Open Source Contributor',
      organization: 'GitHub',
      year: 'Ongoing',
      description: 'Contributed to multiple frontend and AI-based repositories. Focused on enhancing accessibility and UI/UX components.',
      icon: <Star className="text-primary" size={24} />
    },
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Achievements & Awards</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-10"></div>
        <p className="text-center text-lg max-w-3xl mx-auto mb-12">
          A collection of recognitions and accomplishments from my journey as a tech enthusiast, innovator, and student developer.
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
