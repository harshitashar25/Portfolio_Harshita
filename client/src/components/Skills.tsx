import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Server, Layout, Database, Brush } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: <Code className="text-primary" size={24} />,
      skills: [
        { name: 'C/C++', proficiency: 85 },
        { name: 'Python', proficiency: 90 },
        { name: 'JavaScript', proficiency: 90 },
        { name: 'TypeScript', proficiency: 85 },
      ]
    },
    {
      category: 'Frameworks & Libraries',
      icon: <Layout className="text-primary" size={24} />,
      skills: [
        { name: 'React.js', proficiency: 90 },
        { name: 'Next.js', proficiency: 80 },
        { name: 'Node.js', proficiency: 85 },
        { name: 'Express.js', proficiency: 85 },
        { name: 'Redux', proficiency: 75 },
        { name: 'Tailwind CSS', proficiency: 90 },
        { name: 'Pandas', proficiency: 85 },
        { name: 'NumPy', proficiency: 80 },
        { name: 'TensorFlow', proficiency: 75 },
      ]
    },
    {
      category: 'Databases',
      icon: <Database className="text-primary" size={24} />,
      skills: [
        { name: 'MongoDB', proficiency: 90 },
        { name: 'MySQL', proficiency: 85 },
        { name: 'Neo4j', proficiency: 75 },
      ]
    },
    {
      category: 'Developer Tools & Systems',
      icon: <Server className="text-primary" size={24} />,
      skills: [
        { name: 'Git', proficiency: 90 },
        { name: 'GitHub', proficiency: 90 },
        { name: 'Docker', proficiency: 75 },
        { name: 'Linux', proficiency: 85 },
        { name: 'macOS', proficiency: 90 },
        { name: 'Windows', proficiency: 85 },
        { name: 'VS Code', proficiency: 95 },
      ]
    },
    {
      category: 'Web Technologies & APIs',
      icon: <Brush className="text-primary" size={24} />,
      skills: [
        { name: 'RESTful APIs', proficiency: 90 },
        { name: 'WebRTC', proficiency: 80 },
        { name: 'Socket.io', proficiency: 85 },
        { name: 'GraphQL', proficiency: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center text-foreground">Technical Skills</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-10"></div>
        <p className="text-center text-lg max-w-3xl mx-auto mb-12 text-foreground/70">
          I've acquired a diverse set of skills throughout my journey as a developer,
          constantly pushing the boundaries of what I know and what I can create.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden animate-fade-in bg-card border border-border tech-card" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-foreground">{category.category}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors">{skill.name}</span>
                        <span className="text-foreground/60 font-mono text-sm">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full h-2 bg-muted overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-1000 ease-out"
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
