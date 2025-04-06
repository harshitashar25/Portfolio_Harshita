
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Server, Layout, Database, Brush } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: <Layout className="text-primary" size={24} />,
      skills: [
        { name: 'React', proficiency: 90 },
        { name: 'JavaScript', proficiency: 85 },
        { name: 'TypeScript', proficiency: 80 },
        { name: 'HTML/CSS', proficiency: 95 },
        { name: 'Redux', proficiency: 75 },
      ]
    },
    {
      category: 'Backend Development',
      icon: <Server className="text-primary" size={24} />,
      skills: [
        { name: 'Node.js', proficiency: 85 },
        { name: 'Express', proficiency: 80 },
        { name: 'Python', proficiency: 75 },
        { name: 'Django', proficiency: 70 },
        { name: 'RESTful APIs', proficiency: 85 },
      ]
    },
    {
      category: 'Database',
      icon: <Database className="text-primary" size={24} />,
      skills: [
        { name: 'MongoDB', proficiency: 85 },
        { name: 'PostgreSQL', proficiency: 80 },
        { name: 'MySQL', proficiency: 75 },
        { name: 'Firebase', proficiency: 70 },
      ]
    },
    {
      category: 'Programming',
      icon: <Code className="text-primary" size={24} />,
      skills: [
        { name: 'Data Structures', proficiency: 85 },
        { name: 'Algorithms', proficiency: 80 },
        { name: 'OOP', proficiency: 90 },
        { name: 'Functional Programming', proficiency: 75 },
      ]
    },
    {
      category: 'Design',
      icon: <Brush className="text-primary" size={24} />,
      skills: [
        { name: 'Figma', proficiency: 80 },
        { name: 'Adobe XD', proficiency: 75 },
        { name: 'UI/UX Design', proficiency: 85 },
        { name: 'Responsive Design', proficiency: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Technical Skills</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-10"></div>
        <p className="text-center text-lg max-w-3xl mx-auto mb-12">
          I've acquired a diverse set of skills throughout my journey as a developer,
          constantly pushing the boundaries of what I know and what I can create.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.proficiency}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
