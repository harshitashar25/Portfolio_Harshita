import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Star, Trophy } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Runner-Up – KodeCurrent Hackathon',
      organization: 'IEEE RGIPT & Prodigal AI',
      year: '2025',
      description:
        'Developed a generic text-to-speech generator with voice cloning using AI. Awarded runner-up position in a national-level competition.',
      icon: <Trophy style={{ color: '#ADEBFF' }} size={24} />,
    },
    {
      title: 'Top 5 Finalist – MNIT Jaipur Hackathon',
      organization: 'MNIT Jaipur',
      year: '2024',
      description:
        'Built "Vidyamitra" – a student support portal featuring notes, quizzes, and club events. Recognized as one of the top 5 teams.',
      icon: <Star style={{ color: '#ADEBFF' }} size={24} />,
    },
    {
      title: 'Runner-Up – GeeksforGeeks Hackathon',
      organization: 'RGIPT',
      year: '2024',
      description:
        'Created an AI-based emotion synthesis system to bring emotional depth to generated speech.',
      icon: <Award style={{ color: '#ADEBFF' }} size={24} />,
    },
    {
      title: 'Semifinalist – Dark Patterns Buster Hackathon',
      organization: 'Department of Consumer Affairs, GoI',
      year: '2024',
      description:
        'Developed a browser extension that detects and blocks misleading online patterns. Made it to the semifinals.',
      icon: <Star style={{ color: '#ADEBFF' }} size={24} />,
    },
    {
      title: 'Open Source Contributor',
      organization: 'GitHub',
      year: '2024',
      description:
        'Contributed to multiple frontend and AI-based repositories. Focused on enhancing accessibility and UI/UX components.',
      icon: <Star style={{ color: '#ADEBFF' }} size={24} />,
    },
  ];

  return (
    <section
      id="achievements"
      className="py-20"
      style={{ backgroundColor: '#00171F', color: '#FFFFFF' }} // Dark background with light text
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center" style={{ color: '#ADEBFF' }}>
          Achievements & Awards
        </h2>
        <div className="w-20 h-1 mx-auto mb-10" style={{ backgroundColor: '#ADEBFF' }}></div>
        <p className="text-center text-lg max-w-3xl mx-auto mb-12" style={{ color: '#FFFFFFB3' }}>
          A collection of recognitions and accomplishments from my journey as a tech enthusiast,
          innovator, and student developer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="overflow-hidden animate-fade-in hover:shadow-lg transition-shadow"
              style={{
                animationDelay: `${index * 0.1}s`,
                backgroundColor: '#003459',
                color: '#FFFFFF',
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 rounded-full" style={{ backgroundColor: '#ADEBFF22' }}>
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{achievement.title}</h3>
                    <div
                      className="flex justify-between items-center mt-1 mb-2"
                      style={{ color: '#FFFFFFB3' }}
                    >
                      <p>{achievement.organization}</p>
                      <span
                        className="px-2 py-1 text-xs rounded"
                        style={{
                          backgroundColor: '#ADEBFF33',
                          color: '#FFFFFFB3',
                        }}
                      >
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
