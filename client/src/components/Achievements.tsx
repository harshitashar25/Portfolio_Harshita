import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Star, Trophy } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Reliance Foundation UG Scholar',
      organization: 'Top 5,000 from 58,000+ applicants nationwide',
      year: '2024',
      description:
        'Selected among the top 5,000 students from over 58,000 applicants across India for the Reliance Foundation Undergraduate Scholarship program.',
      icon: <Award className="text-primary" size={24} />,
    },
    {
      title: '2nd Runner-Up, Devbhoomi Cyber Hackathon 3.0',
      organization: 'Selected Top 15 from 1000+ participants',
      year: '2025',
      description:
        'Built Blockchain-Enabled Financial Fraud Traceability System using R3 Corda & Federated AI for cross-bank fraud tracking. Selected among top 15 teams from 1000+ participants.',
      icon: <Trophy className="text-primary" size={24} />,
    },
    {
      title: 'First Runner-up, KodeKurrent (IEEE RGIPT)',
      organization: 'EmotiVox 2.0 showcased in speech-AI',
      year: '2024',
      description:
        'Developed EmotiVox 2.0, a real-time voice-cloning system showcased in speech-AI category. Awarded first runner-up position.',
      icon: <Trophy className="text-primary" size={24} />,
    },
    {
      title: 'First Runner-up, HackaGeek (GFG)',
      organization: 'GeeksforGeeks RGIPT Chapter',
      year: '2024',
      description:
        'Built real-time voice-cloning system and secured first runner-up position in the hackathon organized by GeeksforGeeks RGIPT Chapter.',
      icon: <Trophy className="text-primary" size={24} />,
    },
    {
      title: 'Top 10, Sphinx Hackathon (MNIT Jaipur)',
      organization: 'From 4,000+ participants',
      year: '2024',
      description:
        'Achieved top 10 position in Sphinx Hackathon organized by MNIT Jaipur, competing against 4,000+ participants.',
      icon: <Star className="text-primary" size={24} />,
    },
    {
      title: 'Semi-Finalist, Dark Patterns Buster',
      organization: 'Govt. of India - Among 40,000+ students nationwide',
      year: '2024',
      description:
        'Selected as semi-finalist in Dark Patterns Buster hackathon organized by Government of India, competing among 40,000+ students nationwide.',
      icon: <Star className="text-primary" size={24} />,
    },
  ];

  return (
    <section
      id="achievements"
      className="py-20 bg-background text-foreground"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center text-foreground">
          Achievements & Awards
        </h2>
        <div className="w-20 h-1 mx-auto mb-10 bg-primary"></div>
        <p className="text-center text-lg max-w-3xl mx-auto mb-12 text-foreground/70">
          A collection of recognitions and accomplishments from my journey as a tech enthusiast,
          innovator, and student developer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="overflow-hidden animate-fade-in transition-shadow bg-card border border-border"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-primary/10">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{achievement.title}</h3>
                    <div className="flex justify-between items-center mt-1 mb-2 text-foreground/60">
                      <p>{achievement.organization}</p>
                      <span className="px-2 py-1 text-xs bg-muted border border-border">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-foreground/80">{achievement.description}</p>
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
